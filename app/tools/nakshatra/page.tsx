import { Metadata } from "next";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Birth Star (Nakshatra) Finder | 27 Vedic Stars & Deities",
  description: "Find your birth star Nakshatra out of 27 lunar mansions, including Pada 1-4, Ruling Deity, and Dasha Lord.",
  path: "/tools/nakshatra"
});

export default function NakshatraPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Nakshatra Calculator — Find Your Birth Star</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find your Janma Nakshatra among the 27 Vedic lunar mansions, with its ruling deity, symbol, gana and core temperament.</p>
      </div>
      <NakshatraFinder />
      <ToolSections slug="nakshatra" />
    </div>
  );
}
