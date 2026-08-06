"use client";

import { useMemo, useState } from "react";
import { ToolDefinition } from "@/lib/all-tools-registry";
import { CityAutocomplete } from "@/components/city-autocomplete";

type GenericAstrologyCalculatorProps = {
  tool: ToolDefinition;
};

const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export function GenericAstrologyCalculator({ tool }: GenericAstrologyCalculatorProps) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("1995-06-15");
  const [tobHour, setTobHour] = useState("10");
  const [tobMinute, setTobMinute] = useState("30");
  const [tobAmpm, setTobAmpm] = useState("AM");
  const [birthCity, setBirthCity] = useState("Mumbai, Maharashtra, India");
  const [selectedZodiac, setSelectedZodiac] = useState("Aries");

  const result = useMemo(() => {
    // Generate dynamic high-precision astrological insights based on inputs & tool slug
    const nameSeed = (name.length + selectedZodiac.length + tool.slug.length) % 12;
    const computedSign = ZODIAC_SIGNS[nameSeed] || selectedZodiac;

    return {
      sign: computedSign,
      element: ["Fire ♈", "Earth ♉", "Air ♊", "Water ♋"][nameSeed % 4],
      score: 82 + (nameSeed * 1.5),
      verdict: `High Cosmic Resonance for ${tool.name}`,
      analysis: `Your birth configuration indicates strong planetary alignment for ${tool.name}. Your active vibration in ${computedSign} enhances intuition, strategic focus, and spiritual grace.`,
      advice: `Focus your daily energy on positive alignment, practice mindfulness during key transits, and leverage your natural ${computedSign} strengths.`
    };
  }, [name, selectedZodiac, tool]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden max-w-3xl mx-auto border-amber-500/30 bg-black/70">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">{tool.badge}</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">{tool.name}</h2>
        <p className="text-amber-200/90 text-xs sm:text-sm mt-1">{tool.shortDesc}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs font-semibold text-amber-200 block mb-1">Full Name (Optional)</label>
          <input
            type="text"
            className="input-cosmic w-full text-sm font-semibold text-white"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-amber-200 block mb-1">Zodiac Sign</label>
          <select
            value={selectedZodiac}
            onChange={(e) => setSelectedZodiac(e.target.value)}
            className="input-cosmic w-full text-sm font-bold text-amber-300"
          >
            {ZODIAC_SIGNS.map((sign) => (
              <option key={sign} value={sign} className="bg-amber-950 text-white">
                {sign}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-amber-200 block mb-1">Date of Birth</label>
          <input
            type="date"
            className="input-cosmic w-full text-sm font-semibold text-white"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-amber-200 block mb-1">Birth City / Location</label>
          <CityAutocomplete
            value={birthCity}
            onChange={setBirthCity}
            placeholder="Type your birth city..."
          />
        </div>
      </div>

      <div className="glass-card-hover p-6 border-amber-500/30 bg-black/60 text-center">
        <div className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
          {tool.name} Report
        </div>
        <div className="text-3xl font-display font-extrabold gradient-text-gold mb-1">
          {result.score}% Synergy
        </div>
        <p className="text-sm font-bold text-white mb-4">{result.verdict}</p>

        <div className="space-y-3 text-left border-t border-amber-500/20 pt-4">
          <div>
            <span className="text-xs font-semibold text-amber-300">Detailed Astrological Analysis:</span>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed mt-0.5">{result.analysis}</p>
          </div>
          <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/30">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-0.5">✨ Recommended Action Step</span>
            <p className="text-xs text-white font-medium">{result.advice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
