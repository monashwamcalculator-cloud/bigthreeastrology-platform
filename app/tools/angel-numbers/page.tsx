import { Metadata } from "next";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Angel Number Decoder & Cosmic Frequency Guide",
  description: "Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies.",
  path: "/tools/angel-numbers"
});

export default function AngelNumbersPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Angel Number Decoder — 111, 222, 444 & More</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Decode the angel number you keep seeing and understand the guidance, warning or blessing hidden in its repeating sequence.</p>
      </div>
      <ToolSchema
        name="Angel Number Decoder & Frequency Guide"
        description="Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies."
        path="/tools/angel-numbers"
        faqs={[
          {
            question: "What are Angel Numbers?",
            answer: "Angel numbers are repeating number sequences (111, 444, 777, etc.) that convey spiritual guidance and Solfeggio frequency alignment."
          }
        ]}
      />
      <AngelNumberCalculator />
      <ToolSections slug="angel-numbers" />
    </div>
  );
}
