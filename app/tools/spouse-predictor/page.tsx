import { Metadata } from "next";
import { SpousePredictor } from "@/components/spouse-predictor";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Future Spouse & Soulmate Predictor | Appearance & Personality",
  description: "Predict your future spouse's personality, appearance, element, lucky initials, and meeting environment.",
  path: "/tools/spouse-predictor"
});

export default function SpousePage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Future Spouse Predictor</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Predict your future spouse's appearance, personality, element and lucky initials from your Venus placement, Darakaraka planet and 7th house — free, with no sign-up.</p>
      </div>
      <ToolSchema
        name="Future Spouse & Soulmate Predictor"
        description="Predict your future spouse's personality, appearance, element, lucky initials, and meeting environment."
        path="/tools/spouse-predictor"
        faqs={[
          {
            question: "How does the Spouse Predictor calculate my future partner's traits?",
            answer: "It analyzes your Sun sign, Venus placement, Darakaraka planet, and 7th House ruler to reveal physical traits, personality archetypes, and meeting environments."
          },
          {
            question: "Is the Spouse Predictor free to use?",
            answer: "Yes, it is 100% free with zero registration required."
          }
        ]}
      />
      <SpousePredictor />
      <ToolSections slug="spouse-predictor" />
    </div>
  );
}
