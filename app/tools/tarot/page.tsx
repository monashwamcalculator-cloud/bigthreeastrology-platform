import { Metadata } from "next";
import { TarotReader } from "@/components/tarot-reader";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "3-Card Daily Tarot Reader | Past, Present & Future Spread",
  description: "Draw 3 tarot cards for daily intuitive guidance on love, career, and spiritual direction. Free and instant, with the method explained — no sign-up.",
  path: "/tools/tarot"
});

export default function TarotPage() {
  return (
    <div className="py-8 space-y-6">
      <ToolPageHeader slug="tarot" title="Daily Tarot Reading — 3-Card Past, Present & Future Spread" intro="Draw three tarot cards for a free daily reading on love, career and spiritual direction — past, present and future, instantly revealed." />
      <TarotReader />
      <ToolSections slug="tarot" />
    </div>
  );
}
