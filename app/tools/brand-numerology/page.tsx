import { Metadata } from "next";
import { BrandNumerologyCalculator } from "@/components/brand-numerology";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Brand & Name Numerology Analyzer (Chaldean Method)",
  description: "Calculate the Chaldean name vibration and financial alignment of your brand, business title, or personal name.",
  path: "/tools/brand-numerology"
});

export default function BrandNumerologyPage() {
  return (
    <div className="py-8 space-y-6">
      <BrandNumerologyCalculator />
    </div>
  );
}
