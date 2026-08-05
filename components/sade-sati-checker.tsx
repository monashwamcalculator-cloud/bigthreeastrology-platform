"use client";

import { useMemo, useState } from "react";

type SadeSatiData = {
  moonSign: string;
  status: "Rising Phase (First Dhaiya)" | "Peak Phase (Second Dhaiya)" | "Setting Phase (Third Dhaiya)" | "No Sade Sati Currently";
  intensity: string;
  focusArea: string;
  remedy: string;
  mantra: string;
};

const SADE_SATI_DATABASE: Record<string, SadeSatiData> = {
  Capricorn: {
    moonSign: "Capricorn (Makar)",
    status: "Setting Phase (Third Dhaiya)",
    intensity: "Mild & Rewarding",
    focusArea: "Reaping long-term fruits of labor, financial stabilization, career honors.",
    remedy: "Light an oil lamp (Diya) under a Banyan/Peepal tree on Saturdays.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Aquarius: {
    moonSign: "Aquarius (Kumbh)",
    status: "Peak Phase (Second Dhaiya)",
    intensity: "High Transformation",
    focusArea: "Deep inner discipline, patience, overcoming structural changes.",
    remedy: "Donate black sesame seeds, mustard oil, or blue cloth to the needy on Saturday.",
    mantra: "Om Praam Preem Proum Sah Shanaishcharaya Namah"
  },
  Pisces: {
    moonSign: "Pisces (Meen)",
    status: "Rising Phase (First Dhaiya)",
    intensity: "Moderate Adjustment",
    focusArea: "Health awareness, managing unexpected expenses, spiritual retreat.",
    remedy: "Recite Hanuman Chalisa daily and feed street dogs on Saturday evenings.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Aries: {
    moonSign: "Aries (Mesh)",
    status: "No Sade Sati Currently",
    intensity: "Favorable Alignment",
    focusArea: "General Saturn protection; focus on courage and leadership projects.",
    remedy: "Maintain honesty and discipline in professional dealings.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Taurus: {
    moonSign: "Taurus (Vrishabha)",
    status: "No Sade Sati Currently",
    intensity: "Harmonious Saturn Aspect",
    focusArea: "Venus-Saturn friendship brings steady growth and financial resilience.",
    remedy: "Respect workers, elders, and domestic helpers.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Gemini: {
    moonSign: "Gemini (Mithun)",
    status: "No Sade Sati Currently",
    intensity: "Favorable Intellect",
    focusArea: "Intellectual projects flourish under disciplined mental focus.",
    remedy: "Feed birds green grains or seeds on Wednesdays.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Cancer: {
    moonSign: "Cancer (Kark)",
    status: "No Sade Sati Currently",
    intensity: "Emotional Relief",
    focusArea: "Emotional stability and family harmony.",
    remedy: "Offer water to Lord Shiva's Shivling on Mondays.",
    mantra: "Om Namah Shivaya"
  },
  Leo: {
    moonSign: "Leo (Simha)",
    status: "No Sade Sati Currently",
    intensity: "Royal Focus",
    focusArea: "Leadership status and creative authority.",
    remedy: "Offer water to Sun (Surya Arghya) every morning.",
    mantra: "Om Suryaya Namah"
  },
  Virgo: {
    moonSign: "Virgo (Kanya)",
    status: "No Sade Sati Currently",
    intensity: "Analytical Ease",
    focusArea: "Health recovery, organization, and career productivity.",
    remedy: "Keep your workspace clean and organized.",
    mantra: "Om Budhaya Namah"
  },
  Libra: {
    moonSign: "Libra (Tula)",
    status: "No Sade Sati Currently",
    intensity: "Exalted Saturn Grace",
    focusArea: "Justice, fairness, business partnerships, and diplomacy.",
    remedy: "Help elderly people and donate blankets in winter.",
    mantra: "Om Sham Shanaishcharaya Namah"
  },
  Scorpio: {
    moonSign: "Scorpio (Vrishchik)",
    status: "No Sade Sati Currently",
    intensity: "Transformative Peace",
    focusArea: "Intuitive strength, research, and overcoming past debts.",
    remedy: "Chant Hanuman Chalisa 7 times on Tuesday.",
    mantra: "Om Hanumate Namah"
  },
  Sagittarius: {
    moonSign: "Sagittarius (Dhanu)",
    status: "No Sade Sati Currently",
    intensity: "Wisdom Expansion",
    focusArea: "Higher learning, philosophy, and fortunate travels.",
    remedy: "Respect teachers and spiritual gurus.",
    mantra: "Om Gurave Namah"
  }
};

const SIGNS = Object.keys(SADE_SATI_DATABASE);

export function SadeSatiChecker() {
  const [selectedSign, setSelectedSign] = useState("Aquarius");

  const result = useMemo(() => SADE_SATI_DATABASE[selectedSign] || SADE_SATI_DATABASE["Aquarius"], [selectedSign]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3">🪐 Saturn Transit & Shani Remedy</div>
        <h2 className="font-display text-3xl font-bold gradient-text">Sade Sati & Saturn Phase Checker</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Check if your Moon Sign is undergoing Shani Sade Sati (7.5-year cycle) and unlock authentic Vedic remedies.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SIGNS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedSign === sign
                ? "bg-emerald-400 text-emerald-950 font-bold shadow-lg border border-emerald-300"
                : "bg-black/40 text-emerald-200 border border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50">
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">{result.moonSign}</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{result.status}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-300">Phase Impact</span>
            <div className="text-sm font-display font-bold text-amber-300">{result.intensity}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <span>🎯</span> Key Focus & Life Lessons
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.focusArea}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2 mb-1">
              <span>🕉️</span> Recommended Vedic Remedy (Shani Daan)
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.remedy}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
              🙏 Sacred Chanting Mantra (Saturday Evenings)
            </h4>
            <p className="text-sm font-mono font-bold text-white italic">"{result.mantra}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
