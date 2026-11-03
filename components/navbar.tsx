"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "All 100+ Tools" },
  { href: "/tools/kundali-milan", label: "Kundali Milan" },
  { href: "/tools/choghadia", label: "Choghadia" },
  { href: "/tools/love-compatibility", label: "Love Match" },
  { href: "/tools/numerology", label: "Numerology" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(8,116,90,0.35)] bg-white/95 backdrop-blur-xl relative shadow-lg">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      <div className="container-main flex flex-wrap items-center justify-between gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#08745A] shadow-[0_0_15px_rgba(46,125,79,0.3)] group-hover:scale-105 transition-transform bg-white">
            <Image
              src="/logo.svg"
              alt="BIGThreeAstrology Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="gradient-text-gold transition-all duration-300 group-hover:brightness-125">BIGThree</span>
            <span className="text-[#042F2A]">Astrology</span>
          </span>
        </Link>
        
        <nav className="flex flex-wrap items-center gap-3 md:gap-5 text-xs sm:text-sm font-medium text-[#2C473F]">
          <Link href="/" className="hover:text-[#042F2A] transition-colors duration-200">Home</Link>
          <Link href="/tools" className="hover:text-[#075433] transition-colors duration-200 flex items-center gap-1 font-semibold text-[#075433]">
            All 100+ Tools
          </Link>
          <Link href="/tools/kundali-milan" className="hover:text-[#075433] transition-colors duration-200 hidden sm:flex items-center gap-1">
            Kundali Milan
          </Link>
          <Link href="/tools/choghadia" className="hover:text-[#075433] transition-colors duration-200 hidden md:flex items-center gap-1">
            Choghadia
          </Link>
          <Link href="/tools/love-compatibility" className="hover:text-[#075433] transition-colors duration-200 hidden md:flex items-center gap-1">
            Love Match
          </Link>
          <Link href="/tools/numerology" className="hover:text-[#075433] transition-colors duration-200 hidden lg:flex items-center gap-1">
            Numerology
          </Link>
          <Link href="/blog" className="hover:text-[#042F2A] transition-colors duration-200">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/tools" className="btn-glow text-xs sm:text-sm py-2 px-4 font-bold flex items-center gap-1">
            Explore 100+ Free Tools
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#042F2A] hover:text-[#075433] hover:bg-[#DFF5EC] transition-colors"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden absolute inset-x-0 top-full z-50 border-b border-[#D4E2DD] bg-white shadow-lg"
        >
          <nav aria-label="Mobile" className="container-main flex flex-col py-2">
            {MOBILE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-3 text-sm font-medium text-[#042F2A] hover:bg-[#DFF5EC] hover:text-[#075433] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tools"
              onClick={() => setMenuOpen(false)}
              className="btn-glow mt-2 mb-2 block px-4 py-2.5 text-center text-sm font-bold"
            >
              Explore 100+ Free Tools
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
