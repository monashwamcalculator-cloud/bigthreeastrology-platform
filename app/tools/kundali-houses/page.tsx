import { Metadata } from "next";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "12 Kundali Houses (Bhavas) Explorer & Lagna Snapshot",
  description: "Explore the 12 sacred houses (Bhavas) of your birth chart to understand wealth, career, health, and spiritual destiny.",
  path: "/tools/kundali-houses"
});

export default function KundaliHousesPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Kundali Houses Explorer — 12 Bhavas Explained</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Explore the 12 houses (Bhavas) of your Vedic birth chart and see what each house governs — wealth, marriage, career, health and more.</p>
      </div>
      <KundaliHouseCalculator />
      <ToolSections slug="kundali-houses" />
    </div>
  );
}
