import { NextResponse } from "next/server";
import { runListingLifecycleJob } from "@/lib/listing-lifecycle";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : "";
  if (!process.env.CRON_SECRET || token !== process.env.CRON_SECRET) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const result = await runListingLifecycleJob();
  return NextResponse.json({ ok: true, ...result });
}
