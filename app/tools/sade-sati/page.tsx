import { Metadata } from "next";
import { SadeSatiChecker } from "@/components/sade-sati-checker";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Sade Sati Phase Checker & Saturn Remedies",
  description: "Check your Moon Sign for Shani Sade Sati transit phase and unlock authentic Vedic remedies. Free and instant, with the method explained — no sign-up.",
  path: "/tools/sade-sati"
});

export default function SadeSatiPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="sade-sati" title="Sade Sati Checker — Saturn Phase & Remedies" intro="Check whether you are running Shani Sade Sati, which phase you are in, how long it lasts, and the practical remedies for each phase." />
      <SadeSatiChecker />
      <ToolSections slug="sade-sati" />
    </div>
  );
}
