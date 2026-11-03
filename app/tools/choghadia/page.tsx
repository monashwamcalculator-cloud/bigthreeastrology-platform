import { Metadata } from "next";
import { ChoghadiaCalculator } from "@/components/choghadia-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Daily Choghadia Muhurat Calculator | Auspicious Vedic Timings",
  description: "Check auspicious Day & Night Choghadia timings (Shubh, Labh, Amrit) for buying assets, starting business, and travel.",
  path: "/tools/choghadia"
});

export default function ChoghadiaPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="choghadia" title="Choghadia Today — Shubh, Labh & Amrit Muhurat Timings" intro="Check today's day and night Choghadia timings before starting travel, business, purchases or any important work — updated for every sunrise and sunset." />
      <ChoghadiaCalculator />
      <ToolSections slug="choghadia" />
    </div>
  );
}
