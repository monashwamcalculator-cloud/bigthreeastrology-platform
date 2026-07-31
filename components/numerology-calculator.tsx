"use client";

import { useMemo, useState } from "react";

type NumerologyInterpretation = {
  title: string;
  keyword: string;
  summary: string;
  strengths: string[];
  challenges: string[];
  careers: string[];
};

const LIFE_PATH_DATA: Record<number, NumerologyInterpretation> = {
  1: {
    title: "The Leader & Pioneer",
    keyword: "Independence & Innovation",
    summary: "Life Path 1 individuals are natural-born leaders, pioneers, and innovators. You thrive when given total autonomy to forge your own path.",
    strengths: ["Strong willpower", "Self-reliance", "Original thinking", "Courage"],
    challenges: ["Impatience", "Stubbornness", "Fear of dependency"],
    careers: ["Entrepreneur", "Executive", "Inventor", "Freelancer", "Team Captain"]
  },
  2: {
    title: "The Mediator & Harmonizer",
    keyword: "Cooperation & Intuition",
    summary: "Life Path 2 is the path of peace, diplomacy, and deep emotional intelligence. You excel at bringing harmony to chaotic situations.",
    strengths: ["Diplomacy", "Empathy", "Attunement", "Patience"],
    challenges: ["Over-sensitivity", "Avoiding conflict", "Self-doubt"],
    careers: ["Counselor", "Diplomat", "Mediator", "Healer", "Artist"]
  },
  3: {
    title: "The Creative Communicator",
    keyword: "Expression & Optimism",
    summary: "Life Path 3 represents artistic flair, verbal eloquence, and contagious joy. You possess a natural gift for inspiring others.",
    strengths: ["Charisma", "Creativity", "Humor", "Communication"],
    challenges: ["Scattered focus", "Superficiality", "Mood swings"],
    careers: ["Writer", "Actor", "Public Speaker", "Designer", "Marketer"]
  },
  4: {
    title: "The Master Builder",
    keyword: "Stability & Order",
    summary: "Life Path 4 embodies discipline, practical wisdom, and methodical execution. You build foundations that endure.",
    strengths: ["Reliability", "Organization", "Loyalty", "High work ethic"],
    challenges: ["Rigidity", "Over-cautiousness", "Resistance to change"],
    careers: ["Architect", "Engineer", "Financial Analyst", "Project Manager", "Lawyer"]
  },
  5: {
    title: "The Freedom Seeker",
    keyword: "Adaptability & Adventure",
    summary: "Life Path 5 is driven by curiosity, travel, and personal freedom. You thrive on change and sensory exploration.",
    strengths: ["Versatility", "Resourcefulness", "Persuasion", "Boldness"],
    challenges: ["Restlessness", "Impulsiveness", "Lack of discipline"],
    careers: ["Travel Writer", "Sales Strategist", "Journalist", "Event Producer", "Consultant"]
  },
  6: {
    title: "The Nurturer & Protector",
    keyword: "Responsibility & Compassion",
    summary: "Life Path 6 centers around family, service, and creating beauty in community. You are the emotional anchor for those around you.",
    strengths: ["Generosity", "Protectiveness", "Design sense", "Warmth"],
    challenges: ["Perfectionism", "Over-sacrificing", "Meddlesomeness"],
    careers: ["Teacher", "Therapist", "Interior Designer", "Social Worker", "Healthcare Professional"]
  },
  7: {
    title: "The Truth Seeker & Mystic",
    keyword: "Wisdom & Analysis",
    summary: "Life Path 7 is the thinker, scholar, and spiritual investigator. You search beneath the surface of life for deeper truths.",
    strengths: ["Analytical depth", "Intuition", "Spiritual insight", "Focus"],
    challenges: ["Skeptical isolation", "Secretiveness", "Over-analyzing"],
    careers: ["Researcher", "Data Scientist", "Philosopher", "Investigator", "Astrologer"]
  },
  8: {
    title: "The Powerhouse & Strategist",
    keyword: "Abundance & Authority",
    summary: "Life Path 8 is associated with material mastery, executive power, and financial acumen. You understand how to turn vision into tangible empire.",
    strengths: ["Ambition", "Financial judgment", "Resilience", "Leadership"],
    challenges: ["Workaholism", "Material obsession", "Control issues"],
    careers: ["CEO", "Investment Banker", "Real Estate Developer", "Judge", "Business Owner"]
  },
  9: {
    title: "The Humanitarian & Visionary",
    keyword: "Universal Love & Completion",
    summary: "Life Path 9 is the highest single-digit vibration, representing cosmic wisdom, artistic soulfulness, and dedication to planetary good.",
    strengths: ["Compassion", "Broad perspective", "Idealism", "Artistic gifts"],
    challenges: ["Holding onto the past", "Emotional detachment", "Martyrdom"],
    careers: ["Philanthropist", "Artist", "Human Rights Advocate", "Environmentalist", "Mentor"]
  },
  11: {
    title: "Master Number 11: The Intuitive Illuminator",
    keyword: "Spiritual Vision & Inspiration",
    summary: "Master Number 11 carries intense spiritual frequency, heightened intuition, and electric creative energy. You serve as a bridge of enlightenment.",
    strengths: ["Profound intuition", "Visionary insight", "Charismatic presence"],
    challenges: ["Nervous tension", "Overwhelmed by energy", "High expectations"],
    careers: ["Spiritual Teacher", "Intuitive Guide", "Visionary Artist", "Motivational Speaker"]
  },
  22: {
    title: "Master Number 22: The Master Architect",
    keyword: "Manifestation & Global Vision",
    summary: "Master Number 22 turns grand spiritual visions into physical reality. It combines the practical power of 4 with the visionary intuition of 11.",
    strengths: ["Supreme manifestation capacity", "Strategic genius", "Unshakable poise"],
    challenges: ["Extreme self-pressure", "Fear of failure on large scale"],
    careers: ["Global Entrepreneur", "Urban Planner", "International Leader", "Foundational Reformer"]
  },
  33: {
    title: "Master Number 33: The Master Teacher",
    keyword: "Unconditional Love & Universal Healing",
    summary: "Master Number 33 represents pure devotion to the spiritual evolution of humanity. You radiate unconditional love and transformational guidance.",
    strengths: ["Boundless compassion", "Transformational presence", "Mastery of cosmic law"],
    challenges: ["Overwhelming sense of burden", "Emotional exhaustion"],
    careers: ["Spiritual Luminary", "Master Healer", "Humanitarian Pioneer", "Global Mentor"]
  }
};

// Helper function to sum digits of a number down to single digit or master number
function reduceNumber(num: number, isFinalStep = false): number {
  if (num === 11 || num === 22 || num === 33) return num;
  let sum = num;
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return sum;
}

export function NumerologyCalculator() {
  const [activeTab, setActiveTab] = useState<"lifepath" | "expression">("lifepath");
  const [birthDate, setBirthDate] = useState("");
  const [fullName, setFullName] = useState("");

  // Life Path Calculation
  const lifePathResult = useMemo(() => {
    if (!birthDate) return null;
    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;

    const year = reduceNumber(parseInt(parts[0], 10));
    const month = reduceNumber(parseInt(parts[1], 10));
    const day = reduceNumber(parseInt(parts[2], 10));

    const total = reduceNumber(year + month + day, true);
    return {
      number: total,
      details: LIFE_PATH_DATA[total] || LIFE_PATH_DATA[reduceNumber(total)] || LIFE_PATH_DATA[1]
    };
  }, [birthDate]);

  // Expression Number (Name Numerology) Calculation
  const expressionResult = useMemo(() => {
    if (!fullName.trim()) return null;
    const letterMap: Record<string, number> = {
      a: 1, j: 1, s: 1,
      b: 2, k: 2, t: 2,
      c: 3, l: 3, u: 3,
      d: 4, m: 4, v: 4,
      e: 5, n: 5, w: 5,
      f: 6, o: 6, x: 6,
      g: 7, p: 7, y: 7,
      h: 8, q: 8, z: 8,
      i: 9, r: 9
    };

    const sanitized = fullName.toLowerCase().replace(/[^a-z]/g, "");
    if (!sanitized) return null;

    let totalSum = 0;
    for (const char of sanitized) {
      totalSum += letterMap[char] || 0;
    }

    const number = reduceNumber(totalSum, true);
    return {
      number,
      details: LIFE_PATH_DATA[number] || LIFE_PATH_DATA[reduceNumber(number)] || LIFE_PATH_DATA[1]
    };
  }, [fullName]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab("lifepath")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all text-sm flex items-center gap-2 ${
            activeTab === "lifepath"
              ? "btn-primary shadow-lg"
              : "btn-secondary hover:border-accent-gold"
          }`}
        >
          <span>🔢</span> Life Path Number
        </button>
        <button
          onClick={() => setActiveTab("expression")}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all text-sm flex items-center gap-2 ${
            activeTab === "expression"
              ? "btn-primary shadow-lg"
              : "btn-secondary hover:border-accent-gold"
          }`}
        >
          <span>🔤</span> Name Numerology (Expression)
        </button>
      </div>

      {activeTab === "lifepath" ? (
        <div>
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl font-bold gradient-text-gold">Life Path Number Calculator</h3>
            <p className="text-cosmic-200 text-sm mt-1">
              Your Life Path Number is the most important number in your numerology chart, revealing your life purpose and innate destiny.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <label className="text-sm font-medium text-cosmic-100 pl-1 mb-2 block">Enter Your Birth Date</label>
            <input
              type="date"
              className="input-cosmic w-full text-center text-lg"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          {lifePathResult && (
            <div className="mt-8 border-t border-cosmic-700/50 pt-8 animate-slide-up">
              <div className="glass-card-hover p-6 md:p-8 text-center max-w-2xl mx-auto border-accent-gold/40">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">Your Life Path Number</div>
                <div className="text-6xl font-display font-extrabold gradient-text-gold mb-3 animate-pulse-glow inline-block px-6 py-2 rounded-2xl bg-black/40 border border-accent-gold/30">
                  {lifePathResult.number}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{lifePathResult.details.title}</h4>
                <div className="badge badge-gold mb-4">{lifePathResult.details.keyword}</div>
                <p className="text-cosmic-100 leading-relaxed text-left md:text-center mb-6">
                  {lifePathResult.details.summary}
                </p>

                <div className="grid md:grid-cols-3 gap-4 text-left border-t border-cosmic-700/40 pt-6">
                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-emerald mb-2">✨ Core Strengths</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {lifePathResult.details.strengths.map((s, idx) => (
                        <li key={idx}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-rose mb-2">⚠️ Challenges</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {lifePathResult.details.challenges.map((c, idx) => (
                        <li key={idx}>• {c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-cyan mb-2">💼 Best Careers</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {lifePathResult.details.careers.map((car, idx) => (
                        <li key={idx}>• {car}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl font-bold gradient-text-gold">Name Numerology (Expression Number)</h3>
            <p className="text-cosmic-200 text-sm mt-1">
              Convert your full name into Pythagorean numerology frequency to discover how you express your natural talents to the world.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <label className="text-sm font-medium text-cosmic-100 pl-1 mb-2 block">Enter Your Full Birth Name</label>
            <input
              type="text"
              placeholder="e.g. Alexander John Smith"
              className="input-cosmic w-full text-center text-lg"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {expressionResult && (
            <div className="mt-8 border-t border-cosmic-700/50 pt-8 animate-slide-up">
              <div className="glass-card-hover p-6 md:p-8 text-center max-w-2xl mx-auto border-accent-cyan/40">
                <div className="text-xs font-semibold uppercase tracking-widest text-accent-cyan mb-2">Your Expression Number</div>
                <div className="text-6xl font-display font-extrabold gradient-text mb-3 animate-pulse-glow inline-block px-6 py-2 rounded-2xl bg-black/40 border border-accent-cyan/30">
                  {expressionResult.number}
                </div>
                <h4 className="text-2xl font-display font-bold text-white mb-2">{expressionResult.details.title}</h4>
                <div className="badge mb-4">{expressionResult.details.keyword}</div>
                <p className="text-cosmic-100 leading-relaxed text-left md:text-center mb-6">
                  {expressionResult.details.summary}
                </p>

                <div className="grid md:grid-cols-3 gap-4 text-left border-t border-cosmic-700/40 pt-6">
                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-emerald mb-2">✨ Natural Talents</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {expressionResult.details.strengths.map((s, idx) => (
                        <li key={idx}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-rose mb-2">⚠️ Potential Blindspots</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {expressionResult.details.challenges.map((c, idx) => (
                        <li key={idx}>• {c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-semibold text-accent-gold mb-2">🌟 Ideal Expression</h5>
                    <ul className="text-sm text-cosmic-200 space-y-1">
                      {expressionResult.details.careers.map((car, idx) => (
                        <li key={idx}>• {car}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
