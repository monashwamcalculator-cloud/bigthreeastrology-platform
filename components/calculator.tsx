"use client";

import { useMemo, useState } from "react";
import { CityAutocomplete, type PlaceInfo } from "@/components/city-autocomplete";
import { ascendant, moonLongitude, signOf, sunLongitude, toSidereal } from "@/lib/astro-engine";

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

// All 60 Minutes (00 through 59)
const ALL_MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

export function BigThreeCalculator() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  
  // 12-Hour AM/PM Time Picker State
  const [birthHour, setBirthHour] = useState("12");
  const [birthMinute, setBirthMinute] = useState("00");
  const [birthPeriod, setBirthPeriod] = useState<"AM" | "PM">("AM");

  const [birthLocation, setBirthLocation] = useState("");
  const [place, setPlace] = useState<PlaceInfo | null>(null);
  const [system, setSystem] = useState<"western" | "vedic">("western");

  // Calculate 24-hour hour from 12-hour + AM/PM
  const timeHour24 = useMemo(() => {
    let h = parseInt(birthHour, 10) || 12;
    if (birthPeriod === "PM" && h < 12) h += 12;
    if (birthPeriod === "AM" && h === 12) h = 0;
    return h;
  }, [birthHour, birthPeriod]);

  // Real astronomical calculation (lib/astro-engine.ts):
  // Sun/Moon ecliptic longitudes for the exact birth moment; the Rising
  // sign additionally needs the birthplace coordinates + timezone.
  const result = useMemo(() => {
    if (!birthDate) return null;

    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const minute = parseInt(birthMinute, 10) || 0;

    let utcDate: Date;
    if (place) {
      const utcMinutes = timeHour24 * 60 + minute - Math.round(place.utcOffset * 60);
      utcDate = new Date(Date.UTC(year, month - 1, day, 0, utcMinutes));
    } else {
      // No birthplace picked yet: evaluate at midday UTC so the Sun and
      // Moon signs are right for the civil date in most cases. Rising
      // needs the place, so it stays empty until a city is selected.
      utcDate = new Date(Date.UTC(year, month - 1, day, 12, 0));
    }

    const conv = (lon: number) => (system === "vedic" ? toSidereal(lon, utcDate) : lon);
    const sun = signOf(conv(sunLongitude(utcDate))).name;
    const moon = signOf(conv(moonLongitude(utcDate))).name;
    const rising = place ? signOf(conv(ascendant(utcDate, place.lat, place.lon))).name : null;

    return { sun, moon, rising };
  }, [birthDate, birthMinute, timeHour24, system, place]);

  const handleShare = async () => {
    if (!result) return;
    const locationText = birthLocation ? `  ${birthLocation}` : "";
    const risingText = result.rising ? `${result.rising} ${ZODIAC_DATA[result.rising].emoji}` : "(select birth city)";
    const text = ` My ${system === "vedic" ? "Vedic (Indian)" : "Western"} Big Three Astrology Snapshot ${locationText}\n Sun: ${result.sun} ${ZODIAC_DATA[result.sun].emoji}\n Moon: ${result.moon} ${ZODIAC_DATA[result.moon].emoji}\n Rising: ${risingText}\n\nDiscover yours globally at BIGThreeAstrology!`;
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
                ? "bg-[#2e7d4f] text-white font-bold shadow-lg border border-[#2e7d4f]"
                : "bg-white text-[#33463a] border border-[#dee6da] hover:bg-[#eaf1e6]"
            }`}
          >
             Western (Tropical)
          </button>
          <button
            onClick={() => setSystem("vedic")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all ${
              system === "vedic"
                ? "bg-[#2e7d4f] text-white font-bold shadow-lg border border-[#2e7d4f]"
                : "bg-white text-[#33463a] border border-[#dee6da] hover:bg-[#eaf1e6]"
            }`}
          >
             Vedic / Indian (Sidereal)
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

              {/* Minute Dropdown (All 60 Minutes 00-59) */}
              <select
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
                className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
              >
                {ALL_MINUTES.map((m) => (
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
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth City (Auto-Suggest )</label>
            <CityAutocomplete value={birthLocation} onChange={setBirthLocation} onPlaceSelect={setPlace} placeholder="Type e.g., Mumbai, NY, London" />
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
                if (!placement.sign) {
                  return (
                    <div key={idx} className={`glass-card-hover p-5 flex flex-col items-center text-center animate-slide-up ${placement.delay}`}>
                      <div className="text-sm text-emerald-200 uppercase tracking-widest font-semibold mb-1">{placement.label}</div>
                      <div className="text-xs text-emerald-300 mb-3">{placement.title}</div>
                      <div className="text-5xl mb-3 drop-shadow-md">♄</div>
                      <div className="text-xl font-display font-bold text-white mb-2">Needs Birth City</div>
                      <p className="text-sm text-emerald-200 leading-relaxed italic">
                        "Pick your birth city from the suggestions above — the Rising sign is calculated from its coordinates and your exact birth time."
                      </p>
                    </div>
                  );
                }
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
            <p className="text-[11px] text-emerald-200/80 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
              Calculated from the real positions of the Sun and Moon at your birth moment
              {place ? " and your birthplace coordinates" : ""} (astronomical approximation).
              A sign sitting within about a degree of a boundary can differ between calculators.
            </p>
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
