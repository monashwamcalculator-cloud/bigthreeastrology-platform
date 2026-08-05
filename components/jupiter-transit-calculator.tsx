"use client";

import { useMemo, useState } from "react";

type JupiterData = {
  sign: string;
  luckFocus: string;
  financialOpportunity: string;
  spiritualBlessing: string;
};

const JUPITER_DATABASE: Record<string, JupiterData> = {
  Aries: { sign: "Jupiter in Aries ♈", luckFocus: "Pioneering new ventures, leadership breakthroughs & personal courage.", financialOpportunity: "High gains through solo business initiatives, startup investments & bold actions.", spiritualBlessing: "Unshakable self-faith and fearlessness." },
  Taurus: { sign: "Jupiter in Taurus ♉", luckFocus: "Financial expansion, real estate growth & luxury stabilization.", financialOpportunity: "Accumulation of solid physical assets, high-yield savings & banking success.", spiritualBlessing: "Grounded inner contentment and sensory gratitude." },
  Gemini: { sign: "Jupiter in Gemini ♊", luckFocus: "Digital media expansion, writing, teaching & multi-stream income.", financialOpportunity: "Monetizing communications, publishing, marketing, podcasts & trading.", spiritualBlessing: "Lifelong curiosity and mental agility." },
  Cancer: { sign: "Jupiter in Cancer ♋", luckFocus: "Exalted divine grace! Deep domestic harmony, emotional peace & ancestral blessings.", financialOpportunity: "Real estate wealth, family business prosperity & hospitality gains.", spiritualBlessing: "Profound intuition and emotional sanctuary." },
  Leo: { sign: "Jupiter in Leo ♌", luckFocus: "Creative stardom, media visibility, executive leadership & romance.", financialOpportunity: "Wealth from creative arts, entertainment, stocks & leadership roles.", spiritualBlessing: "Magnanimous heart and joyful radiance." },
  Virgo: { sign: "Jupiter in Virgo ♍", luckFocus: "Holistic healing, professional service mastery & analytical skill expansion.", financialOpportunity: "Gains through healthcare consulting, quality auditing & management.", spiritualBlessing: "Purity of devotion through practical service." },
  Libra: { sign: "Jupiter in Libra ♎", luckFocus: "Marriage luck, high-level business partnerships & diplomatic legal success.", financialOpportunity: "Prosperity through co-founded ventures, luxury arts & contractual deals.", spiritualBlessing: "Harmonious grace and balance in all bonds." },
  Scorpio: { sign: "Jupiter in Scorpio ♏", luckFocus: "Occult mastery, research wealth, deep inheritance & psychological transformation.", financialOpportunity: "Gains through shared assets, investments, research & corporate finance.", spiritualBlessing: "Deep spiritual rebirth and intuitive mastery." },
  Sagittarius: { sign: "Jupiter in Sagittarius ♐", luckFocus: "Own-sign divine grace! Higher wisdom, international publishing, travel & guru blessings.", financialOpportunity: "Abundance through global trade, university education & foreign ventures.", spiritualBlessing: "Direct connection to higher cosmic truth." },
  Capricorn: { sign: "Jupiter in Capricorn ♑", luckFocus: "Structural discipline, corporate status elevation & career endurance.", financialOpportunity: "Steady accumulation through institutional investments & long-term legacy.", spiritualBlessing: "Patience and humble mastery over duty." },
  Aquarius: { sign: "Jupiter in Aquarius ♒", luckFocus: "Global network expansion, tech innovation & humanitarian influence.", financialOpportunity: "Monetizing tech startups, community platforms & large scale networks.", spiritualBlessing: "Visionary consciousness for collective upliftment." },
  Pisces: { sign: "Jupiter in Pisces ♓", luckFocus: "Own-sign mystical bliss! Artistic inspiration, meditation & universal compassion.", financialOpportunity: "Wealth through creative arts, film, healing centers & overseas ventures.", spiritualBlessing: "Unconditional divine love and enlightened peace." }
};

const ZODIAC_LIST = Object.keys(JUPITER_DATABASE);

export function JupiterTransitCalculator() {
  const [userSign, setUserSign] = useState("Cancer");

  const result = useMemo(() => JUPITER_DATABASE[userSign] || JUPITER_DATABASE["Cancer"], [userSign]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">🪐 Guru Blessing & Expansion</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">Jupiter Transit & Luck Finder</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Discover how Jupiter (Guru) expands your wealth, marriage luck, career opportunities, and spiritual grace.
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

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50">
        <div className="border-b border-sky-500/20 pb-3 mb-4">
          <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">Jupiter Blessing Sign</span>
          <h3 className="text-xl font-display font-bold text-white mt-0.5">{result.sign}</h3>
        </div>

        <div className="space-y-3 text-left">
          <div>
            <span className="text-xs font-semibold text-amber-300">🎯 Luck & Opportunity Focus:</span>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mt-0.5">{result.luckFocus}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-300">💰 Financial Wealth Avenues:</span>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mt-0.5">{result.financialOpportunity}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-sky-950/80 border border-sky-500/30">
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-0.5">🙏 Divine Spiritual Blessing</span>
            <p className="text-xs text-white font-medium">{result.spiritualBlessing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
