"use client";

import { useMemo, useState } from "react";

type DayMuhurat = {
  day: string;
  rahuKaal: string;
  abhijitMuhurat: string;
  amritKaal: string;
  yamaganda: string;
  advice: string;
};

const MUHURAT_SCHEDULE: Record<string, DayMuhurat> = {
  Monday: {
    day: "Monday (Somvar)",
    rahuKaal: "07:30 AM – 09:00 AM",
    abhijitMuhurat: "11:55 AM – 12:45 PM",
    amritKaal: "04:15 PM – 05:45 PM",
    yamaganda: "10:30 AM – 12:00 PM",
    advice: "Monday is ruled by the Moon. Ideal for emotional healing, new deals in Abhijit Muhurat, and worship of Lord Shiva."
  },
  Tuesday: {
    day: "Tuesday (Mangalvar)",
    rahuKaal: "03:00 PM – 04:30 PM",
    abhijitMuhurat: "11:50 AM – 12:40 PM",
    amritKaal: "08:30 AM – 10:00 AM",
    yamaganda: "09:00 AM – 10:30 AM",
    advice: "Ruled by Mars. Avoid starting long journeys during Rahu Kaal. Great for courage, athletic goals, and Hanuman Chalisa."
  },
  Wednesday: {
    day: "Wednesday (Budhvar)",
    rahuKaal: "12:00 PM – 01:30 PM",
    abhijitMuhurat: "11:52 AM – 12:42 PM",
    amritKaal: "02:00 PM – 03:30 PM",
    yamaganda: "07:30 AM – 09:00 AM",
    advice: "Ruled by Mercury. Favorable for business contracts, signing documents, IT launches, and Ganesh Puja."
  },
  Thursday: {
    day: "Thursday (Guruvar)",
    rahuKaal: "01:30 PM – 03:00 PM",
    abhijitMuhurat: "11:54 AM – 12:44 PM",
    amritKaal: "09:15 AM – 10:45 AM",
    yamaganda: "06:00 AM – 07:30 AM",
    advice: "Ruled by Jupiter. Highly auspicious day for education, marriage rituals, financial investments, and Vishnu Sahasranam."
  },
  Friday: {
    day: "Friday (Shukravar)",
    rahuKaal: "10:30 AM – 12:00 PM",
    abhijitMuhurat: "11:53 AM – 12:43 PM",
    amritKaal: "05:00 PM – 06:30 PM",
    yamaganda: "03:00 PM – 04:30 PM",
    advice: "Ruled by Venus. Excellent for romantic dates, purchasing jewelry/vehicles, artistic releases, and Lakshmi Aradhana."
  },
  Saturday: {
    day: "Saturday (Shanivar)",
    rahuKaal: "09:00 AM – 10:30 AM",
    abhijitMuhurat: "11:51 AM – 12:41 PM",
    amritKaal: "01:15 PM – 02:45 PM",
    yamaganda: "01:30 PM – 03:00 PM",
    advice: "Ruled by Saturn. Avoid major financial risks in Rahu Kaal. Ideal for charity, property matters, and Shani Mantra."
  },
  Sunday: {
    day: "Sunday (Ravivar)",
    rahuKaal: "04:30 PM – 06:00 PM",
    abhijitMuhurat: "11:56 AM – 12:46 PM",
    amritKaal: "10:00 AM – 11:30 AM",
    yamaganda: "12:00 PM – 01:30 PM",
    advice: "Ruled by the Sun. Outstanding day for leadership meetings, health rejuvenation, and Aditya Hrudayam Chanting."
  }
};

const DAYS = Object.keys(MUHURAT_SCHEDULE);

export function RahuKaalTracker() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const muhuratInfo = useMemo(() => MUHURAT_SCHEDULE[selectedDay] || MUHURAT_SCHEDULE["Monday"], [selectedDay]);

  return (
    <section className="glass-card p-6 md:p-8 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-3">🕒 Daily Panchang & Vedic Timing</div>
        <h2 className="font-display text-3xl font-bold gradient-text-gold">Rahu Kaal & Shubh Muhurat Tracker</h2>
        <p className="text-cosmic-200 text-sm mt-1">
          Check daily Rahu Kaal (inauspicious time to avoid), Abhijit Muhurat (golden success window), and Amrit Kaal timings.
        </p>
      </div>

      {/* Day Selector Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {DAYS.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedDay === day
                ? "bg-cosmic-500 text-white font-bold shadow-lg border border-cosmic-300/40"
                : "bg-black/30 text-cosmic-200 border border-white/10 hover:bg-white/10"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Muhurat Display Card */}
      <div className="glass-card-hover p-6 md:p-8 max-w-2xl mx-auto border-accent-gold/40 animate-slide-up bg-black/40">
        <div className="text-center border-b border-cosmic-700/40 pb-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-accent-gold font-semibold">Panchang Guidance for</span>
          <h3 className="text-2xl font-display font-bold text-white mt-1">{muhuratInfo.day}</h3>
        </div>

        {/* Timings Matrix */}
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          {/* Rahu Kaal */}
          <div className="p-4 rounded-xl bg-accent-rose/10 border border-accent-rose/30">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent-rose mb-1">
              ⚠️ Rahu Kaal (Avoid New Starts)
            </div>
            <div className="text-lg font-display font-bold text-white">{muhuratInfo.rahuKaal}</div>
          </div>

          {/* Abhijit Muhurat */}
          <div className="p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/30">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent-gold mb-1">
              ✨ Abhijit Muhurat (Golden Window)
            </div>
            <div className="text-lg font-display font-bold text-white">{muhuratInfo.abhijitMuhurat}</div>
          </div>

          {/* Amrit Kaal */}
          <div className="p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent-emerald mb-1">
              🍯 Amrit Kaal (Auspicious Nectar)
            </div>
            <div className="text-lg font-display font-bold text-white">{muhuratInfo.amritKaal}</div>
          </div>

          {/* Yamaganda */}
          <div className="p-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30">
            <div className="text-xs uppercase tracking-wider font-semibold text-accent-cyan mb-1">
              ⌛ Yamaganda Kaal
            </div>
            <div className="text-lg font-display font-bold text-white">{muhuratInfo.yamaganda}</div>
          </div>
        </div>

        {/* Advice */}
        <div className="p-4 rounded-xl bg-cosmic-900/80 border border-white/10">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-gold mb-1">
            📌 Daily Planetary Guidance
          </h4>
          <p className="text-sm text-cosmic-100 leading-relaxed">{muhuratInfo.advice}</p>
        </div>
      </div>
    </section>
  );
}
