import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/private/", "/_next/"]
      },
      {
        userAgent: "Googlebot",
        allow: "/"
      },
      {
        userAgent: "Bingbot",
        allow: "/"
      },
      {
        userAgent: "YandexBot",
        allow: "/"
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/"
      },
      {
        userAgent: "Baiduspider",
        allow: "/"
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/rss.xml`
    ],
    host: baseUrl
  };
}
