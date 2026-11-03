import { Metadata } from "next";
import { RahuKaalTracker } from "@/components/rahu-kaal";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Daily Rahu Kaal & Shubh Muhurat Tracker",
  description: "Check daily Rahu Kaal windows to avoid inauspicious timing for major investments or decisions. Free, instant and private — no sign-up needed.",
  path: "/tools/rahu-kaal"
});

export default function RahuKaalPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="rahu-kaal" title="Rahu Kaal Today — Timings & Shubh Muhurat Tracker" intro="Check today's Rahu Kaal timing for your day of the week and plan important work outside this inauspicious window." />
      <RahuKaalTracker />
      <ToolSections slug="rahu-kaal" />
    </div>
  );
}
