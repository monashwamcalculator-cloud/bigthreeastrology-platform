import { renderOgCard } from "@/lib/og-card";

/**
 * Per-page social cards for the nine static pages (re-audit F2):
 * /, /tools, /blog, /about, /contact, /privacy-policy,
 * /terms-and-conditions, /disclaimer, /author/saahil.
 * Titles/subtitles mirror each page's own title and content.
 * Referenced from page metadata via buildMetadata (lib/seo.ts).
 */
const STATIC_OG_CARDS: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
  home: {
    eyebrow: "Free Calculators",
    title: "102 Free Astrology & Numerology Calculators",
    subtitle:
      "Sun, Moon & Rising signs, Kundali Milan, Choghadia, Sade Sati, numerology & tarot — all free, no sign-up."
  },
  tools: {
    eyebrow: "All Calculators",
    title: "102 Free Astrology & Numerology Calculators",
    subtitle:
      "The complete catalogue: birth-chart, Vedic, numerology, synastry, guidance and career calculators — all free."
  },
  blog: {
    eyebrow: "Blog",
    title: "Astrology Blog & Cosmic Guides",
    subtitle:
      "In-depth guides on Sun, Moon & Rising signs, Spouse Prediction, Kundali Milan, Choghadia Muhurat and Sade Sati."
  },
  about: {
    eyebrow: "About",
    title: "About BIGThreeAstrology",
    subtitle:
      "100+ free Vedic and Western astrology calculators, with the method behind every result explained. Meet the founder, Saahil."
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Us",
    subtitle: "Email us at asbusiness276@gmail.com for support, feedback or feature requests."
  },
  "privacy-policy": {
    eyebrow: "Trust & Safety",
    title: "Privacy Policy",
    subtitle:
      "How BIGThreeAstrology handles calculator inputs, cookies, analytics, advertising and your privacy."
  },
  "terms-and-conditions": {
    eyebrow: "Trust & Safety",
    title: "Terms and Conditions",
    subtitle: "Terms of service and user agreement for using BIGThreeAstrology's free calculators."
  },
  disclaimer: {
    eyebrow: "Trust & Safety",
    title: "Astrological Disclaimer",
    subtitle:
      "Our calculations are for self-awareness, education and entertainment — never a substitute for professional advice."
  },
  "author-saahil": {
    eyebrow: "Author",
    title: "Saahil — Founder & Author",
    subtitle: "Meet the founder and author behind BIGThreeAstrology's calculators and guides."
  }
};

export function GET(_request: Request, { params }: { params: { key: string } }) {
  const card = STATIC_OG_CARDS[params.key];
  if (!card) {
    return new Response("Not found", { status: 404 });
  }
  return renderOgCard(card);
}
