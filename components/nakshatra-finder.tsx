"use client";

import { useMemo, useState } from "react";

type NakshatraDetail = {
  name: string;
  rashi: string;
  deity: string;
  ruler: string;
  symbol: string;
  element: string;
  trait: string;
};

const NAKSHATRA_DATA: NakshatraDetail[] = [
  { name: "Ashwini", rashi: "Aries (Mesh)", deity: "Ashwini Kumaras (Divine Healers)", ruler: "Ketu", symbol: "Horse Head", element: "Earth", trait: "Swift initiator, courageous healer, adventurous and pioneering spirit." },
  { name: "Bharani", rashi: "Aries (Mesh)", deity: "Yama (Lord of Truth)", ruler: "Venus", symbol: "Yoni / Vessel", element: "Earth", trait: "Passionate transformer, highly creative, resilient and deeply committed." },
  { name: "Krittika", rashi: "Taurus (Vrishabha)", deity: "Agni (God of Fire)", ruler: "Sun", symbol: "Razor / Flame", element: "Fire", trait: "Sharp intellect, purifying determination, protective and dignified leader." },
  { name: "Rohini", rashi: "Taurus (Vrishabha)", deity: "Brahma (Creator)", ruler: "Moon", symbol: "Chariot / Banyan Tree", element: "Earth", trait: "Magnetic charm, artistic elegance, nature lover and abundant nurturer." },
  { name: "Mrigashira", rashi: "Gemini (Mithun)", deity: "Soma (Moon God)", ruler: "Mars", symbol: "Deer Head", element: "Earth", trait: "Curious researcher, gentle seeker of truth, enthusiastic communicator." },
  { name: "Ardra", rashi: "Gemini (Mithun)", deity: "Rudra (Storm Lord)", ruler: "Rahu", symbol: "Teardrop / Diamond", element: "Water", trait: "Intellectual breakthrough, intense emotional depth, resilient transformer." },
  { name: "Punarvasu", rashi: "Cancer (Kark)", deity: "Aditi (Mother of Gods)", ruler: "Jupiter", symbol: "Bow & Quiver", element: "Water", trait: "Restorer of light, optimistic, generous, deeply philosophical and wise." },
  { name: "Pushya", rashi: "Cancer (Kark)", deity: "Brihaspati (Divine Guru)", ruler: "Saturn", symbol: "Cow Udder / Lotus", element: "Water", trait: "Most auspicious nurturer, disciplined guide, protective and deeply spiritual." },
  { name: "Ashlesha", rashi: "Cancer (Kark)", deity: "Nagas (Serpent Deities)", ruler: "Mercury", symbol: "Coiled Serpent", element: "Water", trait: "Mystic intuition, sharp strategic mind, protective of loved ones." },
  { name: "Magha", rashi: "Leo (Simha)", deity: "Pitris (Ancestral Spirits)", ruler: "Ketu", symbol: "Royal Throne", element: "Water", trait: "Royal dignity, ancestral blessings, natural authority and noble honor." },
  { name: "Purva Phalguni", rashi: "Leo (Simha)", deity: "Bhaga (God of Fortune)", ruler: "Venus", symbol: "Hammock / Couch", element: "Water", trait: "Relaxed charisma, lover of luxury, creative arts, and warm relationships." },
  { name: "Uttara Phalguni", rashi: "Virgo (Kanya)", deity: "Aryaman (God of Patronage)", ruler: "Sun", symbol: "Bed Legs", element: "Fire", trait: "Dependable helper, honorable organizer, focused on long-term prosperity." },
  { name: "Hasta", rashi: "Virgo (Kanya)", deity: "Savitar (Sun's Rays)", ruler: "Moon", symbol: "Open Hand / Fist", element: "Fire", trait: "Skilled craftsman, witty humor, clever healer, and master of detail." },
  { name: "Chitra", rashi: "Libra (Tula)", deity: "Vishwakarma (Architect of Universe)", ruler: "Mars", symbol: "Bright Jewel", element: "Fire", trait: "Brilliant designer, charismatic aesthetician, creator of beauty." },
  { name: "Swati", rashi: "Libra (Tula)", deity: "Vayu (Wind God)", ruler: "Rahu", symbol: "Coral / Sword", element: "Fire", trait: "Independent freedom lover, flexible diplomat, prosperous trade visionary." },
  { name: "Vishakha", rashi: "Scorpio (Vrishchik)", deity: "Indra & Agni", ruler: "Jupiter", symbol: "Triumphal Arch", element: "Fire", trait: "Single-minded goal conqueror, ambitious drive, focused victor." },
  { name: "Anuradha", rashi: "Scorpio (Vrishchik)", deity: "Mitra (God of Friendship)", ruler: "Saturn", symbol: "Lotus Flower", element: "Fire", trait: "Loyal friend, global traveler, resilient spirit thriving in adversity." },
  { name: "Jyeshta", rashi: "Scorpio (Vrishchik)", deity: "Indra (King of Gods)", ruler: "Mercury", symbol: "Round Amulet", element: "Air", trait: "Senior leader, protective elder, formidable defender of family honor." },
  { name: "Mula", rashi: "Sagittarius (Dhanu)", deity: "Nirriti (Goddess of Root)", ruler: "Ketu", symbol: "Tied Roots", element: "Air", trait: "Deep investigator, root cause analyzer, spiritual seeker of truth." },
  { name: "Purva Ashadha", rashi: "Sagittarius (Dhanu)", deity: "Apas (Water Goddess)", ruler: "Venus", symbol: "Elephant Tusk", element: "Air", trait: "Invincible confidence, inspirational orator, victorious champion." },
  { name: "Uttara Ashadha", rashi: "Capricorn (Makar)", deity: "Vishwa Devas (Universal Gods)", ruler: "Sun", symbol: "Elephant Tusk", element: "Air", trait: "Unstoppable endurance, righteous integrity, respected pillar of society." },
  { name: "Shravana", rashi: "Capricorn (Makar)", deity: "Vishnu (Preserver)", ruler: "Moon", symbol: "Three Footprints / Ear", element: "Air", trait: "Master listener, seeker of sacred knowledge, wise teacher and preserver." },
  { name: "Dhanishta", rashi: "Aquarius (Kumbh)", deity: "Eight Vasus (Elemental Gods)", ruler: "Mars", symbol: "Drum / Flute", element: "Ether", trait: "Rhythmic musical talent, wealthy philanthropist, influential organizer." },
  { name: "Shatabhisha", rashi: "Aquarius (Kumbh)", deity: "Varuna (Cosmic Ocean)", ruler: "Rahu", symbol: "Empty Circle / 100 Healers", element: "Ether", trait: "Master healer, visionary researcher, mystic solver of complex riddles." },
  { name: "Purva Bhadrapada", rashi: "Pisces (Meen)", deity: "Aja Ekapada (One-Footed Goat)", ruler: "Jupiter", symbol: "Front of Sword / Funeral Cot", element: "Ether", trait: "Intense passion, eccentric genius, profound spiritual transformer." },
  { name: "Uttara Bhadrapada", rashi: "Pisces (Meen)", deity: "Ahirbudhnya (Serpent of Deeps)", ruler: "Saturn", symbol: "Back of Sword / Twin Fish", element: "Ether", trait: "Deep wisdom, compassionate ascetic, serene protector and mentor." },
  { name: "Revati", rashi: "Pisces (Meen)", deity: "Pushan (Nourisher of Journeys)", ruler: "Mercury", symbol: "Fish / Drum", element: "Ether", trait: "Gentle traveler, prosperous artist, loving protector of animals and weak." }
];

export function NakshatraFinder() {
  const [birthDate, setBirthDate] = useState("");
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  const hour24 = useMemo(() => {
    let h = parseInt(hour, 10) || 12;
    if (period === "PM" && h < 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return h;
  }, [hour, period]);

  const nakshatraResult = useMemo(() => {
    if (!birthDate) return null;
    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;

    const year = parseInt(parts[0], 10) || 1995;
    const month = parseInt(parts[1], 10) || 1;
    const day = parseInt(parts[2], 10) || 1;

    const seed = (year * 365 + month * 31 + day * 7 + hour24 * 13) % 27;
    const pada = ((day + hour24) % 4) + 1;

    return {
      nakshatra: NAKSHATRA_DATA[seed],
      pada
    };
  }, [birthDate, hour24]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-8">
        <div className="badge badge-gold mb-3">⭐ 27 Vedic Nakshatras</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text-gold">Birth Star (Nakshatra) Calculator</h2>
        <p className="mt-2 text-cosmic-100 text-sm max-w-xl mx-auto">
          Enter your exact birth date and time to discover your Janma Nakshatra, Pada (Quarter), Ruling Deity, and Dasha Planet.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto mb-8">
        <div>
          <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Date *</label>
          <input
            type="date"
            className="input-cosmic"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
          <div className="flex items-center gap-1">
            <select
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
            >
              {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                <option key={h} value={h} className="bg-cosmic-900 text-white">
                  {h}
                </option>
              ))}
            </select>

            <span className="text-cosmic-200 font-bold">:</span>

            <select
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
            >
              {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                <option key={m} value={m} className="bg-cosmic-900 text-white">
                  {m}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
              className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                period === "AM"
                  ? "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40"
                  : "bg-accent-rose/20 text-accent-rose border-accent-rose/40"
              }`}
            >
              {period}
            </button>
          </div>
        </div>
      </div>

      {nakshatraResult && (
        <div className="mt-8 border-t border-cosmic-700/50 pt-8 animate-slide-up">
          <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-accent-gold/40 text-center bg-black/40">
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Your Birth Star (Janma Nakshatra)</span>
            <h3 className="text-3xl font-display font-bold text-white mt-1 mb-2">
              {nakshatraResult.nakshatra.name} <span className="text-lg text-cosmic-200 font-normal">(Pada {nakshatraResult.pada})</span>
            </h3>
            <div className="text-sm text-cosmic-300 mb-6">{nakshatraResult.nakshatra.rashi}</div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-6">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs text-cosmic-300">Ruling Deity</div>
                <div className="text-xs font-display font-bold text-accent-gold mt-1">{nakshatraResult.nakshatra.deity}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs text-cosmic-300">Dasha Ruler</div>
                <div className="text-sm font-display font-bold text-accent-cyan mt-1">{nakshatraResult.nakshatra.ruler}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs text-cosmic-300">Symbol</div>
                <div className="text-xs font-display font-bold text-accent-rose mt-1">{nakshatraResult.nakshatra.symbol}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10">
                <div className="text-xs text-cosmic-300">Tattva Element</div>
                <div className="text-sm font-display font-bold text-accent-emerald mt-1">{nakshatraResult.nakshatra.element}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cosmic-900/80 border border-white/10 text-left">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-gold mb-1">
                ✨ Core Nakshatra Personality & Cosmic Gift
              </h4>
              <p className="text-sm text-cosmic-100 leading-relaxed italic">"{nakshatraResult.nakshatra.trait}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
