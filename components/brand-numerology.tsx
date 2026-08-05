"use client";

import { useMemo, useState } from "react";

const CHALDEAN_MAP: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, c: 2, k: 2, r: 2,
  g: 3, c_alt: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8
};

function calculateChaldeanNumber(str: string): { total: number; single: number } {
  let sum = 0;
  const clean = str.toLowerCase().replace(/[^a-z]/g, "");
  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    sum += CHALDEAN_MAP[char] || 1;
  }
  let single = sum;
  while (single > 9 && single !== 11 && single !== 22 && single !== 33) {
    single = String(single)
      .split("")
      .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }
  return { total: sum, single };
}

const BRAND_NUMEROLOGY_MEANINGS: Record<number, { title: string; element: string; vibration: string; idealFor: string }> = {
  1: { title: "The Pioneer & Market Leader", element: "Sun", vibration: "High ambition, leadership, independence, and strong market presence.", idealFor: "Tech Startups, Executive Brands, Personal Branding, Luxury Services" },
  2: { title: "The Harmonizer & Partner", element: "Moon", vibration: "Diplomacy, warmth, collaboration, and high customer empathy.", idealFor: "Counseling, Hospitality, Wellness, Customer Support Services" },
  3: { title: "The Creative Communicator", element: "Jupiter", vibration: "Expansive growth, artistic flair, optimism, and media magnetism.", idealFor: "Media, Publishing, Entertainment, Creative Agencies, Design Studios" },
  4: { title: "The Builder & Anchor", element: "Rahu", vibration: "Solid foundation, discipline, structure, and long-term security.", idealFor: "Real Estate, Construction, Financial Services, Engineering" },
  5: { title: "The Fast Innovator & Trade Visionary", element: "Mercury", vibration: "Rapid expansion, versatility, high sales volume, and global trade.", idealFor: "E-Commerce, Travel, Marketing, Trading, Digital Products" },
  6: { title: "The Luxury & Aesthetic Master", element: "Venus", vibration: "Elegance, luxury appeal, beauty, family trust, and financial abundance.", idealFor: "Fashion, Cosmetics, Interior Design, Jewelry, Gourmet Food" },
  7: { title: "The Mystic & Specialist", element: "Ketu", vibration: "Deep research, spiritual authenticity, specialist wisdom, and niche authority.", idealFor: "Astrology, Research Labs, Tech Patents, Education, Holistic Healing" },
  8: { title: "The Powerhouse & Wealth Magnet", element: "Saturn", vibration: "Massive scale, commercial strength, financial authority, and endurance.", idealFor: "Banking, Corporate Law, Heavy Industry, Global Enterprise" },
  9: { title: "The Global Philanthropist & Pioneer", element: "Mars", vibration: "High energy, universal reach, humanitarian impact, and bold action.", idealFor: "Sports, NGOs, Global Organizations, Medical Innovation, Defense" },
  11: { title: "Master Illuminator (11)", element: "Neptune / Moon", vibration: "High intuitive magnetism, visionary leadership, and inspirational impact.", idealFor: "Global Thought Leadership, Transformational Media, Spiritual Brands" },
  22: { title: "Master Architect (22)", element: "Pluto / Rahu", vibration: "Capacity to turn impossible visionary concepts into global physical reality.", idealFor: "Infrastructure, Global Platforms, Tech Ecosystems, Multinational Brands" },
  33: { title: "Master Teacher (33)", element: "Jupiter / Venus", vibration: "Highest cosmic blessing of unconditional service, beauty, and global harmony.", idealFor: "Worldwide Healing Foundations, Global Educational Movement" }
};

export function BrandNumerologyCalculator() {
  const [nameInput, setNameInput] = useState("BIGThreeAstrology");

  const result = useMemo(() => {
    if (!nameInput.trim()) return null;
    const calc = calculateChaldeanNumber(nameInput);
    const detail = BRAND_NUMEROLOGY_MEANINGS[calc.single] || BRAND_NUMEROLOGY_MEANINGS[1];
    return { ...calc, detail };
  }, [nameInput]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">📜 Chaldean Name & Brand Numerology</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Brand & Name Numerology Analyzer</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Calculate the Chaldean numerology vibration of your personal name, company title, or brand name.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Enter Name / Brand Title</label>
        <input
          type="text"
          className="input-cosmic text-lg font-bold text-center"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="e.g. BIGThreeAstrology"
        />
      </div>

      {result && (
        <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50 animate-slide-up">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Chaldean Name Number</span>
              <h3 className="text-3xl font-display font-bold text-white mt-1">
                Number {result.single} <span className="text-sm text-emerald-300 font-normal">(Compound Total: {result.total})</span>
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-300 font-medium">Ruling Element</span>
              <div className="text-sm font-display font-bold text-amber-300">{result.detail.element}</div>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
                <span>✨</span> Brand Identity & Archetype
              </h4>
              <p className="text-lg font-display font-bold text-white mb-1">{result.detail.title}</p>
              <p className="text-emerald-100 text-sm leading-relaxed">{result.detail.vibration}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                💼 Ideal Business & Industry Fit
              </h4>
              <p className="text-sm font-semibold text-white">{result.detail.idealFor}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
