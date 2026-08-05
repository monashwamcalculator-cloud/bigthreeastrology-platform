"use client";

import { useMemo, useState } from "react";

type HouseData = {
  houseNumber: number;
  sanskritName: string;
  domain: string;
  significator: string;
  keyInsights: string;
};

const KUNDALI_HOUSES: HouseData[] = [
  { houseNumber: 1, sanskritName: "Lagna / Tanu Bhava", domain: "Self, Physical Body, Personality, Vitality & Life Direction", significator: "Sun (Surya)", keyInsights: "Determines your core body constitution, personal aura, health vitality, and overall life path." },
  { houseNumber: 2, sanskritName: "Dhana / Kutumba Bhava", domain: "Accumulated Wealth, Family Lineage, Speech & Eating Habits", significator: "Jupiter (Guru)", keyInsights: "Governs personal finances, family inheritance, truthfulness in speech, and liquid wealth assets." },
  { houseNumber: 3, sanskritName: "Sahaja / Parakrama Bhava", domain: "Courage, Younger Siblings, Short Journeys, Skills & Hands", significator: "Mars (Mangal)", keyInsights: "Reflects inner willpower, artistic/technical skills of hands, writing ability, and sibling bonds." },
  { houseNumber: 4, sanskritName: "Sukha / Matru Bhava", domain: "Mother, Home, Vehicles, Real Estate & Peace of Mind", significator: "Moon (Chandra)", keyInsights: "Controls emotional happiness, domestic peace, maternal love, property ownership, and home life." },
  { houseNumber: 5, sanskritName: "Putra / Purva Punya Bhava", domain: "Children, Higher Intelligence, Past Life Merit & Speculation", significator: "Jupiter (Guru)", keyInsights: "Indicates creative genius, academic excellence, romance, children, and spiritual mantras." },
  { houseNumber: 6, sanskritName: "Shatru / Ari Bhava", domain: "Health Vitality, Enemies, Debts, Daily Service & Competition", significator: "Mars & Saturn", keyInsights: "Controls immunity against disease, overcoming legal disputes, daily work routine, and debt management." },
  { houseNumber: 7, sanskritName: "Yuvati / Kalatra Bhava", domain: "Spouse, Marriage Union, Business Partnerships & Public Image", significator: "Venus (Shukra)", keyInsights: "Governs marital harmony, commercial co-founding partnerships, and public dealings." },
  { houseNumber: 8, sanskritName: "Randhra / Ayur Bhava", domain: "Longevity, Transformation, Hidden Wealth, Research & Secrets", significator: "Saturn (Shani)", keyInsights: "Controls deep psychological evolution, occult wisdom, insurance/tax gains, and sudden shifts." },
  { houseNumber: 9, sanskritName: "Dharma / Pitru Bhava", domain: "Fortune (Bhagya), Father, Higher Wisdom, Guru & Pilgrimage", significator: "Jupiter & Sun", keyInsights: "Most auspicious house for divine grace, higher education, moral integrity, and long-distance travel." },
  { houseNumber: 10, sanskritName: "Karma / Rajya Bhava", domain: "Career Status, Public Fame, Executive Authority & Profession", significator: "Sun, Mercury & Saturn", keyInsights: "Dictates professional rank, leadership recognition, social standing, and career legacy." },
  { houseNumber: 11, sanskritName: "Labha / Aya Bhava", domain: "Gains, Liquid Income, Large Network, Dreams & Elder Siblings", significator: "Jupiter (Guru)", keyInsights: "Determines realization of financial goals, passive revenue, influential social network, and desires." },
  { houseNumber: 12, sanskritName: "Vyaya / Moksha Bhava", domain: "Spiritual Liberation, Foreign Lands, Expenses & Meditation", significator: "Ketu & Saturn", keyInsights: "Governs overseas settlement, spiritual enlightenment, deep sleep, intuition, and charitable donations." }
];

export function KundaliHouseCalculator() {
  const [selectedHouse, setSelectedHouse] = useState<number>(1);

  const activeHouse = useMemo(() => {
    return KUNDALI_HOUSES.find((h) => h.houseNumber === selectedHouse) || KUNDALI_HOUSES[0];
  }, [selectedHouse]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3">🔮 12 Bhavas (Kundali Houses) Explorer</div>
        <h2 className="font-display text-3xl font-bold gradient-text">Vedic Kundali House & Bhava Explorer</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Explore the 12 sacred houses (Bhavas) of your birth chart to understand wealth, career, health, and destiny.
        </p>
      </div>

      {/* House Selector Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-1.5 mb-8">
        {KUNDALI_HOUSES.map((h) => (
          <button
            key={h.houseNumber}
            onClick={() => setSelectedHouse(h.houseNumber)}
            className={`p-2 rounded-xl text-xs font-bold transition-all text-center border ${
              selectedHouse === h.houseNumber
                ? "bg-emerald-400 text-emerald-950 border-emerald-300 shadow-md scale-105"
                : "bg-black/40 text-emerald-200 border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
          >
            H{h.houseNumber}
          </button>
        ))}
      </div>

      {/* House Details Card */}
      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50 animate-slide-up">
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">House {activeHouse.houseNumber} of 12</span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">{activeHouse.sanskritName}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-300">Karaka (Significator)</span>
            <div className="text-sm font-display font-bold text-amber-300">{activeHouse.significator}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <span>🏛️</span> Life Domain & Significance
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{activeHouse.domain}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
              ✨ Vedic Astrological Insight
            </h4>
            <p className="text-sm text-white leading-relaxed">{activeHouse.keyInsights}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
