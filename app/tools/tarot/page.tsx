import { Metadata } from "next";
import { TarotReader } from "@/components/tarot-reader";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "3-Card Daily Tarot Reader | Past, Present & Future Spread",
  description: "Draw 3 tarot cards for daily intuitive guidance on love, career, and spiritual direction.",
  path: "/tools/tarot"
});

export default function TarotPage() {
  return (
    <div className="py-8 space-y-6">
      <TarotReader />
    </div>
  );
}
