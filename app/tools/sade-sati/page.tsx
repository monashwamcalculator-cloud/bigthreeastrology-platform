import { Metadata } from "next";
import { SadeSatiChecker } from "@/components/sade-sati-checker";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Sade Sati Phase Checker & Saturn Remedies",
  description: "Check your Moon Sign for Shani Sade Sati transit phase and unlock authentic Vedic remedies.",
  path: "/tools/sade-sati"
});

export default function SadeSatiPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Sade Sati Checker — Saturn Phase & Remedies</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Check whether you are running Shani Sade Sati, which phase you are in, how long it lasts, and the practical remedies for each phase.</p>
      </div>
      <SadeSatiChecker />
      <ToolSections slug="sade-sati" />
    </div>
  );
}
