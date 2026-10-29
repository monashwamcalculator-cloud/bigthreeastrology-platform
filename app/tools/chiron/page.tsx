import { Metadata } from "next";
import { ChironCalculator } from "@/components/chiron-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Chiron Calculator | Wounded Healer & Soul Healing Gift",
  description: "Calculate your natal Chiron placement to discover your core core wounds and spiritual healing powers.",
  path: "/tools/chiron"
});

export default function ChironPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Chiron Calculator — Wound, Healing & Life Lesson</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Locate Chiron in your birth chart to identify your core wound, your healing gift and the lesson your soul came to master.</p>
      </div>
      <ChironCalculator />
      <ToolSections slug="chiron" />
    </div>
  );
}
