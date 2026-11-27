"use client";

import { useState } from "react";
import Link from "next/link";
import { MASTER_TOOLS_LIST } from "@/lib/all-tools-registry";
import { CosmicIcon } from "@/components/cosmic-icons";

export function CosmicToolsSuite() {
  const [activeCategory, setActiveCategory] = useState<string>("planetary");

  const countFor = (key: string) => MASTER_TOOLS_LIST.filter((tool) => tool.category === key).length;
  const categories = [
    { key: "planetary", name: `Birth Chart & Planets (${countFor("planetary")})`, iconType: "zodiac" },
    { key: "vedic", name: `Vedic Jyotish & Timing (${countFor("vedic")})`, iconType: "vedic" },
    { key: "numerology", name: `Numerology & Name Math (${countFor("numerology")})`, iconType: "numerology" },
    { key: "guidance", name: `Tarot & Soul Guidance (${countFor("guidance")})`, iconType: "tarot" },
    { key: "synastry", name: `Synastry & Relationships (${countFor("synastry")})`, iconType: "spouse" },
    { key: "career", name: `Career & Financial Astrology (${countFor("career")})`, iconType: "saturn" }
  ];

  const filteredTools = MASTER_TOOLS_LIST.filter((tool) => tool.category === activeCategory);

  return (
    <div className="w-full space-y-6">
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 p-2.5 rounded-2xl bg-white border border-[rgba(8,116,90,0.35)] max-w-5xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`cursor-pointer px-3.5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
              activeCategory === cat.key
                ? "bg-gradient-to-r from-[#3b8a5c] via-cosmic-leaf to-cosmic-mid text-white shadow-lg shadow-emerald-900/30 border border-cosmic-leaf"
                : "text-[#43584a] hover:text-cosmic-deep hover:bg-[#eaf1e6] border border-transparent"
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
            className="glass-card-hover p-4 rounded-xl border border-[rgba(8,116,90,0.28)] hover:border-[rgba(8,116,90,0.7)] bg-white flex flex-col items-center text-center group transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-[#DFF5EC] border border-[rgba(8,116,90,0.45)] flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:border-[#08745A] transition-all shadow-md">
              <CosmicIcon name={tool.slug} className="w-5 h-5" />
            </div>

            <h3 className="text-xs font-display font-bold text-[#042F2A] group-hover:text-[#075433] transition-colors line-clamp-1">
              {tool.name}
            </h3>
            <span className="text-[10px] text-[rgba(61,82,69,0.82)] mt-1 line-clamp-2 leading-tight">
              {tool.shortDesc}
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center pt-2">
        <p className="text-xs text-[rgba(7,84,51,0.8)] font-semibold flex items-center justify-center gap-1.5">
          <CosmicIcon name="zodiac" className="w-4 h-4" />
          <span>Showing {filteredTools.length} of {MASTER_TOOLS_LIST.length} calculators</span>
        </p>
      </div>
    </div>
  );
}
