import type { Metadata } from "next";

const DEFAULT_SITE_URL = "https://bigthreeastrology.com";

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

export function buildMetadata({
  title,
  description,
  path,
  noindex = false
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const siteUrl = getSiteUrl();

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
          url: `${siteUrl}/og-image.png`,
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
      images: [`${siteUrl}/og-image.png`]
    }
  };
}
