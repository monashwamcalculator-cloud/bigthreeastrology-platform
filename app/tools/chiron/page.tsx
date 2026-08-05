import { Metadata } from "next";
import { ChironCalculator } from "@/components/chiron-calculator";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Chiron Calculator | Wounded Healer & Soul Healing Gift",
  description: "Calculate your natal Chiron placement to discover your core core wounds and spiritual healing powers.",
  path: "/tools/chiron"
});

export default function ChironPage() {
  return (
    <div className="py-8 space-y-6">
      <ChironCalculator />
    </div>
  );
}
