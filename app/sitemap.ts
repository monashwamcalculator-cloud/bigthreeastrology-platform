import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";
import { staticLastModified, toolLastModified } from "@/lib/content-dates";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
    "/blog",
    "/tools",
    "/author/saahil"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: staticLastModified(route),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const toolPages = MASTER_TOOLS_LIST.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: toolLastModified(tool.slug),
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  const blogPages = SAMPLE_BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticPages, ...toolPages, ...blogPages];
}
