import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cosmic-700/50 bg-cosmic-950/70 backdrop-blur-xl relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent"></div>
      
      <div className="container-main flex flex-wrap items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.6)]">✨</span>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="gradient-text transition-all duration-300 group-hover:brightness-125">BIGThree</span>
            <span className="text-white">Astrology</span>
          </span>
        </Link>
        
        <nav className="flex flex-wrap items-center gap-3 md:gap-5 text-xs sm:text-sm font-medium text-cosmic-100">
          <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <Link href="/#tools" className="hover:text-accent-gold transition-colors duration-200 flex items-center gap-1 font-semibold text-accent-gold">
            <span>🔮</span> All Tools
          </Link>
          <Link href="/tools/kundali-milan" className="hover:text-accent-gold transition-colors duration-200 hidden sm:flex items-center gap-1">
            <span>🕉️</span> Kundali Milan
          </Link>
          <Link href="/tools/love-compatibility" className="hover:text-accent-rose transition-colors duration-200 hidden md:flex items-center gap-1">
            <span>💖</span> Love Match
          </Link>
          <Link href="/tools/numerology" className="hover:text-accent-gold transition-colors duration-200 hidden lg:flex items-center gap-1">
            <span>🔢</span> Numerology
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#tools" className="btn-glow text-xs sm:text-sm py-2 px-4 font-bold flex items-center gap-1">
            <span>✨</span> Explore 9 Free Tools
          </Link>
        </div>
      </div>
    </header>
  );
}
