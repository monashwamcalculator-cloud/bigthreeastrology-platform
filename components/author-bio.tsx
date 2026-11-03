import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "@/lib/author";

export function AuthorBio() {
  return (
    <section className="glass-card max-w-4xl mx-auto mt-10 p-6 sm:p-8 border border-[rgba(8,116,90,0.35)] bg-white">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <Link href={AUTHOR.pageUrl} className="shrink-0">
          <Image
            src={AUTHOR.image}
            alt={`${AUTHOR.name}, ${AUTHOR.role}`}
            width={120}
            height={120}
            className="rounded-full object-cover border-2 border-[rgba(8,116,90,0.6)] shadow-lg w-[120px] h-[120px]"
          />
        </Link>
        <div className="text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#08745A] mb-1">Written by</p>
          <Link href={AUTHOR.pageUrl} className="text-xl font-display font-bold text-[#042F2A] hover:text-[#075433] transition-colors">
            {AUTHOR.name}
          </Link>
          <p className="text-xs text-[#5f7a63] font-medium mb-3">{AUTHOR.role}</p>
          <p className="text-sm text-[rgba(46,61,51,0.87)] leading-relaxed mb-4">{AUTHOR.shortBio}</p>
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
