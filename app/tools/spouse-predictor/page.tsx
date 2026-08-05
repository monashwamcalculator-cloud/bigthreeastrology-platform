import { Metadata } from "next";
import { SpousePredictor } from "@/components/spouse-predictor";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Future Spouse & Soulmate Predictor | Appearance & Personality",
  description: "Predict your future spouse's personality, appearance, element, lucky initials, and meeting environment.",
  path: "/tools/spouse-predictor"
});

export default function SpousePage() {
  return (
    <div className="py-8 space-y-6">
      <SpousePredictor />
    </div>
  );
}
