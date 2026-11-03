import { Metadata } from "next";
import { LifePathCompatibilityCalculator } from "@/components/life-path-compatibility";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Life Path Numerology Matcher & Compatibility",
  description: "Calculate Life Path numerology compatibility, relationship synergy score, and karmic advice. Free and instant, with the method explained — no sign-up.",
  path: "/tools/lifepath-compatibility"
});

export default function LifePathCompatibilityPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="lifepath-compatibility" title="Life Path Compatibility Calculator" intro="Match your Life Path number with your partner's and see your numerological compatibility score, strengths and friction points." />
      <LifePathCompatibilityCalculator />
      <ToolSections slug="lifepath-compatibility" />
    </div>
  );
}
