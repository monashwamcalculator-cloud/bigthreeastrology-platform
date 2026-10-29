import { Metadata } from "next";
import { RisingSignCalculator } from "@/components/rising-sign-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Rising Sign (Ascendant) Reader | Aura & First Impression",
  description: "Discover your Ascendant Lagna sign, physical aura, style preferences, and first impression signature.",
  path: "/tools/rising-sign"
});

export default function RisingSignPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Rising Sign Calculator — Find Your Ascendant</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Calculate your Rising sign (Ascendant) from your exact birth time and place, and understand the aura and first impression you project to the world.</p>
      </div>
      <ToolSchema
        name="Rising Sign (Ascendant) Reader"
        description="Discover your Ascendant Lagna sign, physical aura, style preferences, and first impression signature."
        path="/tools/rising-sign"
        faqs={[
          {
            question: "What does the Rising sign (Ascendant) dictate?",
            answer: "The Ascendant rules your 1st house of self, physical aura, outward appearance, and initial first impressions on others."
          }
        ]}
      />
      <RisingSignCalculator />
    </div>
  );
}
