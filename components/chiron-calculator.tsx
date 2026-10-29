"use client";

import { useMemo, useState } from "react";

type ChironData = {
  sign: string;
  emoji: string;
  soulWound: string;
  healingGift: string;
  remedyAction: string;
};

const CHIRON_DATABASE: Record<string, ChironData> = {
  Aries: {
    sign: "Chiron in Aries",
    emoji: "♈",
    soulWound: "Wound of identity and self-worth. Feeling like you must prove your right to exist or take space.",
    healingGift: "Fearless self-empowerment. You inspire others to embrace their true authenticity without apology.",
    remedyAction: "Practice celebrating your wins out loud and setting unapologetic personal boundaries."
  },
  Taurus: {
    sign: "Chiron in Taurus",
    emoji: "♉",
    soulWound: "Wound of security and physical worth. Fear of material scarcity or feeling inadequate in body.",
    healingGift: "Deep grounded presence. You teach others true self-reliance, bodily peace, and lasting value.",
    remedyAction: "Nurture your physical senses with nature walks, healthy food, and bodily self-care."
  },
  Gemini: {
    sign: "Chiron in Gemini",
    emoji: "♊",
    soulWound: "Wound of voice and being heard. Fear of being misunderstood or judged for how you express thoughts.",
    healingGift: "Compassionate communication. You help others find their voice and express their truth freely.",
    remedyAction: "Write daily journals, practice active listening, and trust your unique communication style."
  },
  Cancer: {
    sign: "Chiron in Cancer",
    emoji: "♋",
    soulWound: "Wound of belonging and emotional safety. Feeling unparented or unsafe in domestic spaces.",
    healingGift: "Unconditional nurturing. You create safe emotional havens for others to heal deep trauma.",
    remedyAction: "Reparent your inner child with gentle self-compassion and build a cozy sanctuary."
  },
  Leo: {
    sign: "Chiron in Leo",
    emoji: "♌",
    soulWound: "Wound of creative expression and visibility. Hesitation to shine or fear of being mocked.",
    healingGift: "Radiant encouragement. You unlock the creative inner child in everyone around you.",
    remedyAction: "Engage in creative arts, perform or share your gifts without seeking external validation."
  },
  Virgo: {
    sign: "Chiron in Virgo",
    emoji: "♍",
    soulWound: "Wound of perfectionism and health anxiety. Hyper-fixation on flaws or physical weakness.",
    healingGift: "Holistic healing master. You teach practical wellness, grace, and realistic balance.",
    remedyAction: "Release perfectionism, embrace 'good enough', and practice mindfulness meditation."
  },
  Libra: {
    sign: "Chiron in Libra",
    emoji: "♎",
    soulWound: "Wound of partnership and codependency. Losing yourself in relationships or fear of conflict.",
    healingGift: "Sacred relationship balance. You model healthy, equal, and respectful partnerships.",
    remedyAction: "Honor your independent needs first before compromising for others."
  },
  Scorpio: {
    sign: "Chiron in Scorpio",
    emoji: "♏",
    soulWound: "Wound of betrayal, trust, and loss. Fear of vulnerability or fear of emotional exposure.",
    healingGift: "Alchemical rebirth. You guide souls through dark life transitions into empowering light.",
    remedyAction: "Practice emotional vulnerability with trusted allies and embrace deep shadow work."
  },
  Sagittarius: {
    sign: "Chiron in Sagittarius",
    emoji: "♐",
    soulWound: "Wound of faith, belief, and meaning. Feeling lost, disillusioned, or questioning life purpose.",
    healingGift: "Spiritual wisdom guide. You inspire others to rediscover deep faith and higher truth.",
    remedyAction: "Explore diverse spiritual teachings, travel, and trust your personal inner philosophy."
  },
  Capricorn: {
    sign: "Chiron in Capricorn",
    emoji: "♑",
    soulWound: "Wound of achievement and status. Pressure to overperform or feeling unrecognized by authority.",
    healingGift: "Authentic leadership. You mentor others to achieve success rooted in genuine integrity.",
    remedyAction: "Define success on your own terms rather than societal expectations."
  },
  Aquarius: {
    sign: "Chiron in Aquarius",
    emoji: "♒",
    soulWound: "Wound of social belonging. Feeling like an outsider, black sheep, or disconnected from groups.",
    healingGift: "Humanitarian innovator. You build inclusive communities where all unique souls belong.",
    remedyAction: "Celebrate your unique eccentricity and connect with soul-aligned tribes."
  },
  Pisces: {
    sign: "Chiron in Pisces",
    emoji: "♓",
    soulWound: "Wound of spiritual isolation or victimhood. Feeling overwhelmed by the world's suffering.",
    healingGift: "Divine empathy and mystic healing. You channel universal compassion into tangible comfort.",
    remedyAction: "Establish spiritual energy hygiene, practice creative arts, and ground your spirit in reality."
  }
};



// Chiron sign ingresses (tropical), compiled from published ephemeris
// tables (Cafe Astrology Chiron sign tables; 2019/2026-27 updates from
// published ingress notices). Includes retrograde re-entries, so any
// birth date resolves to the sign Chiron actually occupied that day.
// Before the first listed ingress (24 May 1926) Chiron was in Aries.
const CHIRON_INGRESSES: Array<[string, string]> = [
  ["1926-05-24", "Taurus"], ["1926-10-20", "Aries"], ["1927-03-25", "Taurus"],
  ["1933-06-06", "Gemini"], ["1933-12-22", "Taurus"], ["1934-03-23", "Gemini"],
  ["1937-08-27", "Cancer"], ["1937-11-22", "Gemini"], ["1938-05-28", "Cancer"],
  ["1940-09-29", "Leo"], ["1940-12-27", "Cancer"], ["1941-06-16", "Leo"],
  ["1943-07-26", "Virgo"],
  ["1944-11-17", "Libra"], ["1945-03-23", "Virgo"], ["1945-07-22", "Libra"],
  ["1946-11-10", "Scorpio"],
  ["1948-11-28", "Sagittarius"],
  ["1951-02-08", "Capricorn"], ["1951-06-18", "Sagittarius"], ["1951-11-08", "Capricorn"],
  ["1955-01-27", "Aquarius"],
  ["1960-03-26", "Pisces"], ["1960-08-19", "Aquarius"], ["1961-01-20", "Pisces"],
  ["1968-04-01", "Aries"], ["1968-10-18", "Pisces"], ["1969-01-30", "Aries"],
  ["1976-05-28", "Taurus"], ["1976-10-13", "Aries"], ["1977-03-28", "Taurus"],
  ["1983-06-21", "Gemini"], ["1983-11-29", "Taurus"], ["1984-04-10", "Gemini"],
  ["1988-06-21", "Cancer"],
  ["1991-07-21", "Leo"],
  ["1993-09-03", "Virgo"],
  ["1995-09-09", "Libra"],
  ["1996-12-29", "Scorpio"], ["1997-04-04", "Libra"], ["1997-09-02", "Scorpio"],
  ["1999-01-07", "Sagittarius"], ["1999-06-01", "Scorpio"], ["1999-09-21", "Sagittarius"],
  ["2001-12-11", "Capricorn"],
  ["2005-02-21", "Aquarius"], ["2005-07-31", "Capricorn"], ["2005-12-05", "Aquarius"],
  ["2010-04-20", "Pisces"], ["2010-07-20", "Aquarius"], ["2011-02-08", "Pisces"],
  ["2018-04-17", "Aries"], ["2018-09-25", "Pisces"], ["2019-02-18", "Aries"],
  ["2026-06-19", "Taurus"], ["2026-09-18", "Aries"], ["2027-04-14", "Taurus"],
];

function chironSignFor(birthDate: string): string {
  let sign = "Aries"; // Chiron was in Aries before 24 May 1926
  for (const [date, entered] of CHIRON_INGRESSES) {
    if (birthDate >= date) sign = entered;
    else break;
  }
  return sign;
}

export function ChironCalculator() {
  const [birthDate, setBirthDate] = useState("");

  const chironInfo = useMemo(() => {
    if (!birthDate) return CHIRON_DATABASE["Aries"];
    return CHIRON_DATABASE[chironSignFor(birthDate)] || CHIRON_DATABASE["Aries"];
  }, [birthDate]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3"> Chiron (The Wounded Healer) Calculator</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Discover Your Soul Healing & Spiritual Gift</h2>
        <p className="text-cosmic-200 text-sm mt-1">
          Chiron points to your deepest core wound and the unique spiritual healing gift you bring to the world.
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
            <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Your Soul Healing Indicator</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1 flex items-center gap-2">
              <span>{chironInfo.emoji}</span> {chironInfo.sign}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-cosmic-300 font-medium">Archetype</span>
            <div className="text-sm font-display font-bold text-accent-rose">Wounded Healer</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-accent-rose flex items-center gap-2 mb-1">
              <span></span> The Core Soul Wound
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{chironInfo.soulWound}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-accent-emerald flex items-center gap-2 mb-1">
              <span></span> The Spiritual Healing Gift
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{chironInfo.healingGift}</p>
          </div>

          <div className="p-4 rounded-xl bg-cosmic-900/80 border border-white/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-gold mb-1">
               Healing Remedy Action
            </h4>
            <p className="text-sm text-white font-medium italic">"{chironInfo.remedyAction}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
