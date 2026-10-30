import { Metadata } from "next";
import { LifePathCompatibilityCalculator } from "@/components/life-path-compatibility";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Life Path Numerology Matcher & Compatibility",
  description: "Calculate Life Path numerology compatibility, relationship synergy score, and karmic advice.",
  path: "/tools/lifepath-compatibility"
});

export default function LifePathCompatibilityPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Life Path Compatibility Calculator</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Match your Life Path number with your partner's and see your numerological compatibility score, strengths and friction points.</p>
      </div>
      <LifePathCompatibilityCalculator />
      <ToolSections slug="lifepath-compatibility" />
    </div>
  );
}
