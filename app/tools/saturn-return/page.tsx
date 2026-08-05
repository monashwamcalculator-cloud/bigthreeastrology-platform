import { Metadata } from "next";
import { SaturnReturnCalculator } from "@/components/saturn-return-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Saturn Return Calculator & Milestone Guide",
  description: "Calculate your 1st, 2nd, and 3rd Saturn Return milestone ages, career transformations, and survival remedies.",
  path: "/tools/saturn-return"
});

export default function SaturnReturnPage() {
  return (
    <div className="py-6 space-y-6">
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
    </div>
  );
}
