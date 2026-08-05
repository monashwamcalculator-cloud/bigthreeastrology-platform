import { Metadata } from "next";
import { DestinyNumberCalculator } from "@/components/destiny-number-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Expression & Destiny Number Calculator | Chaldean Math",
  description: "Calculate your Expression Destiny Number using Chaldean and Pythagorean name numerology.",
  path: "/tools/destiny-number"
});

export default function DestinyNumberPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Expression & Destiny Number Calculator"
        description="Calculate your Expression Destiny Number using Chaldean and Pythagorean name numerology."
        path="/tools/destiny-number"
        faqs={[
          {
            question: "What is an Expression / Destiny Number?",
            answer: "Your Destiny Number is calculated from the letters of your full birth name, revealing your core talents, potential, and life mission archetype."
          }
        ]}
      />
      <DestinyNumberCalculator />
    </div>
  );
}
