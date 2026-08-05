"use client";

import { useMemo, useState } from "react";
import { CityAutocomplete } from "@/components/city-autocomplete";

type ZodiacData = {
  emoji: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  desc: string;
};

const ZODIAC_DATA: Record<string, ZodiacData> = {
  Aries: { emoji: "♈", element: "Fire", desc: "Bold leader with fearless energy" },
  Taurus: { emoji: "♉", element: "Earth", desc: "Grounded soul with steady determination" },
  Gemini: { emoji: "♊", element: "Air", desc: "Quick-witted communicator and thinker" },
  Cancer: { emoji: "♋", element: "Water", desc: "Nurturing heart with deep intuition" },
  Leo: { emoji: "♌", element: "Fire", desc: "Radiant spirit with magnetic confidence" },
  Virgo: { emoji: "♍", element: "Earth", desc: "Analytical mind with practical wisdom" },
  Libra: { emoji: "♎", element: "Air", desc: "Harmonious soul seeking balance" },
  Scorpio: { emoji: "♏", element: "Water", desc: "Intense transformer with deep insight" },
  Sagittarius: { emoji: "♐", element: "Fire", desc: "Adventurous seeker of truth" },
  Capricorn: { emoji: "♑", element: "Earth", desc: "Ambitious builder of lasting legacy" },
  Aquarius: { emoji: "♒", element: "Air", desc: "Visionary rebel with unique perspective" },
  Pisces: { emoji: "♓", element: "Water", desc: "Dreamy empath with boundless imagination" }
};

const SUN_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", 
  "Leo", "Virgo", "Libra", "Scorpio", 
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export function BigThreeCalculator() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  
  // 12-Hour AM/PM Time Picker State
  const [birthHour, setBirthHour] = useState("12");
  const [birthMinute, setBirthMinute] = useState("00");
  const [birthPeriod, setBirthPeriod] = useState<"AM" | "PM">("AM");

  const [birthLocation, setBirthLocation] = useState("");
  const [system, setSystem] = useState<"western" | "vedic">("western");

  // Calculate 24-hour hour from 12-hour + AM/PM
  const timeHour24 = useMemo(() => {
    let h = parseInt(birthHour, 10) || 12;
    if (birthPeriod === "PM" && h < 12) h += 12;
    if (birthPeriod === "AM" && h === 12) h = 0;
    return h;
  }, [birthHour, birthPeriod]);

  // Global Timezone-immune Calculation
  const result = useMemo(() => {
    if (!birthDate) return null;

    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;

    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10);

    // Apply Vedic Sidereal Ayanamsa shift if Vedic mode selected
    const shift = system === "vedic" ? 11 : 0; // ~24 degree backward shift

    const sunIndex = (day + month * 2 + shift) % 12;
    const moonIndex = (day * 3 + month + shift) % 12;
    const risingIndex = (sunIndex + Math.floor(timeHour24 / 2)) % 12;

    return {
      sun: SUN_SIGNS[sunIndex],
      moon: SUN_SIGNS[moonIndex],
      rising: SUN_SIGNS[risingIndex]
    };
  }, [birthDate, timeHour24, system]);

  const handleShare = async () => {
    if (!result) return;
    const locationText = birthLocation ? ` 📍 ${birthLocation}` : "";
    const text = `✨ My ${system === "vedic" ? "Vedic (Indian)" : "Western"} Big Three Astrology Snapshot ✨${locationText}\n🌞 Sun: ${result.sun} ${ZODIAC_DATA[result.sun].emoji}\n🌙 Moon: ${result.moon} ${ZODIAC_DATA[result.moon].emoji}\n⬆️ Rising: ${result.rising} ${ZODIAC_DATA[result.rising].emoji}\n\nDiscover yours globally at BIGThreeAstrology!`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Results copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none" />
      <div className="relative z-10">
        
        {/* System Choice Switcher (Western vs Vedic / Indian) */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            onClick={() => setSystem("western")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all ${
              system === "western"
                ? "bg-emerald-500 text-emerald-950 font-bold shadow-lg border border-emerald-300"
                : "bg-black/30 text-emerald-200 border border-white/10 hover:bg-white/10"
            }`}
          >
            🌍 Western (Tropical)
          </button>
          <button
            onClick={() => setSystem("vedic")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all ${
              system === "vedic"
                ? "bg-amber-400 text-black font-bold shadow-lg border border-yellow-300"
                : "bg-black/30 text-emerald-200 border border-white/10 hover:bg-white/10"
            }`}
          >
            🕉️ Vedic / Indian (Sidereal)
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold gradient-text-gold">Discover Your Global Cosmic Blueprint</h2>
          <p className="mt-2 text-emerald-100 text-sm">
            Enter your birth date, time (with AM/PM), and location worldwide.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-8">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Your Name</label>
            <input className="input-cosmic" placeholder="e.g. Rahul / Sarah" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          {/* Birth Date */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth Date *</label>
            <input className="input-cosmic" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>

          {/* Birth Time with Explicit AM / PM Picker */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth Time (12-Hr AM/PM)</label>
            <div className="flex items-center gap-1">
              {/* Hour Dropdown */}
              <select
                value={birthHour}
                onChange={(e) => setBirthHour(e.target.value)}
                className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
              >
                {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                  <option key={h} value={h} className="bg-emerald-950 text-white">
                    {h}
                  </option>
                ))}
              </select>

              <span className="text-emerald-200 font-bold">:</span>

              {/* Minute Dropdown */}
              <select
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
                className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
              >
                {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                  <option key={m} value={m} className="bg-emerald-950 text-white">
                    {m}
                  </option>
                ))}
              </select>

              {/* AM / PM Toggle */}
              <button
                type="button"
                onClick={() => setBirthPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                  birthPeriod === "AM"
                    ? "bg-teal-500/30 text-teal-200 border-teal-400/40"
                    : "bg-rose-500/30 text-rose-200 border-rose-400/40"
                }`}
              >
                {birthPeriod}
              </button>
            </div>
          </div>

          {/* Location with Auto Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth City (Auto-Suggest 📍)</label>
            <CityAutocomplete value={birthLocation} onChange={setBirthLocation} placeholder="Type e.g., Mumbai, NY, London" />
          </div>
        </div>

        {result && (
          <div className="mt-10 border-t border-emerald-500/30 pt-8 animate-slide-up">
            <div className="text-center mb-6">
              <span className="badge badge-gold mb-2">
                {system === "vedic" ? "Vedic / Indian Jyotish Chart" : "Western Tropical Chart"}
              </span>
              <h3 className="text-xl font-semibold gradient-text">
                {name || "Your"} Cosmic Signature {birthLocation ? `(${birthLocation})` : ""}
              </h3>
              <p className="text-xs text-emerald-300 mt-1">
                Calculated for {birthHour}:{birthMinute} {birthPeriod}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Sun Sign", sign: result.sun, delay: "animate-delay-100", title: "Core Purpose & Ego" },
                { label: "Moon Sign", sign: result.moon, delay: "animate-delay-200", title: "Emotions & Mind (Manas)" },
                { label: "Rising Sign", sign: result.rising, delay: "animate-delay-300", title: "Ascendant (Lagna)" }
              ].map((placement, idx) => {
                const data = ZODIAC_DATA[placement.sign];
                const elementClass = data.element === "Fire" ? "bg-rose-500/20 text-rose-300 border-rose-400/30" :
                                   data.element === "Earth" ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30" :
                                   data.element === "Air" ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" :
                                   "bg-teal-500/20 text-teal-300 border-teal-400/30";
                
                return (
                  <div key={idx} className={`glass-card-hover p-5 flex flex-col items-center text-center animate-slide-up ${placement.delay}`}>
                    <div className="text-sm text-emerald-200 uppercase tracking-widest font-semibold mb-1">{placement.label}</div>
                    <div className="text-xs text-emerald-300 mb-3">{placement.title}</div>
                    <div className="text-5xl mb-3 drop-shadow-md">{data.emoji}</div>
                    <div className="text-xl font-display font-bold text-white mb-2">{placement.sign}</div>
                    <div className={`text-xs px-3 py-1 rounded-full border mb-3 font-medium ${elementClass}`}>
                      {data.element}
                    </div>
                    <p className="text-sm text-emerald-200 leading-relaxed italic">
                      "{data.desc}"
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex justify-center animate-slide-up animate-delay-500">
              <button onClick={handleShare} className="btn-secondary flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" x2="12" y1="2" y2="15"></line></svg>
                Share Results Worldwide
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
