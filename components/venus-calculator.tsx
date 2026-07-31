"use client";

import { useMemo, useState } from "react";

type VenusData = {
  sign: string;
  emoji: string;
  element: string;
  loveStyle: string;
  attractionSecret: string;
  idealMatch: string;
};

const VENUS_DATABASE: Record<string, VenusData> = {
  Aries: {
    sign: "Venus in Aries",
    emoji: "♈",
    element: "Fire",
    loveStyle: "Bold, passionate, and direct. You love the chase and express affection spontaneously.",
    attractionSecret: "High energy, honesty, and confidence excite you instantly.",
    idealMatch: "Leo, Sagittarius, Gemini, and Aquarius"
  },
  Taurus: {
    sign: "Venus in Taurus",
    emoji: "♉",
    element: "Earth",
    loveStyle: "Sensual, loyal, and steadfast. You seek touch, physical comfort, and emotional stability.",
    attractionSecret: "Reliability, gourmet food, cozy aesthetics, and patient devotion.",
    idealMatch: "Virgo, Capricorn, Cancer, and Pisces"
  },
  Gemini: {
    sign: "Venus in Gemini",
    emoji: "♊",
    element: "Air",
    loveStyle: "Witty, intellectually curious, and playful. Conversation is your primary aphrodisiac.",
    attractionSecret: "Stimulating debates, humor, curiosity, and variety in date activities.",
    idealMatch: "Libra, Aquarius, Aries, and Leo"
  },
  Cancer: {
    sign: "Venus in Cancer",
    emoji: "♋",
    element: "Water",
    loveStyle: "Nurturing, deeply protective, and romantic. You create a safe emotional sanctuary.",
    attractionSecret: "Emotional vulnerability, cozy home date nights, and family values.",
    idealMatch: "Scorpio, Pisces, Taurus, and Virgo"
  },
  Leo: {
    sign: "Venus in Leo",
    emoji: "♌",
    element: "Fire",
    loveStyle: "Generous, dramatic, and fiercely loyal. You love grand romantic gestures and praise.",
    attractionSecret: "Admiration, romantic flair, loyalty, and celebrating each other's radiance.",
    idealMatch: "Aries, Sagittarius, Gemini, and Libra"
  },
  Virgo: {
    sign: "Venus in Virgo",
    emoji: "♍",
    element: "Earth",
    loveStyle: "Devoted through practical acts of service. You notice every subtle detail about your partner.",
    attractionSecret: "Cleanliness, thoughtfulness, practical support, and intellectual humility.",
    idealMatch: "Taurus, Capricorn, Cancer, and Scorpio"
  },
  Libra: {
    sign: "Venus in Libra",
    emoji: "♎",
    element: "Air",
    loveStyle: "Harmonious, romantic, and diplomatic. You thrive in balanced, aesthetically pleasing unions.",
    attractionSecret: "Elegance, fair listening, charm, and shared artistic passions.",
    idealMatch: "Gemini, Aquarius, Leo, and Sagittarius"
  },
  Scorpio: {
    sign: "Venus in Scorpio",
    emoji: "♏",
    element: "Water",
    loveStyle: "Intense, magnetic, and soul-deep. You seek complete emotional intimacy and unwavering trust.",
    attractionSecret: "Deep mystery, eye contact, absolute loyalty, and psychological depth.",
    idealMatch: "Cancer, Pisces, Virgo, and Capricorn"
  },
  Sagittarius: {
    sign: "Venus in Sagittarius",
    emoji: "♐",
    element: "Fire",
    loveStyle: "Adventurous, philosophical, and freedom-loving. Love is an exciting journey of discovery.",
    attractionSecret: "Travel, philosophical discussions, humor, and respecting individual freedom.",
    idealMatch: "Aries, Leo, Libra, and Aquarius"
  },
  Capricorn: {
    sign: "Venus in Capricorn",
    emoji: "♑",
    element: "Earth",
    loveStyle: "Composed, serious, and committed long-term. You build enduring partnerships like legacy.",
    attractionSecret: "Ambition, maturity, consistency, and long-term goal alignment.",
    idealMatch: "Taurus, Virgo, Scorpio, and Pisces"
  },
  Aquarius: {
    sign: "Venus in Aquarius",
    emoji: "♒",
    element: "Air",
    loveStyle: "Unconventional, intellectual, and friendly. You love your partner first as a best friend.",
    attractionSecret: "Unique individuality, open-mindedness, and intellectual independence.",
    idealMatch: "Gemini, Libra, Aries, and Sagittarius"
  },
  Pisces: {
    sign: "Venus in Pisces",
    emoji: "♓",
    element: "Water",
    loveStyle: "Unconditional, poetic, and soul-bound. Venus is exalted here, creating unconditional romantic devotion.",
    attractionSecret: "Empathy, shared dreams, musical/artistic soulfulness, and kindness.",
    idealMatch: "Cancer, Scorpio, Taurus, and Capricorn"
  }
};

const SIGNS = Object.keys(VENUS_DATABASE);

export function VenusCalculator() {
  const [birthDate, setBirthDate] = useState("");

  const venusInfo = useMemo(() => {
    if (!birthDate) return VENUS_DATABASE["Taurus"];
    const parts = birthDate.split("-");
    const month = parseInt(parts[1], 10) || 1;
    const day = parseInt(parts[2], 10) || 1;
    const index = (day + month * 3) % 12;
    return VENUS_DATABASE[SIGNS[index]] || VENUS_DATABASE["Taurus"];
  }, [birthDate]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">♀️ Venus Sign (Shukra) Calculator</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Discover Your Love Language & Romance Sign</h2>
        <p className="text-cosmic-200 text-sm mt-1">
          Venus governs your attraction style, romantic desires, aesthetic tastes, and how you show affection.
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
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Your Romantic Blueprint</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1 flex items-center gap-2">
              <span>{venusInfo.emoji}</span> {venusInfo.sign}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-cosmic-300 font-medium">Element</span>
            <div className="text-sm font-display font-bold text-accent-cyan">{venusInfo.element}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-accent-rose flex items-center gap-2 mb-1">
              <span>💖</span> Romantic Love Style
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{venusInfo.loveStyle}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-gold flex items-center gap-2 mb-1">
              <span>✨</span> Attraction Trigger
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{venusInfo.attractionSecret}</p>
          </div>

          <div className="p-4 rounded-xl bg-cosmic-900/80 border border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-emerald mb-1">
              💞 Best Compatible Venus Signs
            </h4>
            <p className="text-sm font-bold text-white">{venusInfo.idealMatch}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
