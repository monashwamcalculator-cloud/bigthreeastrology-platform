import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { defaultRobots, getSiteUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "BIGThreeAstrology | Free Astrology & Numerology Calculators",
  description: "Free Sun Moon Rising sign calculator, Vedic 36 Gunas Kundali Milan, Love Matcher, Numerology, Daily Tarot & Horoscope.",
  keywords: ["astrology", "big three", "kundali milan", "sun sign", "moon sign", "rising sign", "numerology", "tarot", "horoscope"],
  authors: [{ name: "BIGThreeAstrology" }],
  openGraph: {
    siteName: "BIGThreeAstrology",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: defaultRobots
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen font-sans text-cosmic-100 bg-cosmic-950">
        <div className="stars-bg min-h-screen flex flex-col w-full relative">
          <Navbar />
          <main className="container-main flex-grow w-full">{children}</main>
          
          <div className="border-t border-indigo-400/30 my-8"></div>
          
          <footer className="glass-card stars-bg mt-auto border-t-0 border-indigo-400/30">
            <div className="container-main py-12 flex flex-wrap gap-8 justify-between md:grid md:grid-cols-4">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <span className="text-xl font-display font-bold gradient-text">✨ BIGThreeAstrology</span>
                <p className="text-sm text-cosmic-200">
                  Discover your cosmic blueprint through authentic Vedic & Western astrology tools. 100% Free & Frictionless.
                </p>
                <p className="text-xs text-cosmic-400 mt-2">
                  &copy; {new Date().getFullYear()} BIGThreeAstrology. All rights reserved.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-cosmic-100">Free Tools Suite</h3>
                <Link href="/#tools" className="text-cosmic-300 hover:text-accent-gold transition-colors">🔮 Big Three Calculator</Link>
                <Link href="/tools/kundali-milan" className="text-cosmic-300 hover:text-accent-gold transition-colors">🕉️ Kundali Milan (36 Gunas)</Link>
                <Link href="/tools/love-compatibility" className="text-cosmic-300 hover:text-accent-gold transition-colors">💖 Zodiac Love Matcher</Link>
                <Link href="/tools/numerology" className="text-cosmic-300 hover:text-accent-gold transition-colors">🔢 Numerology Calculator</Link>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-cosmic-100">Resources & Legal</h3>
                <Link href="/blog" className="text-cosmic-300 hover:text-accent-gold transition-colors">Blog & Guides</Link>
                <Link href="/about" className="text-cosmic-300 hover:text-accent-gold transition-colors">About Us</Link>
                <Link href="/contact" className="text-cosmic-300 hover:text-accent-gold transition-colors">Contact Support</Link>
                <Link href="/privacy-policy" className="text-cosmic-300 hover:text-accent-gold transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="text-cosmic-300 hover:text-accent-gold transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="text-cosmic-300 hover:text-accent-gold transition-colors">Disclaimer</Link>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-cosmic-100">Support & Connect</h3>
                <p className="text-cosmic-300 mb-2">Free cosmic calculations for users worldwide.</p>
                <a href="mailto:monashwamcalculator@gmail.com" className="text-accent-cyan hover:text-accent-gold transition-colors">
                  monashwamcalculator@gmail.com
                </a>
              </div>
              
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
