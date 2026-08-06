import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { defaultRobots, getSiteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "BIGThreeAstrology | 100 Free Astrology & Numerology Calculators",
  description: "Free online suite of 100 astrology, Vedic Jyotish, numerology, synastry & tarot calculators. Sun Moon Rising signs, Spouse Predictor, 36 Guna Kundali Milan, Choghadia, Sade Sati & Daily Horoscope.",
  keywords: ["astrology", "big three", "spouse predictor", "kundali milan", "choghadia", "sade sati", "sun sign", "moon sign", "rising sign", "numerology", "tarot", "horoscope", "dasha", "nakshatra"],
  authors: [{ name: "BIGThreeAstrology" }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg"
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="BIGThreeAstrology RSS Feed" href="/rss.xml" />
      </head>
      <body className="min-h-screen font-sans text-amber-50 bg-[#09090b]">
        <div className="stars-bg min-h-screen flex flex-col w-full relative">
          <Navbar />
          <main className="container-main flex-grow w-full">{children}</main>
          
          <div className="border-t border-amber-500/20 my-6"></div>
          
          <footer className="glass-card stars-bg mt-auto border-t-0 border-amber-500/20">
            <div className="container-main py-10 flex flex-wrap gap-8 justify-between md:grid md:grid-cols-4">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-amber-400 shadow-[0_0_12px_rgba(212,175,55,0.5)] bg-[#09090b]">
                    <Image src="/logo.jpg" alt="Logo" fill sizes="32px" className="object-cover" />
                  </div>
                  <span className="text-xl font-display font-bold gradient-text-gold">BIGThreeAstrology</span>
                </div>
                <p className="text-sm text-amber-200/90 leading-relaxed">
                  Discover your cosmic blueprint through 100 authentic Sankofa-inspired Vedic & Western astrology tools. 100% Free & Instant.
                </p>
                <p className="text-xs text-amber-400 mt-2">
                  &copy; {new Date().getFullYear()} BIGThreeAstrology. All rights reserved.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-white">Popular Tools</h3>
                <Link href="/tools/big-three" className="text-amber-300 hover:text-white transition-colors">🔮 Big Three Calculator</Link>
                <Link href="/tools/spouse-predictor" className="text-amber-300 hover:text-white transition-colors">💖 Spouse Predictor</Link>
                <Link href="/tools/kundali-milan" className="text-amber-300 hover:text-white transition-colors">🕉️ Kundali Milan (36 Gunas)</Link>
                <Link href="/tools/choghadia" className="text-amber-300 hover:text-white transition-colors">🔮 Daily Choghadia Muhurat</Link>
                <Link href="/tools/sade-sati" className="text-amber-300 hover:text-white transition-colors">🪐 Sade Sati Phase Checker</Link>
                <Link href="/tools/love-compatibility" className="text-amber-300 hover:text-white transition-colors">💖 Zodiac Love Matcher</Link>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-white">Resources & Legal</h3>
                <Link href="/blog" className="text-amber-300 hover:text-white transition-colors">Blog & Guides</Link>
                <Link href="/about" className="text-amber-300 hover:text-white transition-colors">About Us</Link>
                <Link href="/contact" className="text-amber-300 hover:text-white transition-colors">Contact Support</Link>
                <Link href="/privacy-policy" className="text-amber-300 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="text-amber-300 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="text-amber-300 hover:text-white transition-colors">Disclaimer</Link>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-white">Official Support</h3>
                <p className="text-amber-200 mb-2">Have feedback or business inquiries?</p>
                <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:text-white transition-colors">
                  asbusiness276@gmail.com
                </a>
              </div>
              
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
