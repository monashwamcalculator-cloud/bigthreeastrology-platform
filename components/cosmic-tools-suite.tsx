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
import { SpousePredictor } from "@/components/spouse-predictor";
import { DashaCalculator } from "@/components/dasha-calculator";
import { NorthNodeCalculator } from "@/components/north-node-calculator";
import { AngelNumberCalculator } from "@/components/angel-number-calculator";
import { SoulmateInitialsCalculator } from "@/components/soulmate-initials";
import { LifePathCompatibilityCalculator } from "@/components/life-path-compatibility";
import { SaturnReturnCalculator } from "@/components/saturn-return-calculator";
import { RisingSignCalculator } from "@/components/rising-sign-calculator";

type CategoryKey = "planetary" | "vedic" | "numerology" | "guidance";
type ToolKey = 
  | "bigthree" | "spouse" | "initials" | "rising" | "venus" | "mercury" | "chiron" | "nakshatra"
  | "kundali" | "dasha" | "choghadia" | "sadesati" | "saturnreturn" | "houses" | "love" | "gemstone" | "rahu"
  | "numerology" | "lifepathcomp" | "brand" | "angel"
  | "horoscope" | "tarot" | "northnode";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("planetary");
  const [activeTool, setActiveTool] = useState<ToolKey>("bigthree");

  const categories = [
    { key: "planetary", name: "🌟 Birth Chart & Signs", icon: "🌌" },
    { key: "vedic", name: "🕉️ Vedic Kundali & Timing", icon: "🕉️" },
    { key: "numerology", name: "🔢 Numerology & Brand Math", icon: "📜" },
    { key: "guidance", name: "🔮 Tarot & Soul Purpose", icon: "🎴" }
  ];

  return (
    <div className="w-full space-y-6">
      {/* Group-Wise Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 p-2 rounded-2xl bg-black/60 border border-sky-500/30 max-w-4xl mx-auto">
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
                ? "bg-gradient-to-r from-sky-500 via-cyan-600 to-sky-600 text-sky-950 shadow-lg shadow-sky-900/50 border border-sky-300"
                : "text-sky-200 hover:text-white hover:bg-sky-500/20"
            }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Tools Sub-Selector Buttons */}
      <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto py-1">
        {activeCategory === "planetary" && (
          <>
            <button
              onClick={() => setActiveTool("bigthree")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "bigthree" ? "bg-sky-400 text-sky-950 font-bold border border-sky-300" : "btn-secondary"
              }`}
            >
              🔮 Big Three
            </button>
            <button
              onClick={() => setActiveTool("spouse")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "spouse" ? "bg-amber-400 text-black font-bold border border-amber-300" : "btn-secondary"
              }`}
            >
              💖 Spouse Predictor
            </button>
            <button
              onClick={() => setActiveTool("initials")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "initials" ? "bg-amber-300 text-black font-bold border border-amber-200" : "btn-secondary"
              }`}
            >
              🔤 Soulmate Initials
            </button>
            <button
              onClick={() => setActiveTool("rising")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "rising" ? "bg-sky-300 text-sky-950 font-bold border border-sky-200" : "btn-secondary"
              }`}
            >
              🌅 Rising Sign Reader
            </button>
            <button
              onClick={() => setActiveTool("venus")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "venus" ? "bg-amber-300 text-black font-bold border border-amber-200" : "btn-secondary"
              }`}
            >
              ♀️ Venus Sign
            </button>
            <button
              onClick={() => setActiveTool("mercury")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "mercury" ? "bg-cyan-400 text-black font-bold border border-cyan-300" : "btn-secondary"
              }`}
            >
              ☿️ Mercury Sign
            </button>
            <button
              onClick={() => setActiveTool("chiron")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "chiron" ? "bg-teal-300 text-teal-950 font-bold border border-teal-200" : "btn-secondary"
              }`}
            >
              ⚕️ Chiron Healing
            </button>
            <button
              onClick={() => setActiveTool("nakshatra")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "nakshatra" ? "bg-sky-400 text-sky-950 font-bold border border-sky-300" : "btn-secondary"
              }`}
            >
              ⭐ Birth Star Nakshatra
            </button>
          </>
        )}

        {activeCategory === "vedic" && (
          <>
            <button
              onClick={() => setActiveTool("kundali")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "kundali" ? "bg-amber-400 text-black font-bold border border-amber-300" : "btn-secondary"
              }`}
            >
              🕉️ Kundali Milan (36 Gunas)
            </button>
            <button
              onClick={() => setActiveTool("dasha")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "dasha" ? "bg-sky-400 text-sky-950 font-bold border border-sky-300" : "btn-secondary"
              }`}
            >
              ⏳ Vimshottari Dasha
            </button>
            <button
              onClick={() => setActiveTool("choghadia")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "choghadia" ? "bg-cyan-400 text-black font-bold border border-cyan-300" : "btn-secondary"
              }`}
            >
              🔮 Choghadia Muhurat
            </button>
            <button
              onClick={() => setActiveTool("sadesati")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "sadesati" ? "bg-amber-300 text-black font-bold border border-amber-200" : "btn-secondary"
              }`}
            >
              🪐 Sade Sati Phase
            </button>
            <button
              onClick={() => setActiveTool("saturnreturn")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "saturnreturn" ? "bg-amber-400 text-black font-bold border border-amber-300" : "btn-secondary"
              }`}
            >
              🪐 Saturn Return Age
            </button>
            <button
              onClick={() => setActiveTool("houses")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "houses" ? "bg-sky-300 text-sky-950 font-bold border border-sky-200" : "btn-secondary"
              }`}
            >
              🏛️ 12 Kundali Houses
            </button>
            <button
              onClick={() => setActiveTool("love")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "love" ? "bg-rose-400 text-black font-bold border border-rose-300" : "btn-secondary"
              }`}
            >
              💖 Zodiac Love Match
            </button>
            <button
              onClick={() => setActiveTool("gemstone")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "gemstone" ? "bg-emerald-400 text-emerald-950 font-bold border border-emerald-300" : "btn-secondary"
              }`}
            >
              💎 Gemstone Finder
            </button>
            <button
              onClick={() => setActiveTool("rahu")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "rahu" ? "bg-cyan-400 text-black font-bold border border-cyan-300" : "btn-secondary"
              }`}
            >
              🕒 Rahu Kaal Tracker
            </button>
          </>
        )}

        {activeCategory === "numerology" && (
          <>
            <button
              onClick={() => setActiveTool("numerology")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "numerology" ? "bg-sky-400 text-sky-950 font-bold border border-sky-300" : "btn-secondary"
              }`}
            >
              🔢 Life Path Numerology
            </button>
            <button
              onClick={() => setActiveTool("lifepathcomp")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "lifepathcomp" ? "bg-amber-400 text-black font-bold border border-amber-300" : "btn-secondary"
              }`}
            >
              🔢 Life Path Matcher
            </button>
            <button
              onClick={() => setActiveTool("brand")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "brand" ? "bg-amber-300 text-black font-bold border border-amber-200" : "btn-secondary"
              }`}
            >
              📜 Brand & Name Math
            </button>
            <button
              onClick={() => setActiveTool("angel")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "angel" ? "bg-cyan-400 text-black font-bold border border-cyan-300" : "btn-secondary"
              }`}
            >
              ⚡ Angel Numbers (111, 444, 777)
            </button>
          </>
        )}

        {activeCategory === "guidance" && (
          <>
            <button
              onClick={() => setActiveTool("horoscope")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "horoscope" ? "bg-cyan-400 text-black font-bold border border-cyan-300" : "btn-secondary"
              }`}
            >
              🌟 Daily Horoscope
            </button>
            <button
              onClick={() => setActiveTool("tarot")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "tarot" ? "bg-rose-400 text-white font-bold border border-rose-300" : "btn-secondary"
              }`}
            >
              🎴 3-Card Tarot Reader
            </button>
            <button
              onClick={() => setActiveTool("northnode")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTool === "northnode" ? "bg-sky-400 text-sky-950 font-bold border border-sky-300" : "btn-secondary"
              }`}
            >
              🚀 North Node Purpose
            </button>
          </>
        )}
      </div>

      {/* Render Active Tool */}
      <div className="transition-all duration-300">
        {activeTool === "bigthree" && <BigThreeCalculator />}
        {activeTool === "spouse" && <SpousePredictor />}
        {activeTool === "initials" && <SoulmateInitialsCalculator />}
        {activeTool === "rising" && <RisingSignCalculator />}
        {activeTool === "venus" && <VenusCalculator />}
        {activeTool === "mercury" && <MercuryCalculator />}
        {activeTool === "chiron" && <ChironCalculator />}
        {activeTool === "nakshatra" && <NakshatraFinder />}

        {activeTool === "kundali" && <KundaliMilanCalculator />}
        {activeTool === "dasha" && <DashaCalculator />}
        {activeTool === "choghadia" && <ChoghadiaCalculator />}
        {activeTool === "sadesati" && <SadeSatiChecker />}
        {activeTool === "saturnreturn" && <SaturnReturnCalculator />}
        {activeTool === "houses" && <KundaliHouseCalculator />}
        {activeTool === "love" && <LoveCompatibilityCalculator />}
        {activeTool === "gemstone" && <GemstoneFinder />}
        {activeTool === "rahu" && <RahuKaalTracker />}

        {activeTool === "numerology" && <NumerologyCalculator />}
        {activeTool === "lifepathcomp" && <LifePathCompatibilityCalculator />}
        {activeTool === "brand" && <BrandNumerologyCalculator />}
        {activeTool === "angel" && <AngelNumberCalculator />}

        {activeTool === "horoscope" && <DailyHoroscope />}
        {activeTool === "tarot" && <TarotReader />}
        {activeTool === "northnode" && <NorthNodeCalculator />}
      </div>
    </div>
  );
}
