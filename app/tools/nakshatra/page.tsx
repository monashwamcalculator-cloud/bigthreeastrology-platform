import { Metadata } from "next";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Birth Star (Nakshatra) Finder | 27 Vedic Stars & Deities",
  description: "Find your birth star Nakshatra out of 27 lunar mansions, including Pada 1-4, Ruling Deity, and Dasha Lord. Free — no sign-up, no download needed.",
  path: "/tools/nakshatra"
});

export default function NakshatraPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="nakshatra" title="Nakshatra Calculator — Find Your Birth Star" intro="Find your Janma Nakshatra among the 27 Vedic lunar mansions, with its ruling deity, symbol, gana and core temperament." />
      <NakshatraFinder />
      <ToolSections slug="nakshatra" />
    </div>
  );
}
