import { Metadata } from "next";
import { RisingSignCalculator } from "@/components/rising-sign-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Rising Sign (Ascendant) Reader | Aura & First Impression",
  description: "Discover your Ascendant Lagna sign, physical aura, style preferences, and first impression signature. Free — no sign-up, no download needed.",
  path: "/tools/rising-sign"
});

export default function RisingSignPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="rising-sign" title="Rising Sign Calculator — Find Your Ascendant" intro="Calculate your Rising sign (Ascendant) from your exact birth time and place, and understand the aura and first impression you project to the world." />
      <RisingSignCalculator />
      <ToolSections slug="rising-sign" />
    </div>
  );
}
