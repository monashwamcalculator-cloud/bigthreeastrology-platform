import { Metadata } from "next";
import { VenusCalculator } from "@/components/venus-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Venus Sign Calculator | Love Language & Attraction Style",
  description: "Calculate your Venus sign placement to uncover your romantic attraction style and love language.",
  path: "/tools/venus-sign"
});

export default function VenusSignPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Venus Sign Calculator — Love Language & Attraction</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Discover your Venus sign and decode your love language, attraction style, tastes in beauty, money and relationships.</p>
      </div>
      <VenusCalculator />
      <ToolSections slug="venus-sign" />
    </div>
  );
}
