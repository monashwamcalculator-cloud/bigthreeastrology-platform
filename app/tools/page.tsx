import { Metadata } from "next";
import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: `All ${MASTER_TOOLS_LIST.length} Free Astrology & Numerology Calculators | BIGThreeAstrology`,
  description:
    `Browse all ${MASTER_TOOLS_LIST.length} free astrology and numerology calculators: Big Three signs, Kundali Milan, Choghadia, Sade Sati, numerology, tarot, synastry and career astrology tools.`,
  path: "/tools"
});

const CATEGORY_ORDER = ["planetary", "vedic", "numerology", "guidance", "synastry", "career"] as const;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${MASTER_TOOLS_LIST.length} Free Astrology & Numerology Calculators`,
  description:
    "The complete BIGThreeAstrology catalogue: birth-chart, Vedic, numerology, synastry, guidance and career calculators — all free, no sign-up.",
  numberOfItems: MASTER_TOOLS_LIST.length,
  itemListElement: MASTER_TOOLS_LIST.map((tool, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: tool.name,
    url: absoluteUrl(`/tools/${tool.slug}`)
  }))
};

export default function ToolsHubPage() {
  const groups = CATEGORY_ORDER.map((key) => ({
    key,
    name: MASTER_TOOLS_LIST.find((t) => t.category === key)?.categoryName ?? key,
    tools: MASTER_TOOLS_LIST.filter((t) => t.category === key)
  })).filter((g) => g.tools.length > 0);

  return (
    <div className="py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold">
          All {MASTER_TOOLS_LIST.length} Free <span className="gradient-text-gold">Astrology Calculators</span>
        </h1>
        <p className="text-[rgba(61,82,69,0.92)] text-sm md:text-base leading-relaxed">
          Every BIGThreeAstrology tool in one place — Vedic Jyotish, Western birth-chart calculators,
          numerology, tarot and relationship synastry. All tools are 100% free and instant, with no
          sign-up. Pick a category below or start with our most loved calculator, the{" "}
          <Link href="/tools/big-three" className="text-[#075433] underline hover:text-[#042F2A]">
            Big Three Calculator
          </Link>
          .
        </p>
      </div>

      <nav aria-label="Jump to a tool category" className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {groups.map((group) => (
          <a
            key={group.key}
            href={`#${group.key}`}
            className="px-4 py-1.5 rounded-full border border-[#d4e2dd] bg-white text-xs font-semibold text-[#16402b] hover:bg-[#dff5ec] transition-colors"
          >
            {group.name}
          </a>
        ))}
      </nav>

      {groups.map((group) => (
        <section key={group.key} id={group.key} className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-display font-bold text-[#042F2A]">
            {group.name} <span className="text-[#08745A] text-base">({group.tools.length} tools)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="glass-card-hover p-4 rounded-xl border border-[rgba(8,116,90,0.28)] hover:border-[rgba(8,116,90,0.7)] bg-white group transition-all"
              >
                <h3 className="text-sm font-display font-bold text-[#042F2A] group-hover:text-[#075433] transition-colors leading-snug line-clamp-2 min-h-[2.75em]">
                  {tool.name}
                </h3>
                <p className="text-xs text-[rgba(61,82,69,0.82)] mt-1 leading-relaxed">{tool.shortDesc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-3xl mx-auto space-y-3 text-center">
        <h2 className="text-2xl font-display font-bold text-[#042F2A]">New to astrology?</h2>
        <p className="text-[rgba(61,82,69,0.92)] text-sm md:text-base leading-relaxed">
          Start with your Sun, Moon and Rising signs in the{" "}
          <Link href="/tools/big-three" className="text-[#075433] underline hover:text-[#042F2A]">
            Big Three Calculator
          </Link>
          , check your match with{" "}
          <Link href="/tools/kundali-milan" className="text-[#075433] underline hover:text-[#042F2A]">
            Kundali Milan
          </Link>
          , and read our{" "}
          <Link href="/blog" className="text-[#075433] underline hover:text-[#042F2A]">
            free guides
          </Link>{" "}
          to learn how each calculator works.
        </p>
      </section>
    </div>
  );
}
