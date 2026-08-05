"use client";

import { useMemo, useState } from "react";

type MarsData = {
  sign: string;
  driveStyle: string;
  angerExpression: string;
  intimatePassion: string;
};

const MARS_DATABASE: Record<string, MarsData> = {
  Aries: { sign: "Mars in Aries ♂️ (Own Sign)", driveStyle: "Fearless, impulsive, competitive & pioneering. You take immediate action without waiting.", angerExpression: "Quick burst of fire, completely direct, but cools off just as fast.", intimatePassion: "High stamina, passionate, spontaneous, and direct." },
  Taurus: { sign: "Mars in Taurus ♂️", driveStyle: "Slow, steady, unshakeable determination. You build lasting legacy with quiet persistence.", angerExpression: "Hard to anger, but once triggered, like a quiet storm that endures for long.", intimatePassion: "Sensual, slow-paced, deeply physical, and enduring." },
  Gemini: { sign: "Mars in Gemini ♂️", driveStyle: "Intellectual, multi-tasking, agile & versatile. Driven by mental stimulation.", angerExpression: "Sharp verbal wit, sarcastic debater, fights with arguments.", intimatePassion: "Playful, communicative, variety-loving, and mentally stimulated." },
  Cancer: { sign: "Mars in Cancer ♂️", driveStyle: "Protective, emotionally driven, defensive & intuitive. Acts when protecting loved ones.", angerExpression: "Passive-aggressive or emotional withdrawal until feeling safe.", intimatePassion: "Deeply emotional, romantic, intuitive, and protective." },
  Leo: { sign: "Mars in Leo ♂️", driveStyle: "Regal, dramatic, proud & creative. Driven by recognition and noble ambition.", angerExpression: "Hurt pride, dramatic confrontation, demands respect.", intimatePassion: "Passionate, romantic, theatrical, and generous." },
  Virgo: { sign: "Mars in Virgo ♂️", driveStyle: "Precision-driven, methodical, hard-working & detail-oriented.", angerExpression: "Critical analysis, perfectionist frustration, tactical debate.", intimatePassion: "Attentive to partner needs, precise, devoted, and practical." },
  Libra: { sign: "Mars in Libra ♂️", driveStyle: "Diplomatic, strategic, partnership-oriented & justice-seeking.", angerExpression: "Seeks passive balance, dislikes raw confrontation, uses charm.", intimatePassion: "Romantic, harmonious, aesthetically focused, and mutual." },
  Scorpio: { sign: "Mars in Scorpio ♂️ (Own Sign)", driveStyle: "Magnetic, unstoppable, strategic & deeply focused. Tremendous willpower.", angerExpression: "Calculated, quiet, intense, never forgets a breach of trust.", intimatePassion: "Intense, transformative, magnetic, and deeply bonding." },
  Sagittarius: { sign: "Mars in Sagittarius ♂️", driveStyle: "Adventurous, philosophical, freedom-loving & enthusiastic.", angerExpression: "Preachy debate, honest blunt truth, moves on quickly.", intimatePassion: "Spontaneous, fun, adventurous, and open-minded." },
  Capricorn: { sign: "Mars in Capricorn ♂️ (Exalted)", driveStyle: "Exalted power! Executive discipline, strategic patience & master builder ambition.", angerExpression: "Cold, controlled, channeled strictly into professional victory.", intimatePassion: "High endurance, disciplined, intensely committed, and reliable." },
  Aquarius: { sign: "Mars in Aquarius ♂️", driveStyle: "Unconventional, rebellious, innovative & team-oriented.", angerExpression: "Detached, intellectual rebellion, fights for ideals.", intimatePassion: "Open-minded, unique, experimental, and friendly." },
  Pisces: { sign: "Mars in Pisces ♂️", driveStyle: "Artistic, gentle, spiritual & dream-inspired actions.", angerExpression: "Avoids direct clash, channels frustration into music, art, or meditation.", intimatePassion: "Soulful, tender, empathetic, and romantic daydreamer." }
};

const ZODIAC_KEYS = Object.keys(MARS_DATABASE);

export function MarsSignCalculator() {
  const [selectedSign, setSelectedSign] = useState("Aries");

  const result = useMemo(() => MARS_DATABASE[selectedSign] || MARS_DATABASE["Aries"], [selectedSign]);

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-2">♂️ Physical Energy & Passion</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text">Mars Sign Passion & Drive Reader</h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Select your Mars sign to decode your physical drive, ambition style, anger triggers, and romantic passion.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        {ZODIAC_KEYS.map((sign) => (
          <button
            key={sign}
            onClick={() => setSelectedSign(sign)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedSign === sign
                ? "bg-rose-500 text-white font-bold shadow-md border border-rose-300"
                : "bg-black/40 text-sky-200 border border-sky-500/20 hover:bg-sky-500/20"
            }`}
          >
            {sign}
          </button>
        ))}
      </div>

      <div className="glass-card-hover p-6 max-w-xl mx-auto border-sky-500/30 bg-black/50">
        <div className="border-b border-sky-500/20 pb-3 mb-4">
          <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">Mars Sign Placement</span>
          <h3 className="text-xl font-display font-bold text-white mt-0.5">{result.sign}</h3>
        </div>

        <div className="space-y-3 text-left">
          <div>
            <span className="text-xs font-semibold text-sky-300">⚡ Ambition & Execution Drive:</span>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mt-0.5">{result.driveStyle}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-amber-300">🔥 Anger & Conflict Expression:</span>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed mt-0.5">{result.angerExpression}</p>
          </div>
          <div className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/30">
            <span className="text-xs font-semibold text-rose-300 uppercase tracking-wider block mb-0.5">💖 Romantic & Intimate Chemistry</span>
            <p className="text-xs text-white font-medium">{result.intimatePassion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
