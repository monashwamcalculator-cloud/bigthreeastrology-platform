import { Metadata } from "next";
import { MercuryCalculator } from "@/components/mercury-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Mercury Sign Calculator | Mind, Intellect & Speech",
  description: "Calculate your Mercury sign to analyze your mental processing style, intellect, and communication approach.",
  path: "/tools/mercury-sign"
});

export default function MercurySignPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Mercury Sign Calculator — Mind & Communication Style</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find your Mercury sign to understand how you think, learn, speak and process ideas in daily life and relationships.</p>
      </div>
      <MercuryCalculator />
      <ToolSections slug="mercury-sign" />
    </div>
  );
}
