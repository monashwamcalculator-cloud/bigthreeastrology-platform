"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CityAutocomplete, type PlaceInfo } from "@/components/city-autocomplete";
import { computeKundli, formatDegree, type KundliChart } from "@/lib/kundli";
import { ZODIAC_SIGNS } from "@/lib/astro-engine";

// All 60 Minutes (00 through 59)
const ALL_MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

/**
 * North Indian (diamond) chart geometry. The 12 houses sit in FIXED
 * positions in this style — the Lagna is always the top-centre house and
 * the signs move. Houses run clockwise from the top: 1 (top kite),
 * 2 and 3 (top-right triangles), 4 (right kite), 5 and 6 (bottom-right),
 * 7 (bottom kite), 8 and 9 (bottom-left), 10 (left kite), 11 and 12
 * (top-left). `anchor` is where the planet labels go; `num` is where the
 * small sign number (1 = Aries … 12 = Pisces) is printed.
 */
const HOUSE_CELLS: Array<{ anchor: [number, number]; num: [number, number] }> = [
  { anchor: [200, 74], num: [200, 24] }, // 1 — top kite
  { anchor: [296, 40], num: [376, 20] }, // 2 — top edge, right
  { anchor: [360, 100], num: [380, 184] }, // 3 — right edge, top
  { anchor: [322, 200], num: [380, 200] }, // 4 — right kite
  { anchor: [360, 300], num: [380, 384] }, // 5 — right edge, bottom
  { anchor: [296, 362], num: [216, 384] }, // 6 — bottom edge, right
  { anchor: [200, 326], num: [200, 380] }, // 7 — bottom kite
  { anchor: [104, 362], num: [28, 384] }, // 8 — bottom edge, left
  { anchor: [40, 300], num: [20, 216] }, // 9 — left edge, bottom
  { anchor: [78, 200], num: [20, 200] }, // 10 — left kite
  { anchor: [40, 100], num: [20, 24] }, // 11 — left edge, top
  { anchor: [104, 40], num: [28, 20] }, // 12 — top edge, left
];

function KundliDiamondChart({ chart }: { chart: KundliChart }) {
  // Group placements by house: house number -> placements in that house.
  const byHouse = useMemo(() => {
    const map = new Map<number, Array<{ abbr: string; degree: string }>>();
    const add = (house: number, abbr: string, degree: string) => {
      const list = map.get(house) ?? [];
      list.push({ abbr, degree });
      map.set(house, list);
    };
    add(1, "As", formatDegree(chart.lagna.degreeInSign));
    for (const g of chart.grahas) add(g.house, g.abbr, formatDegree(g.degreeInSign));
    return map;
  }, [chart]);

  const signOfHouse = (house: number) =>
    (chart.lagna.signIndex + house - 1) % 12;

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full max-w-[430px] mx-auto block"
      role="img"
      aria-label="Janam Kundli — North Indian style birth chart"
    >
      <rect x="1" y="1" width="398" height="398" fill="#fffdf5" stroke="#b98a1c" strokeWidth="2" />
      {/* diamond through the side midpoints */}
      <path d="M200 0 L400 200 L200 400 L0 200 Z" fill="none" stroke="#b98a1c" strokeWidth="1.4" />
      {/* corner-to-centre lines */}
      <path d="M0 0 L200 200 M400 0 L200 200 M400 400 L200 200 M0 400 L200 200" fill="none" stroke="#b98a1c" strokeWidth="1.4" />
      {HOUSE_CELLS.map((cell, i) => {
        const house = i + 1;
        const signIdx = signOfHouse(house);
        const placements = byHouse.get(house) ?? [];
        return (
          <g key={house}>
            <text
              x={cell.num[0]}
              y={cell.num[1]}
              textAnchor="middle"
              fontSize="11"
              fill="#b3541e"
              fontWeight="600"
            >
              {signIdx + 1}
            </text>
            {placements.map((p, j) => (
              <text
                key={p.abbr}
                x={cell.anchor[0]}
                y={cell.anchor[1] + (j - (placements.length - 1) / 2) * 17}
                textAnchor="middle"
                fontSize={p.abbr === "As" ? "14" : "13"}
                fontWeight={p.abbr === "As" ? "800" : "700"}
                fill={p.abbr === "As" ? "#9c1c1c" : "#1e2b22"}
              >
                {p.abbr} {p.degree}
              </text>
            ))}
            <title>{`House ${house}: ${ZODIAC_SIGNS[signIdx]}`}</title>
          </g>
        );
      })}
    </svg>
  );
}

export function KundliCalculator() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthHour, setBirthHour] = useState("12");
  const [birthMinute, setBirthMinute] = useState("00");
  const [birthPeriod, setBirthPeriod] = useState<"AM" | "PM">("AM");
  const [birthLocation, setBirthLocation] = useState("");
  const [place, setPlace] = useState<PlaceInfo | null>(null);

  const timeHour24 = useMemo(() => {
    let h = parseInt(birthHour, 10) || 12;
    if (birthPeriod === "PM" && h < 12) h += 12;
    if (birthPeriod === "AM" && h === 12) h = 0;
    return h;
  }, [birthHour, birthPeriod]);

  // Real sidereal chart from lib/kundli.ts (on the astro-engine):
  // Lagna from birth moment + birthplace; grahas from their sidereal
  // longitudes; whole-sign houses counted from the Lagna.
  const chart = useMemo(() => {
    if (!birthDate || !place) return null;
    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const minute = parseInt(birthMinute, 10) || 0;
    const utcMinutes = timeHour24 * 60 + minute - Math.round(place.utcOffset * 60);
    const utcDate = new Date(Date.UTC(year, month - 1, day, 0, utcMinutes));
    return computeKundli(utcDate, place.lat, place.lon);
  }, [birthDate, birthMinute, timeHour24, place]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none" />
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="badge badge-gold mb-2">Vedic Birth Chart — Sidereal (Lahiri)</div>
          <h2 className="font-display text-3xl font-bold gradient-text-gold">
            Free Janam Kundli by Date of Birth
          </h2>
          <p className="mt-2 text-emerald-100 text-sm">
            Enter your birth date, exact birth time and birth city — your complete Kundli is
            calculated instantly, with the Lagna, all nine grahas and your Moon nakshatra.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Your Name (optional)</label>
            <input className="input-cosmic" placeholder="e.g. Rahul / Sarah" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth Date *</label>
            <input className="input-cosmic" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth Time (12-Hr AM/PM)</label>
            <div className="flex items-center gap-1">
              <select
                value={birthHour}
                onChange={(e) => setBirthHour(e.target.value)}
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
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
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
                onClick={() => setBirthPeriod((prev) => (prev === "AM" ? "PM" : "AM"))}
                className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all border w-1/3 ${
                  birthPeriod === "AM"
                    ? "bg-teal-500/30 text-teal-200 border-teal-400/40"
                    : "bg-rose-500/30 text-rose-200 border-rose-400/40"
                }`}
              >
                {birthPeriod}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-emerald-100 pl-1">Birth City (Auto-Suggest)</label>
            <CityAutocomplete value={birthLocation} onChange={setBirthLocation} onPlaceSelect={setPlace} placeholder="Type e.g., Delhi, Mumbai, London" />
          </div>
        </div>

        {chart ? (
          <div className="mt-10 border-t border-emerald-500/30 pt-8 animate-slide-up">
            <div className="text-center mb-6">
              <span className="badge badge-gold mb-2">Janam Kundli — Rashi (D1) Chart</span>
              <h3 className="text-xl font-semibold gradient-text">
                {name || "Your"} Kundli {birthLocation ? `(${birthLocation})` : ""}
              </h3>
              <p className="text-xs text-emerald-300 mt-1">
                Born {birthDate} at {birthHour}:{birthMinute} {birthPeriod} · Sidereal (Lahiri
                ayanamsa {chart.ayanamsa.toFixed(2)}°) · Whole-sign houses
              </p>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-2xl max-w-xl mx-auto">
              <KundliDiamondChart chart={chart} />
              <p className="text-[11px] text-[#52796f] text-center mt-3 leading-relaxed">
                North Indian style: the houses stay fixed and the signs move — the small red
                numbers are sign numbers (1 = Aries, 2 = Taurus … 12 = Pisces). As = Lagna
                (Ascendant); Su Sun, Mo Moon, Ma Mars, Me Mercury, Ju Jupiter, Ve Venus,
                Sa Saturn, Ra Rahu, Ke Ketu.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mt-6">
              {[
                { label: "Lagna (Ascendant)", value: `${chart.lagna.sign} ${formatDegree(chart.lagna.degreeInSign)}`, note: "The sign rising at your birth — the chart's anchor" },
                { label: "Moon Sign (Rashi)", value: `${chart.moon.sign} ${formatDegree(chart.moon.degreeInSign)}`, note: "Your Vedic sign — the one your horoscope follows" },
                { label: "Moon Nakshatra", value: `${chart.moon.nakshatra}, Pada ${chart.moon.pada}`, note: "Your birth star — sets your starting dasha" },
                { label: "Sun Sign", value: `${chart.grahas[0].sign} ${formatDegree(chart.grahas[0].degreeInSign)}`, note: "Sidereal Sun — often one sign behind the Western one" },
              ].map((item) => (
                <div key={item.label} className="glass-card-hover p-4 rounded-xl text-center">
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-[#256b42] mb-1">{item.label}</div>
                  <div className="text-base font-display font-bold text-[#16402b]">{item.value}</div>
                  <p className="text-[11px] text-[#52796f] mt-1 leading-snug">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-5 rounded-xl max-w-4xl mx-auto mt-6 overflow-x-auto">
              <h3 className="text-sm font-display font-bold text-[#16402b] mb-3">
                Planetary Positions (Sidereal)
              </h3>
              <table className="w-full text-sm text-[#33463a]">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-[#256b42] border-b border-[#dee6da]">
                    <th className="py-2 pr-3 font-semibold">Graha</th>
                    <th className="py-2 pr-3 font-semibold">Sign</th>
                    <th className="py-2 pr-3 font-semibold">Degree</th>
                    <th className="py-2 pr-3 font-semibold">House</th>
                    <th className="py-2 font-semibold">Nakshatra</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#eef3ec]">
                    <td className="py-2 pr-3 font-semibold">Lagna</td>
                    <td className="py-2 pr-3">{chart.lagna.sign}</td>
                    <td className="py-2 pr-3">{formatDegree(chart.lagna.degreeInSign)}</td>
                    <td className="py-2 pr-3">1</td>
                    <td className="py-2">{chart.lagna.nakshatra} (Pada {chart.lagna.pada})</td>
                  </tr>
                  {chart.grahas.map((g) => (
                    <tr key={g.key} className="border-b border-[#eef3ec] last:border-0">
                      <td className="py-2 pr-3 font-semibold">{g.name}</td>
                      <td className="py-2 pr-3">{g.sign}</td>
                      <td className="py-2 pr-3">{formatDegree(g.degreeInSign)}</td>
                      <td className="py-2 pr-3">{g.house}</td>
                      <td className="py-2">{g.nakshatra} (Pada {g.pada})</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="glass-card p-5 rounded-xl max-w-4xl mx-auto mt-6">
              <h3 className="text-sm font-display font-bold text-[#16402b] mb-2">
                Where to Go Next with This Kundli
              </h3>
              <ul className="text-sm text-[#33463a] leading-relaxed space-y-1.5">
                <li>
                  • Getting married?{" "}
                  <Link href="/tools/kundali-milan" className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]">
                    Match this Kundli
                  </Link>{" "}
                  with your partner's for the 36-guna Ashtakoota score.
                </li>
                <li>
                  • Go deeper on your birth star in the{" "}
                  <Link href="/tools/nakshatra" className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]">
                    Nakshatra Finder
                  </Link>{" "}
                  — deity, symbol, gana and ruling planet of {chart.moon.nakshatra}.
                </li>
                <li>
                  • See which planetary period is shaping your life now in the{" "}
                  <Link href="/tools/dasha-calculator" className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]">
                    Vimshottari Dasha Calculator
                  </Link>
                  .
                </li>
                <li>
                  • Prefer the Western view? Your{" "}
                  <Link href="/tools/big-three" className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]">
                    Big Three
                  </Link>{" "}
                  shows the same birth moment in tropical signs.
                </li>
              </ul>
            </div>

            <p className="text-[11px] text-emerald-200/80 text-center mt-6 max-w-2xl mx-auto leading-relaxed">
              Positions are sidereal (Lahiri ayanamsa, as shown above) and computed from real
              astronomical formulas at sign/nakshatra accuracy — the slower planets can sit a
              few degrees from a Swiss-Ephemeris printout, and a placement within a few degrees
              of a sign boundary can differ between calculators. The Lagna changes sign roughly
              every two hours, so an approximate birth time gives an approximate chart.
            </p>
          </div>
        ) : (
          <div className="glass-card-hover p-6 max-w-xl mx-auto text-center">
            <p className="text-sm text-[#33463a] leading-relaxed">
              {birthDate && !place
                ? "One more detail: pick your birth city from the suggestions above. Your Lagna — the sign your whole chart is built on — comes from the exact birth moment at that place, so the Kundli appears as soon as the city is selected."
                : "Enter your birth date, time and city above and your Janam Kundli appears instantly — Lagna, all nine grahas in their houses, and your Moon nakshatra. Free, with no sign-up."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
