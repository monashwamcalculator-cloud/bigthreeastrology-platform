import { Metadata } from "next";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "12 Kundali Houses (Bhavas) Explorer & Lagna Snapshot",
  description: "Explore the 12 sacred houses (Bhavas) of your birth chart to understand wealth, career, health, and spiritual destiny.",
  path: "/tools/kundali-houses"
});

export default function KundaliHousesPage() {
  return (
    <div className="py-8 space-y-6">
      <KundaliHouseCalculator />
    </div>
  );
}
