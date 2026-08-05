import { Metadata } from "next";
import { VenusCalculator } from "@/components/venus-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Venus Sign Calculator | Love Language & Attraction Style",
  description: "Calculate your Venus sign placement to uncover your romantic attraction style and love language.",
  path: "/tools/venus-sign"
});

export default function VenusSignPage() {
  return (
    <div className="py-8 space-y-6">
      <VenusCalculator />
    </div>
  );
}
