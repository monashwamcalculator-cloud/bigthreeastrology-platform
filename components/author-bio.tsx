import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "@/lib/author";

export function AuthorBio() {
  return (
    <section className="glass-card max-w-4xl mx-auto mt-10 p-6 sm:p-8 border border-amber-500/30 bg-black/80">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <Link href={AUTHOR.pageUrl} className="shrink-0">
          <Image
            src={AUTHOR.image}
            alt={`${AUTHOR.name}, ${AUTHOR.role}`}
            width={120}
            height={120}
            className="rounded-full object-cover border-2 border-amber-400/60 shadow-lg w-[120px] h-[120px]"
          />
        </Link>
        <div className="text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-1">Written by</p>
          <Link href={AUTHOR.pageUrl} className="text-xl font-display font-bold text-white hover:text-amber-300 transition-colors">
            {AUTHOR.name}
          </Link>
          <p className="text-xs text-[#5f7a63] font-medium mb-3">{AUTHOR.role}</p>
          <p className="text-sm text-amber-100/85 leading-relaxed mb-4">{AUTHOR.shortBio}</p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link href={AUTHOR.pageUrl} className="btn-secondary px-4 py-2 text-xs font-bold">
              About the Author
            </Link>
            <a
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-xs font-bold"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
