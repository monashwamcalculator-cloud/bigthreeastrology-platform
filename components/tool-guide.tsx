import Link from "next/link";
import { MASTER_TOOLS_LIST, type ToolDefinition } from "@/lib/all-tools-registry";
import { TOOL_GUIDES, type ToolGuide } from "@/lib/tool-guides";
import { ToolSchema } from "@/components/tool-schema";
import { CosmicIcon } from "@/components/cosmic-icons";

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return MASTER_TOOLS_LIST.find((t) => t.slug === slug);
}

/** The FAQs a tool page displays — rich guide first, registry fallback. */
export function getToolFaqs(slug: string): Array<{ question: string; answer: string }> {
  const rich = TOOL_GUIDES[slug];
  if (rich) return rich.faqs;
  return getToolBySlug(slug)?.faqs ?? [];
}

const CATEGORY_STEPS: Record<ToolDefinition["category"], (name: string) => string[]> = {
  planetary: (name) => [
    "Enter your birth date and your exact birth time (check your birth certificate if you can).",
    "Type your birth city and select it from the suggestions so its coordinates are used.",
    `Read your ${name} result together with the explanation below it.`,
    "Compare the Western (tropical) and Vedic (sidereal) views when offered — a one-sign difference between systems is normal.",
  ],
  vedic: (name) => [
    "Keep both people's (or your own) birth date, exact birth time and birthplace ready.",
    "Enter the details carefully — Vedic calculations depend on the Moon's exact position, so the birth time matters.",
    `Read the ${name} result and the phase or score breakdown under it.`,
    "Re-check timing-based results whenever the relevant planet changes signs.",
  ],
  numerology: (name) => [
    "Enter your full birth date (and your full birth name where the tool asks for it).",
    "Use the name exactly as it appears on your birth certificate for the most traditional result.",
    `Read your ${name} number and its meaning below the result.`,
    "Master numbers 11, 22 and 33 are kept unreduced — if you get one, read both the master number and its base number.",
  ],
  guidance: (name) => [
    "Take a quiet moment and hold your question or situation in mind.",
    "Enter the details the tool asks for, honestly and without overthinking.",
    `Read the ${name} guidance as a reflection prompt, not a fixed prediction.`,
    "Note what resonates and revisit it after a few days — guidance readings reward a second look.",
  ],
  synastry: (name) => [
    "Enter the first person's birth details (date, and time and city where asked).",
    "Enter the second person's birth details the same way.",
    `Read the ${name} result section by section — overall score first, then the detailed areas.`,
    "Use the result to understand each other's needs better, not as a final verdict on the relationship.",
  ],
  career: (name) => [
    "Enter your birth date and exact birth time, and select your birth city from the suggestions.",
    `Read your ${name} result, especially the strengths and favourable periods it highlights.`,
    "Cross-check with your Big Three and dasha periods for the fuller picture.",
    "Treat timing windows as themes to prepare for, and pair them with real-world action.",
  ],
};

function guideFor(tool: ToolDefinition): ToolGuide {
  const rich = TOOL_GUIDES[tool.slug];
  if (rich) return rich;
  return {
    guideTitle: tool.educationalTitle,
    guide: [tool.educationalContent],
    steps: CATEGORY_STEPS[tool.category](tool.name),
    resultMeaning: [],
    faqs: tool.faqs ?? [],
  };
}

/**
 * ToolSections — schema + full content sections for a tool page:
 * guide (direct answer first), how-to steps, result meaning, FAQs and
 * related calculators. Used by the custom tool pages; the dynamic
 * [slug] renderer produces the same sections itself.
 */
export function ToolSections({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return null;
  const guide = guideFor(tool);
  const faqs = getToolFaqs(slug);
  const related = MASTER_TOOLS_LIST.filter(
    (t) => t.category === tool.category && t.slug !== tool.slug
  ).slice(0, 4);

  return (
    <>
      <ToolSchema
        name={tool.name}
        description={tool.metaDesc}
        path={`/tools/${tool.slug}`}
        faqs={faqs}
        steps={guide.steps}
      />

      <section className="glass-card p-5 sm:p-8 max-w-4xl mx-auto rounded-2xl space-y-4">
        <h2 className="text-xl sm:text-2xl font-display font-bold gradient-text-gold">
          {guide.guideTitle}
        </h2>
        {guide.guide.map((para, i) => (
          <p key={i} className="text-sm sm:text-[15px] text-[#33463a] leading-relaxed">
            {para}
          </p>
        ))}

        <div className="border-t border-[#dee6da] pt-4">
          <h3 className="text-base font-semibold text-[#16402b] mb-2">
            How to Use the {tool.name}
          </h3>
          <ol className="list-decimal pl-5 text-sm text-[#33463a] space-y-1.5 leading-relaxed">
            {guide.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {guide.resultMeaning.length > 0 && (
          <div className="border-t border-[#dee6da] pt-4">
            <h3 className="text-base font-semibold text-[#16402b] mb-2">
              What Your Result Means
            </h3>
            {guide.resultMeaning.map((para, i) => (
              <p key={i} className="text-sm sm:text-[15px] text-[#33463a] leading-relaxed mb-2">
                {para}
              </p>
            ))}
          </div>
        )}
      </section>

      {faqs.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold text-center text-[#16402b] mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card-hover p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-[#256b42] mb-1">{faq.question}</h4>
                <p className="text-[#33463a] text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold text-center text-[#16402b] mb-4">
            Related Calculators
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/tools/${rel.slug}`}
                className="glass-card-hover p-4 rounded-xl flex flex-col items-center text-center group"
              >
                <span className="w-10 h-10 rounded-full bg-[#eaf1e6] border border-[#cfe0cb] flex items-center justify-center mb-2">
                  <CosmicIcon name={rel.slug} className="w-5 h-5" />
                </span>
                <span className="text-xs font-display font-bold text-[#1e2b22] group-hover:text-[#256b42] transition-colors">
                  {rel.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
