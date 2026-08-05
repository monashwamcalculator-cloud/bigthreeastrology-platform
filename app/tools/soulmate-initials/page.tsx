import { Metadata } from "next";
import { SoulmateInitialsCalculator } from "@/components/soulmate-initials";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Soulmate Name & Initial Predictor | Zodiac Love Signature",
  description: "Predict the starting letters and initials of your future soulmate based on your Sun sign placement.",
  path: "/tools/soulmate-initials"
});

export default function SoulmateInitialsPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Soulmate Name & Initial Predictor"
        description="Predict the starting letters and initials of your future soulmate based on your Sun sign placement."
        path="/tools/soulmate-initials"
        faqs={[
          {
            question: "How does the Soulmate Initial Predictor work?",
            answer: "It cross-references your Sun sign, Venus placement, and 7th House planetary degrees to highlight the most compatible starting letters for your soulmate's name."
          }
        ]}
      />
      <SoulmateInitialsCalculator />
    </div>
  );
}
