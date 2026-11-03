import { Metadata } from "next";
import { MarsSignCalculator } from "@/components/mars-sign-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Mars Sign Passion & Drive Reader | Physical Energy",
  description: "Decode your physical energy, ambition style, anger triggers, and romantic passion based on Mars sign placement. Free — no sign-up, no download needed.",
  path: "/tools/mars-sign"
});

export default function MarsSignPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="mars-sign" title="Mars Sign Calculator — Passion, Drive & Energy" intro="Find your Mars sign to understand your physical energy, ambition, temper and the way you pursue love, work and goals." />
      <MarsSignCalculator />
      <ToolSections slug="mars-sign" />
    </div>
  );
}
