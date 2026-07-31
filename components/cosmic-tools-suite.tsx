"use client";

import { useState } from "react";
import { BigThreeCalculator } from "@/components/calculator";
import { KundaliMilanCalculator } from "@/components/kundali-milan";
import { LoveCompatibilityCalculator } from "@/components/love-compatibility";
import { NumerologyCalculator } from "@/components/numerology-calculator";
import { DailyHoroscope } from "@/components/daily-horoscope";
import { TarotReader } from "@/components/tarot-reader";
import { GemstoneFinder } from "@/components/gemstone-finder";
import { NakshatraFinder } from "@/components/nakshatra-finder";
import { RahuKaalTracker } from "@/components/rahu-kaal";
import { VenusCalculator } from "@/components/venus-calculator";
import { MercuryCalculator } from "@/components/mercury-calculator";
import { ChironCalculator } from "@/components/chiron-calculator";

type CategoryKey = "planetary" | "vedic" | "guidance";
type ToolKey = 
  | "bigthree" | "venus" | "mercury" | "chiron" | "nakshatra"
  | "kundali" | "love" | "gemstone" | "rahu"
  | "numerology" | "horoscope" | "tarot";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("planetary");
  const [activeTool, setActiveTool] = useState<ToolKey>("bigthree");

  const categories = [
    { key: "planetary", name: "🌟 Birth Chart & Planetary Signs", icon: "🌌" },
    { key: "vedic", name: "🕉️ Vedic Astrology & Compatibility", icon: "🕉️" },
    { key: "guidance", name: "🔮 Numerology, Tarot & Guidance", icon: "🎴" }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Group-Wise Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 p-2 rounded-2xl bg-black/60 border border-cosmic-500/30 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key as CategoryKey);
              if (cat.key === "planetary") setActiveTool("bigthree");
              if (cat.key === "vedic") setActiveTool("kundali");
              if (cat.key === "guidance") setActiveTool("numerology");
            }}
            className={`px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-lg shadow-purple-900/50 border border-white/20"
                : "text-cosmic-200 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Tools Sub-Selector Buttons under Active Category */}
      <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto py-2">
        {activeCategory === "planetary" && (
          <>
            <button
              onClick={() => setActiveTool("bigthree")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "bigthree"
                  ? "bg-accent-gold text-black font-bold shadow-md border border-yellow-300"
                  : "btn-secondary hover:border-accent-gold"
              }`}
            >
              <span>🔮</span> Big Three (Sun/Moon/Rising)
            </button>
            <button
              onClick={() => setActiveTool("venus")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "venus"
                  ? "bg-accent-rose text-white font-bold shadow-md border border-rose-300"
                  : "btn-secondary hover:border-accent-rose"
              }`}
            >
              <span>♀️</span> Venus Sign (Love)
            </button>
            <button
              onClick={() => setActiveTool("mercury")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "mercury"
                  ? "bg-accent-cyan text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-accent-cyan"
              }`}
            >
              <span>☿️</span> Mercury Sign (Mind)
            </button>
            <button
              onClick={() => setActiveTool("chiron")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "chiron"
                  ? "bg-accent-emerald text-black font-bold shadow-md border border-emerald-300"
                  : "btn-secondary hover:border-accent-emerald"
              }`}
            >
              <span>⚕️</span> Chiron (Soul Healing)
            </button>
            <button
              onClick={() => setActiveTool("nakshatra")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "nakshatra"
                  ? "bg-accent-cyan text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-accent-cyan"
              }`}
            >
              <span>⭐</span> Birth Star (Nakshatra)
            </button>
          </>
        )}

        {activeCategory === "vedic" && (
          <>
            <button
              onClick={() => setActiveTool("kundali")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "kundali"
                  ? "bg-accent-gold text-black font-bold shadow-md border border-yellow-300"
                  : "btn-secondary hover:border-accent-gold"
              }`}
            >
              <span>🕉️</span> Kundali Milan (36 Gunas)
            </button>
            <button
              onClick={() => setActiveTool("love")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "love"
                  ? "bg-accent-rose text-white font-bold shadow-md border border-rose-300"
                  : "btn-secondary hover:border-accent-rose"
              }`}
            >
              <span>💖</span> Zodiac Love Matcher
            </button>
            <button
              onClick={() => setActiveTool("gemstone")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "gemstone"
                  ? "bg-accent-emerald text-black font-bold shadow-md border border-emerald-300"
                  : "btn-secondary hover:border-accent-emerald"
              }`}
            >
              <span>💎</span> Gemstone & Remedy Finder
            </button>
            <button
              onClick={() => setActiveTool("rahu")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "rahu"
                  ? "bg-accent-gold text-black font-bold shadow-md border border-yellow-300"
                  : "btn-secondary hover:border-accent-gold"
              }`}
            >
              <span>🕒</span> Rahu Kaal & Muhurat
            </button>
          </>
        )}

        {activeCategory === "guidance" && (
          <>
            <button
              onClick={() => setActiveTool("numerology")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "numerology"
                  ? "bg-accent-gold text-black font-bold shadow-md border border-yellow-300"
                  : "btn-secondary hover:border-accent-gold"
              }`}
            >
              <span>🔢</span> Life Path Numerology
            </button>
            <button
              onClick={() => setActiveTool("horoscope")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "horoscope"
                  ? "bg-accent-cyan text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-accent-cyan"
              }`}
            >
              <span>🌟</span> Daily Horoscope
            </button>
            <button
              onClick={() => setActiveTool("tarot")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "tarot"
                  ? "bg-accent-rose text-white font-bold shadow-md border border-rose-300"
                  : "btn-secondary hover:border-accent-rose"
              }`}
            >
              <span>🎴</span> 3-Card Tarot Reader
            </button>
          </>
        )}
      </div>

      {/* Render Active Tool */}
      <div className="transition-all duration-300">
        {activeTool === "bigthree" && <BigThreeCalculator />}
        {activeTool === "venus" && <VenusCalculator />}
        {activeTool === "mercury" && <MercuryCalculator />}
        {activeTool === "chiron" && <ChironCalculator />}
        {activeTool === "nakshatra" && <NakshatraFinder />}

        {activeTool === "kundali" && <KundaliMilanCalculator />}
        {activeTool === "love" && <LoveCompatibilityCalculator />}
        {activeTool === "gemstone" && <GemstoneFinder />}
        {activeTool === "rahu" && <RahuKaalTracker />}

        {activeTool === "numerology" && <NumerologyCalculator />}
        {activeTool === "horoscope" && <DailyHoroscope />}
        {activeTool === "tarot" && <TarotReader />}
      </div>
    </div>
  );
}
