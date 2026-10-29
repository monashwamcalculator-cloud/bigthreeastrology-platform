import { Metadata } from "next";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "North Node & Life Purpose Finder | Karmic Rahu/Ketu",
  description: "Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns.",
  path: "/tools/north-node"
});

export default function NorthNodePage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">North Node Calculator — Life Purpose & Karma</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find your North Node (Rahu) and South Node (Ketu) signs and understand your karmic direction, comfort zone and soul purpose in this lifetime.</p>
      </div>
      <ToolSchema
        name="North Node & Soul Purpose Finder"
        description="Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns."
        path="/tools/north-node"
        faqs={[
          {
            question: "What does the North Node represent in astrology?",
            answer: "The North Node represents your soul's future destiny, personal growth zone, and karmic life mission."
          }
        ]}
      />
      <NorthNodeCalculator />
      <ToolSections slug="north-node" />
    </div>
  );
}
