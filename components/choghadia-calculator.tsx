"use client";

import { useMemo, useState } from "react";

type ChoghadiaTiming = {
  name: string;
  type: "Auspicious" | "Neutral" | "Inauspicious";
  ruler: string;
  meaning: string;
  colorClass: string;
  badgeClass: string;
};

const CHOGHADIA_TYPES: Record<string, ChoghadiaTiming> = {
  Amrit: {
    name: "Amrit (अमृत)",
    type: "Auspicious",
    ruler: "Moon",
    meaning: "Nectar of immortality. Best for all auspicious tasks, travel, weddings, and investments.",
    colorClass: "border-emerald-400/50 bg-emerald-950/60 text-emerald-100",
    badgeClass: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40"
  },
  Shubh: {
    name: "Shubh (शुभ)",
    type: "Auspicious",
    ruler: "Jupiter",
    meaning: "Auspicious & Holy. Ideal for ceremonies, religious events, starting education, and buying assets.",
    colorClass: "border-amber-400/50 bg-amber-950/60 text-amber-100",
    badgeClass: "bg-amber-500/20 text-amber-300 border-amber-400/40"
  },
  Labh: {
    name: "Labh (लाभ)",
    type: "Auspicious",
    ruler: "Mercury",
    meaning: "Gain & Profit. Best for starting new business, trading, sales, and signing contracts.",
    colorClass: "border-cyan-400/50 bg-cyan-950/60 text-cyan-100",
    badgeClass: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40"
  },
  Char: {
    name: "Char / Chara (चर)",
    type: "Neutral",
    ruler: "Venus",
    meaning: "Movement & Dynamics. Excellent for travel, driving, machinery, and moving houses.",
    colorClass: "border-teal-400/50 bg-teal-950/60 text-teal-100",
    badgeClass: "bg-teal-500/20 text-teal-300 border-teal-400/40"
  },
  Roga: {
    name: "Roga (रोग)",
    type: "Inauspicious",
    ruler: "Mars",
    meaning: "Disease & Conflict. Avoid starting new ventures; suitable only for medical treatment.",
    colorClass: "border-rose-400/50 bg-rose-950/60 text-rose-100",
    badgeClass: "bg-rose-500/20 text-rose-300 border-rose-400/40"
  },
  Udveg: {
    name: "Udveg (उद्वेग)",
    type: "Inauspicious",
    ruler: "Sun",
    meaning: "Anxiety & Stress. Avoid government work or risky financial decisions.",
    colorClass: "border-orange-400/50 bg-orange-950/60 text-orange-100",
    badgeClass: "bg-orange-500/20 text-orange-300 border-orange-400/40"
  },
  Kaal: {
    name: "Kaal (काल)",
    type: "Inauspicious",
    ruler: "Saturn",
    meaning: "Loss & Delay. Avoid any major new initiatives during this timeframe.",
    colorClass: "border-red-500/50 bg-red-950/60 text-red-100",
    badgeClass: "bg-red-500/20 text-red-300 border-red-400/40"
  }
};

const DAY_CHOGHADIA_SCHEDULE: Record<string, string[]> = {
  Sunday: ["Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Roga", "Udveg"],
  Monday: ["Amrit", "Kaal", "Shubh", "Roga", "Udveg", "Char", "Labh", "Amrit"],
  Tuesday: ["Roga", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh", "Roga"],
  Wednesday: ["Labh", "Amrit", "Kaal", "Shubh", "Roga", "Udveg", "Char", "Labh"],
  Thursday: ["Shubh", "Roga", "Udveg", "Char", "Labh", "Amrit", "Kaal", "Shubh"],
  Friday: ["Char", "Labh", "Amrit", "Kaal", "Shubh", "Roga", "Udveg", "Char"],
  Saturday: ["Kaal", "Shubh", "Roga", "Udveg", "Char", "Labh", "Amrit", "Kaal"]
};

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function ChoghadiaCalculator() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [timeMode, setTimeMode] = useState<"Day" | "Night">("Day");

  const scheduleKeys = useMemo(() => {
    const dayList = DAY_CHOGHADIA_SCHEDULE[selectedDay] || DAY_CHOGHADIA_SCHEDULE["Monday"];
    if (timeMode === "Night") {
      // Night schedule rotates 5 slots forward
      return [...dayList.slice(4), ...dayList.slice(0, 4)];
    }
    return dayList;
  }, [selectedDay, timeMode]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-emerald mb-3">🔮 Daily Vedic Choghadia Muhurat</div>
        <h2 className="font-display text-3xl font-bold gradient-text">Auspicious Choghadia Timings</h2>
        <p className="text-emerald-200 text-sm mt-1">
          Check auspicious windows (Shubh, Labh, Amrit) for buying gold, starting business, traveling, and signing deals.
        </p>
      </div>

      {/* Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <div className="flex rounded-xl bg-black/40 p-1 border border-emerald-500/30">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedDay === day
                  ? "bg-emerald-500 text-emerald-950 font-bold shadow-md"
                  : "text-emerald-200 hover:text-white"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="flex rounded-xl bg-black/40 p-1 border border-emerald-500/30">
          <button
            onClick={() => setTimeMode("Day")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              timeMode === "Day" ? "bg-amber-400 text-black shadow-md" : "text-emerald-200"
            }`}
          >
            ☀️ Day Choghadia
          </button>
          <button
            onClick={() => setTimeMode("Night")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              timeMode === "Night" ? "bg-indigo-500 text-white shadow-md" : "text-emerald-200"
            }`}
          >
            🌙 Night Choghadia
          </button>
        </div>
      </div>

      {/* Timings List */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {scheduleKeys.map((key, idx) => {
          const detail = CHOGHADIA_TYPES[key];
          const timeSlotLabel = timeMode === "Day" 
            ? `Slot ${idx + 1} (~${6 + Math.floor(idx * 1.5)}:00)` 
            : `Slot ${idx + 1} (~${18 + Math.floor(idx * 1.5)}:00)`;

          return (
            <div key={idx} className={`p-4 rounded-xl border ${detail.colorClass} flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider">{timeSlotLabel}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${detail.badgeClass}`}>
                    {detail.type}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold text-white mb-1">{detail.name}</h4>
                <p className="text-xs text-emerald-100/90 leading-relaxed mb-3">{detail.meaning}</p>
              </div>
              <div className="text-[10px] font-mono text-amber-300 border-t border-emerald-500/20 pt-2">
                Ruler: {detail.ruler}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
