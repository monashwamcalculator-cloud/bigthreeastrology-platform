import { Metadata } from "next";
import { KundliCalculator } from "@/components/kundli-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Free Kundli Online | Janam Kundli by Date of Birth",
  description: "Generate your free Janam Kundli online by date of birth — Vedic birth chart with Lagna, all nine grahas, houses and Moon nakshatra, calculated instantly.",
  path: "/tools/kundli"
});

export default function KundliPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="kundli" title="Free Kundli — Janam Kundli Online" intro="Your Janam Kundli is the complete Vedic birth chart cast for your exact birth moment and birthplace: the Lagna rising on the eastern horizon, the Moon's sign and nakshatra, and all nine grahas placed through the twelve houses. Enter your birth details once and the full chart is drawn instantly — the same chart a kundli matching or dasha reading starts from." />
      <KundliCalculator />
      <ToolSections slug="kundli" />
    </div>
  );
}
