import { Metadata } from "next";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Angel Number Decoder & Cosmic Frequency Guide",
  description: "Decode 111, 222, 333, 444, 555, 777, 888 angel numbers and unlock manifestation frequencies. Free and instant, with the method explained — no sign-up.",
  path: "/tools/angel-numbers"
});

export default function AngelNumbersPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="angel-numbers" title="Angel Number Decoder — 111, 222, 444 & More" intro="Decode the angel number you keep seeing and understand the guidance, warning or blessing hidden in its repeating sequence." />
      <AngelNumberCalculator />
      <ToolSections slug="angel-numbers" />
    </div>
  );
}
