import { Metadata } from "next";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
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
      <AngelNumberCalculator />
      <ToolSections slug="angel-numbers" />
    </div>
  );
}
