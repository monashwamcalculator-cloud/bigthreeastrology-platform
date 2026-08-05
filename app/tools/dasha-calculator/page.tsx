import { Metadata } from "next";
import { DashaCalculator } from "@/components/dasha-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Vedic Dasha & Mahadasha Timeline Calculator",
  description: "Explore the 120-year Vimshottari Mahadasha planetary periods shaping your career, wealth, and destiny.",
  path: "/tools/dasha-calculator"
});

export default function DashaPage() {
  return (
    <div className="py-8 space-y-6">
      <DashaCalculator />
    </div>
  );
}
