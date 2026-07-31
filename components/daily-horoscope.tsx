"use client";

import { useMemo, useState } from "react";

type SignHoroscope = {
  vibe: string;
  energy: number;
  luckyNumber: number;
  luckyColor: string;
  luckyTime: string;
  loveAdvice: string;
  careerAdvice: string;
};

const HOROSCOPE_DATABASE: Record<string, SignHoroscope> = {
  Aries: {
    vibe: "Dynamic Breakthrough & High Drive",
    energy: 94,
    luckyNumber: 9,
    luckyColor: "Crimson Red",
    luckyTime: "10:30 AM",
    loveAdvice: "Your direct honesty inspires deep trust today. Express your feelings without reservation.",
    careerAdvice: "Take initiative on a project you have been hesitating to launch. Leadership will be recognized."
  },
  Taurus: {
    vibe: "Grounded Abundance & Sensual Harmony",
    energy: 88,
    luckyNumber: 6,
    luckyColor: "Emerald Green",
    luckyTime: "2:15 PM",
    loveAdvice: "Patience and physical presence strengthen your connection. Plan a relaxing evening.",
    careerAdvice: "Steady progress beats rushed decisions. Focus on solid financial planning."
  },
  Gemini: {
    vibe: "Intellectual Curiosity & Social Spark",
    energy: 91,
    luckyNumber: 5,
    luckyColor: "Sunny Yellow",
    luckyTime: "11:00 AM",
    loveAdvice: "Witty conversation and lighthearted humor create instant romantic spark.",
    careerAdvice: "Networking brings unexpected opportunities. Share your ideas freely."
  },
  Cancer: {
    vibe: "Intuitive Nurturing & Emotional Clarity",
    energy: 85,
    luckyNumber: 2,
    luckyColor: "Pearl White",
    luckyTime: "7:45 PM",
    loveAdvice: "Trust your gut instinct regarding a relationship. Emotional vulnerability brings closeness.",
    careerAdvice: "Protect your energy. Focus on completing creative tasks in a comfortable setting."
  },
  Leo: {
    vibe: "Radiant Confidence & Creative Expression",
    energy: 96,
    luckyNumber: 1,
    luckyColor: "Royal Gold",
    luckyTime: "1:00 PM",
    loveAdvice: "Your natural warmth attracts admiration. Be generous with praise and attention.",
    careerAdvice: "Step into the spotlight. A presentation or pitch made today holds magnetic power."
  },
  Virgo: {
    vibe: "Analytical Precision & Health Renewal",
    energy: 89,
    luckyNumber: 7,
    luckyColor: "Sapphire Blue",
    luckyTime: "9:15 AM",
    loveAdvice: "Small practical acts of service communicate your love far better than grand words.",
    careerAdvice: "Your eye for detail catches a critical mistake before it happens. Excellent focus."
  },
  Libra: {
    vibe: "Harmonious Aesthetics & Diplomatic Grace",
    energy: 90,
    luckyNumber: 4,
    luckyColor: "Pastel Pink",
    luckyTime: "4:30 PM",
    loveAdvice: "Fairness and mutual listening resolve any lingering misunderstanding smoothly.",
    careerAdvice: "Collaborative partnerships yield higher results than working in isolation."
  },
  Scorpio: {
    vibe: "Magnetic Transformation & Deep Focus",
    energy: 93,
    luckyNumber: 8,
    luckyColor: "Deep Maroon",
    luckyTime: "8:00 PM",
    loveAdvice: "Intense eye contact and honest intimacy create an unforgettable bond.",
    careerAdvice: "Keep strategic plans close to your chest until execution is guaranteed."
  },
  Sagittarius: {
    vibe: "Expansion, Optimism & Adventure",
    energy: 95,
    luckyNumber: 3,
    luckyColor: "Electric Purple",
    luckyTime: "3:00 PM",
    loveAdvice: "Shared outdoor activities or philosophical debates ignite romantic excitement.",
    careerAdvice: "Think long-term and big picture. International or educational pursuits are favored."
  },
  Capricorn: {
    vibe: "Strategic Ambition & Unshakable Poise",
    energy: 92,
    luckyNumber: 10,
    luckyColor: "Slate Grey",
    luckyTime: "8:30 AM",
    loveAdvice: "Reliability and long-term commitments provide true romantic peace.",
    careerAdvice: "Disciplined effort pays off. A mentor or superior notices your dedication."
  },
  Aquarius: {
    vibe: "Innovative Vision & Electric Genius",
    energy: 87,
    luckyNumber: 11,
    luckyColor: "Cyan Blue",
    luckyTime: "5:15 PM",
    loveAdvice: "Honor each other's independence and unique perspectives for lasting harmony.",
    careerAdvice: "Break out of conventional routines. A technological or unconventional solution works best."
  },
  Pisces: {
    vibe: "Mystic Imagination & Compassionate Flow",
    energy: 86,
    luckyNumber: 12,
    luckyColor: "Seafoam Green",
    luckyTime: "6:00 PM",
    loveAdvice: "Empathetic listening and soulful connection bring deep romantic peace.",
    careerAdvice: "Channel your creative imagination into your work. Trust artistic flashes."
  }
};

const SIGNS = Object.keys(HOROSCOPE_DATABASE);

export function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState("Leo");

  const horoscope = useMemo(() => HOROSCOPE_DATABASE[selectedSign] || HOROSCOPE_DATABASE["Leo"], [selectedSign]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <h3 className="font-display text-3xl font-bold gradient-text-gold">Daily Cosmic Horoscope</h3>
        <p className="text-cosmic-200 text-sm mt-1">Select your Zodiac sign for today's daily cosmic guidance, energy meter, and lucky numbers.</p>
      </div>

      {/* Sign Selector Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SIGNS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedSign === sign
                ? "bg-cosmic-500 text-white font-bold shadow-lg border border-cosmic-300/40"
                : "bg-black/30 text-cosmic-200 border border-white/10 hover:bg-white/10"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      {/* Horoscope Card */}
      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-accent-gold/40 animate-slide-up">
        <div className="flex items-center justify-between border-b border-cosmic-700/40 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Today's Vibe for {selectedSign}</span>
            <h4 className="text-2xl font-display font-bold text-white mt-1">{horoscope.vibe}</h4>
          </div>
          <div className="text-right">
            <span className="text-xs text-cosmic-300 font-medium">Cosmic Energy</span>
            <div className="text-2xl font-display font-bold text-accent-emerald">{horoscope.energy}%</div>
          </div>
        </div>

        {/* Lucky Matrix */}
        <div className="grid grid-cols-3 gap-3 text-center mb-6">
          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="text-xs text-cosmic-300">Lucky Number</div>
            <div className="text-xl font-display font-bold text-accent-gold">{horoscope.luckyNumber}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="text-xs text-cosmic-300">Lucky Color</div>
            <div className="text-sm font-display font-bold text-accent-cyan mt-1">{horoscope.luckyColor}</div>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5">
            <div className="text-xs text-cosmic-300">Lucky Time</div>
            <div className="text-sm font-display font-bold text-accent-rose mt-1">{horoscope.luckyTime}</div>
          </div>
        </div>

        {/* Love & Career Advice */}
        <div className="space-y-4 text-left border-t border-cosmic-700/40 pt-4">
          <div>
            <h5 className="text-sm font-semibold text-accent-rose flex items-center gap-2 mb-1">
              <span>💖</span> Love & Relationships
            </h5>
            <p className="text-cosmic-100 text-sm leading-relaxed">{horoscope.loveAdvice}</p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-accent-cyan flex items-center gap-2 mb-1">
              <span>💼</span> Career & Life Direction
            </h5>
            <p className="text-cosmic-100 text-sm leading-relaxed">{horoscope.careerAdvice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
