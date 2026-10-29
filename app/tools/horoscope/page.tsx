import { Metadata } from "next";
import { DailyHoroscope } from "@/components/daily-horoscope";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Daily Horoscope & Cosmic Energy Meter",
  description: "Check your daily horoscope predictions, cosmic energy percentage, lucky colors, and numbers.",
  path: "/tools/horoscope"
});

export default function HoroscopePage() {
  return (
    <div className="py-8 space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold"><span className="gradient-text-gold">Daily Horoscope — Today's Cosmic Energy Reading</span></h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">Read today's horoscope energy meter for love, career, money and mood, tuned to your zodiac sign.</p>
      </div>
      <DailyHoroscope />
    </div>
  );
}
