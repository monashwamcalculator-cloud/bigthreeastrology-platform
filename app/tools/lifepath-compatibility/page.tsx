import { Metadata } from "next";
import { LifePathCompatibilityCalculator } from "@/components/life-path-compatibility";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Life Path Numerology Matcher & Compatibility",
  description: "Calculate Life Path numerology compatibility, relationship synergy score, and karmic advice.",
  path: "/tools/lifepath-compatibility"
});

export default function LifePathCompatibilityPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Life Path Numerology Matcher & Compatibility"
        description="Calculate Life Path numerology compatibility, relationship synergy score, and karmic advice."
        path="/tools/lifepath-compatibility"
        faqs={[
          {
            question: "How is Life Path Compatibility calculated?",
            answer: "Life Path synastry evaluates the core frequency resonance between two Life Path numbers to calculate relationship harmony, communication styles, and growth advice."
          }
        ]}
      />
      <LifePathCompatibilityCalculator />
    </div>
  );
}
