import { Metadata } from "next";
import { RahuKaalTracker } from "@/components/rahu-kaal";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Daily Rahu Kaal & Shubh Muhurat Tracker",
  description: "Check daily Rahu Kaal windows to avoid inauspicious timing for major investments or decisions.",
  path: "/tools/rahu-kaal"
});

export default function RahuKaalPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Rahu Kaal Today — Timings & Shubh Muhurat Tracker</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Check today's Rahu Kaal timing for your day of the week and plan important work outside this inauspicious window.</p>
      </div>
      <RahuKaalTracker />
      <ToolSections slug="rahu-kaal" />
    </div>
  );
}
