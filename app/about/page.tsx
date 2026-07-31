import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About BIGThreeAstrology",
  description: "Learn how BIGThreeAstrology blends practical astrology education, calculator tools, and trusted astrologer discovery.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="prose prose-invert max-w-3xl">
      <h1>About BIGThreeAstrology</h1>
      <p>
        BIGThreeAstrology was created for one simple reason: most people asking astrology questions are looking for clear, useful guidance, not
        complicated terminology. Visitors often come here after searching phrases like sun moon rising sign calculator free, rising sign calculator,
        or what is my moon and rising sign. Those searches reveal strong intent. People want to understand themselves better, communicate more clearly,
        and make grounded decisions in relationships, work, and personal growth.
      </p>
      <p>
        Our platform combines three focused experiences. First, we provide an accessible big-three calculator that helps users quickly discover their
        core placements. Second, we publish practical educational content in our blog with readable structure and semantic topic coverage. Third, we
        maintain a vetted astrologer directory that allows users to move from self-learning to professional support when they need deeper analysis.
        This structure keeps the user journey straightforward from first search to meaningful action.
      </p>
      <h2>Our Content Philosophy</h2>
      <p>
        We write for clarity before complexity. Astrology can be inspiring, but it can also become overwhelming when explanations are not grounded in
        daily life. That is why our articles are built around real user questions: how to interpret the big three together, why emotional responses may
        differ from identity traits, how rising signs shape first impressions, and how to choose an astrologer for a specific goal. We avoid keyword
        dumping and instead map search intent naturally into educational sections that are easy to follow.
      </p>
      <p>
        We also believe transparency improves trust. Astrology content should explain context, limits, and practical application. It should never imply
        guaranteed outcomes or replace medical, legal, or financial judgment. On BIGThreeAstrology, we frame interpretations as reflective tools that
        support better communication, self-awareness, and thoughtful planning.
      </p>
      <h2>How the Directory Supports Quality</h2>
      <p>
        Our astrologer listing system is intentionally simple. Each owner has an account dashboard to update profile details, services, and location.
        Listings receive reminder emails at regular intervals so profiles remain current. If a profile is not refreshed within the staleness threshold,
        it is marked as non-indexable until the owner logs in and updates details. This lifecycle keeps search-facing pages fresher and improves the
        experience for users who need accurate contact and service information.
      </p>
      <p>
        City-based discovery pages are designed to match local intent while preserving quality controls. Users can browse by city, compare
        specializations, and connect directly through profile contact options. This setup supports both discoverability and accountability while keeping
        the interface focused and lightweight.
      </p>
      <h2>Our Promise to Users</h2>
      <p>
        We are committed to keeping BIGThreeAstrology fast, useful, and trustworthy. We continuously improve technical SEO, structured data coverage,
        and content readability so every major page is understandable to both users and search engines. We keep the CMS intentionally publishing-focused
        so editorial workflows stay stable over time. Most importantly, we prioritize meaningful guidance that respects user intent instead of chasing
        short-term traffic patterns.
      </p>
      <p>
        If you are new to astrology, start with the calculator and read one or two core guides. If you are experienced, use the directory to find
        practitioners aligned with your goals. Either way, our mission remains the same: make astrology more accessible, practical, and responsible for
        everyday users.
      </p>
    </div>
  );
}
