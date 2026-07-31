import Link from "next/link";
import { auth } from "@/lib/auth";

export async function Navbar() {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 border-b border-cosmic-700/50 bg-cosmic-950/60 backdrop-blur-xl relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent"></div>
      
      <div className="container-main flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">✨</span>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text transition-all duration-300 group-hover:brightness-125">BIGThree</span>
            <span className="text-white">Astrology</span>
          </span>
        </Link>
        
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-cosmic-100">
          <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <Link href="/tools/kundali-milan" className="hover:text-accent-gold transition-colors duration-200 flex items-center gap-1 font-semibold text-accent-gold">
            <span>🕉️</span> Kundali Milan
          </Link>
          <Link href="/tools/love-compatibility" className="hover:text-accent-rose transition-colors duration-200 flex items-center gap-1">
            <span>💖</span> Love Match
          </Link>
          <Link href="/tools/numerology" className="hover:text-accent-gold transition-colors duration-200 flex items-center gap-1">
            <span>🔢</span> Numerology
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
          <Link href="/astrologers" className="hover:text-white transition-colors duration-200">Astrologers Directory</Link>
        </nav>

        <div className="flex items-center gap-3">
          {session?.user ? (
            <Link href="/dashboard" className="btn-primary text-sm py-2 px-4">Dashboard</Link>
          ) : (
            <>
              <Link href="/login" className="btn-secondary text-sm py-2 px-4">Login</Link>
              <Link href="/signup" className="btn-primary text-sm py-2 px-4">Signup</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
