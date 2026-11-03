import { Metadata } from "next";
import { SoulmateInitialsCalculator } from "@/components/soulmate-initials";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Soulmate Name & Initial Predictor | Zodiac Love Signature",
  description: "Predict the starting letters and initials of your future soulmate based on your Sun sign placement. Free and instant, with FAQs — no sign-up.",
  path: "/tools/soulmate-initials"
});

export default function SoulmateInitialsPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="soulmate-initials" title="Soulmate Initials Predictor" intro="Reveal the initials and name signature of your soulmate from your zodiac love signature — a fun, free Vedic and Western astrology reading." />
      <SoulmateInitialsCalculator />
      <ToolSections slug="soulmate-initials" />
    </div>
  );
}
