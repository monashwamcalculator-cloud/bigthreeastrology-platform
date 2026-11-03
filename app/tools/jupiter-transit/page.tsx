import { Metadata } from "next";
import { JupiterTransitCalculator } from "@/components/jupiter-transit-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Jupiter Transit & Luck Expansion Finder",
  description: "Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace. Free — no sign-up, no download needed.",
  path: "/tools/jupiter-transit"
});

export default function JupiterTransitPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="jupiter-transit" title="Jupiter Transit Calculator — Luck & Expansion Finder" intro="Track Jupiter's current transit through your chart and find the house where luck, growth and new opportunities are expanding for you." />
      <JupiterTransitCalculator />
      <ToolSections slug="jupiter-transit" />
    </div>
  );
}
