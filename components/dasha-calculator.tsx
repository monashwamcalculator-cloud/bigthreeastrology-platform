"use client";

import { useMemo, useState } from "react";

type DashaPlanet = {
  planet: string;
  durationYears: number;
  rulingThemes: string;
  remedy: string;
};

const DASHA_PERIODS: DashaPlanet[] = [
  { planet: "Ketu (7 Years)", durationYears: 7, rulingThemes: "Spiritual introspection, detachment, occult research, sharp intuition, sudden shifts.", remedy: "Chant 'Om Kem Ketave Namah' and donate sesame seeds." },
  { planet: "Venus (20 Years)", durationYears: 20, rulingThemes: "Luxury, romantic relationships, artistic expansion, wealth accumulation, vehicles.", remedy: "Worship Goddess Lakshmi and wear white/pastels on Fridays." },
  { planet: "Sun (6 Years)", durationYears: 6, rulingThemes: "Career authority, leadership recognition, fatherly support, vital health, government status.", remedy: "Offer water (Surya Arghya) to the Sun in the morning." },
  { planet: "Moon (10 Years)", durationYears: 10, rulingThemes: "Emotional peace, motherly comfort, public fame, international travel, intuitive creativity.", remedy: "Chant 'Om Som Somaya Namah' and offer milk to Shivling." },
  { planet: "Mars (7 Years)", durationYears: 7, rulingThemes: "Physical courage, real estate acquisitions, brotherly support, executive drive, passion.", remedy: "Recite Hanuman Chalisa and donate red lentils on Tuesdays." },
  { planet: "Rahu (18 Years)", durationYears: 18, rulingThemes: "Unconventional growth, foreign travels, digital technology, high ambition, material gains.", remedy: "Chant 'Om Ram Rahave Namah' and feed stray dogs." },
  { planet: "Jupiter (16 Years)", durationYears: 16, rulingThemes: "Wisdom expansion, higher education, financial prosperity, marriage, children, guru grace.", remedy: "Apply yellow sandalwood tilak and respect elders/gurus." },
  { planet: "Saturn (19 Years)", durationYears: 19, rulingThemes: "Deep discipline, patience, career structure, endurance, structural stabilization.", remedy: "Light mustard oil Diya under Peepal tree on Saturdays." },
  { planet: "Mercury (17 Years)", durationYears: 17, rulingThemes: "Intellect, commerce, trade, communication skills, analytical writing, business success.", remedy: "Feed green fodder to cows on Wednesdays." }
];

export function DashaCalculator() {
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number>(5); // Default Rahu

  const activeDasha = useMemo(() => DASHA_PERIODS[selectedPlanetIndex] || DASHA_PERIODS[5], [selectedPlanetIndex]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3">🕉️ Vimshottari Mahadasha 120-Year Cycle</div>
        <h2 className="font-display text-3xl font-bold gradient-text">Vedic Dasha & Planetary Period Calculator</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Explore the 9 major planetary periods (Mahadashas) that shape your career, relationships, wealth, and destiny.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {DASHA_PERIODS.map((dasha, idx) => (
          <button
            key={dasha.planet}
            onClick={() => setSelectedPlanetIndex(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedPlanetIndex === idx
                ? "bg-emerald-400 text-emerald-950 font-bold shadow-lg border border-emerald-300"
                : "bg-black/40 text-emerald-200 border border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
          >
            {dasha.planet.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50">
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Active Mahadasha Planet</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{activeDasha.planet}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-300">Period Duration</span>
            <div className="text-lg font-display font-bold text-amber-300">{activeDasha.durationYears} Years</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <span>🎯</span> Major Life Themes & Planetary Energy
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{activeDasha.rulingThemes}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
              🙏 Recommended Vedic Mantra & Shanti Remedy
            </h4>
            <p className="text-sm font-semibold text-white">{activeDasha.remedy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
