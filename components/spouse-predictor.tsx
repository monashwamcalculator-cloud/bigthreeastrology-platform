"use client";

import { useMemo, useState } from "react";

type SpousePrediction = {
  sign: string;
  element: string;
  personality: string;
  appearance: string;
  meetingPlace: string;
  luckyInitials: string;
  compatibilityScore: string;
};

const SPOUSE_DATABASE: Record<string, SpousePrediction> = {
  Aries: {
    sign: "Aries (Mesh)",
    element: "Fire 🔴",
    personality: "Bold, energetic, protective, direct communicator, ambitious leader.",
    appearance: "Athletic build, expressive sharp eyes, confident posture, prominent eyebrows.",
    meetingPlace: "Sports event, fitness studio, competitive workspace, or adventure trip.",
    luckyInitials: "A, L, I, E",
    compatibilityScore: "94%"
  },
  Taurus: {
    sign: "Taurus (Vrishabha)",
    element: "Earth 🟢",
    personality: "Grounded, loyal, lover of comfort, financially prudent, soothing voice.",
    appearance: "Charming features, graceful neck/shoulders, calm warm eyes, stylish attire.",
    meetingPlace: "Gourmet restaurant, financial firm, art gallery, or nature retreat.",
    luckyInitials: "B, V, U, T",
    compatibilityScore: "96%"
  },
  Gemini: {
    sign: "Gemini (Mithun)",
    element: "Air ⚪",
    personality: "Witty, intellectually curious, humorous, social butterfly, youthful energy.",
    appearance: "Expressive hands, slender build, bright twinkling eyes, radiant smile.",
    meetingPlace: "Library, podcast studio, social media event, or networking seminar.",
    luckyInitials: "K, CH, GH, G",
    compatibilityScore: "91%"
  },
  Cancer: {
    sign: "Cancer (Kark)",
    element: "Water 🔵",
    personality: "Nurturing, deeply intuitive, family-oriented, emotionally devoted, empathetic.",
    appearance: "Round gentle face, luminous moon-like complexion, comforting warm embrace.",
    meetingPlace: "Family gathering, waterfront café, home decor venue, or volunteer group.",
    luckyInitials: "H, D, M, C",
    compatibilityScore: "98%"
  },
  Leo: {
    sign: "Leo (Simha)",
    element: "Fire 🔴",
    personality: "Charismatic, generous, lion-hearted pride, protective, dramatic flair.",
    appearance: "Thick voluminous hair, commanding presence, bright warm smile, regal stance.",
    meetingPlace: "Theater, luxury resort, leadership conference, or celebration party.",
    luckyInitials: "M, TT, L, S",
    compatibilityScore: "95%"
  },
  Virgo: {
    sign: "Virgo (Kanya)",
    element: "Earth 🟢",
    personality: "Detail-oriented, intelligent, modest, practical helper, highly organized.",
    appearance: "Neat refined style, clear perceptive eyes, youthful demeanor, polite poise.",
    meetingPlace: "Healthcare facility, research lab, educational institute, or organic market.",
    luckyInitials: "P, TTH, N, V",
    compatibilityScore: "93%"
  },
  Libra: {
    sign: "Libra (Tula)",
    element: "Air ⚪",
    personality: "Diplomatic, romantic, aesthetic connoisseur, harmonious, fair-minded.",
    appearance: "Symmetrical facial features, dimples, elegant fashion sense, gentle smile.",
    meetingPlace: "Wedding event, design studio, law firm, or musical concert.",
    luckyInitials: "R, T, L, K",
    compatibilityScore: "97%"
  },
  Scorpio: {
    sign: "Scorpio (Vrishchik)",
    element: "Water 🔵",
    personality: "Intense, fiercely loyal, mysterious, passionate, deeply perceptive.",
    appearance: "Captivating intense gaze, sharp jawline, magnetic aura, sophisticated style.",
    meetingPlace: "Research project, psychology seminar, evening venue, or financial consultation.",
    luckyInitials: "N, Y, S, M",
    compatibilityScore: "92%"
  },
  Sagittarius: {
    sign: "Sagittarius (Dhanu)",
    element: "Fire 🔴",
    personality: "Philosophical, adventure-seeking, honest, optimistic, freedom-loving.",
    appearance: "Tall stature, athletic legs, jovial open expression, energetic stride.",
    meetingPlace: "International airport, university campus, outdoor hike, or travel tour.",
    luckyInitials: "YE, BH, F, D",
    compatibilityScore: "96%"
  },
  Capricorn: {
    sign: "Capricorn (Makar)",
    element: "Earth 🟢",
    personality: "Disciplined, ambitious, responsible, mature authority, steadfast partner.",
    appearance: "Defined bone structure, serious dignified posture, timeless classic wardrobe.",
    meetingPlace: "Corporate office, executive meeting, historical monument, or formal gala.",
    luckyInitials: "J, KH, G, K",
    compatibilityScore: "94%"
  },
  Aquarius: {
    sign: "Aquarius (Kumbh)",
    element: "Air ⚪",
    personality: "Visionary, humanitarian, unconventional thinker, loyal friend, innovative.",
    appearance: "Unique distinct style, open friendly eyes, modern eccentric charm.",
    meetingPlace: "Tech hackathon, humanitarian NGO, social movement, or science exhibition.",
    luckyInitials: "G, S, SH, R",
    compatibilityScore: "93%"
  },
  Pisces: {
    sign: "Pisces (Meen)",
    element: "Water 🔵",
    personality: "Dreamy, artistic, compassionate, deeply spiritual, empathetic healer.",
    appearance: "Soft expressive eyes, gentle graceful movement, calming peaceful presence.",
    meetingPlace: "Spiritual retreat, beachside boardwalk, art exhibition, or music studio.",
    luckyInitials: "D, CH, TH, J",
    compatibilityScore: "97%"
  }
};

const SIGNS = Object.keys(SPOUSE_DATABASE);

export function SpousePredictor() {
  const [selectedSign, setSelectedSign] = useState("Libra");

  const result = useMemo(() => SPOUSE_DATABASE[selectedSign] || SPOUSE_DATABASE["Libra"], [selectedSign]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">💖 Soulmate & Spouse Insights</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Spouse & Future Partner Predictor</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Select your Sun sign or 7th House Ruler to reveal your future spouse's personality, appearance, and meeting place.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {SIGNS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedSign === sign
                ? "bg-amber-400 text-black font-bold shadow-lg border border-amber-300"
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
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Spouse Archetype</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{result.sign}</h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-300">Zodiac Element</span>
            <div className="text-sm font-display font-bold text-amber-300">{result.element}</div>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <div>
            <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
              <span>👑</span> Personality Traits & Nature
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.personality}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2 mb-1">
              <span>✨</span> Physical Features & Aura
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.appearance}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-teal-300 flex items-center gap-2 mb-1">
              <span>📍</span> Likely Meeting Environment
            </h4>
            <p className="text-emerald-100 text-sm leading-relaxed">{result.meetingPlace}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-emerald-500/20">
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
              <span className="text-xs text-emerald-300 block">Lucky First Initials</span>
              <span className="text-base font-display font-bold text-white">{result.luckyInitials}</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
              <span className="text-xs text-emerald-300 block">Soul Alignment Score</span>
              <span className="text-base font-display font-bold text-amber-300">{result.compatibilityScore}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
