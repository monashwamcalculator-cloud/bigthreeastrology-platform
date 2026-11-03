import { Metadata } from "next";
import { SpousePredictor } from "@/components/spouse-predictor";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Future Spouse & Soulmate Predictor | Appearance & Personality",
  description: "Predict your future spouse's personality, appearance, element, lucky initials, and meeting environment. Free — no sign-up, no download needed.",
  path: "/tools/spouse-predictor"
});

export default function SpousePage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="spouse-predictor" title="Future Spouse Predictor" intro="Predict your future spouse's appearance, personality, element and lucky initials from your Venus placement, Darakaraka planet and 7th house — free, with no sign-up." />
      <SpousePredictor />
      <ToolSections slug="spouse-predictor" />
    </div>
  );
}
