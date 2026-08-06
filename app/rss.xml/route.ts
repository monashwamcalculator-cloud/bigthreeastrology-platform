import { NextResponse } from "next/server";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { SAMPLE_BLOG_POSTS } from "@/lib/sample-data";
import { getSiteUrl } from "@/lib/seo";

export async function GET() {
  const baseUrl = getSiteUrl();

  const toolItems = MASTER_TOOLS_LIST.map((tool) => `
    <item>
      <title><![CDATA[${tool.name}]]></title>
      <link>${baseUrl}/tools/${tool.slug}</link>
      <guid>${baseUrl}/tools/${tool.slug}</guid>
      <description><![CDATA[${tool.metaDesc}]]></description>
      <category>Tools</category>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join("");

  const blogItems = SAMPLE_BLOG_POSTS.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.metaDescription}]]></description>
      <category>Blog</category>
      <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
    </item>
  `).join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BIGThreeAstrology | 100 Free Astrology &amp; Numerology Calculators</title>
    <link>${baseUrl}</link>
    <description>Free online astrology, Vedic Jyotish, numerology, and tarot calculators suite.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${toolItems}
    ${blogItems}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
