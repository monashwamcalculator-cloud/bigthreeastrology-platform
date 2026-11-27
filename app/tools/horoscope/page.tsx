import { Metadata } from "next";
import { DailyHoroscope } from "@/components/daily-horoscope";
import { buildMetadata } from "@/lib/seo";
import { ToolSections } from "@/components/tool-guide";
import { ToolPageHeader } from "@/components/tool-page-header";

export const metadata: Metadata = buildMetadata({
  title: "Daily Horoscope — Today's Reading for Your Sign",
  description: "Check your daily horoscope reading — today's theme for your sign, with love and career notes, lucky colors, and numbers. Free and instant, with the method explained — no sign-up.",
  path: "/tools/horoscope"
});

export default function HoroscopePage() {
  return (
    <div className="py-6 space-y-6">
      <ToolPageHeader slug="horoscope" title="Daily Horoscope — Today's Reading for Your Sign" intro="Read today's themed horoscope for love, career, money and mood, tuned to your zodiac sign." />
      <DailyHoroscope />
      <ToolSections slug="horoscope" />
    </div>
  );
}
