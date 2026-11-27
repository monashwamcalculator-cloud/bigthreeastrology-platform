import { Metadata } from "next";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Nakshatra Calculator & Finder | Find Your Vedic Birth Star",
  description: "Use the free Vedic Nakshatra Calculator to find your birth star from your birth date — 27 lunar mansions, pada, deity and dasha lord. No sign-up.",
  path: "/tools/nakshatra"
});

export default function NakshatraPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="nakshatra" title="Nakshatra Calculator — Find Your Birth Star" intro="Find your Janma Nakshatra among the 27 Vedic lunar mansions, with its ruling deity, symbol, gana and core temperament." />
      <NakshatraFinder />
      <ToolSections slug="nakshatra" />
    </div>
  );
}
