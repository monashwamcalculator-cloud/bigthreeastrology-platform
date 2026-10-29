import { Metadata } from "next";
import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "All 100 Free Astrology & Numerology Calculators | BIGThreeAstrology",
  description:
    "Browse all 100 free astrology and numerology calculators: Big Three signs, Kundali Milan, Choghadia, Sade Sati, numerology, tarot, synastry and career astrology tools.",
  path: "/tools"
});

const CATEGORY_ORDER = ["planetary", "vedic", "numerology", "guidance", "synastry", "career"] as const;

export default function ToolsHubPage() {
  const groups = CATEGORY_ORDER.map((key) => ({
    key,
    name: MASTER_TOOLS_LIST.find((t) => t.category === key)?.categoryName ?? key,
    tools: MASTER_TOOLS_LIST.filter((t) => t.category === key)
  })).filter((g) => g.tools.length > 0);

  return (
    <div className="py-10 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          All 100 Free <span className="gradient-text-gold">Astrology Calculators</span>
        </h1>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">
          Every BIGThreeAstrology tool in one place — Vedic Jyotish, Western birth-chart calculators,
          numerology, tarot and relationship synastry. All tools are 100% free and instant, with no
          sign-up. Pick a category below or start with our most loved calculator, the{" "}
          <Link href="/tools/big-three" className="text-amber-300 underline hover:text-white">
            Big Three Calculator
          </Link>
          .
        </p>
      </div>

      {groups.map((group) => (
        <section key={group.key} id={group.key} className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-display font-bold text-white">
            {group.name} <span className="text-amber-400 text-base">({group.tools.length} tools)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="glass-card-hover p-4 rounded-xl border border-amber-500/25 hover:border-amber-400/70 bg-black/60 group transition-all"
              >
                <h3 className="text-sm font-display font-bold text-white group-hover:text-amber-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-amber-200/80 mt-1 leading-relaxed">{tool.shortDesc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-3xl mx-auto space-y-3 text-center">
        <h2 className="text-2xl font-display font-bold text-white">New to astrology?</h2>
        <p className="text-amber-200/90 text-sm md:text-base leading-relaxed">
          Start with your Sun, Moon and Rising signs in the{" "}
          <Link href="/tools/big-three" className="text-amber-300 underline hover:text-white">
            Big Three Calculator
          </Link>
          , check your match with{" "}
          <Link href="/tools/kundali-milan" className="text-amber-300 underline hover:text-white">
            Kundali Milan
          </Link>
          , and read our{" "}
          <Link href="/blog" className="text-amber-300 underline hover:text-white">
            free guides
          </Link>{" "}
          to learn how each calculator works.
        </p>
      </section>
    </div>
  );
}
