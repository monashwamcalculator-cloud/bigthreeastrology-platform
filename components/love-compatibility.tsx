"use client";

import { useMemo, useState } from "react";

type SignInfo = {
  name: string;
  emoji: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  ruler: string;
};

const ZODIAC_SIGNS: SignInfo[] = [
  { name: "Aries", emoji: "♈", element: "Fire", ruler: "Mars" },
  { name: "Taurus", emoji: "♉", element: "Earth", ruler: "Venus" },
  { name: "Gemini", emoji: "♊", element: "Air", ruler: "Mercury" },
  { name: "Cancer", emoji: "♋", element: "Water", ruler: "Moon" },
  { name: "Leo", emoji: "♌", element: "Fire", ruler: "Sun" },
  { name: "Virgo", emoji: "♍", element: "Earth", ruler: "Mercury" },
  { name: "Libra", emoji: "♎", element: "Air", ruler: "Venus" },
  { name: "Scorpio", emoji: "♏", element: "Water", ruler: "Pluto & Mars" },
  { name: "Sagittarius", emoji: "♐", element: "Fire", ruler: "Jupiter" },
  { name: "Capricorn", emoji: "♑", element: "Earth", ruler: "Saturn" },
  { name: "Aquarius", emoji: "♒", element: "Air", ruler: "Uranus & Saturn" },
  { name: "Pisces", emoji: "♓", element: "Water", ruler: "Neptune & Jupiter" }
];

// Calculate compatibility score and feedback based on element and zodiac dynamics
function calculateCompatibility(sign1: SignInfo, sign2: SignInfo) {
  const e1 = sign1.element;
  const e2 = sign2.element;

  let baseScore = 75;
  let elementDesc = "";
  let dynamics = "";
  let tip = "";

  // Same Element
  if (e1 === e2) {
    baseScore = 92;
    elementDesc = `Double ${e1} Element Connection`;
    dynamics = `Instant mutual understanding! Both of you share the same energy flow, worldview, and emotional rhythm.`;
    tip = `Watch out for amplifying each other's blind spots. Keep external perspectives fresh.`;
  }
  // Complementary Elements: Fire + Air
  else if ((e1 === "Fire" && e2 === "Air") || (e1 === "Air" && e2 === "Fire")) {
    baseScore = 95;
    elementDesc = `Fire & Air Kinetic Ignition`;
    dynamics = `Electric synergy! Air feeds the flames of Fire's passion, while Fire inspires Air's intellect into exciting reality.`;
    tip = `Ensure plans receive grounding follow-through so inspiration turns into lasting bond.`;
  }
  // Complementary Elements: Earth + Water
  else if ((e1 === "Earth" && e2 === "Water") || (e1 === "Water" && e2 === "Earth")) {
    baseScore = 94;
    elementDesc = `Earth & Water Nurturing Sanctuary`;
    dynamics = `Deeply grounding and emotionally fulfilling. Water nourishes Earth's stability, and Earth provides safe container for Water's emotions.`;
    tip = `Avoid falling into static routines. Introduce spontaneous adventures together.`;
  }
  // Friction Elements: Fire + Water
  else if ((e1 === "Fire" && e2 === "Water") || (e1 === "Water" && e2 === "Fire")) {
    baseScore = 68;
    elementDesc = `Fire & Water Steam & Intensity`;
    dynamics = `Passionate yet delicate balance. Fire's direct intensity can steam or overwhelm Water, while Water's moods can extinguish Fire's spark.`;
    tip = `Practice compassionate communication. Fire needs independence; Water needs emotional reassurance.`;
  }
  // Friction Elements: Earth + Air
  else if ((e1 === "Earth" && e2 === "Air") || (e1 === "Air" && e2 === "Earth")) {
    baseScore = 70;
    elementDesc = `Earth & Air Practical vs Abstract`;
    dynamics = `Air brings ideas and conversation, while Earth seeks tangible results and stability. Great for business partnerships!`;
    tip = `Earth must embrace new concepts; Air must respect boundaries and realistic pacing.`;
  }
  // Friction Elements: Fire + Earth
  else if ((e1 === "Fire" && e2 === "Earth") || (e1 === "Earth" && e2 === "Fire")) {
    baseScore = 72;
    elementDesc = `Fire & Earth Builder & Spark`;
    dynamics = `Fire acts quickly on impulse; Earth plans meticulously. When aligned, Fire initiates and Earth builds the legacy.`;
    tip = `Respect each other's speed. Don't rush Earth, and don't smother Fire's enthusiasm.`;
  }
  // Friction Elements: Water + Air
  else {
    baseScore = 65;
    elementDesc = `Water & Air Heart vs Mind`;
    dynamics = `Air analyzes situations logically, while Water feels them intuitively. Bridging emotional depth with mental clarity creates profound growth.`;
    tip = `Air should validate Water's feelings without dissecting them logically; Water should communicate needs clearly.`;
  }

  // Same Sign Bonus / Twist
  if (sign1.name === sign2.name) {
    baseScore = 88;
    elementDesc = `${sign1.name} Cosmic Mirror`;
    dynamics = `You are looking directly into a cosmic mirror! You share identical strengths and weaknesses.`;
  }

  return {
    score: baseScore,
    elementDesc,
    dynamics,
    tip
  };
}

export function LoveCompatibilityCalculator() {
  const [sign1Name, setSign1Name] = useState("Leo");
  const [sign2Name, setSign2Name] = useState("Sagittarius");

  const sign1 = useMemo(() => ZODIAC_SIGNS.find((s) => s.name === sign1Name) || ZODIAC_SIGNS[4], [sign1Name]);
  const sign2 = useMemo(() => ZODIAC_SIGNS.find((s) => s.name === sign2Name) || ZODIAC_SIGNS[8], [sign2Name]);

  const matchResult = useMemo(() => calculateCompatibility(sign1, sign2), [sign1, sign2]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl font-bold gradient-text-gold">Zodiac Love Compatibility Matcher</h3>
        <p className="text-cosmic-200 text-sm mt-2 max-w-xl mx-auto">
          Select your sign and your partner's sign to reveal your romantic match percentage, elemental harmony, and key relationship dynamics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
        {/* Sign 1 Picker */}
        <div className="glass-card-hover p-5 text-center">
          <label className="text-xs uppercase tracking-widest font-semibold text-accent-gold mb-2 block">Your Sign</label>
          <div className="text-5xl mb-3">{sign1.emoji}</div>
          <select
            value={sign1Name}
            onChange={(e) => setSign1Name(e.target.value)}
            className="input-cosmic w-full text-center font-display font-semibold text-lg cursor-pointer"
          >
            {ZODIAC_SIGNS.map((s) => (
              <option key={s.name} value={s.name} className="bg-cosmic-900 text-white">
                {s.emoji} {s.name} ({s.element})
              </option>
            ))}
          </select>
        </div>

        {/* Sign 2 Picker */}
        <div className="glass-card-hover p-5 text-center">
          <label className="text-xs uppercase tracking-widest font-semibold text-accent-rose mb-2 block">Partner's Sign</label>
          <div className="text-5xl mb-3">{sign2.emoji}</div>
          <select
            value={sign2Name}
            onChange={(e) => setSign2Name(e.target.value)}
            className="input-cosmic w-full text-center font-display font-semibold text-lg cursor-pointer"
          >
            {ZODIAC_SIGNS.map((s) => (
              <option key={s.name} value={s.name} className="bg-cosmic-900 text-white">
                {s.emoji} {s.name} ({s.element})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Match Result Display */}
      <div className="border-t border-cosmic-700/50 pt-8 animate-slide-up">
        <div className="glass-card-hover p-6 md:p-8 text-center max-w-2xl mx-auto border-accent-gold/40 relative overflow-hidden">
          <div className="text-xs font-semibold uppercase tracking-widest text-cosmic-200 mb-2">
            {sign1.name} {sign1.emoji} + {sign2.name} {sign2.emoji}
          </div>

          <div className="flex items-center justify-center gap-4 my-4">
            <div className="text-6xl font-display font-extrabold gradient-text-gold animate-pulse-glow px-6 py-3 rounded-2xl bg-black/50 border border-accent-gold/40">
              {matchResult.score}%
            </div>
          </div>

          <div className="badge badge-gold text-sm px-4 py-1.5 mb-6">{matchResult.elementDesc}</div>

          <div className="space-y-4 text-left border-t border-cosmic-700/40 pt-6">
            <div>
              <h5 className="text-sm font-semibold text-accent-gold flex items-center gap-2 mb-1">
                <span>💖</span> Relationship Dynamics
              </h5>
              <p className="text-cosmic-100 text-sm leading-relaxed">{matchResult.dynamics}</p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-accent-cyan flex items-center gap-2 mb-1">
                <span>💡</span> Growth Tip
              </h5>
              <p className="text-cosmic-200 text-sm leading-relaxed">{matchResult.tip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
