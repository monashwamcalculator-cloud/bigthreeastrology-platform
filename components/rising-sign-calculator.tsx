"use client";

import { useMemo, useState } from "react";

type AscendantData = {
  sign: string;
  rulingPlanet: string;
  aura: string;
  physicalTraits: string;
  firstImpression: string;
};

const ASCENDANT_DATA: Record<string, AscendantData> = {
  Aries: { sign: "Aries Ascendant (Mesh Lagna ♈)", rulingPlanet: "Mars (Mangal)", aura: "Dynamic, fearless, energetic & pioneering", physicalTraits: "Athletic build, intense gaze, prominent brow, active posture.", firstImpression: "Bold, confident, direct, and quick to take initiative." },
  Taurus: { sign: "Taurus Ascendant (Vrishabha Lagna ♉)", rulingPlanet: "Venus (Shukra)", aura: "Calm, grounded, luxurious & steady", physicalTraits: "Harmonious facial proportions, soothing voice, solid posture.", firstImpression: "Composed, reliable, patient, and appreciative of beauty." },
  Gemini: { sign: "Gemini Ascendant (Mithuna Lagna ♊)", rulingPlanet: "Mercury (Budh)", aura: "Witty, expressive, curious & youthful", physicalTraits: "Expressive hands, quick eyes, slender or active stature.", firstImpression: "Friendly, articulate, intellectually curious, and engaging." },
  Cancer: { sign: "Cancer Ascendant (Karka Lagna ♋)", rulingPlanet: "Moon (Chandra)", aura: "Nurturing, empathetic, intuitive & magnetic", physicalTraits: "Expressive rounded face, gentle eyes, inviting warm presence.", firstImpression: "Protective, caring, emotionally perceptive, and approachable." },
  Leo: { sign: "Leo Ascendant (Simha Lagna ♌)", rulingPlanet: "Sun (Surya)", aura: "Radiant, regal, magnetic & generous", physicalTraits: "Mane-like hair, commanding posture, warm golden aura.", firstImpression: "Charismatic, proud, creative, and natural leader." },
  Virgo: { sign: "Virgo Ascendant (Kanya Lagna ♍)", rulingPlanet: "Mercury (Budh)", aura: "Analytical, clean, observant & refined", physicalTraits: "Neat grooming, clear posture, focused analytical eyes.", firstImpression: "Polite, organized, practical, and detail-oriented." },
  Libra: { sign: "Libra Ascendant (Tula Lagna ♎)", rulingPlanet: "Venus (Shukra)", aura: "Charming, diplomatic, elegant & balanced", physicalTraits: "Symmetrical features, dimples, stylish presentation.", firstImpression: "Gracious, tactful, peacemaking, and aesthetically refined." },
  Scorpio: { sign: "Scorpio Ascendant (Vrishchika Lagna ♏)", rulingPlanet: "Mars & Pluto", aura: "Intense, mysterious, hypnotic & powerful", physicalTraits: "Penetrating gaze, defined jawline, magnetic aura.", firstImpression: "Private, perceptive, deeply observant, and formidable." },
  Sagittarius: { sign: "Sagittarius Ascendant (Dhanu Lagna ♐)", rulingPlanet: "Jupiter (Guru)", aura: "Optimistic, adventurous, scholarly & open", physicalTraits: "Tall or athletic frame, bright open smile, active movement.", firstImpression: "Enthusiastic, humorous, philosophical, and free-spirited." },
  Capricorn: { sign: "Capricorn Ascendant (Makar Lagna ♑)", rulingPlanet: "Saturn (Shani)", aura: "Mature, disciplined, authoritative & serious", physicalTraits: "Strong bone structure, serious eyes, timeless elegant style.", firstImpression: "Professional, responsible, ambitious, and self-controlled." },
  Aquarius: { sign: "Aquarius Ascendant (Kumbha Lagna ♒)", rulingPlanet: "Saturn & Uranus", aura: "Unconventional, visionary, friendly & detached", physicalTraits: "Unique fashion, clear intellectual gaze, open posture.", firstImpression: "Original, progressive, humanitarian, and independent." },
  Pisces: { sign: "Pisces Ascendant (Meena Lagna ♓)", rulingPlanet: "Jupiter & Neptune", aura: "Dreamy, artistic, telepathic & gentle", physicalTraits: "Soft luminous skin, dreamy expressive eyes, fluid movement.", firstImpression: "Compassionate, imaginative, mystical, and empathetic." }
};

const ZODIAC_KEYS = Object.keys(ASCENDANT_DATA);

export function RisingSignCalculator() {
  const [selectedSign, setSelectedSign] = useState("Aries");

  const result = useMemo(() => ASCENDANT_DATA[selectedSign] || ASCENDANT_DATA["Aries"], [selectedSign]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-2">🌅 Lagna & First Impressions</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Rising Sign (Ascendant) Reader</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Select your Rising sign to unlock your physical aura, first impressions, and Ascendant ruling planet.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {ZODIAC_KEYS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSign === sign
                ? "bg-sky-400 text-sky-950 font-bold shadow-md border border-sky-300"
                : "bg-black/40 text-sky-200 border border-sky-500/20 hover:bg-sky-500/20"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50">
        <div className="border-b border-sky-500/20 pb-3 mb-4">
          <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">Ascendant Placement</span>
          <h3 className="text-xl font-display font-bold text-white mt-0.5">{result.sign}</h3>
        </div>

        <div className="space-y-3 text-left">
          <div>
            <span className="text-xs font-semibold text-amber-300">Ascendant Chart Ruler:</span>
            <p className="text-sm font-semibold text-white mt-0.5">{result.rulingPlanet}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-300">Outward Aura & Energy:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.aura}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-sky-300">Physical Traits & Style:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.physicalTraits}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-300">First Impression on Others:</span>
            <p className="text-xs text-sky-100 leading-relaxed mt-0.5">{result.firstImpression}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
