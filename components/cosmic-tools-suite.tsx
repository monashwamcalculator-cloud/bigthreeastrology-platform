"use client";

import { useState } from "react";
import { BigThreeCalculator } from "@/components/calculator";
import { KundaliMilanCalculator } from "@/components/kundali-milan";
import { LoveCompatibilityCalculator } from "@/components/love-compatibility";
import { NumerologyCalculator } from "@/components/numerology-calculator";
import { DailyHoroscope } from "@/components/daily-horoscope";
import { TarotReader } from "@/components/tarot-reader";
import { GemstoneFinder } from "@/components/gemstone-finder";

export function CosmicToolsSuite() {
  const [activeTool, setActiveTool] = useState<"bigthree" | "kundali" | "love" | "numerology" | "horoscope" | "tarot" | "gemstone">("bigthree");

  return (
    <div className="w-full space-y-6">
      {/* Tool Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <button
          onClick={() => setActiveTool("bigthree")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "bigthree"
              ? "btn-primary shadow-xl shadow-purple-900/40 border border-white/20"
              : "btn-secondary hover:border-accent-gold"
          }`}
        >
          <span>🔮</span> Big Three
        </button>

        <button
          onClick={() => setActiveTool("kundali")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "kundali"
              ? "bg-accent-gold text-black font-bold shadow-xl shadow-amber-900/50 border border-yellow-300"
              : "btn-secondary hover:border-accent-gold"
          }`}
        >
          <span>🕉️</span> Kundali Milan (36 Gunas)
        </button>

        <button
          onClick={() => setActiveTool("love")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "love"
              ? "btn-primary shadow-xl shadow-rose-900/40 border border-white/20"
              : "btn-secondary hover:border-accent-rose"
          }`}
        >
          <span>💖</span> Love Match
        </button>

        <button
          onClick={() => setActiveTool("numerology")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "numerology"
              ? "btn-primary shadow-xl shadow-amber-900/40 border border-white/20"
              : "btn-secondary hover:border-accent-gold"
          }`}
        >
          <span>🔢</span> Numerology
        </button>

        <button
          onClick={() => setActiveTool("horoscope")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "horoscope"
              ? "btn-primary shadow-xl shadow-cyan-900/40 border border-white/20"
              : "btn-secondary hover:border-accent-cyan"
          }`}
        >
          <span>🌟</span> Horoscope
        </button>

        <button
          onClick={() => setActiveTool("tarot")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "tarot"
              ? "bg-accent-rose text-white font-bold shadow-xl shadow-rose-900/50 border border-rose-300"
              : "btn-secondary hover:border-accent-rose"
          }`}
        >
          <span>🎴</span> Tarot Reader
        </button>

        <button
          onClick={() => setActiveTool("gemstone")}
          className={`px-4 py-2.5 rounded-2xl font-display font-semibold transition-all text-xs sm:text-sm flex items-center gap-2 ${
            activeTool === "gemstone"
              ? "bg-accent-emerald text-black font-bold shadow-xl shadow-emerald-900/50 border border-emerald-300"
              : "btn-secondary hover:border-accent-emerald"
          }`}
        >
          <span>💎</span> Gemstones
        </button>
      </div>

      {/* Render Active Tool */}
      <div className="transition-all duration-300">
        {activeTool === "bigthree" && <BigThreeCalculator />}
        {activeTool === "kundali" && <KundaliMilanCalculator />}
        {activeTool === "love" && <LoveCompatibilityCalculator />}
        {activeTool === "numerology" && <NumerologyCalculator />}
        {activeTool === "horoscope" && <DailyHoroscope />}
        {activeTool === "tarot" && <TarotReader />}
        {activeTool === "gemstone" && <GemstoneFinder />}
      </div>
    </div>
  );
}
