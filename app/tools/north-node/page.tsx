import { Metadata } from "next";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "North Node & Life Purpose Finder | Karmic Rahu/Ketu",
  description: "Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns.",
  path: "/tools/north-node"
});

export default function NorthNodePage() {
  return (
    <div className="py-6 space-y-6">
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
    </div>
  );
}
