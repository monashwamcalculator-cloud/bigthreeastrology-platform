"use client";

import { useMemo, useState } from "react";
import { moonLongitude, sunLongitude } from "@/lib/astro-engine";

type MoonPhaseData = {
  phase: string;
  emoji: string;
  personality: string;
  manifestationPower: string;
};

const MOON_PHASES: Record<string, MoonPhaseData> = {
  "New Moon": { phase: "New Moon (Initiation)", emoji: "", personality: "Instinctual, pioneering, full of fresh seeds and quiet internal motivation.", manifestationPower: "Setting powerful new intentions and launching foundational projects." },
  "Waxing Crescent": { phase: "Waxing Crescent (Sprouting)", emoji: "", personality: "Determined, resilient, overcoming early obstacles with faith.", manifestationPower: "Nurturing initial ideas and building consistent daily habits." },
  "First Quarter": { phase: "First Quarter (Action)", emoji: "", personality: "Courageous problem-solver, executive drive, overcoming friction.", manifestationPower: "Pushing past resistance and making bold strategic decisions." },
  "Waxing Gibbous": { phase: "Waxing Gibbous (Refinement)", emoji: "", personality: "Analytical, perfectionist, refining skills before public launch.", manifestationPower: "Fine-tuning details and mastering specialized techniques." },
  "Full Moon": { phase: "Full Moon (Illumination)", emoji: "", personality: "Charismatic, expressive, emotionally vivid & highly intuitive.", manifestationPower: "Harvesting results, public celebrations, and heightened clarity." },
  "Disseminating": { phase: "Disseminating / Waning Gibbous (Sharing)", emoji: "", personality: "Teacher, mentor, passing wisdom and guiding community.", manifestationPower: "Sharing knowledge, publishing, and mentoring others." },
  "Third Quarter": { phase: "Third Quarter (Forgiveness)", emoji: "", personality: "Reflective, mature, releasing outdated patterns peacefully.", manifestationPower: "Forgiving past mistakes and clearing physical clutter." },
  "Balsamic": { phase: "Balsamic / Waning Crescent (Surrender)", emoji: "", personality: "Mystical, quiet, deeply intuitive, telepathic soul.", manifestationPower: "Deep meditation, dream analysis, and spiritual surrender." }
};

const PHASES_KEYS = Object.keys(MOON_PHASES);

const PHASE_KEYS_ORDERED = [
  "New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous",
  "Full Moon", "Disseminating", "Third Quarter", "Balsamic",
];

/** Horizontal shift of the dark overlay circle per phase (waxing = lit on the right, waning = lit on the left). */
const PHASE_DARK_SHIFT: Record<string, number | null> = {
  "New Moon": 0,
  "Waxing Crescent": -38,
  "First Quarter": -52,
  "Waxing Gibbous": -80,
  "Full Moon": null,
  "Disseminating": 80,
  "Third Quarter": 52,
  "Balsamic": 38,
};

function MoonVisual({ phaseKey }: { phaseKey: string }) {
  const shift = PHASE_DARK_SHIFT[phaseKey] ?? null;
  return (
    <div
      aria-hidden="true"
      className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border border-[#d4e2dd]"
      style={{ background: "radial-gradient(circle at 35% 35%, #fdf6d8 0%, #f5cb6d 55%, #e8b84b 100%)" }}
    >
      {shift !== null && (
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "#42586e", transform: `translateX(${shift}%)` }}
        />
      )}
      <div className="absolute inset-0 rounded-full" style={{ boxShadow: "inset -8px -6px 18px rgba(4,47,42,0.28)" }} />
    </div>
  );
}

/** Real phase from the Sun-Moon elongation angle at midday UTC on the birth date. */
function phaseForDate(birthDate: string): { key: string; angle: number; illumination: number } | null {
  const parts = birthDate.split("-");
  if (parts.length !== 3) return null;
  const date = new Date(Date.UTC(parseInt(parts[0], 10) || 1995, (parseInt(parts[1], 10) || 1) - 1, parseInt(parts[2], 10) || 1, 12, 0));
  const angle = (moonLongitude(date) - sunLongitude(date) + 360) % 360;
  const idx = Math.floor(((angle + 22.5) % 360) / 45);
  const illumination = Math.round(((1 - Math.cos((angle * Math.PI) / 180)) / 2) * 100);
  return { key: PHASE_KEYS_ORDERED[idx], angle: Math.round(angle), illumination };
}

export function MoonPhaseCalculator() {
  const [selectedPhase, setSelectedPhase] = useState("Full Moon");
  const [birthDate, setBirthDate] = useState("");
  const [bornInfo, setBornInfo] = useState<{ key: string; angle: number; illumination: number } | null>(null);

  const result = useMemo(() => MOON_PHASES[selectedPhase] || MOON_PHASES["Full Moon"], [selectedPhase]);

  const handleBirthDate = (value: string) => {
    setBirthDate(value);
    const info = value ? phaseForDate(value) : null;
    setBornInfo(info);
    if (info) setSelectedPhase(info.key);
  };

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-2"> Natal Lunar Phase</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Birth Moon Phase Reader</h2>
        <p className="text-[#52796f] text-xs sm:text-sm mt-1">
          Discover your birth Moon phase archetype and manifestation power cycle.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-6 p-4 rounded-xl bg-[#dff5ec] border border-[#cdeadd] text-center">
        <label className="text-xs font-semibold text-[#042f2a] block mb-2">Find YOUR birth phase — enter your birth date</label>
        <input
          type="date"
          className="input-cosmic max-w-xs mx-auto"
          value={birthDate}
          onChange={(e) => handleBirthDate(e.target.value)}
        />
        {bornInfo && (
          <p className="text-xs sm:text-sm text-[#2c473f] mt-3">
            You were born under a <strong className="text-[#042f2a]">{bornInfo.key}</strong> — the Moon was
            {" "}{bornInfo.angle}° from the Sun and about {bornInfo.illumination}% illuminated.
          </p>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {PHASES_KEYS.map((phaseKey) => (
          <button
            key={phaseKey}
            onClick={() => setSelectedPhase(phaseKey)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedPhase === phaseKey
                ? "bg-[#08745a] text-white font-bold shadow-md border border-[#08745a]"
                : "bg-white text-[#2c473f] border border-[#d4e2dd] hover:bg-[#dff5ec]"
            }`}
          >
            {phaseKey}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-[#d4e2dd] bg-white text-center">
        <MoonVisual phaseKey={selectedPhase} />
        <h3 className="text-xl font-display font-bold text-[#042f2a] mb-3">{result.phase}</h3>

        <div className="space-y-3 text-left border-t border-[#d4e2dd] pt-4">
          <div>
            <span className="text-xs font-semibold text-[#08745a]">Emotional Personality Archetype:</span>
            <p className="text-xs sm:text-sm text-[#2c473f] leading-relaxed mt-0.5">{result.personality}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-[#dff5ec] border border-[#a9ead1]">
            <span className="text-xs font-semibold text-[#075433] uppercase tracking-wider block mb-0.5">Prime Manifestation Superpower</span>
            <p className="text-xs text-[#042f2a] font-medium">{result.manifestationPower}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
