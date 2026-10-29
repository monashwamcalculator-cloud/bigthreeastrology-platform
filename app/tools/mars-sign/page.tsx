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
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Mars Sign Calculator — Passion, Drive & Energy</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find your Mars sign to understand your physical energy, ambition, temper and the way you pursue love, work and goals.</p>
      </div>
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
