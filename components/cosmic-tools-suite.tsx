"use client";

import { useState } from "react";
import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<string>("planetary");

  const categories = [
    { key: "planetary", name: "🌟 Birth Chart & Planets (20)", icon: "🌌" },
    { key: "vedic", name: "🕉️ Vedic Jyotish & Timing (20)", icon: "🕉️" },
    { key: "numerology", name: "🔢 Numerology & Name Math (20)", icon: "📜" },
    { key: "guidance", name: "🔮 Tarot & Soul Guidance (15)", icon: "🎴" },
    { key: "synastry", name: "🌌 Synastry & Relationships (15)", icon: "💖" },
    { key: "career", name: "💼 Career & Wealth Astrology (10)", icon: "💰" }
  ];

  const filteredTools = MASTER_TOOLS_LIST.filter((tool) => tool.category === activeCategory);

  return (
    <div className="w-full space-y-6">
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 p-2.5 rounded-2xl bg-black/60 border border-sky-500/30 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3.5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-sky-500 via-cyan-600 to-sky-600 text-sky-950 shadow-lg shadow-sky-900/50 border border-sky-300"
                : "text-sky-200 hover:text-white hover:bg-sky-500/20"
            }`}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      {/* Grid Displaying All Tools in Selected Category */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="glass-card-hover p-3.5 rounded-xl border border-sky-500/20 hover:border-sky-400/60 bg-black/50 flex flex-col items-center text-center group transition-all"
          >
            <span className="text-3xl mb-1.5 group-hover:scale-110 transition-transform">{tool.icon}</span>
            <h3 className="text-xs font-display font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              {tool.name}
            </h3>
            <span className="text-[10px] text-sky-200/80 mt-1 line-clamp-2 leading-tight">
              {tool.shortDesc}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-sky-300/80 font-semibold">
          ✨ Showing 100 Authentic Astrological, Vedic & Numerology Calculators
        </p>
      </div>
    </div>
  );
}
