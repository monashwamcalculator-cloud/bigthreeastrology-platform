import Link from "next/link";

/**
 * Branded 404 (added 3 Nov 2026, AdSense-readiness pass) — replaces the
 * stock Next.js error body inside the site layout with a helpful page
 * that routes lost visitors back to the calculators, tools hub and blog.
 */
export default function NotFound() {
  return (
    <div className="py-16 max-w-2xl mx-auto text-center space-y-6 px-4">
      <div className="badge badge-emerald">404 — Page Not Found</div>
      <h1 className="text-3xl sm:text-4xl font-display font-bold gradient-text">
        This page has drifted out of orbit
      </h1>
      <p className="text-[#3A5747] text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
        The page you are looking for does not exist, or it has moved. Your
        chart is still right where you left it — try one of our free
        calculators instead.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <Link href="/tools/big-three" className="btn-glow px-5 py-2.5 text-xs font-bold">
          Big Three Calculator
        </Link>
        <Link
          href="/tools"
          className="px-5 py-2.5 text-xs font-bold rounded-full border border-[rgba(8,116,90,0.45)] text-[#075433] hover:bg-[#DFF5EC] transition-colors"
        >
          All 100+ Free Tools
        </Link>
        <Link
          href="/blog"
          className="px-5 py-2.5 text-xs font-bold rounded-full border border-[rgba(8,116,90,0.45)] text-[#075433] hover:bg-[#DFF5EC] transition-colors"
        >
          Read the Blog
        </Link>
      </div>
    </div>
  );
}
