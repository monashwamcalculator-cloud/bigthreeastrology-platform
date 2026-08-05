import { Metadata } from "next";
import { BigThreeCalculator } from "@/components/calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Big Three Astrology Calculator | Sun Moon Rising Signs",
  description: "Calculate your Sun, Moon, and Rising (Ascendant) signs with Western Tropical and Vedic Sidereal options.",
  path: "/tools/big-three"
});

export default function BigThreePage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="badge badge-emerald">🔮 Big Three Astrology</div>
        <h1 className="text-3xl md:text-4xl font-display font-bold gradient-text">Sun, Moon & Rising Sign Calculator</h1>
        <p className="text-emerald-200 text-sm">Discover your core identity, emotional instincts, and outer persona.</p>
      </div>
      <BigThreeCalculator />
    </div>
  );
}
