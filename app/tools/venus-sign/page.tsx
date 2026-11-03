import { Metadata } from "next";
import { VenusCalculator } from "@/components/venus-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Venus Sign Calculator | Love Language & Attraction Style",
  description: "Calculate your Venus sign placement to uncover your romantic attraction style and love language. With the method explained, free and instant.",
  path: "/tools/venus-sign"
});

export default function VenusSignPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="venus-sign" title="Venus Sign Calculator — Love Language & Attraction" intro="Discover your Venus sign and decode your love language, attraction style, tastes in beauty, money and relationships." />
      <VenusCalculator />
      <ToolSections slug="venus-sign" />
    </div>
  );
}
