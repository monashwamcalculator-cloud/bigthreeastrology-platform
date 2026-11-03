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
      className="glass-card-hover p-5 flex flex-col justify-between animate-slide-up group border-[rgba(8,116,90,0.28)] bg-white"
      style={style}
    >
      <div>
        {post.image && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-[rgba(8,116,90,0.35)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <Heading className="text-lg font-display font-bold text-[#042F2A] mb-2 leading-snug group-hover:text-[#075433] transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </Heading>

        <p className="text-[11px] font-semibold tracking-wide text-[#2C473F]/75 mb-2">
          {post.dateLabel}
          {post.category ? ` • ${post.category}` : ""} • {post.readingTime} min read
        </p>

        <p className="text-xs text-[rgba(61,82,69,0.82)] line-clamp-3 mb-4 leading-relaxed">{post.metaDescription}</p>
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="text-[#075433] hover:text-[#042F2A] transition-colors inline-flex items-center text-xs font-bold mt-auto pt-3 border-t border-[rgba(8,116,90,0.22)]"
      >
        Read Full Article <span className="ml-1">→</span>
      </Link>
    </article>
  );
}
