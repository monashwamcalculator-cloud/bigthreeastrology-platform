import { Metadata } from "next";
import { ChoghadiaCalculator } from "@/components/choghadia-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Daily Choghadia Muhurat Calculator | Auspicious Vedic Timings",
  description: "Check auspicious Day & Night Choghadia timings (Shubh, Labh, Amrit) for buying assets, starting business, and travel.",
  path: "/tools/choghadia"
});

export default function ChoghadiaPage() {
  return (
    <div className="py-8 space-y-6">
      <ChoghadiaCalculator />
    </div>
  );
}
