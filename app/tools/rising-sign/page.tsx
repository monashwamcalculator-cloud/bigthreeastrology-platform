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
