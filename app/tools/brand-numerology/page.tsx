import { Metadata } from "next";
import { BrandNumerologyCalculator } from "@/components/brand-numerology";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Brand & Name Numerology Analyzer (Chaldean Method)",
  description: "Calculate the Chaldean name vibration and financial alignment of your brand, business title, or personal name. Free — no sign-up, no download needed.",
  path: "/tools/brand-numerology"
});

export default function BrandNumerologyPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="brand-numerology" title="Brand & Business Name Numerology Analyzer" intro="Analyze your brand or business name with the Chaldean method and check whether its vibration supports growth, money and reputation." />
      <BrandNumerologyCalculator />
      <ToolSections slug="brand-numerology" />
    </div>
  );
}
