import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

export type BlogCardPost = {
  slug: string;
  title: string;
  metaDescription: string;
  image?: string | null;
  dateLabel: string;
  category?: string | null;
  readingTime: number;
};

/** Loose blog post (sample data or a Prisma row) → card-ready DTO. */
export function toBlogCardPost(post: {
  slug: string;
  title: string;
  metaDescription: string;
  image?: string | null;
  createdAt: Date | string;
  category?: string | null;
  content?: string | null;
}): BlogCardPost {
  const words = (post.content ?? "").split(/\s+/).filter(Boolean).length;
  return {
    slug: post.slug,
    title: post.title,
    metaDescription: post.metaDescription,
    image: post.image ?? null,
    dateLabel: new Date(post.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    category: post.category ?? null,
    readingTime: Math.max(1, Math.round(words / 200)),
  };
}

export function BlogCard({
  post,
  style,
  headingLevel = 2,
}: {
  post: BlogCardPost;
  style?: CSSProperties;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article
      className="glass-card-hover p-5 flex flex-col justify-between animate-slide-up group border-amber-500/25 bg-black/60"
      style={style}
    >
      <div>
        {post.image && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-amber-500/30">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <Heading className="text-lg font-display font-bold text-white mb-2 leading-snug group-hover:text-[#075433] transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </Heading>

        <p className="text-[11px] font-semibold tracking-wide text-[#2C473F]/75 mb-2">
          {post.dateLabel}
          {post.category ? ` • ${post.category}` : ""} • {post.readingTime} min read
        </p>

        <p className="text-xs text-amber-200/80 line-clamp-3 mb-4 leading-relaxed">{post.metaDescription}</p>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="text-amber-300 hover:text-white transition-colors inline-flex items-center text-xs font-bold mt-auto pt-3 border-t border-amber-500/20"
      >
        Read Full Article <span className="ml-1">→</span>
      </Link>
    </article>
  );
}
