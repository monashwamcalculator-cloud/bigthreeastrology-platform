"use client";

type IconProps = {
  name: string;
  className?: string;
};

export function CosmicIcon({ name, className = "w-6 h-6" }: IconProps) {
  // SVG Gold & Amber Gradients & Vectors
  switch (name) {
    case "zodiac":
    case "big-three":
    case "rising-sign":
    case "sun-sign":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="5" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="url(#goldGrad)" />
          <path d="M12 1v3M12 20v3M1 12h3M20 12h3" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "spouse":
    case "love":
    case "soulmate":
    case "synastry":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#loveGold)" stroke="#fde047" strokeWidth="0.5" />
          <defs>
            <linearGradient id="loveGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "vedic":
    case "kundali":
    case "dasha":
    case "panchang":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="url(#vedicGold)" strokeWidth="1.5" />
          <path d="M3 3l18 18M21 3L3 21" stroke="url(#vedicGold)" strokeWidth="1" />
          <polygon points="12,3 21,12 12,21 3,12" fill="none" stroke="url(#vedicGold)" strokeWidth="1.2" />
          <circle cx="12" cy="12" r="2" fill="#fde047" />
          <defs>
            <linearGradient id="vedicGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "saturn":
    case "sade-sati":
    case "jupiter":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" fill="url(#planetGold)" />
          <ellipse cx="12" cy="12" rx="10" ry="3" stroke="url(#ringGold)" strokeWidth="1.5" transform="rotate(-20 12 12)" />
          <defs>
            <linearGradient id="planetGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
            <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "numerology":
    case "destiny":
    case "angel":
    case "brand":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="url(#numGold)" strokeWidth="1.5" />
          <path d="M12 6v12M8 10l4-4 4 4" stroke="url(#numGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="numGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "tarot":
    case "moon":
    case "oracle":
    case "horoscope":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 1-10-10z" fill="url(#moonGold)" stroke="#fde047" strokeWidth="0.5" />
          <path d="M17 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="#ffffff" />
          <defs>
            <linearGradient id="moonGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "gemstone":
    case "crystal":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 19,7 19,17 12,22 5,17 5,7" fill="url(#gemGold)" stroke="#fde047" strokeWidth="1" />
          <polyline points="5,7 12,12 19,7" stroke="#ffffff" strokeWidth="1" />
          <line x1="12" y1="12" x2="12" y2="22" stroke="#ffffff" strokeWidth="1" />
          <defs>
            <linearGradient id="gemGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "venus":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="9" r="5.5" stroke="url(#venGold)" strokeWidth="1.6" />
          <path d="M12 14.5V21M8.5 17.8h7" stroke="url(#venGold)" strokeWidth="1.6" strokeLinecap="round" />
          <defs>
            <linearGradient id="venGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mercury":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3.5c0 2 2.2 3.5 5 3.5s5-1.5 5-3.5" stroke="url(#merGold)" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="11" r="4" stroke="url(#merGold)" strokeWidth="1.6" />
          <path d="M12 15v6M9 18h6" stroke="url(#merGold)" strokeWidth="1.6" strokeLinecap="round" />
          <defs>
            <linearGradient id="merGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "mars":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="14" r="5.5" stroke="url(#marGold)" strokeWidth="1.6" />
          <path d="M14 10L20 4M14.5 4H20v5.5" stroke="url(#marGold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="marGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "sun":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4.5" stroke="url(#sunGold)" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.4" fill="url(#sunGold)" />
          <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5 5l1.7 1.7M17.3 17.3L19 19M19 5l-1.7 1.7M6.7 17.3L5 19" stroke="url(#sunGold)" strokeWidth="1.6" strokeLinecap="round" />
          <defs>
            <linearGradient id="sunGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "clock":
    case "choghadia":
    case "rahu-kaal":
    case "timing":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="url(#clkGold)" strokeWidth="1.6" />
          <path d="M12 7v5l3.5 2" stroke="url(#clkGold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="clkGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "sparkle":
    case "horoscope":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c.7 5.5 2.8 7.6 8.3 8.3-5.5.7-7.6 2.8-8.3 8.3C11.3 12.1 9.2 10 3.7 9.3 9.2 8.6 11.3 6.5 12 2z" fill="url(#spkGold)" />
          <path d="M19 15c.3 2.3 1.2 3.2 3.5 3.5-2.3.3-3.2 1.2-3.5 3.5-.3-2.3-1.2-3.2-3.5-3.5 2.3-.3 3.2-1.2 3.5-3.5z" fill="url(#spkGold)" opacity="0.75" />
          <defs>
            <linearGradient id="spkGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="url(#defGold)" strokeWidth="1.5" />
          <polygon points="12,6 15,10 19,10 16,13 17,17 12,14 7,17 8,13 5,10 9,10" fill="url(#defGold)" />
          <defs>
            <linearGradient id="defGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}
