import { Metadata } from "next";
import { MercuryCalculator } from "@/components/mercury-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Mercury Sign Calculator | Mind, Intellect & Speech",
  description: "Calculate your Mercury sign to analyze your mental processing style, intellect, and communication approach. Free — no sign-up, no download needed.",
  path: "/tools/mercury-sign"
});

export default function MercurySignPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="mercury-sign" title="Mercury Sign Calculator — Mind & Communication Style" intro="Find your Mercury sign to understand how you think, learn, speak and process ideas in daily life and relationships." />
      <MercuryCalculator />
      <ToolSections slug="mercury-sign" />
    </div>
  );
}
