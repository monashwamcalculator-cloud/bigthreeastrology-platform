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
  title: "BIGThreeAstrology",
  description: "Big Three calculator, astrology blog, and astrologer marketplace.",
  keywords: ["astrology", "big three", "sun sign", "moon sign", "rising sign", "calculator"],
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
      <body className="stars-bg min-h-screen flex flex-col font-sans text-cosmic-100 bg-cosmic-950">
        <Navbar />
        <main className="container-main flex-grow">{children}</main>
        
        <div className="border-t border-indigo-400/30 my-8"></div>
        
        <footer className="glass-card stars-bg mt-auto border-t-0 border-indigo-400/30">
          <div className="container-main py-12 flex flex-wrap gap-8 justify-between md:grid md:grid-cols-4">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <span className="text-xl font-display font-bold gradient-text">✨ BIGThreeAstrology</span>
              <p className="text-sm text-cosmic-200">
                Discover your cosmic identity through your sun, moon, and rising signs.
              </p>
              <p className="text-xs text-cosmic-400 mt-2">
                &copy; {new Date().getFullYear()} BIGThreeAstrology. All rights reserved.
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-3 text-sm">
              <h3 className="font-semibold text-cosmic-100">Quick Links</h3>
              <Link href="/" className="text-cosmic-300 hover:text-accent-gold transition-colors">Home</Link>
              <Link href="/#calculator" className="text-cosmic-300 hover:text-accent-gold transition-colors">Calculator</Link>
              <Link href="/blog" className="text-cosmic-300 hover:text-accent-gold transition-colors">Blog</Link>
              <Link href="/astrologers" className="text-cosmic-300 hover:text-accent-gold transition-colors">Astrologers</Link>
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col gap-3 text-sm">
              <h3 className="font-semibold text-cosmic-100">Resources</h3>
              <Link href="/about" className="text-cosmic-300 hover:text-accent-gold transition-colors">About</Link>
              <Link href="/contact" className="text-cosmic-300 hover:text-accent-gold transition-colors">Contact</Link>
              <Link href="/privacy-policy" className="text-cosmic-300 hover:text-accent-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-cosmic-300 hover:text-accent-gold transition-colors">Terms & Conditions</Link>
              <Link href="/disclaimer" className="text-cosmic-300 hover:text-accent-gold transition-colors">Disclaimer</Link>
            </div>
            
            {/* Column 4 */}
            <div className="flex flex-col gap-3 text-sm">
              <h3 className="font-semibold text-cosmic-100">Connect</h3>
              <p className="text-cosmic-300 mb-2">Reach out for support or inquiries.</p>
              <a href="mailto:support@bigthreeastrology.com" className="text-accent-cyan hover:text-accent-gold transition-colors">
                support@bigthreeastrology.com
              </a>
            </div>
            
          </div>
        </footer>
      </body>
    </html>
  );
}
