import { Metadata } from "next";
import { DashaCalculator } from "@/components/dasha-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vedic Dasha & Mahadasha Timeline Calculator",
  description: "Explore the 120-year Vimshottari Mahadasha planetary periods shaping your career, wealth, and destiny.",
  path: "/tools/dasha-calculator"
});

export default function DashaPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Vedic Dasha & Mahadasha Timeline Calculator"
        description="Explore the 120-year Vimshottari Mahadasha planetary periods shaping your career, wealth, and destiny."
        path="/tools/dasha-calculator"
        faqs={[
          {
            question: "What is Vimshottari Mahadasha in Vedic astrology?",
            answer: "Vimshottari Dasha divides human life into a 120-year cycle governed by 9 planetary periods shaping major career, financial, and emotional transits."
          }
        ]}
      />
      <DashaCalculator />
    </div>
  );
}
