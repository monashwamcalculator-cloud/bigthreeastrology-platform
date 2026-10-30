import { Metadata } from "next";
import { RisingSignCalculator } from "@/components/rising-sign-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Rising Sign (Ascendant) Reader | Aura & First Impression",
  description: "Discover your Ascendant Lagna sign, physical aura, style preferences, and first impression signature.",
  path: "/tools/rising-sign"
});

export default function RisingSignPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Rising Sign Calculator — Find Your Ascendant</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Calculate your Rising sign (Ascendant) from your exact birth time and place, and understand the aura and first impression you project to the world.</p>
      </div>
      <RisingSignCalculator />
      <ToolSections slug="rising-sign" />
    </div>
  );
}
