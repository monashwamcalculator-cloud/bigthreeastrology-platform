import { Metadata } from "next";
import { GemstoneFinder } from "@/components/gemstone-finder";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gemstone & Remedy Finder | Vedic Ratna & Mantras",
  description: "Discover your favorable Vedic gemstones (Ratna), setting metals, and planetary mantras based on your sign.",
  path: "/tools/gemstone"
});

export default function GemstonePage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Gemstone Finder — Vedic Ratna Recommendation</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find the gemstone (Ratna) recommended for your Lagna and planetary strengths, with the correct metal, finger, weight and mantra.</p>
      </div>
      <GemstoneFinder />
    </div>
  );
}
