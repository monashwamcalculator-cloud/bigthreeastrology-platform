"use client";

import { useMemo, useState } from "react";

type CompatibilityMatrix = {
  score: number;
  verdict: string;
  dynamics: string;
  growthAdvice: string;
};

function getLifePathCompatibility(lp1: number, lp2: number): CompatibilityMatrix {
  const sum = (lp1 + lp2) % 9 || 9;
  const isSame = lp1 === lp2;

  if (isSame) {
    return {
      score: 92,
      verdict: "Mirror Soul Synergy (High Harmony)",
      dynamics: "You share identical life frequencies, core values, and fundamental motivations.",
      growthAdvice: "Maintain personal individuality to avoid co-dependency or repetitive habits."
    };
  }

  if (sum === 8 || sum === 6 || sum === 3) {
    return {
      score: 88,
      verdict: "Power & Expansion Partnership",
      dynamics: "A dynamic balance where one partner provides vision and the other provides structure and execution.",
      growthAdvice: "Celebrate each other's distinct strengths and practice open communication."
    };
  }

  if (sum === 7 || sum === 5 || sum === 1) {
    return {
      score: 82,
      verdict: "Intellectual & Adventurous Growth",
      dynamics: "Sparks creative debates, mutual curiosity, and continuous learning experiences together.",
      growthAdvice: "Balance freedom with emotional intimacy to keep the bond grounded."
    };
  }

  return {
    score: 76,
    verdict: "Karmic Balance & Growth Opportunity",
    dynamics: "Opposites attract! Brings valuable contrasting perspectives that push both partners to evolve.",
    growthAdvice: "Practice patience and appreciate different emotional and practical styles."
  };
}

export function LifePathCompatibilityCalculator() {
  const [lifePath1, setLifePath1] = useState(1);
  const [lifePath2, setLifePath2] = useState(7);

  const result = useMemo(() => getLifePathCompatibility(lifePath1, lifePath2), [lifePath1, lifePath2]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-2">🔢 Life Path Synastry</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Life Path Numerology Matcher</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Select two Life Path numbers to calculate relationship synergy, compatibility score, and karmic advice.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
        <div>
          <label className="text-xs font-semibold text-sky-200 block mb-1">Partner 1 Life Path</label>
          <select
            value={lifePath1}
            onChange={(e) => setLifePath1(parseInt(e.target.value, 10))}
            className="input-cosmic w-full text-sm font-bold text-amber-300"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => (
              <option key={num} value={num} className="bg-sky-950 text-white">
                Life Path {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-sky-200 block mb-1">Partner 2 Life Path</label>
          <select
            value={lifePath2}
            onChange={(e) => setLifePath2(parseInt(e.target.value, 10))}
            className="input-cosmic w-full text-sm font-bold text-amber-300"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => (
              <option key={num} value={num} className="bg-sky-950 text-white">
                Life Path {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50 text-center">
        <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block mb-1">
          Life Path {lifePath1} + Life Path {lifePath2}
        </span>
        <div className="text-4xl font-display font-extrabold gradient-text-gold mb-2">
          {result.score}% Compatibility
        </div>
        <p className="text-sm font-bold text-white mb-4">{result.verdict}</p>

        <div className="space-y-3 text-left border-t border-sky-500/20 pt-4">
          <div>
            <span className="text-xs font-semibold text-sky-300">Relationship Dynamics:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.dynamics}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-300">Growth Recommendation:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.growthAdvice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
