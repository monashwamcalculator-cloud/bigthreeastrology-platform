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

// Per-sign reading text, written individually for each sign (traditional
// traits + a practical suggestion) so no two signs share result wording.
const SIGN_READINGS: Record<string, { profile: string; advice: string }> = {
  Aries: {
    profile: "In traditional astrology, Aries is the first fire sign — linked with courage, initiative and a habit of acting first and asking questions later.",
    advice: "Aries energy works best with a clear target. Pick one thing each morning, start it before you talk yourself out of it, and let the rest of the day follow that lead."
  },
  Taurus: {
    profile: "Traditionally, Taurus is a fixed earth sign, tied to patience, persistence and a deep appreciation of comfort, good food and the natural world.",
    advice: "Slow, steady routines suit you. Keep your mornings unhurried, spend a little time outdoors, and finish what you start before adding anything new."
  },
  Gemini: {
    profile: "Gemini is Mercury's mutable air sign in the traditional picture — curious, quick with words, and happiest when it is learning something new.",
    advice: "Your mind moves fast, so give it somewhere useful to go: write the idea down, make the call, ask the question. Short bursts of focus beat one long, restless stretch."
  },
  Cancer: {
    profile: "In traditional astrology, Cancer is the Moon's own sign, associated with home, memory and a protective instinct toward the people it loves.",
    advice: "You do your best work when home feels settled. Tidy one corner, check in on the people you love, and save your quietest hour for the task that matters most."
  },
  Leo: {
    profile: "Leo is ruled by the Sun in traditional astrology, and it shows: warmth, pride in one's work and a natural pull toward the spotlight.",
    advice: "Let yourself be seen today. Share the work you are proud of, dress like you mean it, and put your energy into making something rather than waiting for applause."
  },
  Virgo: {
    profile: "Traditionally, Virgo is Mercury's earth sign — precise, practical and quietly devoted to doing things properly and being useful.",
    advice: "Small fixes are your superpower. Make the list, clear the desk, sort the one drawer that has been bothering you — a tidy system frees up more energy than you'd expect."
  },
  Libra: {
    profile: "In the traditional scheme, Libra is Venus's cardinal air sign, linked with fairness, diplomacy and an eye for beauty and balance.",
    advice: "Balance comes from choosing, not pleasing. Decide the one thing that is fair to everyone — including you — and let the rest of the day arrange itself around it."
  },
  Scorpio: {
    profile: "Scorpio is a fixed water sign in traditional astrology — intense, private and determined, with a talent for seeing what others leave unsaid.",
    advice: "Keep your plans close and your focus closer. Work in private, dig into the one problem others avoid, and don't waste energy explaining yourself to people who aren't listening."
  },
  Sagittarius: {
    profile: "Traditionally, Sagittarius is Jupiter's fire sign: honest, restless and philosophical, always looking for the bigger picture or the next horizon.",
    advice: "You need room to move. Learn something new, take the longer route, plan the trip — a day with a horizon in it always treats you better than one spent boxed in."
  },
  Capricorn: {
    profile: "In traditional astrology, Capricorn is Saturn's cardinal earth sign — disciplined, ambitious and patient enough to build things that last.",
    advice: "Play the long game, as usual. One practical step toward the big goal, done properly, is worth more than a week of busywork — and you already know which step it is."
  },
  Aquarius: {
    profile: "Aquarius is a fixed air sign in the traditional picture, tied to independent thinking, strong principles and a soft spot for the underdog.",
    advice: "Follow the odd idea. Talk to someone outside your usual circle, try the unfamiliar tool or route, and let your independent streak solve the problem in its own way."
  },
  Pisces: {
    profile: "Traditionally, Pisces is Jupiter's mutable water sign — compassionate and imaginative, with feelings that run deep and quiet.",
    advice: "Protect your quiet. Music, water, a walk without your phone — whatever refills you, do it first, and let the practical things queue up behind it."
  }
};

export function GenericAstrologyCalculator({ tool }: GenericAstrologyCalculatorProps) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("1995-06-15");
  const [tobHour, setTobHour] = useState("10");
  const [tobMinute, setTobMinute] = useState("30");
  const [tobAmpm, setTobAmpm] = useState("AM");
  const [birthCity, setBirthCity] = useState("Mumbai, Maharashtra, India");
  const [selectedZodiac, setSelectedZodiac] = useState("Aries");

  const result = useMemo(() => {
    // Themed reflection reading keyed to the name profile and selected zodiac
    // sign — a traditional-interpretation guide, not an ephemeris calculation.
    const nameSeed = (name.length + selectedZodiac.length + tool.slug.length) % 12;
    const computedSign = ZODIAC_SIGNS[nameSeed] || selectedZodiac;
    const reading = SIGN_READINGS[computedSign] || SIGN_READINGS[selectedZodiac];

    return {
      sign: computedSign,
      element: ["Fire ♈", "Earth ♉", "Air ♊", "Water ♋"][nameSeed % 4],
      score: 82 + (nameSeed * 1.5),
      verdict: `Cosmic Resonance Reflection for ${tool.name}`,
      analysis: `This ${tool.name} reading is themed on ${computedSign} — the sign highlighted by your name profile and zodiac selection. ${reading.profile} Treat this reading as a reflection guide.`,
      advice: reading.advice
    };
  }, [name, selectedZodiac, tool]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden max-w-3xl mx-auto border-[rgba(8,116,90,0.35)] bg-white">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">{tool.badge}</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">{tool.name}</h2>
        <p className="text-[rgba(61,82,69,0.92)] text-xs sm:text-sm mt-1">{tool.shortDesc}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-xs font-semibold text-[#43584A] block mb-1">Full Name (Optional)</label>
          <input
            type="text"
            className="input-cosmic w-full text-sm font-semibold text-[#042F2A]"
            placeholder="e.g. Rahul Sharma"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#43584A] block mb-1">Zodiac Sign</label>
          <select
            value={selectedZodiac}
            onChange={(e) => setSelectedZodiac(e.target.value)}
            className="input-cosmic w-full text-sm font-bold text-[#075433]"
          >
            {ZODIAC_SIGNS.map((sign) => (
              <option key={sign} value={sign} className="bg-[#DFF5EC] text-[#042F2A]">
                {sign}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-[#43584A] block mb-1">Date of Birth</label>
          <input
            type="date"
            className="input-cosmic w-full text-sm font-semibold text-[#042F2A]"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-[#43584A] block mb-1">Birth City / Location</label>
          <CityAutocomplete
            value={birthCity}
            onChange={setBirthCity}
            placeholder="Type your birth city..."
          />
        </div>
      </div>

      <div className="glass-card-hover p-6 border-[rgba(8,116,90,0.35)] bg-white text-center">
        <div className="text-xs uppercase tracking-widest text-[#075433] font-semibold mb-1">
          {tool.name} Report
        </div>
        <div className="text-3xl font-display font-extrabold gradient-text-gold mb-1">
          {result.score}% Synergy
        </div>
        <p className="text-sm font-bold text-[#042F2A] mb-4">{result.verdict}</p>

        <div className="space-y-3 text-left border-t border-[rgba(8,116,90,0.22)] pt-4">
          <div>
            <span className="text-xs font-semibold text-[#075433]">Detailed Astrological Analysis:</span>
            <p className="text-xs sm:text-sm text-[rgba(46,61,51,0.92)] leading-relaxed mt-0.5">{result.analysis}</p>
          </div>
          <div className="p-3 rounded-xl bg-[#DFF5EC] border border-[rgba(8,116,90,0.35)]">
            <span className="text-xs font-semibold text-[#075433] uppercase tracking-wider block mb-0.5"> Recommended Action Step</span>
            <p className="text-xs text-[#042F2A] font-medium">{result.advice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
