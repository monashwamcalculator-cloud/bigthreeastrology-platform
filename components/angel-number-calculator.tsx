"use client";

import { useMemo, useState } from "react";

type AngelNumber = {
  code: string;
  title: string;
  cosmicMeaning: string;
  actionGuidance: string;
  frequencyHz: string;
};

const ANGEL_DATABASE: Record<string, AngelNumber> = {
  "111 / 1111": {
    code: "111 / 1111",
    title: "Instant Portal of Manifestation",
    cosmicMeaning: "Your thoughts are materializing rapidly into physical reality. The universe is taking a snapshot of your current mindset.",
    actionGuidance: "Focus strictly on desired goals, maintain high intentions, and avoid worrying about doubts.",
    frequencyHz: "111 Hz (Divine Initiation)"
  },
  "222 / 2222": {
    code: "222 / 2222",
    title: "Divine Balance & Sacred Trust",
    cosmicMeaning: "Everything is unfolding in perfect timing. Trust that seeds planted behind the scenes are taking root.",
    actionGuidance: "Stay patient, nurture ongoing partnerships, and maintain emotional harmony.",
    frequencyHz: "222 Hz (Harmony & Peace)"
  },
  "333 / 3333": {
    code: "333 / 3333",
    title: "Ascended Master Protection",
    cosmicMeaning: "Spiritual guides and higher masters surround you, encouraging creative self-expression and growth.",
    actionGuidance: "Speak your authentic truth, share your talents, and trust divine spiritual backing.",
    frequencyHz: "333 Hz (Creative Alignment)"
  },
  "444 / 4444": {
    code: "444 / 4444",
    title: "Angelic Shield & Solid Foundation",
    cosmicMeaning: "You are surrounded by protective guardian angels. Physical structural stability is taking shape.",
    actionGuidance: "Keep building disciplined habits; your hard work is backed by divine protection.",
    frequencyHz: "444 Hz (Angelic Protection)"
  },
  "555 / 5555": {
    code: "555 / 5555",
    title: "Massive Positive Life Shift",
    cosmicMeaning: "Major transformative changes are entering your life, clearing outdated energy to make space for freedom.",
    actionGuidance: "Embrace the shifts with an open heart; let go of comfort zones.",
    frequencyHz: "528 Hz (Transformation & Miracles)"
  },
  "777 / 7777": {
    code: "777 / 7777",
    title: "Divine Fortune & Spiritual Reward",
    cosmicMeaning: "Luck and spiritual blessings are flowing into your life. You are aligned with your highest soul timeline.",
    actionGuidance: "Expect miraculous synchronicities and celebrate your spiritual evolution.",
    frequencyHz: "777 Hz (Spiritual Light)"
  },
  "888 / 8888": {
    code: "888 / 8888",
    title: "Financial Abundance & Wealth Loop",
    cosmicMeaning: "Infinite financial flow and karmic reward for past diligent effort.",
    actionGuidance: "Prepare for financial growth, practice gratitude, and share prosperity.",
    frequencyHz: "888 Hz (Infinite Abundance)"
  },
  "999 / 9999": {
    code: "999 / 9999",
    title: "Sacred Cycle Completion",
    cosmicMeaning: "An important chapter of your life is coming to a natural, peaceful conclusion.",
    actionGuidance: "Release old emotional attachments and prepare for your next soul mission.",
    frequencyHz: "963 Hz (Crown Activation)"
  }
};

const CODES = Object.keys(ANGEL_DATABASE);

export function AngelNumberCalculator() {
  const [selectedCode, setSelectedCode] = useState("111 / 1111");

  const result = useMemo(() => ANGEL_DATABASE[selectedCode] || ANGEL_DATABASE["111 / 1111"], [selectedCode]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">⚡ Angel Numbers & Cosmic Frequency</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Angel Number Decoder & Frequency Guide</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Decode recurring number sequences (111, 222, 444, 777, 888) and unlock cosmic manifestation guidance.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CODES.map((code) => (
          <button
            key={code}
            onClick={() => setSelectedCode(code)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCode === code
                ? "bg-amber-400 text-black font-bold shadow-lg border border-amber-300"
                : "bg-black/40 text-emerald-200 border border-emerald-500/20 hover:bg-emerald-500/20"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50">
        <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Recurring Sequence</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{result.code}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-300">Resonance Frequency</span>
            <div className="text-sm font-display font-bold text-amber-300">{result.frequencyHz}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <span>✨</span> Cosmic Significance & Meaning
            </h4>
            <p className="text-lg font-display font-bold text-white mb-1">{result.title}</p>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.cosmicMeaning}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
              🚀 Recommended Manifestation Action
            </h4>
            <p className="text-sm font-semibold text-white">{result.actionGuidance}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
