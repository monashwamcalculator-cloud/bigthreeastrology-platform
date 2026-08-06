import { NextResponse } from "next/server";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { getSiteUrl } from "@/lib/seo";

export async function GET() {
  const baseUrl = getSiteUrl();
  const apiKey = "9f830d12e61c4793b8274a1e50882194";

  // Build full list of all 100+ site URLs
  const urlList = [
    `${baseUrl}`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/terms-and-conditions`,
    `${baseUrl}/disclaimer`,
    ...MASTER_TOOLS_LIST.map((tool) => `${baseUrl}/tools/${tool.slug}`)
  ];

  try {
    // 1. Submit to IndexNow Protocol (Bing, Yandex, Seznam, Naver)
    const indexNowPayload = {
      host: "bigthreeastrology.online",
      key: apiKey,
      keyLocation: `${baseUrl}/${apiKey}.txt`,
      urlList: urlList
    };

    const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(indexNowPayload)
    });

    // 2. Ping Google Sitemap Endpoint
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${baseUrl}/sitemap.xml`)}`;
    await fetch(googlePingUrl, { method: "GET" }).catch(() => {});

    // 3. Ping Bing Sitemap Endpoint
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${baseUrl}/sitemap.xml`)}`;
    await fetch(bingPingUrl, { method: "GET" }).catch(() => {});

    return NextResponse.json({
      success: true,
      message: "Successfully triggered instant search engine indexing pings for all 100+ URLs!",
      totalUrlsSubmitted: urlList.length,
      indexNowStatus: indexNowResponse.status
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}

export async function POST() {
  return GET();
}
