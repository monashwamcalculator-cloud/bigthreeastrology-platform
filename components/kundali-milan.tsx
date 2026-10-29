"use client";

import { useMemo, useState } from "react";
import { CityAutocomplete, type PlaceInfo } from "@/components/city-autocomplete";
import { moonLongitude, nakshatraOf, signOf, toSidereal } from "@/lib/astro-engine";

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
  { name: "Uttara Bhadrapada", rashi: "Pisces", gana: "Manushya", nadi: "Madhya", varna: "Kshatriya", yoni: "Cow" },
  { name: "Revati", rashi: "Pisces", gana: "Deva", nadi: "Antya", varna: "Shudra", yoni: "Elephant" }
];

// All 60 Minutes (00 through 59)
const ALL_MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

// ---- Real Ashtakoota calculation from engine Moon positions ----

type BirthMoon = {
  nakshatra: Nakshatra;
  nakIndex: number;
  pada: number;
  moonSign: string;
  signIndex: number;
  degreeInSign: number;
};

const SIGN_LORDS = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"];
// Varna by Moon sign: water = Brahmin (4), fire = Kshatriya (3), earth = Vaishya (2), air = Shudra (1)
const SIGN_VARNA = [3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4];

function getBirthMoon(dateStr: string, hour24: number, minute: number, place: PlaceInfo | null): BirthMoon | null {
  if (!dateStr) return null;
  const parts = dateStr.split("-");
  if (parts.length !== 3) return null;
  const year = parseInt(parts[0], 10) || 1995;
  const month = parseInt(parts[1], 10) || 1;
  const day = parseInt(parts[2], 10) || 1;
  const offset = place ? place.utcOffset : 5.5; // IST default when no place is picked (see method note)
  const utcDate = new Date(Date.UTC(year, month - 1, day, hour24, minute) - offset * 3600_000);
  const sidMoon = toSidereal(moonLongitude(utcDate), utcDate);
  const nk = nakshatraOf(sidMoon);
  const sign = signOf(sidMoon);
  return {
    nakshatra: NAKSHATRAS[nk.index],
    nakIndex: nk.index,
    pada: nk.pada,
    moonSign: sign.name,
    signIndex: sign.index,
    degreeInSign: sign.degreeInSign,
  };
}

type VashyaGroup = "Chatushpada" | "Manava" | "Jalachara" | "Vanachara" | "Keeta";

function vashyaGroup(signIndex: number, degreeInSign: number): VashyaGroup {
  const secondHalf = degreeInSign >= 15;
  switch (signIndex) {
    case 0: case 1: return "Chatushpada"; // Aries, Taurus
    case 2: case 5: case 6: return "Manava"; // Gemini, Virgo, Libra
    case 3: return "Jalachara"; // Cancer
    case 4: return "Vanachara"; // Leo
    case 7: return "Keeta"; // Scorpio
    case 8: return secondHalf ? "Manava" : "Chatushpada"; // Sagittarius
    case 9: return secondHalf ? "Jalachara" : "Chatushpada"; // Capricorn
    case 10: return secondHalf ? "Jalachara" : "Manava"; // Aquarius
    default: return "Jalachara"; // Pisces
  }
}

const VASHYA_MATRIX: Record<VashyaGroup, Record<VashyaGroup, number>> = {
  Chatushpada: { Chatushpada: 2, Manava: 1, Jalachara: 1, Vanachara: 0, Keeta: 1 },
  Manava: { Chatushpada: 1, Manava: 2, Jalachara: 1.5, Vanachara: 0, Keeta: 1 },
  Jalachara: { Chatushpada: 1, Manava: 1.5, Jalachara: 2, Vanachara: 1, Keeta: 1 },
  Vanachara: { Chatushpada: 0, Manava: 0, Jalachara: 1, Vanachara: 2, Keeta: 0 },
  Keeta: { Chatushpada: 1, Manava: 1, Jalachara: 1, Vanachara: 0, Keeta: 2 },
};

const PLANET_FRIENDS: Record<string, string[]> = {
  Sun: ["Moon", "Mars", "Jupiter"],
  Moon: ["Sun", "Mercury"],
  Mars: ["Sun", "Moon", "Jupiter"],
  Mercury: ["Sun", "Venus"],
  Jupiter: ["Sun", "Moon", "Mars"],
  Venus: ["Mercury", "Saturn"],
  Saturn: ["Mercury", "Venus"],
};
const PLANET_ENEMIES: Record<string, string[]> = {
  Sun: ["Venus", "Saturn"],
  Moon: [],
  Mars: ["Mercury"],
  Mercury: ["Moon"],
  Jupiter: ["Mercury", "Venus"],
  Venus: ["Sun", "Moon"],
  Saturn: ["Sun", "Moon", "Mars"],
};

function planetRelation(a: string, b: string): "friend" | "enemy" | "neutral" {
  if (PLANET_FRIENDS[a]?.includes(b)) return "friend";
  if (PLANET_ENEMIES[a]?.includes(b)) return "enemy";
  return "neutral";
}

const GANA_MATRIX: Record<string, Record<string, number>> = {
  Deva: { Deva: 6, Manushya: 6, Rakshasa: 0 },
  Manushya: { Deva: 5, Manushya: 6, Rakshasa: 0 },
  Rakshasa: { Deva: 1, Manushya: 0, Rakshasa: 6 },
};

// Classical extreme-enemy (ati-vair) yoni pairs
const YONI_EXTREME_ENEMIES: Array<[string, string]> = [
  ["Horse", "Buffalo"], ["Elephant", "Lion"], ["Sheep", "Monkey"],
  ["Serpent", "Mongoose"], ["Dog", "Deer"], ["Cat", "Rat"], ["Cow", "Tiger"],
];

function taraDirection(fromIdx: number, toIdx: number): number {
  const count = ((toIdx - fromIdx + 27) % 27) + 1;
  const rem = count % 9;
  return [3, 5, 7].includes(rem) ? 0 : 1.5;
}

// Calculate Ashta Koota (36 Gunas) Kundali Match — standard rules, real Moon data
function calculateKundaliMatch(boy: BirthMoon, girl: BirthMoon) {
  const boyNak = boy.nakshatra;
  const girlNak = girl.nakshatra;

  // 1. Varna Koota (Max 1) — from Moon signs
  const varnaScore = SIGN_VARNA[boy.signIndex] >= SIGN_VARNA[girl.signIndex] ? 1 : 0;

  // 2. Vashya Koota (Max 2) — sign groups
  const vashyaScore = VASHYA_MATRIX[vashyaGroup(boy.signIndex, boy.degreeInSign)][vashyaGroup(girl.signIndex, girl.degreeInSign)];

  // 3. Tara Koota (Max 3) — both directions
  const taraScore = taraDirection(girl.nakIndex, boy.nakIndex) + taraDirection(boy.nakIndex, girl.nakIndex);

  // 4. Yoni Koota (Max 4) — same animal 4, extreme enemies 0, otherwise 2 (see method note)
  let yoniScore = 2;
  if (boyNak.yoni === girlNak.yoni) yoniScore = 4;
  else if (YONI_EXTREME_ENEMIES.some(([a, b]) => (boyNak.yoni === a && girlNak.yoni === b) || (boyNak.yoni === b && girlNak.yoni === a))) yoniScore = 0;

  // 5. Graha Maitri Koota (Max 5) — Moon-sign lords' natural friendship
  const boyLord = SIGN_LORDS[boy.signIndex];
  const girlLord = SIGN_LORDS[girl.signIndex];
  let maitriScore: number;
  if (boyLord === girlLord) {
    maitriScore = 5;
  } else {
    const r1 = planetRelation(boyLord, girlLord);
    const r2 = planetRelation(girlLord, boyLord);
    const combo = [r1, r2].sort().join("+");
    maitriScore = combo === "friend+friend" ? 5
      : combo === "friend+neutral" ? 4
      : combo === "neutral+neutral" ? 3
      : combo === "enemy+friend" ? 1
      : combo === "enemy+neutral" ? 0.5
      : 0;
  }

  // 6. Gana Koota (Max 6) — classical asymmetric table (boy's gana rows)
  const ganaScore = GANA_MATRIX[boyNak.gana][girlNak.gana];

  // 7. Bhakoot Koota (Max 7) — 2-12, 5-9 and 6-8 sign relationships score 0
  const gFromB = ((girl.signIndex - boy.signIndex + 12) % 12) + 1;
  const bFromG = ((boy.signIndex - girl.signIndex + 12) % 12) + 1;
  const pairKey = [Math.min(gFromB, bFromG), Math.max(gFromB, bFromG)].join("-");
  const bhakootScore = ["2-12", "5-9", "6-8"].includes(pairKey) ? 0 : 7;

  // 8. Nadi Koota (Max 8) — same nadi = Nadi Dosha, 0
  const nadiScore = boyNak.nadi === girlNak.nadi ? 0 : 8;

  const totalGuna = varnaScore + vashyaScore + taraScore + yoniScore + maitriScore + ganaScore + bhakootScore + nadiScore;

  let verdict = "";
  let verdictColor = "";

  if (totalGuna >= 28) {
    verdict = "Outstanding & Highly Auspicious Match! (Uttam)";
    verdictColor = "text-emerald-300 border-emerald-400/40 bg-emerald-950/60";
  } else if (totalGuna >= 18) {
    verdict = "Good & Compatible Match! (Madhyam)";
    verdictColor = "text-amber-300 border-amber-400/40 bg-amber-950/60";
  } else {
    verdict = "Low Guna Score - Astrological Remedies Recommended (Ordinary)";
    verdictColor = "text-rose-300 border-rose-400/40 bg-rose-950/60";
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
  const [boyPlaceInfo, setBoyPlaceInfo] = useState<PlaceInfo | null>(null);
  const [girlPlaceInfo, setGirlPlaceInfo] = useState<PlaceInfo | null>(null);

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

  const boyMoon = useMemo(
    () => getBirthMoon(boyDate, boyHour24, parseInt(boyMinute, 10) || 0, boyPlaceInfo),
    [boyDate, boyHour24, boyMinute, boyPlaceInfo]
  );
  const girlMoon = useMemo(
    () => getBirthMoon(girlDate, girlHour24, parseInt(girlMinute, 10) || 0, girlPlaceInfo),
    [girlDate, girlHour24, girlMinute, girlPlaceInfo]
  );

  const matchResult = useMemo(() => {
    if (!boyMoon || !girlMoon) return null;
    return calculateKundaliMatch(boyMoon, girlMoon);
  }, [boyMoon, girlMoon]);

  const handleShare = async () => {
    if (!matchResult) return;
    const text = ` Vedic Kundali Milan Report \n Boy: ${boyName || "Groom"} (${boyPlace || "India"}) - ${boyHour}:${boyMinute} ${boyPeriod}\n Girl: ${girlName || "Bride"} (${girlPlace || "India"}) - ${girlHour}:${girlMinute} ${girlPeriod}\n Total Score: ${matchResult.totalGuna} / 36 Gunas\n Verdict: ${matchResult.verdict}\n\nCheck authentic Kundali Matching free at BIGThreeAstrology!`;
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
        <div className="badge badge-gold mb-3"> Vedic Ashta Koota 36 Guna Milan System</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text-gold">Authentic Kundali Matching</h2>
        <p className="mt-2 text-emerald-100 text-sm max-w-xl mx-auto">
          Enter exact birth details (date, time with AM/PM, and place) of the Boy and Girl to calculate the 36 Guna Milan score with traditional Vedic calculations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Boy Form */}
        <div className="glass-card-hover p-6 border-[#bcd0e6] bg-black/40">
          <h3 className="text-lg font-display font-semibold text-[#1d6fb8] mb-4 flex items-center gap-2">
            <span></span> Groom's Details (Ladka)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Full Name</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Rohan Sharma"
                value={boyName}
                onChange={(e) => setBoyName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Date *</label>
              <input
                type="date"
                className="input-cosmic"
                value={boyDate}
                onChange={(e) => setBoyDate(e.target.value)}
              />
            </div>

            {/* Boy Time Picker with AM / PM & All 60 Minutes (00-59) */}
            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
              <div className="flex items-center gap-1">
                <select
                  value={boyHour}
                  onChange={(e) => setBoyHour(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                    <option key={h} value={h} className="bg-emerald-950 text-white">
                      {h}
                    </option>
                  ))}
                </select>

                <span className="text-emerald-200 font-bold">:</span>

                <select
                  value={boyMinute}
                  onChange={(e) => setBoyMinute(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {ALL_MINUTES.map((m) => (
                    <option key={m} value={m} className="bg-emerald-950 text-white">
                      {m}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => setBoyPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                    boyPeriod === "AM"
                      ? "bg-teal-500/30 text-teal-200 border-teal-400/40"
                      : "bg-rose-500/30 text-rose-200 border-rose-400/40"
                  }`}
                >
                  {boyPeriod}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Place (Auto-Suggest )</label>
              <CityAutocomplete
                value={boyPlace}
                onChange={setBoyPlace}
                onPlaceSelect={setBoyPlaceInfo}
                placeholder="Type e.g., Delhi, Mumbai, NY"
              />
            </div>
          </div>
        </div>

        {/* Girl Form */}
        <div className="glass-card-hover p-6 border-rose-500/30 bg-black/40">
          <h3 className="text-lg font-display font-semibold text-rose-300 mb-4 flex items-center gap-2">
            <span></span> Bride's Details (Ladki)
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Full Name</label>
              <input
                className="input-cosmic"
                placeholder="e.g. Ananya Verma"
                value={girlName}
                onChange={(e) => setGirlName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Date *</label>
              <input
                type="date"
                className="input-cosmic"
                value={girlDate}
                onChange={(e) => setGirlDate(e.target.value)}
              />
            </div>

            {/* Girl Time Picker with AM / PM & All 60 Minutes (00-59) */}
            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
              <div className="flex items-center gap-1">
                <select
                  value={girlHour}
                  onChange={(e) => setGirlHour(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((h) => (
                    <option key={h} value={h} className="bg-emerald-950 text-white">
                      {h}
                    </option>
                  ))}
                </select>

                <span className="text-emerald-200 font-bold">:</span>

                <select
                  value={girlMinute}
                  onChange={(e) => setGirlMinute(e.target.value)}
                  className="input-cosmic px-2 text-center text-sm font-semibold cursor-pointer w-1/3"
                >
                  {ALL_MINUTES.map((m) => (
                    <option key={m} value={m} className="bg-emerald-950 text-white">
                      {m}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={() => setGirlPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                  className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                    girlPeriod === "AM"
                      ? "bg-teal-500/30 text-teal-200 border-teal-400/40"
                      : "bg-rose-500/30 text-rose-200 border-rose-400/40"
                  }`}
                >
                  {girlPeriod}
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-emerald-100 pl-1 mb-1 block">Birth Place (Auto-Suggest )</label>
              <CityAutocomplete
                value={girlPlace}
                onChange={setGirlPlace}
                onPlaceSelect={setGirlPlaceInfo}
                placeholder="Type e.g., Mumbai, London, NY"
              />
            </div>
          </div>
        </div>
      </div>

      {matchResult && (
        <div className="mt-10 border-t border-emerald-500/30 pt-8 animate-slide-up">
          <div className="glass-card-hover p-6 md:p-8 text-center max-w-3xl mx-auto border-amber-400/40 relative overflow-hidden">
            <div className="text-xs uppercase tracking-widest font-semibold text-emerald-200 mb-1">Vedic Kundali Matching Result</div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              {boyName || "Groom"} & {girlName || "Bride"}
            </h3>
            <p className="text-xs text-emerald-300 mb-4">
              Groom: {boyHour}:{boyMinute} {boyPeriod} ({boyPlace || "N/A"}) | Bride: {girlHour}:{girlMinute} {girlPeriod} ({girlPlace || "N/A"})
            </p>
            {boyMoon && girlMoon && (
              <p className="text-xs text-[#33463a] mb-4">
                Groom: Moon in {boyMoon.moonSign}, {boyMoon.nakshatra.name} nakshatra (pada {boyMoon.pada}) | Bride: Moon in {girlMoon.moonSign}, {girlMoon.nakshatra.name} nakshatra (pada {girlMoon.pada})
              </p>
            )}

            <div className="flex flex-col items-center justify-center my-4">
              <div className="text-6xl font-display font-extrabold gradient-text-gold animate-pulse-glow px-8 py-3 rounded-2xl bg-black/60 border border-amber-400/40 mb-3">
                {matchResult.totalGuna} <span className="text-2xl font-normal text-emerald-200">/ 36 Gunas</span>
              </div>
              <div className={`px-4 py-2 rounded-xl text-sm font-semibold border ${matchResult.verdictColor}`}>
                {matchResult.verdict}
              </div>
            </div>

            {/* Ashta Koota Breakdown Table */}
            <div className="mt-8 text-left border-t border-emerald-500/30 pt-6">
              <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center justify-between">
                <span> Ashta Koota Score Breakdown</span>
                <span className="text-xs font-normal text-emerald-300">Max Score: 36 Points</span>
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                {matchResult.breakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                    <div className="text-xs text-emerald-200 font-medium">{item.name}</div>
                    <div className="text-sm font-display font-bold text-amber-300 ml-2">
                      {item.obtained} / {item.max}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-[#5f7a63] text-left">
              Method: both Moon positions are calculated astronomically (Lahiri sidereal) from the birth details above,
              and the eight kootas are scored by the traditional Ashtakoota rules. If a birth place was typed but not
              selected from the suggestions, IST is assumed for that person. Yoni is scored on the classical
              same-animal / natural-enemy basis. Traditional dosha exceptions (for example, some Nadi and Bhakoot
              cancellations) are not applied — for a final judgement, consult a Vedic astrologer with the full charts.
            </p>

            <div className="mt-8 flex justify-center">
              <button onClick={handleShare} className="btn-primary flex items-center gap-2">
                <span></span> Share Kundali Match Report
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
