import { Metadata } from "next";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "North Node & Life Purpose Finder | Karmic Rahu/Ketu",
  description: "Discover your North Node (Rahu) life mission and South Node (Ketu) past-life karmic patterns.",
  path: "/tools/north-node"
});

export default function NorthNodePage() {
  return (
    <div className="py-8 space-y-6">
      <NorthNodeCalculator />
    </div>
  );
}
