import { Metadata } from "next";
import { MercuryCalculator } from "@/components/mercury-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mercury Sign Calculator | Mind, Intellect & Speech",
  description: "Calculate your Mercury sign to analyze your mental processing style, intellect, and communication approach.",
  path: "/tools/mercury-sign"
});

export default function MercurySignPage() {
  return (
    <div className="py-8 space-y-6">
      <MercuryCalculator />
    </div>
  );
}
