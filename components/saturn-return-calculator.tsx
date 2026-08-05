"use client";

import { useMemo, useState } from "react";

type SaturnCycle = {
  ageRange: string;
  theme: string;
  careerFocus: string;
  survivalRemedy: string;
};

const SATURN_RETURN_DATA: Record<string, SaturnCycle> = {
  "1st Saturn Return (Age 27-30)": {
    ageRange: "Ages 27 to 30",
    theme: "Major adulthood initiation, career restructuring, shedding superficial relationships, stepping into mature accountability.",
    careerFocus: "Transition from exploratory jobs into serious career legacy, business ownership, or leadership.",
    survivalRemedy: "Embrace discipline, take responsibility for your commitments, and release fear of growing up."
  },
  "2nd Saturn Return (Age 56-60)": {
    ageRange: "Ages 56 to 60",
    theme: "Mastery phase, retirement planning, legacy consolidation, mentoring younger generations, and spiritual wisdom.",
    careerFocus: "Shifting from active executive building to mentorship, board advisory, writing, and philanthropy.",
    survivalRemedy: "Share your accumulated wisdom, practice health maintenance, and celebrate life milestones."
  },
  "3rd Saturn Return (Age 84-88)": {
    ageRange: "Ages 84 to 88",
    theme: "Elder grace, spiritual completion, detachment from material illusion, peace with life's journey.",
    careerFocus: "Spiritual sanctuary, storytelling, family blessing, and peaceful soul completion.",
    survivalRemedy: "Practice daily gratitude, meditation, and passing family legacy to future generations."
  }
};

const CYCLES = Object.keys(SATURN_RETURN_DATA);

export function SaturnReturnCalculator() {
  const [selectedCycle, setSelectedCycle] = useState("1st Saturn Return (Age 27-30)");

  const result = useMemo(() => SATURN_RETURN_DATA[selectedCycle] || SATURN_RETURN_DATA["1st Saturn Return (Age 27-30)"], [selectedCycle]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">🪐 Major Life Milestone Transits</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">Saturn Return Calculator</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Explore the 29.5-year Saturn Return milestones that redefine your career, maturity, and life legacy.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {CYCLES.map((cycle) => (
          <button
            key={cycle}
            onClick={() => setSelectedCycle(cycle)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCycle === cycle
                ? "bg-amber-400 text-black font-bold shadow-lg border border-amber-300"
                : "bg-black/40 text-sky-200 border border-sky-500/20 hover:bg-sky-500/20"
            }`}
          >
            {cycle}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50">
        <div className="border-b border-sky-500/20 pb-3 mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">Active Transition</span>
            <h3 className="text-xl font-display font-bold text-white mt-0.5">{selectedCycle.split(" (")[0]}</h3>
          </div>
          <span className="text-xs font-bold text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/30">
            {result.ageRange}
          </span>
        </div>

        <div className="space-y-3 text-left">
          <div>
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1">🎯 Core Life Transformation</h4>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">{result.theme}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">💼 Career & Legacy Shift</h4>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">{result.careerFocus}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-sky-950/80 border border-sky-500/30 mt-2">
            <h4 className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-1">✨ Saturn Survival Advice</h4>
            <p className="text-xs text-white font-medium">{result.survivalRemedy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
