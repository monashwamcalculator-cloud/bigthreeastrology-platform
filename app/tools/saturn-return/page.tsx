import { Metadata } from "next";
import { SaturnReturnCalculator } from "@/components/saturn-return-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Saturn Return Calculator & Milestone Guide",
  description: "Calculate your 1st, 2nd, and 3rd Saturn Return milestone ages, career transformations, and survival remedies.",
  path: "/tools/saturn-return"
});

export default function SaturnReturnPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Saturn Return Calculator — Ages 29, 58 & 87 Milestones</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Calculate your first and second Saturn Return dates and understand the life restructuring, career and maturity lessons each return brings.</p>
      </div>
      <ToolSchema
        name="Saturn Return Calculator & Milestone Guide"
        description="Calculate your 1st, 2nd, and 3rd Saturn Return milestone ages, career transformations, and survival remedies."
        path="/tools/saturn-return"
        faqs={[
          {
            question: "What is a Saturn Return?",
            answer: "A Saturn Return occurs every 29.5 years when Saturn returns to the exact zodiac position of your birth, initiating major career, maturity, and adult growth transitions."
          }
        ]}
      />
      <SaturnReturnCalculator />
      <ToolSections slug="saturn-return" />
    </div>
  );
}
