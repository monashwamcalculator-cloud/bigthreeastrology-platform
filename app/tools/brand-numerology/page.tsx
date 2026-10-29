import { Metadata } from "next";
import { BrandNumerologyCalculator } from "@/components/brand-numerology";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Brand & Name Numerology Analyzer (Chaldean Method)",
  description: "Calculate the Chaldean name vibration and financial alignment of your brand, business title, or personal name.",
  path: "/tools/brand-numerology"
});

export default function BrandNumerologyPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Brand & Business Name Numerology Analyzer</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Analyze your brand or business name with the Chaldean method and check whether its vibration supports growth, money and reputation.</p>
      </div>
      <BrandNumerologyCalculator />
      <ToolSections slug="brand-numerology" />
    </div>
  );
}
