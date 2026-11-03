import { Metadata } from "next";
import { ChironCalculator } from "@/components/chiron-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Chiron Calculator | Wounded Healer & Soul Healing Gift",
  description: "Calculate your natal Chiron placement to discover your core core wounds and spiritual healing powers. Free — no sign-up, no download needed.",
  path: "/tools/chiron"
});

export default function ChironPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="chiron" title="Chiron Calculator — Wound, Healing & Life Lesson" intro="Locate Chiron in your birth chart to identify your core wound, your healing gift and the lesson your soul came to master." />
      <ChironCalculator />
      <ToolSections slug="chiron" />
    </div>
  );
}
