import { Metadata } from "next";
import { MoonPhaseCalculator } from "@/components/moon-phase-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";

export const metadata: Metadata = buildMetadata({
  title: "Birth Moon Phase & Manifestation Reader",
  description: "Discover your birth Moon phase archetype (New Moon, Full Moon, Gibbous) and manifestation superpower.",
  path: "/tools/moon-phase"
});

export default function MoonPhasePage() {
  return (
    <div className="py-6 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Moon Phase Calculator — Birth Moon & Today's Phase</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Find the Moon phase on your birth date and today's live phase, and learn how each phase shapes manifestation, mood and timing.</p>
      </div>
      <ToolSchema
        name="Birth Moon Phase & Manifestation Reader"
        description="Discover your birth Moon phase archetype (New Moon, Full Moon, Gibbous) and manifestation superpower."
        path="/tools/moon-phase"
        faqs={[
          {
            question: "Why does your birth Moon phase matter?",
            answer: "Your birth Moon phase dictates your emotional operating style and reveals your optimal manifestation cycle."
          }
        ]}
      />
      <MoonPhaseCalculator />
      <ToolSections slug="moon-phase" />
    </div>
  );
}
