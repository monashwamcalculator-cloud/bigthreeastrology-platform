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
import { ChoghadiaCalculator } from "@/components/choghadia-calculator";
import { SadeSatiChecker } from "@/components/sade-sati-checker";
import { BrandNumerologyCalculator } from "@/components/brand-numerology";
import { KundaliHouseCalculator } from "@/components/kundali-house-calculator";

type CategoryKey = "planetary" | "vedic" | "numerology" | "guidance";
type ToolKey = 
  | "bigthree" | "venus" | "mercury" | "chiron" | "nakshatra"
  | "kundali" | "love" | "gemstone" | "rahu" | "choghadia" | "sadesati" | "houses"
  | "numerology" | "brand"
  | "horoscope" | "tarot";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("planetary");
  const [activeTool, setActiveTool] = useState<ToolKey>("bigthree");

  const categories = [
    { key: "planetary", name: "🌟 Birth Chart & Planets", icon: "🌌" },
    { key: "vedic", name: "🕉️ Vedic Kundali & Muhurat", icon: "🕉️" },
    { key: "numerology", name: "🔢 Numerology & Brand Math", icon: "📜" },
    { key: "guidance", name: "🔮 Tarot & Daily Guidance", icon: "🎴" }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Group-Wise Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 p-2 rounded-2xl bg-black/60 border border-emerald-500/30 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key as CategoryKey);
              if (cat.key === "planetary") setActiveTool("bigthree");
              if (cat.key === "vedic") setActiveTool("kundali");
              if (cat.key === "numerology") setActiveTool("numerology");
              if (cat.key === "guidance") setActiveTool("horoscope");
            }}
            className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-emerald-950 shadow-lg shadow-emerald-900/50 border border-emerald-300"
                : "text-emerald-200 hover:text-white hover:bg-emerald-500/20"
            }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Tools Sub-Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto py-2">
        {activeCategory === "planetary" && (
          <>
            <button
              onClick={() => setActiveTool("bigthree")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "bigthree"
                  ? "bg-emerald-400 text-emerald-950 font-bold shadow-md border border-emerald-300"
                  : "btn-secondary hover:border-emerald-400"
              }`}
            >
              <span>🔮</span> Big Three
            </button>
            <button
              onClick={() => setActiveTool("venus")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "venus"
                  ? "bg-amber-400 text-black font-bold shadow-md border border-amber-300"
                  : "btn-secondary hover:border-amber-400"
              }`}
            >
              <span>♀️</span> Venus Sign
            </button>
            <button
              onClick={() => setActiveTool("mercury")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "mercury"
                  ? "bg-cyan-400 text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-cyan-400"
              }`}
            >
              <span>☿️</span> Mercury Sign
            </button>
            <button
              onClick={() => setActiveTool("chiron")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "chiron"
                  ? "bg-emerald-300 text-emerald-950 font-bold shadow-md border border-emerald-200"
                  : "btn-secondary hover:border-emerald-300"
              }`}
            >
              <span>⚕️</span> Chiron Healing
            </button>
            <button
              onClick={() => setActiveTool("nakshatra")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "nakshatra"
                  ? "bg-teal-400 text-black font-bold shadow-md border border-teal-300"
                  : "btn-secondary hover:border-teal-400"
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
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "kundali"
                  ? "bg-amber-400 text-black font-bold shadow-md border border-amber-300"
                  : "btn-secondary hover:border-amber-400"
              }`}
            >
              <span>🕉️</span> Kundali Milan (36 Gunas)
            </button>
            <button
              onClick={() => setActiveTool("love")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "love"
                  ? "bg-rose-400 text-black font-bold shadow-md border border-rose-300"
                  : "btn-secondary hover:border-rose-400"
              }`}
            >
              <span>💖</span> Love Matcher
            </button>
            <button
              onClick={() => setActiveTool("gemstone")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "gemstone"
                  ? "bg-emerald-400 text-emerald-950 font-bold shadow-md border border-emerald-300"
                  : "btn-secondary hover:border-emerald-400"
              }`}
            >
              <span>💎</span> Gemstone Finder
            </button>
            <button
              onClick={() => setActiveTool("rahu")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "rahu"
                  ? "bg-cyan-400 text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-cyan-400"
              }`}
            >
              <span>🕒</span> Rahu Kaal
            </button>
            <button
              onClick={() => setActiveTool("choghadia")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "choghadia"
                  ? "bg-teal-400 text-black font-bold shadow-md border border-teal-300"
                  : "btn-secondary hover:border-teal-400"
              }`}
            >
              <span>🔮</span> Choghadia Muhurat
            </button>
            <button
              onClick={() => setActiveTool("sadesati")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "sadesati"
                  ? "bg-amber-400 text-black font-bold shadow-md border border-amber-300"
                  : "btn-secondary hover:border-amber-400"
              }`}
            >
              <span>🪐</span> Sade Sati Phase
            </button>
            <button
              onClick={() => setActiveTool("houses")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "houses"
                  ? "bg-emerald-300 text-emerald-950 font-bold shadow-md border border-emerald-200"
                  : "btn-secondary hover:border-emerald-300"
              }`}
            >
              <span>🏛️</span> 12 Houses (Bhavas)
            </button>
          </>
        )}

        {activeCategory === "numerology" && (
          <>
            <button
              onClick={() => setActiveTool("numerology")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "numerology"
                  ? "bg-emerald-400 text-emerald-950 font-bold shadow-md border border-emerald-300"
                  : "btn-secondary hover:border-emerald-400"
              }`}
            >
              <span>🔢</span> Life Path Numerology
            </button>
            <button
              onClick={() => setActiveTool("brand")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "brand"
                  ? "bg-amber-400 text-black font-bold shadow-md border border-amber-300"
                  : "btn-secondary hover:border-amber-400"
              }`}
            >
              <span>📜</span> Brand & Name Numerology
            </button>
          </>
        )}

        {activeCategory === "guidance" && (
          <>
            <button
              onClick={() => setActiveTool("horoscope")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "horoscope"
                  ? "bg-cyan-400 text-black font-bold shadow-md border border-cyan-300"
                  : "btn-secondary hover:border-cyan-400"
              }`}
            >
              <span>🌟</span> Daily Horoscope
            </button>
            <button
              onClick={() => setActiveTool("tarot")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTool === "tarot"
                  ? "bg-rose-400 text-white font-bold shadow-md border border-rose-300"
                  : "btn-secondary hover:border-rose-400"
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
        {activeTool === "choghadia" && <ChoghadiaCalculator />}
        {activeTool === "sadesati" && <SadeSatiChecker />}
        {activeTool === "houses" && <KundaliHouseCalculator />}

        {activeTool === "numerology" && <NumerologyCalculator />}
        {activeTool === "brand" && <BrandNumerologyCalculator />}

        {activeTool === "horoscope" && <DailyHoroscope />}
        {activeTool === "tarot" && <TarotReader />}
      </div>
    </div>
  );
}
