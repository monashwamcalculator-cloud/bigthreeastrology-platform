import { Metadata } from "next";
import { MoonPhaseCalculator } from "@/components/moon-phase-calculator";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Birth Moon Phase & Manifestation Reader",
  description: "Discover your birth Moon phase archetype (New Moon, Full Moon, Gibbous) and manifestation superpower. Free — no sign-up, no download needed.",
  path: "/tools/moon-phase"
});

export default function MoonPhasePage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="moon-phase" title="Moon Phase Calculator — Birth Moon & Today's Phase" intro="Find the Moon phase on your birth date and today's live phase, and learn how each phase shapes manifestation, mood and timing." />
      <MoonPhaseCalculator />
      <ToolSections slug="moon-phase" />
    </div>
  );
}
