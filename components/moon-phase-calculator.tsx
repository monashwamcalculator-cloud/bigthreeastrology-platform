"use client";

import { useMemo, useState } from "react";

type MoonPhaseData = {
  phase: string;
  emoji: string;
  personality: string;
  manifestationPower: string;
};

const MOON_PHASES: Record<string, MoonPhaseData> = {
  "New Moon": { phase: "New Moon (Initiation)", emoji: "🌑", personality: "Instinctual, pioneering, full of fresh seeds and quiet internal motivation.", manifestationPower: "Setting powerful new intentions and launching foundational projects." },
  "Waxing Crescent": { phase: "Waxing Crescent (Sprouting)", emoji: "🌒", personality: "Determined, resilient, overcoming early obstacles with faith.", manifestationPower: "Nurturing initial ideas and building consistent daily habits." },
  "First Quarter": { phase: "First Quarter (Action)", emoji: "🌓", personality: "Courageous problem-solver, executive drive, overcoming friction.", manifestationPower: "Pushing past resistance and making bold strategic decisions." },
  "Waxing Gibbous": { phase: "Waxing Gibbous (Refinement)", emoji: "🌔", personality: "Analytical, perfectionist, refining skills before public launch.", manifestationPower: "Fine-tuning details and mastering specialized techniques." },
  "Full Moon": { phase: "Full Moon (Illumination)", emoji: "🌕", personality: "Charismatic, expressive, emotionally vivid & highly intuitive.", manifestationPower: "Harvesting results, public celebrations, and heightened clarity." },
  "Disseminating": { phase: "Disseminating / Waning Gibbous (Sharing)", emoji: "🌖", personality: "Teacher, mentor, passing wisdom and guiding community.", manifestationPower: "Sharing knowledge, publishing, and mentoring others." },
  "Third Quarter": { phase: "Third Quarter (Forgiveness)", emoji: "🌗", personality: "Reflective, mature, releasing outdated patterns peacefully.", manifestationPower: "Forgiving past mistakes and clearing physical clutter." },
  "Balsamic": { phase: "Balsamic / Waning Crescent (Surrender)", emoji: "🌘", personality: "Mystical, quiet, deeply intuitive, telepathic soul.", manifestationPower: "Deep meditation, dream analysis, and spiritual surrender." }
};

const PHASES_KEYS = Object.keys(MOON_PHASES);

export function MoonPhaseCalculator() {
  const [selectedPhase, setSelectedPhase] = useState("Full Moon");

  const result = useMemo(() => MOON_PHASES[selectedPhase] || MOON_PHASES["Full Moon"], [selectedPhase]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-2">🌖 Natal Lunar Phase</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Birth Moon Phase Reader</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Discover your birth Moon phase archetype and manifestation power cycle.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {PHASES_KEYS.map((phaseKey) => (
          <button
            key={phaseKey}
            onClick={() => setSelectedPhase(phaseKey)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedPhase === phaseKey
                ? "bg-sky-400 text-sky-950 font-bold shadow-md border border-sky-300"
                : "bg-black/40 text-sky-200 border border-sky-500/20 hover:bg-sky-500/20"
            }`}
          >
            {MOON_PHASES[phaseKey].emoji} {phaseKey}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50 text-center">
        <div className="text-5xl mb-2">{result.emoji}</div>
        <h3 className="text-xl font-display font-bold text-white mb-3">{result.phase}</h3>

        <div className="space-y-3 text-left border-t border-sky-500/20 pt-4">
          <div>
            <span className="text-xs font-semibold text-sky-300">Emotional Personality Archetype:</span>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mt-0.5">{result.personality}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-sky-950/80 border border-sky-500/30">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-0.5">✨ Prime Manifestation Superpower</span>
            <p className="text-xs text-white font-medium">{result.manifestationPower}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
