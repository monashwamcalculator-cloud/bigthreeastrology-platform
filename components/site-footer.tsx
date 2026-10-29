import Image from "next/image";
import Link from "next/link";

const popularTools = [
  { name: "Big Three Calculator", href: "/tools/big-three" },
  { name: "Spouse Predictor", href: "/tools/spouse-predictor" },
  { name: "Kundali Milan — 36 Gunas", href: "/tools/kundali-milan" },
  { name: "Choghadia Muhurat Today", href: "/tools/choghadia" },
  { name: "Sade Sati Phase Checker", href: "/tools/sade-sati" },
  { name: "Love Compatibility", href: "/tools/love-compatibility" },
  { name: "Life Path Numerology", href: "/tools/numerology" },
  { name: "Saturn Return Calculator", href: "/tools/saturn-return" },
];

const categories = [
  { name: "Birth Chart & Planets", href: "/tools#planetary" },
  { name: "Vedic Jyotish & Timing", href: "/tools#vedic" },
  { name: "Numerology & Name Math", href: "/tools#numerology" },
  { name: "Tarot & Soul Guidance", href: "/tools#guidance" },
  { name: "Synastry & Relationships", href: "/tools#synastry" },
  { name: "Career & Wealth Astrology", href: "/tools#career" },
  { name: "All 100 Free Tools", href: "/tools" },
];

const moreTools = [
  { name: "Venus Sign Calculator", href: "/tools/venus-sign" },
  { name: "Mercury Sign Calculator", href: "/tools/mercury-sign" },
  { name: "Moon Phase Calculator", href: "/tools/moon-phase" },
  { name: "Nakshatra Finder", href: "/tools/nakshatra" },
  { name: "Angel Numbers Decoder", href: "/tools/angel-numbers" },
  { name: "Gemstone Finder", href: "/tools/gemstone" },
  { name: "Rahu Kaal Today", href: "/tools/rahu-kaal" },
  { name: "Daily Horoscope", href: "/tools/horoscope" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "About the Author — Saahil", href: "/author/saahil" },
  { name: "Blog & Astrology Guides", href: "/blog" },
  { name: "Contact Support", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-and-conditions" },
  { name: "Disclaimer", href: "/disclaimer" },
];

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display font-bold text-white text-sm tracking-wide">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href + link.name}>
            <Link href={link.href} className="text-sm text-[#a9c6ad] hover:text-white transition-colors">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="theme-dark mt-16"
      style={{
        backgroundColor: "#16402b",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1.4px), radial-gradient(rgba(126,212,146,0.13) 1px, transparent 1.4px)",
        backgroundSize: "26px 26px, 42px 42px",
        backgroundPosition: "0 0, 13px 21px",
      }}
    >
      <div className="container-main py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image src="/logo-white.svg" alt="BIGThreeAstrology logo" width={38} height={38} className="w-[38px] h-[38px]" />
              <span className="text-xl font-display font-bold text-white">
                BIGThree<span className="text-[#8fd0a4]">Astrology</span>
              </span>
            </Link>
            <p className="text-sm text-[#a9c6ad] leading-relaxed max-w-xs">
              100 free astrology and numerology calculators — Big Three signs, Kundali Milan, Sade Sati, Choghadia,
              love matching and more. Instant results, no sign-up, and your birth details are never stored.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="px-2.5 py-1 rounded-full border border-emerald-300/40 text-[#b9d2be]">100+ Free Calculators</span>
              <span className="px-2.5 py-1 rounded-full border border-emerald-300/40 text-[#b9d2be]">No Sign-up Needed</span>
              <span className="px-2.5 py-1 rounded-full border border-emerald-300/40 text-[#b9d2be]">Vedic + Western</span>
            </div>
          </div>

          <FooterColumn title="Popular Calculators" links={popularTools} />
          <FooterColumn title="Tool Categories" links={categories} />
          <FooterColumn title="More Calculators" links={moreTools} />
          <FooterColumn title="Company & Legal" links={company} />
        </div>

        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8fb596]">
          <p>© {new Date().getFullYear()} BIGThreeAstrology. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Astrology content is for guidance and entertainment. Read our{" "}
            <Link href="/disclaimer" className="underline hover:text-white transition-colors">Disclaimer</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
