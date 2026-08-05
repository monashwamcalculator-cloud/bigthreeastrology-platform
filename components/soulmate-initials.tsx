"use client";

import { useMemo, useState } from "react";

type InitialResult = {
  initials: string[];
  connectionType: string;
  zodiacElement: string;
  advice: string;
};

const ZODIAC_INITIALS: Record<string, InitialResult> = {
  Aries: { initials: ["A", "L", "E", "S"], connectionType: "Passionate & Instant Spark", zodiacElement: "Fire ♈", advice: "Expect an energetic encounter during outdoor events or competitive activities." },
  Taurus: { initials: ["B", "V", "U", "K"], connectionType: "Steady, Grounded & Enduring", zodiacElement: "Earth ♉", advice: "Your paths will cross in peaceful settings, art venues, or culinary experiences." },
  Gemini: { initials: ["K", "C", "G", "M"], connectionType: "Intellectual & Playful Conversation", zodiacElement: "Air ♊", advice: "Look for someone who captivates your mind during digital networking or workshops." },
  Cancer: { initials: ["D", "H", "N", "P"], connectionType: "Deeply Nurturing & Intuitive", zodiacElement: "Water ♋", advice: "Connection will blossom near water, intimate gatherings, or mutual family friends." },
  Leo: { initials: ["M", "T", "R", "J"], connectionType: "Magnetic, Proud & Generous", zodiacElement: "Fire ♌", advice: "They will stand out in social celebrations, concerts, or leadership spaces." },
  Virgo: { initials: ["P", "T", "N", "S"], connectionType: "Devoted, Attentive & Practical", zodiacElement: "Earth ♍", advice: "Bonding will start through shared professional projects or health & fitness hubs." },
  Libra: { initials: ["R", "T", "K", "A"], connectionType: "Harmonious, Romantic & Elegant", zodiacElement: "Air ♎", advice: "You will meet through mutual friends, formal galas, or aesthetic environments." },
  Scorpio: { initials: ["N", "Y", "D", "T"], connectionType: "Intense, Mysterious & Deeply Bound", zodiacElement: "Water ♏", advice: "Expect a transformative encounter that feels like destiny from the very first eye contact." },
  Sagittarius: { initials: ["B", "D", "P", "F"], connectionType: "Adventurous & Lifelong Travel Partner", zodiacElement: "Fire ♐", advice: "Likely to cross paths while traveling, attending higher education, or exploring new cultures." },
  Capricorn: { initials: ["K", "J", "B", "M"], connectionType: "Ambitious, Loyal & Structure-Building", zodiacElement: "Earth ♑", advice: "Found in professional networks, career conferences, or long-term investment circles." },
  Aquarius: { initials: ["G", "S", "S", "V"], connectionType: "Unconventional, Visionary & Best Friends", zodiacElement: "Air ♒", advice: "Connection forms through community groups, tech spaces, or humanitarian causes." },
  Pisces: { initials: ["D", "C", "Z", "T"], connectionType: "Soulful, Dreamy & Telepathic", zodiacElement: "Water ♓", advice: "Expect a deep spiritual connection introduced through artistic or music events." }
};

const ZODIAC_LIST = Object.keys(ZODIAC_INITIALS);

export function SoulmateInitialsCalculator() {
  const [userSign, setUserSign] = useState("Aries");

  const result = useMemo(() => ZODIAC_INITIALS[userSign] || ZODIAC_INITIALS["Aries"], [userSign]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">💖 Viral Soulmate Decoder</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">Soulmate Name & Initial Predictor</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Select your Sun sign to reveal the most compatible starting letters and meeting energy for your soulmate.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {ZODIAC_LIST.map((sign) => (
          <button
            key={sign}
            onClick={() => setUserSign(sign)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              userSign === sign
                ? "bg-amber-400 text-black font-bold shadow-md border border-amber-300"
                : "bg-black/40 text-sky-200 border border-sky-500/20 hover:bg-sky-500/20"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50 text-center">
        <div className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-1">Soulmate Signature for {userSign}</div>
        <h3 className="text-xl font-display font-bold text-white mb-3">Probable Soulmate First Initials</h3>

        <div className="flex justify-center gap-3 my-4">
          {result.initials.map((letter, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-black font-display font-extrabold text-2xl flex items-center justify-center shadow-lg border border-amber-300 animate-bounce"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="space-y-3 text-left border-t border-sky-500/20 pt-4 mt-4">
          <div>
            <span className="text-xs font-semibold text-amber-300">Connection Synergy:</span>
            <p className="text-sm font-semibold text-white mt-0.5">{result.connectionType} ({result.zodiacElement})</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-300">Cosmic Advice:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.advice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
