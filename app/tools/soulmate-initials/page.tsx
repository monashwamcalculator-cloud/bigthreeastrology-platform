import { Metadata } from "next";
import { SoulmateInitialsCalculator } from "@/components/soulmate-initials";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Soulmate Name & Initial Predictor | Zodiac Love Signature",
  description: "Predict the starting letters and initials of your future soulmate based on your Sun sign placement.",
  path: "/tools/soulmate-initials"
});

export default function SoulmateInitialsPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Soulmate Initials Predictor</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Reveal the initials and name signature of your soulmate from your zodiac love signature — a fun, free Vedic and Western astrology reading.</p>
      </div>
      <SoulmateInitialsCalculator />
      <ToolSections slug="soulmate-initials" />
    </div>
  );
}
