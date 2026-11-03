import { Metadata } from "next";
import { BigThreeCalculator } from "@/components/calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Big Three Astrology Calculator | Sun Moon Rising Signs",
  description: "Calculate your Sun, Moon, and Rising (Ascendant) signs with Western Tropical and Vedic Sidereal options. Free — no sign-up, no download needed.",
  path: "/tools/big-three"
});

export default function BigThreePage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="big-three" title="Sun, Moon & Rising Sign Calculator" intro="Discover your core identity, emotional instincts, and outer persona." />
      <BigThreeCalculator />
      <ToolSections slug="big-three" />
    </div>
  );
}
