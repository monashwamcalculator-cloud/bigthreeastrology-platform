import { Metadata } from "next";
import { ChoghadiaCalculator } from "@/components/choghadia-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Daily Choghadia Muhurat Calculator | Auspicious Vedic Timings",
  description: "Check auspicious Day & Night Choghadia timings (Shubh, Labh, Amrit) for buying assets, starting business, and travel.",
  path: "/tools/choghadia"
});

export default function ChoghadiaPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Choghadia Today — Shubh, Labh & Amrit Muhurat Timings</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Check today's day and night Choghadia timings before starting travel, business, purchases or any important work — updated for every sunrise and sunset.</p>
      </div>
      <ChoghadiaCalculator />
    </div>
  );
}
