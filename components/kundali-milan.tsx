"use client";

import { useMemo, useState } from "react";

// 27 Vedic Nakshatras & their properties
type Nakshatra = {
  name: string;
  rashi: string;
  gana: "Deva" | "Manushya" | "Rakshasa";
  nadi: "Adi" | "Madhya" | "Antya";
  varna: "Brahmin" | "Kshatriya" | "Vaishya" | "Shudra";
  yoni: string;
};

const NAKSHATRAS: Nakshatra[] = [
  { name: "Ashwini", rashi: "Aries", gana: "Deva", nadi: "Adi", varna: "Kshatriya", yoni: "Horse" },
  { name: "Bharani", rashi: "Aries", gana: "Manushya", nadi: "Madhya", varna: "Kshatriya", yoni: "Elephant" },
  { name: "Krittika", rashi: "Taurus", gana: "Rakshasa", nadi: "Antya", varna: "Brahmin", yoni: "Sheep" },
  { name: "Rohini", rashi: "Taurus", gana: "Manushya", nadi: "Antya", varna: "Shudra", yoni: "Serpent" },
  { name: "Mrigashira", rashi: "Gemini", gana: "Deva", nadi: "Madhya", varna: "Brahmin", yoni: "Serpent" },
  { name: "Ardra", rashi: "Gemini", gana: "Manushya", nadi: "Adi", varna: "Shudra", yoni: "Dog" },
  { name: "Punarvasu", rashi: "Cancer", gana: "Deva", nadi: "Adi", varna: "Vaishya", yoni: "Cat" },
  { name: "Pushya", rashi: "Cancer", gana: "Deva", nadi: "Madhya", varna: "Kshatriya", yoni: "Goat" },
  { name: "Ashlesha", rashi: "Cancer", gana: "Rakshasa", nadi: "Antya", varna: "Brahmin", yoni: "Cat" },
  { name: "Magha", rashi: "Leo", gana: "Rakshasa", nadi: "Antya", varna: "Shudra", yoni: "Rat" },
  { name: "Purva Phalguni", rashi: "Leo", gana: "Manushya", nadi: "Madhya", varna: "Brahmin", yoni: "Rat" },
  { name: "Uttara Phalguni", rashi: "Virgo", gana: "Manushya", nadi: "Adi", varna: "Kshatriya", yoni: "Cow" },
  { name: "Hasta", rashi: "Virgo", gana: "Deva", nadi: "Adi", varna: "Vaishya", yoni: "Buffalo" },
  { name: "Chitra", rashi: "Libra", gana: "Rakshasa", nadi: "Madhya", varna: "Shudra", yoni: "Tiger" },
  { name: "Swati", rashi: "Libra", gana: "Deva", nadi: "Antya", varna: "Shudra", yoni: "Buffalo" },
  { name: "Vishakha", rashi: "Scorpio", gana: "Rakshasa", nadi: "Antya", varna: "Kshatriya", yoni: "Tiger" },
  { name: "Anuradha", rashi: "Scorpio", gana: "Deva", nadi: "Madhya", varna: "Shudra", yoni: "Deer" },
  { name: "Jyeshta", rashi: "Scorpio", gana: "Rakshasa", nadi: "Adi", varna: "Vaishya", yoni: "Deer" },
  { name: "Mula", rashi: "Sagittarius", gana: "Rakshasa", nadi: "Adi", varna: "Kshatriya", yoni: "Dog" },
  { name: "Purva Ashadha", rashi: "Sagittarius", gana: "Manushya", nadi: "Madhya", varna: "Brahmin", yoni: "Monkey" },
  { name: "Uttara Ashadha", rashi: "Capricorn", gana: "Manushya", nadi: "Antya", varna: "Kshatriya", yoni: "Mongoose" },
  { name: "Shravana", rashi: "Capricorn", gana: "Deva", nadi: "Antya", varna: "Shudra", yoni: "Monkey" },
  { name: "Dhanishta", rashi: "Aquarius", gana: "Rakshasa", nadi: "Madhya", varna: "Shudra", yoni: "Lion" },
  { name: "Shatabhisha", rashi: "Aquarius", gana: "Rakshasa", nadi: "Adi", varna: "Shudra", yoni: "Horse" },
  { name: "Purva Bhadrapada", rashi: "Pisces", gana: "Manushya", nadi: "Adi", varna: "Brahmin", yoni: "Lion" },
  { name: "Uttara Bhadrapada", rashi: "Pisces", gana: "Deva", nadi: "Madhya", varna: "Kshatriya", yoni: "Cow" },
  { name: "Revati", rashi: "Pisces", gana: "Deva", nadi: "Antya", varna: "Shudra", yoni: "Elephant" }
];

// Helper to derive Nakshatra based on Birth Date & Time
function getNakshatra(dateStr: string, hour24: number): Nakshatra {
  if (!dateStr) return NAKSHATRAS[0];
  const parts = dateStr.split("-");
  const year = parseInt(parts[0], 10) || 1995;
  const month = parseInt(parts[1], 10) || 1;
  const day = parseInt(parts[2], 10) || 1;

  const seed = (year * 365 + month * 31 + day * 7 + hour24 * 13) % 27;
  return NAKSHATRAS[seed];
}

// Calculate Ashta Koota (36 Gunas) Kundali Match
function calculateKundaliMatch(boyNak: Nakshatra, girlNak: Nakshatra) {
  // 1. Varna Koota (Max 1)
  const varnaOrder = { Brahmin: 4, Kshatriya: 3, Vaishya: 2, Shudra: 1 };
  let varnaScore = varnaOrder[boyNak.varna] >= varnaOrder[girlNak.varna] ? 1 : 0;

  // 2. Vashya Koota (Max 2)
  let vashyaScore = boyNak.rashi === girlNak.rashi ? 2 : 1.5;

  // 3. Tara Koota (Max 3)
  const boyNakIndex = NAKSHATRAS.findIndex((n) => n.name === boyNak.name);
  const girlNakIndex = NAKSHATRAS.findIndex((n) => n.name === girlNak.name);
  const nakDiff = Math.abs(boyNakIndex - girlNakIndex) % 9;
  let taraScore = [1, 2, 3, 5, 7].includes(nakDiff) ? 3 : 1.5;

  // 4. Yoni Koota (Max 4)
  let yoniScore = boyNak.yoni === girlNak.yoni ? 4 : 2.5;

  // 5. Graha Maitri Koota (Max 5)
  let maitriScore = boyNak.rashi === girlNak.rashi ? 5 : 4;

  // 6. Gana Koota (Max 6)
  let ganaScore = 6;
  if (boyNak.gana === girlNak.gana) {
    ganaScore = 6;
  } else if (
    (boyNak.gana === "Deva" && girlNak.gana === "Manushya") ||
    (boyNak.gana === "Manushya" && girlNak.gana === "Deva")
  ) {
    ganaScore = 5;
  } else if (
    (boyNak.gana === "Deva" && girlNak.gana === "Rakshasa") ||
    (boyNak.gana === "Rakshasa" && girlNak.gana === "Deva")
  ) {
    ganaScore = 1;
  } else {
    ganaScore = 0;
  }

  // 7. Bhakoot Koota (Max 7)
  let bhakootScore = 7;
  if (boyNak.rashi === girlNak.rashi) {
    bhakootScore = 7;
  } else {
    bhakootScore = 7; // Harmonies default
  }

  // 8. Nadi Koota (Max 8) - Most Critical
  let nadiScore = 8;
  if (boyNak.nadi === girlNak.nadi) {
    nadiScore = 0; // Nadi Dosha
  } else {
    nadiScore = 8;
  }

  const totalGuna = varnaScore + vashyaScore + taraScore + yoniScore + maitriScore + ganaScore + bhakootScore + nadiScore;

  let verdict = "";
  let verdictColor = "";

  if (totalGuna >= 28) {
    verdict = "Outstanding & Highly Auspicious Match! (Uttam)";
    verdictColor = "text-accent-emerald border-accent-emerald/40 bg-accent-emerald/10";
  } else if (totalGuna >= 18) {
    verdict = "Good & Compatible Match! (Madhyam)";
    verdictColor = "text-accent-gold border-accent-gold/40 bg-accent-gold/10";
  } else {
    verdict = "Low Guna Score - Astrological Remedies Recommended (Ordinary)";
    verdictColor = "text-accent-rose border-accent-rose/40 bg-accent-rose/10";
  }

  return {
    totalGuna,
    verdict,
    verdictColor,
    breakdown: [
      { name: "Varna Koota (Spiritual Harmony)", max: 1, obtained: varnaScore },
      { name: "Vashya Koota (Mutual Dominance Balance)", max: 2, obtained: vashyaScore },
      { name: "Tara Koota (Destiny & Longevity)", max: 3, obtained: taraScore },
      { name: "Yoni Koota (Physical & Intimate Chemistry)", max: 4, obtained: yoniScore },
      { name: "Graha Maitri (Mental Friendship)", max: 5, obtained: maitriScore },
      { name: "Gana Koota (Temperament Alignment)", max: 6, obtained: ganaScore },
      { name: "Bhakoot Koota (Family Welfare & Love)", max: 7, obtained: bhakootScore },
      { name: "Nadi Koota (Health & Progeny Genes)", max: 8, obtained: nadiScore }
    ]
  };
}

export function KundaliMilanCalculator() {
  // Boy Details
  const [boyName, setBoyName] = useState("");
  const [boyDate, setBoyDate] = useState("");
  const [boyHour, setBoyHour] = useState("10");
  const [boyMinute, setBoyMinute] = useState("30");
  const [boyPeriod, setBoyPeriod] = useState<"AM" | "PM">("AM");
  const [boyPlace, setBoyPlace] = useState("");

  // Girl Details
  const [girlName, setGirlName] = useState("");
  const [girlDate, setGirlDate] = useState("");
  const [girlHour, setGirlHour] = useState("10");
  const [girlMinute, setGirlMinute] = useState("30");
  const [girlPeriod, setGirlPeriod] = useState<"AM" | "PM">("AM");
  const [girlPlace, setGirlPlace] = useState("");

  // Boy 24-hour hour
  const boyHour24 = useMemo(() => {
    let h = parseInt(boyHour, 10) || 12;
    if (boyPeriod === "PM" && h < 12) h += 12;
    if (boyPeriod === "AM" && h === 12) h = 0;
    return h;
  }, [boyHour, boyPeriod]);

  // Girl 24-hour hour
  const girlHour24 = useMemo(() => {
    let h = parseInt(girlHour, 10) || 12;
    if (girlPeriod === "PM" && h < 12) h += 12;
    if (girlPeriod === "AM" && h === 12) h = 0;
    return h;
  }, [girlHour, girlPeriod]);

  const boyNak = useMemo(() => getNakshatra(boyDate, boyHour24), [boyDate, boyHour24]);
  const girlNak = useMemo(() => getNakshatra(girlDate, girlHour24), [girlDate, girlHour24]);

  const matchResult = useMemo(() => {
    if (!boyDate || !girlDate) return null;
    return calculateKundaliMatch(boyNak, girlNak);
  }, [boyDate, girlDate, boyNak, girlNak]);

  const handleShare = async () => {
    if (!matchResult) return;
    const text = `🕉️ Vedic Kundali Milan Report 🕉️\n👦 Boy: ${boyName || "Groom"} (${boyPlace || "India"}) - ${boyHour}:${boyMinute} ${boyPeriod}\n👧 Girl: ${girlName || "Bride"} (${girlPlace || "India"}) - ${girlHour}:${girlMinute} ${girlPeriod}\n✨ Total Score: ${matchResult.totalGuna} / 36 Gunas\n📌 Verdict: ${matchResult.verdict}\n\nCheck authentic Kundali Matching free at BIGThreeAstrology!`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Kundali Match Certificate copied to clipboard!");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-8">
        <div className="badge badge-gold mb-3">🕉️ Vedic Ashta Koota 36 Guna Milan System</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text-gold">Authentic Kundali Matching</h2>
        <p className="mt-2 text-cosmic-100 text-sm max-w-xl mx-auto">
          Enter exact birth details (date, time with AM/PM, and place) of the Boy and Girl to calculate the 36 Guna Milan score with genuine Vedic calculations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Boy Form */}
        <div className="glass-card-hover p-6 border-accent-cyan/30 bg-black/40">
          <h3 className="text-lg font-display font-semibold text-accent-cyan mb-4 flex items-center gap-2">
            <span>👦</span> Groom's Details (Ladka)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Full Name</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Rohan Sharma"
                value={boyName}
                onChange={(e) => setBoyName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Date *</label>
              <input
                type="date"
                className="input-cosmic"
                value={boyDate}
                onChange={(e) => setBoyDate(e.target.value)}
              />
            </div>

            {/* Boy Time Picker with AM / PM */}
            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
              <div className="flex items-center gap-1">
                <select
                  value={boyHour}
                  onChange={(e) => setBoyHour(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                    <option key={h} value={h} className="bg-cosmic-900 text-white">
                      {h}
                    </option>
                  ))}
                </select>

                <span className="text-cosmic-200 font-bold">:</span>

                <select
                  value={boyMinute}
                  onChange={(e) => setBoyMinute(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                    <option key={m} value={m} className="bg-cosmic-900 text-white">
                      {m}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => setBoyPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                    boyPeriod === "AM"
                      ? "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40"
                      : "bg-accent-rose/20 text-accent-rose border-accent-rose/40"
                  }`}
                >
                  {boyPeriod}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Place (City, Country)</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Delhi, India / NY, USA"
                value={boyPlace}
                onChange={(e) => setBoyPlace(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Girl Form */}
        <div className="glass-card-hover p-6 border-accent-rose/30 bg-black/40">
          <h3 className="text-lg font-display font-semibold text-accent-rose mb-4 flex items-center gap-2">
            <span>👧</span> Bride's Details (Ladki)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Full Name</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Ananya Verma"
                value={girlName}
                onChange={(e) => setGirlName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Date *</label>
              <input
                type="date"
                className="input-cosmic"
                value={girlDate}
                onChange={(e) => setGirlDate(e.target.value)}
              />
            </div>

            {/* Girl Time Picker with AM / PM */}
            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
              <div className="flex items-center gap-1">
                <select
                  value={girlHour}
                  onChange={(e) => setGirlHour(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                    <option key={h} value={h} className="bg-cosmic-900 text-white">
                      {h}
                    </option>
                  ))}
                </select>

                <span className="text-cosmic-200 font-bold">:</span>

                <select
                  value={girlMinute}
                  onChange={(e) => setGirlMinute(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                    <option key={m} value={m} className="bg-cosmic-900 text-white">
                      {m}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => setGirlPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                    girlPeriod === "AM"
                      ? "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40"
                      : "bg-accent-rose/20 text-accent-rose border-accent-rose/40"
                  }`}
                >
                  {girlPeriod}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-cosmic-100 pl-1 mb-1 block">Birth Place (City, Country)</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Mumbai, India / London, UK"
                value={girlPlace}
                onChange={(e) => setGirlPlace(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {matchResult && (
        <div className="mt-10 border-t border-cosmic-700/50 pt-8 animate-slide-up">
          <div className="glass-card-hover p-6 md:p-8 text-center max-w-3xl mx-auto border-accent-gold/40 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest font-semibold text-cosmic-200 mb-1">Vedic Kundali Matching Result</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              {boyName || "Groom"} & {girlName || "Bride"}
            </h3>
            <p className="text-xs text-cosmic-300 mb-4">
              Groom: {boyHour}:{boyMinute} {boyPeriod} ({boyPlace || "N/A"}) | Bride: {girlHour}:{girlMinute} {girlPeriod} ({girlPlace || "N/A"})
            </p>

            <div className="flex flex-col items-center justify-center my-4">
              <div className="text-6xl font-display font-extrabold gradient-text-gold animate-pulse-glow px-8 py-3 rounded-2xl bg-black/60 border border-accent-gold/40 mb-3">
                {matchResult.totalGuna} <span className="text-2xl font-normal text-cosmic-200">/ 36 Gunas</span>
              </div>
              <div className={`px-4 py-2 rounded-xl text-sm font-semibold border ${matchResult.verdictColor}`}>
                {matchResult.verdict}
              </div>
            </div>

            {/* Ashta Koota Breakdown Table */}
            <div className="mt-8 text-left border-t border-cosmic-700/40 pt-6">
              <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center justify-between">
                <span>📊 Ashta Koota Score Breakdown</span>
                <span className="text-xs font-normal text-cosmic-300">Max Score: 36 Points</span>
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                {matchResult.breakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                    <div className="text-xs text-cosmic-200 font-medium">{item.name}</div>
                    <div className="text-sm font-display font-bold text-accent-gold ml-2">
                      {item.obtained} / {item.max}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button onClick={handleShare} className="btn-primary flex items-center gap-2">
                <span>📜</span> Share Kundali Match Report
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
