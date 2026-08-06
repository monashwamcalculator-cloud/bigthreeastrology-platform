"use client";

import { useState } from "react";
import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { CosmicIcon } from "@/components/cosmic-icons";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<string>("planetary");

  const categories = [
    { key: "planetary", name: "Birth Chart & Planets (20)", iconType: "zodiac" },
    { key: "vedic", name: "Vedic Jyotish & Timing (20)", iconType: "vedic" },
    { key: "numerology", name: "Numerology & Name Math (20)", iconType: "numerology" },
    { key: "guidance", name: "Tarot & Soul Guidance (15)", iconType: "tarot" },
    { key: "synastry", name: "Synastry & Relationships (15)", iconType: "spouse" },
    { key: "career", name: "Career & Wealth Astrology (10)", iconType: "saturn" }
  ];

  const filteredTools = MASTER_TOOLS_LIST.filter((tool) => tool.category === activeCategory);

  return (
    <div className="w-full space-y-6">
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 p-2.5 rounded-2xl bg-black/70 border border-amber-500/30 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3.5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black shadow-lg shadow-amber-900/50 border border-amber-300"
                : "text-amber-200 hover:text-white hover:bg-amber-500/20"
            }`}
          >
            <CosmicIcon name={cat.iconType} className="w-4 h-4" />
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Grid Displaying All Tools with Custom Luxury SVG Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
        {filteredTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="glass-card-hover p-4 rounded-xl border border-amber-500/25 hover:border-amber-400/70 bg-black/60 flex flex-col items-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-amber-950/60 border border-amber-500/40 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:border-amber-300 transition-all shadow-md">
              <CosmicIcon name={tool.slug} className="w-5 h-5" />
            </div>

            <h3 className="text-xs font-display font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              {tool.name}
            </h3>
            <span className="text-[10px] text-amber-200/80 mt-1 line-clamp-2 leading-tight">
              {tool.shortDesc}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-amber-300/80 font-semibold flex items-center justify-center gap-1.5">
          <CosmicIcon name="zodiac" className="w-4 h-4" />
          <span>Showing 100 Authentic Astrological, Vedic & Numerology Calculators</span>
        </p>
      </div>
    </div>
  );
}
