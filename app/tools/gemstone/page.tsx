import { Metadata } from "next";
import { GemstoneFinder } from "@/components/gemstone-finder";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Gemstone & Remedy Finder | Vedic Ratna & Mantras",
  description: "Discover your favorable Vedic gemstones (Ratna), setting metals, and planetary mantras based on your sign. Free — no sign-up, no download needed.",
  path: "/tools/gemstone"
});

export default function GemstonePage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="gemstone" title="Gemstone Finder — Vedic Ratna Recommendation" intro="Find the gemstone (Ratna) recommended for your Lagna and planetary strengths, with the correct metal, finger, weight and mantra." />
      <GemstoneFinder />
      <ToolSections slug="gemstone" />
    </div>
  );
}
