import type { Metadata } from "next";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";

const DEFAULT_SITE_URL = "https://bigthreeastrology.online";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return configured ? configured.replace(/\/+$/, "") : DEFAULT_SITE_URL;
}

export function absoluteUrl(path = "/") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1
};

/** Static pages with their own generated social card at /og/page/<key>. */
const STATIC_OG_KEYS: Record<string, string> = {
  "/": "home",
  "/tools": "tools",
  "/blog": "blog",
  "/about": "about",
  "/contact": "contact",
  "/privacy-policy": "privacy-policy",
  "/terms-and-conditions": "terms-and-conditions",
  "/disclaimer": "disclaimer",
  "/author/saahil": "author-saahil"
};

/**
 * Default share image (re-audit F2 fix, 3 Nov 2026): every tool page gets
 * its own generated card (/og/tool/<slug>, rendered by next/og from the
 * registry name + category), the nine static pages get theirs
 * (/og/page/<key>), and everything else keeps the site logo.
 */
function fallbackOgImage(path: string, siteUrl: string): string {
  const toolMatch = path.match(/^\/tools\/([a-z0-9-]+)$/);
  if (toolMatch && MASTER_TOOLS_LIST.some((t) => t.slug === toolMatch[1])) {
    return `${siteUrl}/og/tool/${toolMatch[1]}`;
  }
  const staticKey = STATIC_OG_KEYS[path];
  if (staticKey) {
    return `${siteUrl}/og/page/${staticKey}`;
  }
  return `${siteUrl}/logo.jpg`;
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  image
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Page-specific share image (site-relative or absolute). Falls back to the page's generated social card (tools/statics) or the site logo. */
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const siteUrl = getSiteUrl();
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : fallbackOgImage(path, siteUrl);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    robots: noindex
      ? { index: false, follow: false, nocache: true }
      : defaultRobots,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'BIGThreeAstrology',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}
