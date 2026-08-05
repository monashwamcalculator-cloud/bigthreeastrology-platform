import { Metadata } from "next";
import { MarsSignCalculator } from "@/components/mars-sign-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mars Sign Passion & Drive Reader | Physical Energy",
  description: "Decode your physical energy, ambition style, anger triggers, and romantic passion based on Mars sign placement.",
  path: "/tools/mars-sign"
});

export default function MarsSignPage() {
  return (
    <div className="py-6 space-y-6">
      <ToolSchema
        name="Mars Sign Passion & Drive Reader"
        description="Decode your physical energy, ambition style, anger triggers, and romantic passion based on Mars sign placement."
        path="/tools/mars-sign"
        faqs={[
          {
            question: "What does Mars govern in your birth chart?",
            answer: "Mars governs physical vitality, executive ambition, athletic endurance, conflict management, and intimate passion."
          }
        ]}
      />
      <MarsSignCalculator />
    </div>
  );
}
