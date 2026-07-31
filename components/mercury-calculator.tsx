"use client";

import { useMemo, useState } from "react";

type MercuryData = {
  sign: string;
  emoji: string;
  element: string;
  mindStyle: string;
  speechStyle: string;
  learningGift: string;
};

const MERCURY_DATABASE: Record<string, MercuryData> = {
  Aries: {
    sign: "Mercury in Aries",
    emoji: "♈",
    element: "Fire",
    mindStyle: "Fast, decisive, and pioneering. You process ideas rapidly and cut straight to the core.",
    speechStyle: "Direct, spirited, and outspoken. You express your thoughts without hesitation.",
    learningGift: "Quick comprehension and fearless problem-solving under pressure."
  },
  Taurus: {
    sign: "Mercury in Taurus",
    emoji: "♉",
    element: "Earth",
    mindStyle: "Methodical, deliberate, and practical. You digest information thoroughly before deciding.",
    speechStyle: "Calm, measured, and pleasant. Your words carry weight and common sense.",
    learningGift: "Exceptional memory retention and realistic business implementation."
  },
  Gemini: {
    sign: "Mercury in Gemini",
    emoji: "♊",
    element: "Air",
    mindStyle: "Brilliant, multi-threaded, and curious. Mercury is home here, creating mental agility.",
    speechStyle: "Witty, expressive, and adaptable. You effortlessly connect diverse ideas.",
    learningGift: "Speed-reading, multilingual aptitude, and rapid networking."
  },
  Cancer: {
    sign: "Mercury in Cancer",
    emoji: "♋",
    element: "Water",
    mindStyle: "Intuitive, empathetic, and memory-rich. You think through feelings and gut instinct.",
    speechStyle: "Warm, supportive, and protective. You listen with genuine emotional care.",
    learningGift: "Photographic emotional memory and intuitive storytelling."
  },
  Leo: {
    sign: "Mercury in Leo",
    emoji: "♌",
    element: "Fire",
    mindStyle: "Creative, dignified, and strategic. You view ideas through a lens of grand vision.",
    speechStyle: "Persuasive, authoritative, and theatrical. You speak with magnetic presence.",
    learningGift: "Public speaking charisma, creative writing, and executive messaging."
  },
  Virgo: {
    sign: "Mercury in Virgo",
    emoji: "♍",
    element: "Earth",
    mindStyle: "Exalted perfectionist mind. You analyze patterns and organize data flawlessly.",
    speechStyle: "Clear, precise, and articulate. You eliminate ambiguity with facts.",
    learningGift: "Data analysis, coding precision, editing, and strategic organization."
  },
  Libra: {
    sign: "Mercury in Libra",
    emoji: "♎",
    element: "Air",
    mindStyle: "Balanced, diplomatic, and aesthetic. You weigh all sides of an issue fairly.",
    speechStyle: "Polite, harmonious, and tactful. You resolve conflicts with charm.",
    learningGift: "Mediation, legal reasoning, and aesthetic design balance."
  },
  Scorpio: {
    sign: "Mercury in Scorpio",
    emoji: "♏",
    element: "Water",
    mindStyle: "Investigative, intense, and penetrating. You uncover hidden truths beneath the surface.",
    speechStyle: "Strategic, quiet, and powerful. You say only what is necessary.",
    learningGift: "Psychological research, investigative analysis, and secret-keeping."
  },
  Sagittarius: {
    sign: "Mercury in Sagittarius",
    emoji: "♐",
    element: "Fire",
    mindStyle: "Philosophical, big-picture, and optimistic. You seek overarching truths.",
    speechStyle: "Enthusiastic, humorous, and candid. You share big ideas freely.",
    learningGift: "Higher education, publishing, philosophy, and cultural synthesis."
  },
  Capricorn: {
    sign: "Mercury in Capricorn",
    emoji: "♑",
    element: "Earth",
    mindStyle: "Structured, pragmatic, and goal-oriented. You plan with disciplined clarity.",
    speechStyle: "Professional, concise, and commanding. You respect facts and results.",
    learningGift: "Corporate strategy, financial planning, and long-term organization."
  },
  Aquarius: {
    sign: "Mercury in Aquarius",
    emoji: "♒",
    element: "Air",
    mindStyle: "Visionary, objective, and innovative. You think decades ahead of your time.",
    speechStyle: "Original, progressive, and clear. You challenge outdated norms.",
    learningGift: "Technological innovation, scientific research, and humanitarian logic."
  },
  Pisces: {
    sign: "Mercury in Pisces",
    emoji: "♓",
    element: "Water",
    mindStyle: "Imaginative, artistic, and telepathic. You absorb information through osmosis and dreams.",
    speechStyle: "Poetic, gentle, and metaphorical. You communicate feeling beyond words.",
    learningGift: "Artistic creation, spiritual insight, and compassionate healing."
  }
};

const SIGNS = Object.keys(MERCURY_DATABASE);

export function MercuryCalculator() {
  const [birthDate, setBirthDate] = useState("");

  const mercuryInfo = useMemo(() => {
    if (!birthDate) return MERCURY_DATABASE["Gemini"];
    const parts = birthDate.split("-");
    const month = parseInt(parts[1], 10) || 1;
    const day = parseInt(parts[2], 10) || 1;
    const index = (day * 2 + month) % 12;
    return MERCURY_DATABASE[SIGNS[index]] || MERCURY_DATABASE["Gemini"];
  }, [birthDate]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">☿️ Mercury Sign (Budh) Calculator</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Discover Your Mind & Communication Style</h2>
        <p className="text-cosmic-200 text-sm mt-1">
          Mercury governs how you think, process information, speak, negotiate, and solve problems.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Select Your Birth Date</label>
        <input
          type="date"
          className="input-cosmic"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>

      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-accent-gold/40 animate-slide-up bg-black/40">
        <div className="flex items-center justify-between border-b border-cosmic-700/40 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Your Intellectual Mindset</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1 flex items-center gap-2">
              <span>{mercuryInfo.emoji}</span> {mercuryInfo.sign}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-cosmic-300 font-medium">Element</span>
            <div className="text-sm font-display font-bold text-accent-cyan">{mercuryInfo.element}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-accent-cyan flex items-center gap-2 mb-1">
              <span>🧠</span> Thinking & Mental Style
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{mercuryInfo.mindStyle}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-gold flex items-center gap-2 mb-1">
              <span>🗣️</span> Speech & Communication
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{mercuryInfo.speechStyle}</p>
          </div>

          <div className="p-4 rounded-xl bg-cosmic-900/80 border border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-emerald mb-1">
              💡 Core Intellectual Superpower
            </h4>
            <p className="text-sm text-white font-medium">{mercuryInfo.learningGift}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
