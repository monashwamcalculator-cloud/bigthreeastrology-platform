import { Metadata } from "next";
import { DashaCalculator } from "@/components/dasha-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Vedic Dasha & Mahadasha Timeline Calculator",
  description: "Explore the 120-year Vimshottari Mahadasha planetary periods shaping your career, wealth, and destiny. Free — no sign-up, no download needed.",
  path: "/tools/dasha-calculator"
});

export default function DashaPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="dasha-calculator" title="Vimshottari Dasha Calculator — Mahadasha Timeline" intro="Calculate your 120-year Vimshottari Mahadasha and Antardasha timeline from your Moon's Nakshatra, and see which planetary period you are running now." />
      <DashaCalculator />
      <ToolSections slug="dasha-calculator" />
    </div>
  );
}
