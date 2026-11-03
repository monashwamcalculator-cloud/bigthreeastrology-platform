import { Metadata } from "next";
import { SaturnReturnCalculator } from "@/components/saturn-return-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Saturn Return Calculator & Milestone Guide",
  description: "Calculate your 1st, 2nd, and 3rd Saturn Return milestone ages, career transformations, and survival remedies. Free — no sign-up, no download needed.",
  path: "/tools/saturn-return"
});

export default function SaturnReturnPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="saturn-return" title="Saturn Return Calculator — Ages 29, 58 & 87 Milestones" intro="Calculate your first and second Saturn Return dates and understand the life restructuring, career and maturity lessons each return brings." />
      <SaturnReturnCalculator />
      <ToolSections slug="saturn-return" />
    </div>
  );
}
