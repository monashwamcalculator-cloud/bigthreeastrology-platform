"use client";

import { useMemo, useState } from "react";
import { CityAutocomplete, type PlaceInfo } from "@/components/city-autocomplete";
import { moonLongitude, nakshatraOf, toSidereal } from "@/lib/astro-engine";

type DashaPlanet = {
  planet: string;
  durationYears: number;
  rulingThemes: string;
  remedy: string;
};

// Vimshottari sequence (total 120 years), starting from Ketu
const DASHA_PERIODS: DashaPlanet[] = [
  { planet: "Ketu (7 Years)", durationYears: 7, rulingThemes: "Spiritual introspection, detachment, occult research, sharp intuition, sudden shifts.", remedy: "Chant 'Om Kem Ketave Namah' and donate sesame seeds." },
  { planet: "Venus (20 Years)", durationYears: 20, rulingThemes: "Luxury, romantic relationships, artistic expansion, wealth accumulation, vehicles.", remedy: "Worship Goddess Lakshmi and wear white/pastels on Fridays." },
  { planet: "Sun (6 Years)", durationYears: 6, rulingThemes: "Career authority, leadership recognition, fatherly support, vital health, government status.", remedy: "Offer water (Surya Arghya) to the Sun in the morning." },
  { planet: "Moon (10 Years)", durationYears: 10, rulingThemes: "Emotional peace, motherly comfort, public fame, international travel, intuitive creativity.", remedy: "Chant 'Om Som Somaya Namah' and offer milk to Shivling." },
  { planet: "Mars (7 Years)", durationYears: 7, rulingThemes: "Physical courage, real estate acquisitions, brotherly support, executive drive, passion.", remedy: "Recite Hanuman Chalisa and donate red lentils on Tuesdays." },
  { planet: "Rahu (18 Years)", durationYears: 18, rulingThemes: "Unconventional growth, foreign travels, digital technology, high ambition, material gains.", remedy: "Chant 'Om Ram Rahave Namah' and feed stray dogs." },
  { planet: "Jupiter (16 Years)", durationYears: 16, rulingThemes: "Wisdom expansion, higher education, financial prosperity, marriage, children, guru grace.", remedy: "Apply yellow sandalwood tilak and respect elders/gurus." },
  { planet: "Saturn (19 Years)", durationYears: 19, rulingThemes: "Deep discipline, patience, career structure, endurance, structural stabilization.", remedy: "Light mustard oil Diya under Peepal tree on Saturdays." },
  { planet: "Mercury (17 Years)", durationYears: 17, rulingThemes: "Intellect, commerce, trade, communication skills, analytical writing, business success.", remedy: "Feed green fodder to cows on Wednesdays." }
];

const LORD_ORDER = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
const YEAR_MS = 365.25 * 24 * 3600 * 1000;

type DashaPeriod = {
  planetIndex: number;
  planet: string;
  start: Date;
  end: Date;
  years: number;
  isBalance: boolean;
};

/**
 * Real Vimshottari calculation: the Moon's birth nakshatra and the
 * fraction of it already traversed set the starting lord and the
 * balance of the first mahadasha; the rest follow in fixed sequence.
 */
function computeDashaTimeline(birthUtc: Date): { nakshatraName: string; periods: DashaPeriod[] } {
  const sidMoon = toSidereal(moonLongitude(birthUtc), birthUtc);
  const nk = nakshatraOf(sidMoon);
  const startLordIdx = nk.index % 9;
  const traversed = nk.degreeInNakshatra / (360 / 27);
  const firstLord = DASHA_PERIODS[startLordIdx];
  const balanceYears = (1 - traversed) * firstLord.durationYears;

  const periods: DashaPeriod[] = [];
  let cursor = new Date(birthUtc);
  for (let i = 0; i < 9; i++) {
    const pIdx = (startLordIdx + i) % 9;
    const years = i === 0 ? balanceYears : DASHA_PERIODS[pIdx].durationYears;
    const end = new Date(cursor.getTime() + years * YEAR_MS);
    periods.push({
      planetIndex: pIdx,
      planet: LORD_ORDER[pIdx],
      start: new Date(cursor),
      end,
      years,
      isBalance: i === 0,
    });
    cursor = end;
  }
  return { nakshatraName: nk.name, periods };
}

function fmtDate(d: Date): string {
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

const ALL_MINUTES = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0"));

export function DashaCalculator() {
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState<number>(5); // explorer default Rahu
  const [birthDate, setBirthDate] = useState("");
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [place, setPlace] = useState("");
  const [placeInfo, setPlaceInfo] = useState<PlaceInfo | null>(null);

  const activeDasha = useMemo(() => DASHA_PERIODS[selectedPlanetIndex] || DASHA_PERIODS[5], [selectedPlanetIndex]);

  const timeline = useMemo(() => {
    if (!birthDate) return null;
    const parts = birthDate.split("-");
    if (parts.length !== 3) return null;
    let h = parseInt(hour, 10) || 12;
    if (period === "PM" && h < 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    const offset = placeInfo ? placeInfo.utcOffset : 5.5; // IST default (see method note)
    const birthUtc = new Date(
      Date.UTC(parseInt(parts[0], 10) || 1995, (parseInt(parts[1], 10) || 1) - 1, parseInt(parts[2], 10) || 1, h, parseInt(minute, 10) || 0) -
        offset * 3600_000
    );
    return computeDashaTimeline(birthUtc);
  }, [birthDate, hour, minute, period, placeInfo]);

  const now = new Date();

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3"> Vimshottari Mahadasha 120-Year Cycle</div>
        <h2 className="font-display text-3xl font-bold gradient-text">Vedic Dasha & Planetary Period Calculator</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Your Mahadasha sequence is set by the Moon's nakshatra at your birth. Enter your birth details for your
          personal timeline, or explore the nine periods below.
        </p>
      </div>

      {/* Personal timeline calculator */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div>
            <label className="text-xs font-medium text-[#33463a] pl-1 mb-1 block">Birth Date *</label>
            <input type="date" className="input-cosmic" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
          </div>
          <div>
            <label className="text-xs font-medium text-[#33463a] pl-1 mb-1 block">Birth Time (12-Hr AM/PM)</label>
            <div className="flex items-center gap-1">
              <select className="input-cosmic" value={hour} onChange={(e) => setHour(e.target.value)}>
                {Array.from({ length: 12 }, (_, i) => (i + 1).toString()).map((hh) => (
                  <option key={hh} value={hh}>{hh}</option>
                ))}
              </select>
              <span className="text-[#33463a] font-bold">:</span>
              <select className="input-cosmic" value={minute} onChange={(e) => setMinute(e.target.value)}>
                {ALL_MINUTES.map((mm) => (
                  <option key={mm} value={mm}>{mm}</option>
                ))}
              </select>
              <button
                onClick={() => setPeriod(period === "AM" ? "PM" : "AM")}
                className="px-3 py-2 rounded-lg bg-[#2e7d4f] text-white text-xs font-bold border border-[#2e7d4f]"
              >
                {period}
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-xs font-medium text-[#33463a] pl-1 mb-1 block">Birth Place (select from suggestions for your timezone)</label>
          <CityAutocomplete value={place} onChange={setPlace} onPlaceSelect={setPlaceInfo} placeholder="Type e.g., Delhi, Mumbai, NY" />
        </div>

        {timeline && (
          <div className="animate-slide-up">
            <p className="text-sm text-[#33463a] text-center mb-3">
              Moon nakshatra at birth: <strong className="text-[#16402b]">{timeline.nakshatraName}</strong> — your
              dasha sequence starts with its ruling planet. The first period is the <em>balance</em> of that
              mahadasha remaining at birth.
            </p>
            <div className="grid gap-2">
              {timeline.periods.map((p) => {
                const isCurrent = now >= p.start && now < p.end;
                return (
                  <button
                    key={p.planet + p.start.toISOString()}
                    onClick={() => setSelectedPlanetIndex(p.planetIndex)}
                    className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? "bg-[#2e7d4f] text-white border-[#2e7d4f] shadow-md"
                        : "bg-white text-[#33463a] border-[#dee6da] hover:bg-[#eaf1e6]"
                    }`}
                  >
                    <span className="font-display font-bold text-sm">
                      {p.planet} Mahadasha {p.isBalance && <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">(balance)</span>}
                      {isCurrent && <span className="ml-2 text-[10px] font-bold uppercase tracking-wide bg-white/20 px-2 py-0.5 rounded-full">You are here</span>}
                    </span>
                    <span className={`text-xs ${isCurrent ? "text-white/90" : "text-[#5f7a63]"}`}>
                      {fmtDate(p.start)} → {fmtDate(p.end)} · {p.years.toFixed(1)} yrs
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] leading-relaxed text-[#5f7a63] mt-3">
              Method: the Moon's sidereal (Lahiri) position at your birth moment fixes the starting nakshatra lord
              and the balance of the first mahadasha; periods then follow the fixed Vimshottari order, counting one
              dasha year as 365.25 days. If no birth place was selected from the suggestions, IST is assumed. Tap
              any period to read its themes and remedy below.
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-[#dee6da] pt-6">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-[#256b42] mb-4">
          Explore the 9 Mahadashas
        </h3>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {DASHA_PERIODS.map((dasha, idx) => (
            <button
              key={dasha.planet}
              onClick={() => setSelectedPlanetIndex(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedPlanetIndex === idx
                  ? "bg-[#2e7d4f] text-white font-bold shadow-lg border border-[#2e7d4f]"
                  : "bg-white text-[#33463a] border border-[#dee6da] hover:bg-[#eaf1e6]"
              }`}
            >
              {dasha.planet.split(" ")[0]}
            </button>
          ))}
        </div>

        <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-emerald-500/40 bg-black/50">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">Mahadasha Planet</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">{activeDasha.planet}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-300">Period Duration</span>
              <div className="text-lg font-display font-bold text-amber-300">{activeDasha.durationYears} Years</div>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <div>
              <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-2 mb-1">
                <span></span> Major Life Themes & Planetary Energy
              </h4>
              <p className="text-emerald-100 text-sm leading-relaxed">{activeDasha.rulingThemes}</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/30">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                 Recommended Vedic Mantra & Shanti Remedy
              </h4>
              <p className="text-sm font-semibold text-white">{activeDasha.remedy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
