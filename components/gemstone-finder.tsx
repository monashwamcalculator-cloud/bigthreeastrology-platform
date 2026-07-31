"use client";

import { useMemo, useState } from "react";

type GemstoneData = {
  rashi: string;
  gemstone: string;
  hindiName: string;
  planet: string;
  metal: string;
  finger: string;
  mantra: string;
  benefits: string;
  emoji: string;
};

const GEMSTONE_DATABASE: Record<string, GemstoneData> = {
  Aries: {
    rashi: "Aries (Mesh)",
    gemstone: "Red Coral",
    hindiName: "Moonga (मूँगा)",
    planet: "Mars (Mangal)",
    metal: "Copper or Gold",
    finger: "Ring Finger",
    mantra: "Om Kram Kreem Kroum Sah Bhaumaya Namah",
    benefits: "Boosts stamina, leadership courage, physical vitality, and shields from negative envy.",
    emoji: "🔴"
  },
  Taurus: {
    rashi: "Taurus (Vrishabha)",
    gemstone: "Diamond or White Sapphire",
    hindiName: "Heera / Safed Pukhraj (हीरा)",
    planet: "Venus (Shukra)",
    metal: "Platinum or Silver",
    finger: "Middle Finger",
    mantra: "Om Draam Dreem Droum Sah Shukraya Namah",
    benefits: "Enhances romantic charisma, artistic elegance, wealth creation, and luxury.",
    emoji: "💎"
  },
  Gemini: {
    rashi: "Gemini (Mithun)",
    gemstone: "Emerald",
    hindiName: "Panna (पन्ना)",
    planet: "Mercury (Budh)",
    metal: "Gold or Bronze",
    finger: "Little Finger (Kanishtha)",
    mantra: "Om Braam Breem Broum Sah Budhaya Namah",
    benefits: "Unlocks sharp communication, business negotiation skills, memory, and analytical intellect.",
    emoji: "🟢"
  },
  Cancer: {
    rashi: "Cancer (Kark)",
    gemstone: "Natural Pearl or Moonstone",
    hindiName: "Moti (मोती)",
    planet: "Moon (Chandra)",
    metal: "Pure Silver",
    finger: "Little Finger",
    mantra: "Om Shraam Shreem Shroum Sah Chandraya Namah",
    benefits: "Calms emotional anxiety, nurtures peace of mind, family harmony, and intuitive clarity.",
    emoji: "⚪"
  },
  Leo: {
    rashi: "Leo (Simha)",
    gemstone: "Ruby",
    hindiName: "Manikya (माणिक्य)",
    planet: "Sun (Surya)",
    metal: "Copper or Gold",
    finger: "Ring Finger (Anamika)",
    mantra: "Om Hraam Hreem Hroum Sah Suryaya Namah",
    benefits: "Bestows magnetic royal authority, career fame, strong immunity, and executive respect.",
    emoji: "🔴"
  },
  Virgo: {
    rashi: "Virgo (Kanya)",
    gemstone: "Emerald",
    hindiName: "Panna (पन्ना)",
    planet: "Mercury (Budh)",
    metal: "Silver or Gold",
    finger: "Little Finger",
    mantra: "Om Budhaya Namah",
    benefits: "Sharpened focus, financial wisdom, healing health vitality, and academic success.",
    emoji: "🟢"
  },
  Libra: {
    rashi: "Libra (Tula)",
    gemstone: "Opal or White Sapphire",
    hindiName: "Opal / Safed Pukhraj (ओपल)",
    planet: "Venus (Shukra)",
    metal: "Silver",
    finger: "Middle or Ring Finger",
    mantra: "Om Shukraya Namah",
    benefits: "Restores emotional balance, relationship trust, artistic growth, and refined aesthetic peace.",
    emoji: "✨"
  },
  Scorpio: {
    rashi: "Scorpio (Vrishchik)",
    gemstone: "Red Coral",
    hindiName: "Moonga (मूँगा)",
    planet: "Mars (Mangal)",
    metal: "Copper",
    finger: "Ring Finger",
    mantra: "Om Mangalaya Namah",
    benefits: "Provides protective courage, clears obstacles, enhances passion and inner transformation.",
    emoji: "🔴"
  },
  Sagittarius: {
    rashi: "Sagittarius (Dhanu)",
    gemstone: "Yellow Sapphire",
    hindiName: "Pukhraj (पुखराज)",
    planet: "Jupiter (Guru)",
    metal: "Gold or Brass",
    finger: "Index Finger (Tarjani)",
    mantra: "Om Graam Greem Groum Sah Gurave Namah",
    benefits: "Attracts immense wealth, higher spiritual wisdom, fortune, and marriage harmony.",
    emoji: "🟡"
  },
  Capricorn: {
    rashi: "Capricorn (Makar)",
    gemstone: "Blue Sapphire",
    hindiName: "Neelam (नीलम)",
    planet: "Saturn (Shani)",
    metal: "Panchdhatu or Silver",
    finger: "Middle Finger (Madhyama)",
    mantra: "Om Praam Preem Proum Sah Shanaishcharaya Namah",
    benefits: "Brings rapid rise in career status, discipline, protection from enemies, and long-term stability.",
    emoji: "🔵"
  },
  Aquarius: {
    rashi: "Aquarius (Kumbh)",
    gemstone: "Blue Sapphire or Amethyst",
    hindiName: "Neelam / Katela (नीलम)",
    planet: "Saturn (Shani)",
    metal: "Silver or Iron Ring",
    finger: "Middle Finger",
    mantra: "Om Sham Shanaishcharaya Namah",
    benefits: "Stimulates groundbreaking innovation, social influence, focus, and financial security.",
    emoji: "🔵"
  },
  Pisces: {
    rashi: "Pisces (Meen)",
    gemstone: "Yellow Sapphire",
    hindiName: "Pukhraj (पुखराज)",
    planet: "Jupiter (Guru)",
    metal: "Gold",
    finger: "Index Finger",
    mantra: "Om Gurave Namah",
    benefits: "Expands divine grace, peace of mind, prosperous marriage, and academic achievements.",
    emoji: "🟡"
  }
};

const SIGNS = Object.keys(GEMSTONE_DATABASE);

export function GemstoneFinder() {
  const [selectedSign, setSelectedSign] = useState("Leo");

  const gemstoneInfo = useMemo(() => GEMSTONE_DATABASE[selectedSign] || GEMSTONE_DATABASE["Leo"], [selectedSign]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">💎 Vedic Planetary Remedies (Ratna Vigyan)</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Lucky Gemstone & Mantra Finder</h2>
        <p className="text-cosmic-200 text-sm mt-1">
          Discover your authentic planetary gemstone (Ratna), recommended wearing finger, metal, and sacred Vedic mantra.
        </p>
      </div>

      {/* Sign Selector Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SIGNS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedSign === sign
                ? "bg-accent-gold text-black font-bold shadow-lg border border-yellow-300"
                : "bg-black/30 text-cosmic-200 border border-white/10 hover:bg-white/10"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      {/* Gemstone Details Card */}
      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-accent-gold/40 animate-slide-up bg-black/40">
        <div className="flex items-center justify-between border-b border-cosmic-700/40 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-cosmic-300 font-semibold">{gemstoneInfo.rashi}</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1 flex items-center gap-2">
              <span>{gemstoneInfo.emoji}</span> {gemstoneInfo.gemstone}
            </h3>
            <span className="text-sm text-accent-gold font-medium">{gemstoneInfo.hindiName}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-cosmic-300 font-medium">Ruling Planet</span>
            <div className="text-lg font-display font-bold text-accent-cyan">{gemstoneInfo.planet}</div>
          </div>
        </div>

        {/* Wearing Rules */}
        <div className="grid grid-cols-2 gap-4 text-center mb-6">
          <div className="p-4 rounded-xl bg-black/50 border border-white/10">
            <div className="text-xs text-cosmic-300 mb-1">Recommended Metal</div>
            <div className="text-sm font-display font-bold text-accent-gold">{gemstoneInfo.metal}</div>
          </div>
          <div className="p-4 rounded-xl bg-black/50 border border-white/10">
            <div className="text-xs text-cosmic-300 mb-1">Wearing Finger</div>
            <div className="text-sm font-display font-bold text-accent-cyan">{gemstoneInfo.finger}</div>
          </div>
        </div>

        {/* Benefits & Mantra */}
        <div className="space-y-4 border-t border-cosmic-700/40 pt-4">
          <div>
            <h4 className="text-sm font-semibold text-accent-emerald flex items-center gap-2 mb-1">
              <span>✨</span> Astrological Benefits & Energy
            </h4>
            <p className="text-cosmic-100 text-sm leading-relaxed">{gemstoneInfo.benefits}</p>
          </div>

          <div className="p-4 rounded-xl bg-cosmic-900/80 border border-accent-gold/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-gold mb-1">
              🕉️ Sacred Chanting Mantra (108 Times)
            </h4>
            <p className="text-sm font-mono font-bold text-white italic">"{gemstoneInfo.mantra}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
