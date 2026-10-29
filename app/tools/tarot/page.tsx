import { Metadata } from "next";
import { TarotReader } from "@/components/tarot-reader";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "3-Card Daily Tarot Reader | Past, Present & Future Spread",
  description: "Draw 3 tarot cards for daily intuitive guidance on love, career, and spiritual direction.",
  path: "/tools/tarot"
});

export default function TarotPage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Daily Tarot Reading — 3-Card Past, Present & Future Spread</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Draw three tarot cards for a free daily reading on love, career and spiritual direction — past, present and future, instantly revealed.</p>
      </div>
      <TarotReader />
      <ToolSections slug="tarot" />
    </div>
  );
}
