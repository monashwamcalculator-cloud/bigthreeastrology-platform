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
      <DailyHoroscope />
    </div>
  );
}
