import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { Cosmic3DBackground } from "@/components/cosmic-3d-background";
import { defaultRobots, getSiteUrl } from "@/lib/seo";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";

const TOOL_COUNT = MASTER_TOOLS_LIST.length;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `BIGThreeAstrology | ${TOOL_COUNT} Free Astrology & Numerology Calculators`,
  description: `Free suite of ${TOOL_COUNT} astrology, Vedic Jyotish, numerology, synastry & tarot calculators: Sun, Moon & Rising signs, Kundali Milan, Choghadia, Sade Sati & horoscopes.`,
  keywords: ["astrology", "big three", "spouse predictor", "kundali milan", "choghadia", "sade sati", "sun sign", "moon sign", "rising sign", "numerology", "tarot", "horoscope", "dasha", "nakshatra"],
  authors: [{ name: "BIGThreeAstrology" }],
  icons: {
    apple: "/apple-icon.png"
  },
  openGraph: {
    siteName: "BIGThreeAstrology",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.jpg"]
  },
  verification: {
    google: "0OJ_c67fBhW1yxl5fGk5nXeqZT4juAaD_ffmOU3-Hdk"
  },
  robots: defaultRobots
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="BIGThreeAstrology RSS Feed" href="/rss.xml" />
      </head>
      <body className="min-h-screen font-sans text-[#2c473f] bg-[#f8fcfa]">
        {/* Interactive 3D Cosmic Stars & Rotating Planets Background */}
        <Cosmic3DBackground />

        <div className="stars-bg min-h-screen flex flex-col w-full relative z-10">
          <Navbar />
          <main className="container-main flex-grow w-full">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
