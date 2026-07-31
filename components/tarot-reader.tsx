"use client";

import { useMemo, useState } from "react";

type TarotCard = {
  name: string;
  arcana: "Major" | "Minor";
  keywords: string[];
  pastMeaning: string;
  presentMeaning: string;
  futureMeaning: string;
  imageEmoji: string;
};

const TAROT_DECK: TarotCard[] = [
  {
    name: "The Fool",
    arcana: "Major",
    keywords: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit"],
    pastMeaning: "A past leap of faith set your current life journey into motion.",
    presentMeaning: "Embrace fresh possibilities today with an open, trusting heart.",
    futureMeaning: "An exciting unchartered adventure or fresh start awaits you ahead.",
    imageEmoji: "🃏"
  },
  {
    name: "The Magician",
    arcana: "Major",
    keywords: ["Manifestation", "Resourcefulness", "Power", "Inspired Action"],
    pastMeaning: "Past skills and focused willpower helped build your present foundation.",
    presentMeaning: "You hold all tools necessary to manifest your intentions right now.",
    futureMeaning: "Your creative vision will transform into tangible reality.",
    imageEmoji: "🪄"
  },
  {
    name: "The High Priestess",
    arcana: "Major",
    keywords: ["Intuition", "Sacred Knowledge", "Divine Feminine", "Subconscious"],
    pastMeaning: "Inner quiet reflection in the past protected you from hidden pitfalls.",
    presentMeaning: "Listen closely to your gut instinct today; quiet answers lie within.",
    futureMeaning: "Unseen wisdom and deeper spiritual clarity will soon reveal themselves.",
    imageEmoji: "🌙"
  },
  {
    name: "The Empress",
    arcana: "Major",
    keywords: ["Abundance", "Nurturing", "Fertility", "Nature & Beauty"],
    pastMeaning: "Periods of creative growth and care laid the groundwork for prosperity.",
    presentMeaning: "Surround yourself with beauty, comfort, and creative expression.",
    futureMeaning: "Bountiful growth, material success, and emotional warmth are incoming.",
    imageEmoji: "👑"
  },
  {
    name: "The Emperor",
    arcana: "Major",
    keywords: ["Authority", "Structure", "Stability", "Leadership"],
    pastMeaning: "Discipline and strong boundaries in past experiences provided stability.",
    presentMeaning: "Take structured control of your environment and set clear boundaries.",
    futureMeaning: "A position of leadership, order, and steady authority will be secured.",
    imageEmoji: "🏛️"
  },
  {
    name: "The Lovers",
    arcana: "Major",
    keywords: ["Harmony", "Soul Connections", "Choices", "Value Alignment"],
    pastMeaning: "A key relationship or moral choice shaped your personal values.",
    presentMeaning: "Align your decisions with your core values and cultivate deep connection.",
    futureMeaning: "A harmonious union or life-changing partnership will flourish.",
    imageEmoji: "💖"
  },
  {
    name: "The Chariot",
    arcana: "Major",
    keywords: ["Willpower", "Drive", "Victory", "Overcoming Obstacles"],
    pastMeaning: "Past determination helped you overcome conflicting forces.",
    presentMeaning: "Maintain strict focus and drive through current challenges.",
    futureMeaning: "Triumphant victory and rapid progress toward your goal is assured.",
    imageEmoji: "🏎️"
  },
  {
    name: "Wheel of Fortune",
    arcana: "Major",
    keywords: ["Good Luck", "Karma", "Cycles", "Cosmic Turning Point"],
    pastMeaning: "Cosmic shifts and cycles previously shifted your life path unexpected.",
    presentMeaning: "The universe is turning circumstances in your favor today.",
    futureMeaning: "A fortunate turn of events and positive karma will arrive swiftly.",
    imageEmoji: "🎡"
  },
  {
    name: "The Star",
    arcana: "Major",
    keywords: ["Hope", "Inspiration", "Healing", "Cosmic Blessing"],
    pastMeaning: "Healing after past turmoil renewed your hope and inner faith.",
    presentMeaning: "Peace, serene clarity, and inspiration flow toward you now.",
    futureMeaning: "Your long-term dreams are blessed with divine protection and light.",
    imageEmoji: "⭐"
  },
  {
    name: "The Sun",
    arcana: "Major",
    keywords: ["Joy", "Success", "Vitality", "Radiance"],
    pastMeaning: "Pure joy and clarity illuminated your recent path.",
    presentMeaning: "Your natural radiance inspires everyone around you today.",
    futureMeaning: "Unbounded success, warmth, and celebration are coming your way.",
    imageEmoji: "☀️"
  }
];

export function TarotReader() {
  const [drawnCards, setDrawnCards] = useState<[TarotCard, TarotCard, TarotCard] | null>(null);
  const [revealed, setRevealed] = useState([false, false, false]);

  const drawCards = () => {
    // Pick 3 unique random cards
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    setDrawnCards([shuffled[0], shuffled[1], shuffled[2]]);
    setRevealed([true, true, true]);
  };

  const handleReset = () => {
    setDrawnCards(null);
    setRevealed([false, false, false]);
  };

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-8">
        <div className="badge badge-gold mb-3">🎴 3-Card Cosmic Tarot Spread</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text-gold">Daily Intuitive Tarot Guidance</h2>
        <p className="mt-2 text-cosmic-100 text-sm max-w-xl mx-auto">
          Shuffle the sacred cosmic deck to reveal your 3-card reading: Past Influences, Present Energy, and Future Outlook.
        </p>
      </div>

      {!drawnCards ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="flex gap-4 mb-8 animate-pulse-glow">
            {["🎴", "🔮", "🎴"].map((icon, i) => (
              <div
                key={i}
                className="w-24 h-36 rounded-2xl bg-gradient-to-b from-cosmic-700 to-cosmic-950 border border-accent-gold/40 flex items-center justify-center text-4xl shadow-xl transform hover:-translate-y-2 transition-all cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>

          <button onClick={drawCards} className="btn-glow px-10 py-4 text-lg font-bold">
            ✨ Draw Your 3 Tarot Cards
          </button>
        </div>
      ) : (
        <div className="space-y-8 animate-slide-up">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "1. Past Influences ⏳", card: drawnCards[0], meaning: drawnCards[0].pastMeaning },
              { title: "2. Present Energy ⚡", card: drawnCards[1], meaning: drawnCards[1].presentMeaning },
              { title: "3. Future Outlook 🔮", card: drawnCards[2], meaning: drawnCards[2].futureMeaning }
            ].map((slot, idx) => (
              <div key={idx} className="glass-card-hover p-6 border-accent-gold/30 flex flex-col items-center text-center bg-black/40">
                <span className="text-xs uppercase tracking-widest font-semibold text-accent-gold mb-3">{slot.title}</span>
                <div className="text-6xl mb-3 drop-shadow-md animate-pulse-glow">{slot.card.imageEmoji}</div>
                <h4 className="text-xl font-display font-bold text-white mb-2">{slot.card.name}</h4>
                <span className="text-xs px-3 py-1 rounded-full bg-cosmic-800/60 border border-white/10 text-cosmic-200 mb-4">
                  {slot.card.arcana} Arcana
                </span>

                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {slot.card.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-cosmic-900/80 text-cosmic-300 border border-white/5">
                      {kw}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-cosmic-100 italic leading-relaxed border-t border-cosmic-700/40 pt-3 mt-auto">
                  "{slot.meaning}"
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button onClick={handleReset} className="btn-secondary flex items-center gap-2">
              <span>🔄</span> Draw Cards Again
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
