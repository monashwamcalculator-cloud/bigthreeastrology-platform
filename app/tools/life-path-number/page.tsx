import { Metadata } from "next";
import { LifePathNumberCalculator } from "@/components/life-path-number-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Life Path Number Calculator | Step-by-Step Master-Number Math",
  description: "Calculate your Life Path number free from your birth date — every reduction step shown, master numbers 11, 22 and 33 preserved, and your result explained.",
  path: "/tools/life-path-number"
});

export default function LifePathNumberPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Life Path Number Calculator</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Your Life Path number is the core number of your numerology chart, drawn from your birth date alone. This calculator reduces your month, day and year separately — keeping master numbers 11, 22 and 33 — and shows you every step, so the result is one you can verify by hand.</p>
      </div>
      <LifePathNumberCalculator />
      <ToolSections slug="life-path-number" />
    </div>
  );
}
