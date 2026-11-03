import { Metadata } from "next";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "North Node & Life Purpose Finder | Karmic Rahu/Ketu",
  description: "Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns. Free, instant and private — no sign-up needed.",
  path: "/tools/north-node"
});

export default function NorthNodePage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="north-node" title="North Node Calculator — Life Purpose & Karma" intro="Find your North Node (Rahu) and South Node (Ketu) signs and understand your karmic direction, comfort zone and soul purpose in this lifetime." />
      <NorthNodeCalculator />
      <ToolSections slug="north-node" />
    </div>
  );
}
