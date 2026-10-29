import { Metadata } from "next";
import { DestinyNumberCalculator } from "@/components/destiny-number-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Expression & Destiny Number Calculator | Chaldean Math",
  description: "Calculate your Expression Destiny Number using Chaldean and Pythagorean name numerology.",
  path: "/tools/destiny-number"
});

export default function DestinyNumberPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Destiny Number Calculator — Expression Number</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Calculate your Destiny (Expression) Number from your full birth name using Chaldean math, and discover the talents you are meant to express.</p>
      </div>
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
      <ToolSections slug="destiny-number" />
    </div>
  );
}
