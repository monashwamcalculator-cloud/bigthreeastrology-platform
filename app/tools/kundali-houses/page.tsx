import { Metadata } from "next";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "12 Kundali Houses (Bhavas) Explorer & Lagna Snapshot",
  description: "Explore the 12 sacred houses (Bhavas) of your birth chart to understand wealth, career, health, and spiritual destiny. Free — no sign-up needed.",
  path: "/tools/kundali-houses"
});

export default function KundaliHousesPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="kundali-houses" title="Kundali Houses Explorer — 12 Bhavas Explained" intro="Explore the 12 houses (Bhavas) of your Vedic birth chart and see what each house governs — wealth, marriage, career, health and more." />
      <KundaliHouseCalculator />
      <ToolSections slug="kundali-houses" />
    </div>
  );
}
