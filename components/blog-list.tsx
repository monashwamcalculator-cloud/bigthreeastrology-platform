"use client";

import { useState } from "react";
import { BlogCard, type BlogCardPost } from "@/components/blog-card";

/** Canonical registry-category order for the filter pills. */
const CATEGORY_ORDER = [
  "Birth Chart & Planets",
  "Vedic Jyotish & Timing",
  "Numerology & Name Math",
  "Tarot & Soul Guidance",
  "Synastry & Relationships",
  "Career & Financial Astrology",
];

const PAGE_SIZE = 24;

export function BlogList({ posts }: { posts: BlogCardPost[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const counts = new Map<string, number>();
  for (const post of posts) {
    if (post.category) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  const categories = CATEGORY_ORDER.filter((cat) => counts.has(cat));

  const filtered =
    activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);
  const visible = filtered.slice(0, visibleCount);

  const pillClass = (active: boolean) =>
    `cursor-pointer px-3.5 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-300 ${
      active
        ? "bg-[#08745A] hover:bg-[#075433] text-[#042F2A] shadow-lg border border-[#08745A]"
        : "text-[#2C473F] hover:text-[#042F2A] hover:bg-[#DFF5EC] border border-transparent"
    }`;

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="space-y-6">
      {/* Category filter pills — same pill-bar pattern as the homepage tools suite */}
      <div className="flex flex-wrap justify-center gap-2 p-2.5 rounded-2xl bg-white border border-[#D4E2DD] max-w-5xl mx-auto">
        <button onClick={() => selectCategory("All")} className={pillClass(activeCategory === "All")}>
          All ({posts.length})
        </button>
        {categories.map((cat) => (
          <button key={cat} onClick={() => selectCategory(cat)} className={pillClass(activeCategory === cat)}>
            {cat} ({counts.get(cat)})
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post, i) => (
          <BlogCard
            key={post.slug}
            post={post}
            style={{ animationDelay: `${(i % 5) * 100 + 100}ms` }}
          />
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="text-center pt-2">
          <button
            onClick={() => setVisibleCount(filtered.length)}
            className="cursor-pointer bg-[#08745A] hover:bg-[#075433] text-[#042F2A] font-display font-bold text-sm px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Load more articles ({filtered.length - visibleCount} more)
          </button>
        </div>
      )}
    </div>
  );
}
