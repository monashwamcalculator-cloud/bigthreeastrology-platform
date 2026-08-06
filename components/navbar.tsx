import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-500/25 bg-[#040714]/90 backdrop-blur-xl relative">
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
      
      <div className="container-main flex flex-wrap items-center justify-between gap-4 py-2.5 md:py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:scale-105 transition-transform bg-[#040714]">
            <Image
              src="/logo.jpg"
              alt="BIGThreeAstrology Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            <span className="gradient-text transition-all duration-300 group-hover:brightness-125">BIGThree</span>
            <span className="text-white">Astrology</span>
          </span>
        </Link>
        
        <nav className="flex flex-wrap items-center gap-3 md:gap-5 text-xs sm:text-sm font-medium text-sky-100">
          <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <Link href="/tools/big-three" className="hover:text-amber-300 transition-colors duration-200 flex items-center gap-1 font-semibold text-sky-300">
            <span>🔮</span> All 100 Tools
          </Link>
          <Link href="/tools/kundali-milan" className="hover:text-amber-300 transition-colors duration-200 hidden sm:flex items-center gap-1">
            <span>🕉️</span> Kundali Milan
          </Link>
          <Link href="/tools/choghadia" className="hover:text-amber-300 transition-colors duration-200 hidden md:flex items-center gap-1">
            <span>🔮</span> Choghadia
          </Link>
          <Link href="/tools/love-compatibility" className="hover:text-amber-300 transition-colors duration-200 hidden md:flex items-center gap-1">
            <span>💖</span> Love Match
          </Link>
          <Link href="/tools/numerology" className="hover:text-amber-300 transition-colors duration-200 hidden lg:flex items-center gap-1">
            <span>🔢</span> Numerology
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/tools/big-three" className="btn-glow text-xs sm:text-sm py-2 px-4 font-bold flex items-center gap-1">
            <span>✨</span> Explore 100 Free Tools
          </Link>
        </div>
      </div>
    </header>
  );
}
