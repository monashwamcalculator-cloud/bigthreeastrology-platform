import { Metadata } from "next";
import { DestinyNumberCalculator } from "@/components/destiny-number-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Expression & Destiny Number Calculator | Chaldean Math",
  description: "Calculate your Expression Destiny Number using Chaldean and Pythagorean name numerology. Free and instant, with the method explained — no sign-up.",
  path: "/tools/destiny-number"
});

export default function DestinyNumberPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="destiny-number" title="Destiny Number Calculator — Expression Number" intro="Calculate your Destiny (Expression) Number from your full birth name using Chaldean math, and find the talents you are meant to express." />
      <DestinyNumberCalculator />
      <ToolSections slug="destiny-number" />
    </div>
  );
}
