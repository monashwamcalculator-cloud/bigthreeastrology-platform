"use client";

import { useMemo, useState } from "react";

const LETTER_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7
};

type DestinyData = {
  num: number;
  title: string;
  archetype: string;
  careerPath: string;
};

const DESTINY_DB: Record<number, DestinyData> = {
  1: { num: 1, title: "The Fearless Leader & Pioneer", archetype: "Originality, executive ambition, independent vision.", careerPath: "Entrepreneur, CEO, Founder, Athletic Coach, Inventor." },
  2: { num: 2, title: "The Peacemaker & Diplomat", archetype: "Harmonious partnerships, empathy, intuition, balance.", careerPath: "Counselor, Mediator, Artist, Diplomat, Therapist." },
  3: { num: 3, title: "The Creative Communicator", archetype: "Self-expression, joy, artistic talent, optimism.", careerPath: "Writer, Speaker, Actor, Content Creator, Designer." },
  4: { num: 4, title: "The Master Architect & Builder", archetype: "Structure, discipline, reliability, practical foundation.", careerPath: "Engineer, Architect, Financial Analyst, Project Manager." },
  5: { num: 5, title: "The Freedom Seeker & Adventurer", archetype: "Versatility, travel, rapid adaptation, magnetic energy.", careerPath: "Journalist, Travel Specialist, Marketer, Consultant." },
  6: { num: 6, title: "The Nurturer & Cosmic Caregiver", archetype: "Family harmony, healing, domestic protection, beauty.", careerPath: "Healthcare Professional, Teacher, Interior Designer, Mentor." },
  7: { num: 7, title: "The Mystic Scholar & Researcher", archetype: "Analytical depth, spiritual seeking, intuition, solitude.", careerPath: "Data Scientist, Philosopher, Astrologer, Researcher." },
  8: { num: 8, title: "The Financial Powerhouse & Executive", archetype: "Material mastery, wealth accumulation, executive authority.", careerPath: "Investment Banker, Real Estate Mogul, Executive Director." },
  9: { num: 9, title: "The Universal Humanitarian & Visionary", archetype: "Global compassion, wisdom completion, spiritual leadership.", careerPath: "Philanthropist, International Leader, Artist, Healer." }
};

function calculateDestinyNumber(name: string): { expressionNum: number; data: DestinyData } {
  const clean = name.toUpperCase().replace(/[^A-Z]/g, "");
  if (!clean) return { expressionNum: 1, data: DESTINY_DB[1] };

  let total = 0;
  for (let i = 0; i < clean.length; i++) {
    total += LETTER_VALUES[clean[i]] || 1;
  }

  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = total.toString().split("").reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  }

  const singleDigit = total > 9 ? (total % 9 || 9) : total;
  return { expressionNum: total, data: DESTINY_DB[singleDigit] || DESTINY_DB[1] };
}

export function DestinyNumberCalculator() {
  const [fullName, setFullName] = useState("");

  const { expressionNum, data } = useMemo(() => calculateDestinyNumber(fullName), [fullName]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">📜 Chaldean & Pythagorean Name Math</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">Destiny & Expression Number Calculator</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Enter your full birth name to calculate your Expression / Destiny Number and career path vibration.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <label className="text-xs font-semibold text-sky-200 block mb-1">Enter Full Name</label>
        <input
          type="text"
          className="input-cosmic w-full text-center text-base font-bold text-amber-300"
          placeholder="e.g. Alexander Pierce"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50 text-center">
        <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block mb-1">
          Expression Destiny Number
        </span>
        <div className="text-5xl font-display font-extrabold gradient-text-gold mb-2">
          Number {expressionNum}
        </div>
        <p className="text-base font-bold text-white mb-4">{data.title}</p>

        <div className="space-y-3 text-left border-t border-sky-500/20 pt-4">
          <div>
            <span className="text-xs font-semibold text-sky-300">Core Archetype:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{data.archetype}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-300">Target Vocation & Careers:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{data.careerPath}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
