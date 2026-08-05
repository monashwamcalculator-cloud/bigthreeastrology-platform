import { Metadata } from "next";
import { MoonPhaseCalculator } from "@/components/moon-phase-calculator";
import { ToolSchema } from "@/components/tool-schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Birth Moon Phase & Manifestation Reader",
  description: "Discover your birth Moon phase archetype (New Moon, Full Moon, Gibbous) and manifestation superpower.",
  path: "/tools/moon-phase"
});

export default function MoonPhasePage() {
  return (
    <div className="py-6 space-y-6">
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
    </div>
  );
}
