import { Metadata } from "next";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Kundli Chart Houses (Bhavas) Explorer | 12 Houses & Lagna",
  description: "Use the free Kundli Chart Houses explorer to read the 12 Bhavas of your birth chart — wealth, career, marriage, health and more. No sign-up needed.",
  path: "/tools/kundali-houses"
});

export default function KundaliHousesPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="kundali-houses" title="Kundali Houses Explorer — 12 Bhavas Explained" intro="Explore the 12 houses (Bhavas) of your Vedic birth chart and see what each house governs — wealth, marriage, career, health and more." />
      <KundaliHouseCalculator />
      <ToolSections slug="kundali-houses" />
    </div>
  );
}
