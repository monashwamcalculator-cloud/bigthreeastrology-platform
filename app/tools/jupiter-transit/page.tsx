import { Metadata } from "next";
import { JupiterTransitCalculator } from "@/components/jupiter-transit-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Jupiter Transit & Luck Expansion Finder",
  description: "Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace.",
  path: "/tools/jupiter-transit"
});

export default function JupiterTransitPage() {
  return (
    <div className="py-6 space-y-6">
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
    </div>
  );
}
