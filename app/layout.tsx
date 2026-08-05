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
  title: "BIGThreeAstrology | 16 Free Astrology & Numerology Calculators",
  description: "Free Sun Moon Rising sign calculator, Vedic 36 Gunas Kundali Milan, Choghadia Muhurat, Sade Sati Checker, Love Matcher, Numerology & Daily Tarot.",
  keywords: ["astrology", "big three", "kundali milan", "choghadia", "sade sati", "sun sign", "moon sign", "rising sign", "numerology", "tarot", "horoscope"],
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
      <body className="min-h-screen font-sans text-emerald-100 bg-emerald-950">
        <div className="stars-bg min-h-screen flex flex-col w-full relative">
          <Navbar />
          <main className="container-main flex-grow w-full">{children}</main>
          
          <div className="border-t border-emerald-500/30 my-8"></div>
          
          <footer className="glass-card stars-bg mt-auto border-t-0 border-emerald-500/30">
            <div className="container-main py-12 flex flex-wrap gap-8 justify-between md:grid md:grid-cols-4">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <span className="text-xl font-display font-bold gradient-text">✨ BIGThreeAstrology</span>
                <p className="text-sm text-emerald-200">
                  Discover your cosmic blueprint through 16 authentic Vedic & Western astrology tools. 100% Free & Frictionless.
                </p>
                <p className="text-xs text-emerald-400 mt-2">
                  &copy; {new Date().getFullYear()} BIGThreeAstrology. All rights reserved.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-emerald-100">Popular Tools</h3>
                <Link href="/tools/big-three" className="text-emerald-300 hover:text-emerald-100 transition-colors">🔮 Big Three Calculator</Link>
                <Link href="/tools/kundali-milan" className="text-emerald-300 hover:text-emerald-100 transition-colors">🕉️ Kundali Milan (36 Gunas)</Link>
                <Link href="/tools/choghadia" className="text-emerald-300 hover:text-emerald-100 transition-colors">🔮 Daily Choghadia Muhurat</Link>
                <Link href="/tools/sade-sati" className="text-emerald-300 hover:text-emerald-100 transition-colors">🪐 Sade Sati Phase Checker</Link>
                <Link href="/tools/love-compatibility" className="text-emerald-300 hover:text-emerald-100 transition-colors">💖 Zodiac Love Matcher</Link>
                <Link href="/tools/numerology" className="text-emerald-300 hover:text-emerald-100 transition-colors">🔢 Life Path Numerology</Link>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-emerald-100">Resources & Legal</h3>
                <Link href="/blog" className="text-emerald-300 hover:text-emerald-100 transition-colors">Blog & Guides</Link>
                <Link href="/about" className="text-emerald-300 hover:text-emerald-100 transition-colors">About Us</Link>
                <Link href="/contact" className="text-emerald-300 hover:text-emerald-100 transition-colors">Contact Support</Link>
                <Link href="/privacy-policy" className="text-emerald-300 hover:text-emerald-100 transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="text-emerald-300 hover:text-emerald-100 transition-colors">Terms of Service</Link>
                <Link href="/disclaimer" className="text-emerald-300 hover:text-emerald-100 transition-colors">Disclaimer</Link>
              </div>
              
              {/* Column 4 */}
              <div className="flex flex-col gap-3 text-sm">
                <h3 className="font-semibold text-emerald-100">Official Support</h3>
                <p className="text-emerald-300 mb-2">Have feedback or business inquiries?</p>
                <a href="mailto:asbusiness276@gmail.com" className="text-amber-300 font-bold hover:text-emerald-200 transition-colors">
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
