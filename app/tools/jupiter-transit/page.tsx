import { Metadata } from "next";
import { JupiterTransitCalculator } from "@/components/jupiter-transit-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Jupiter Transit & Luck Expansion Finder",
  description: "Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace.",
  path: "/tools/jupiter-transit"
});

export default function JupiterTransitPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Jupiter Transit Calculator — Luck & Expansion Finder</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Track Jupiter's current transit through your chart and find the house where luck, growth and new opportunities are expanding for you.</p>
      </div>
      <ToolSchema
        name="Jupiter Transit & Luck Expansion Finder"
        description="Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace."
        path="/tools/jupiter-transit"
        faqs={[
          {
            question: "What does Jupiter (Guru) represent in astrology?",
            answer: "Jupiter represents divine wisdom, financial expansion, marriage luck, higher education, and spiritual blessings."
          }
        ]}
      />
      <JupiterTransitCalculator />
      <ToolSections slug="jupiter-transit" />
    </div>
  );
}
