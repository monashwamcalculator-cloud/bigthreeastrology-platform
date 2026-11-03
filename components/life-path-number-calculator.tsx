"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { computeLifePath, type LifePathResult } from "@/lib/life-path";

type LifePathMeaning = {
  title: string;
  keyword: string;
  meaning: string;
  strengths: string[];
  challenges: string[];
  short: string;
};

const LIFE_PATH_MEANINGS: Record<number, LifePathMeaning> = {
  1: {
    title: "The Self-Starter",
    keyword: "Independence, initiative, originality",
    meaning:
      "Life Path 1 people are built to go first. You learn by doing rather than by waiting for permission, and you are at your best when a project, business or idea carries your own fingerprints. The recurring lesson of this path is the difference between healthy independence and isolation: the 1 grows fastest when it leads without needing to do everything alone.",
    strengths: ["Decisive", "Self-reliant", "Original thinking", "Courage to begin"],
    challenges: ["Impatience with slower people", "Reluctance to ask for help", "Stubborn streaks"],
    short: "The pioneer — independence, initiative and going first.",
  },
  2: {
    title: "The Diplomat",
    keyword: "Sensitivity, partnership, quiet influence",
    meaning:
      "Life Path 2 is the path of the peacemaker. You read rooms the way other people read headlines, noticing tone, tension and unspoken needs, and you use that radar to hold people and projects together. Your growth edge is voicing your own needs as clearly as you hear everyone else's — harmony that costs you your voice is too expensive.",
    strengths: ["Empathy", "Patience", "Mediation instinct", "Loyalty"],
    challenges: ["Over-sensitivity to criticism", "Avoiding necessary conflict", "Putting yourself last"],
    short: "The peacemaker — diplomacy, intuition and partnership.",
  },
  3: {
    title: "The Expressive Creator",
    keyword: "Communication, creativity, optimism",
    meaning:
      "Life Path 3 runs on words, images and audiences. You process life by expressing it — talking, writing, performing, designing — and your optimism is genuinely contagious when it is backed by follow-through. The lesson that returns for 3s is focus: your gift multiplies when one project gets the energy that ten half-finished ones were sharing.",
    strengths: ["Verbal flair", "Imagination", "Humour", "Social warmth"],
    challenges: ["Scattered attention", "Mood-dependent motivation", "Skimming the surface"],
    short: "The creator — expression, joy and communication.",
  },
  4: {
    title: "The Steady Builder",
    keyword: "Order, endurance, craftsmanship",
    meaning:
      "Life Path 4 is the foundation number. Where others chase shortcuts, you build systems, routines and skills that compound quietly for years, and people trust you because your word and your work match. Your recurring test is flexibility: the plan serves the life, not the other way round, and a 4 who can adapt without feeling betrayed by change becomes unstoppable.",
    strengths: ["Reliability", "Organisation", "Stamina", "Practical honesty"],
    challenges: ["Rigidity", "Over-caution", "Resistance to sudden change"],
    short: "The builder — stability, order and doing things properly.",
  },
  5: {
    title: "The Restless Explorer",
    keyword: "Freedom, change, experience",
    meaning:
      "Life Path 5 needs movement the way other numbers need rest. Travel, variety, new people and new skills are not distractions for you — they are how you learn, and a life that repeats itself drains you faster than hard work does. The 5's lesson is freedom with roots: adventure stays nourishing when something — a craft, a person, a base — is allowed to deepen.",
    strengths: ["Adaptability", "Curiosity", "Persuasiveness", "Quick recovery"],
    challenges: ["Restlessness", "Impulsive commitments", "Boredom with routine"],
    short: "The explorer — freedom, variety and learning by living.",
  },
  6: {
    title: "The Responsible Nurturer",
    keyword: "Care, responsibility, harmony at home",
    meaning:
      "Life Path 6 is the number people call when things fall apart. You carry a strong sense of duty toward family, friends and community, and you express love by being useful, present and dependable. The shadow side is the martyr pattern — help given with a silent invoice. A mature 6 gives cleanly, rests without guilt and lets others carry their share.",
    strengths: ["Devotion", "Warmth", "Aesthetic sense", "Trustworthiness"],
    challenges: ["Perfectionism", "Over-sacrificing", "Meddling with good intentions"],
    short: "The nurturer — responsibility, care and making home work.",
  },
  7: {
    title: "The Analytical Seeker",
    keyword: "Analysis, depth, inner life",
    meaning:
      "Life Path 7 is wired to ask why. You are a researcher by temperament — of subjects, of people, of yourself — and you need regular solitude to hear your own conclusions over the noise. Trust is your curriculum: of your intuition, which is usually right, and of other people, which takes longer. A 7 who shares what it finds becomes a teacher; one who doesn't becomes a mystery even to itself.",
    strengths: ["Analytical depth", "Intuition", "Focus", "Intellectual honesty"],
    challenges: ["Withdrawal under stress", "Scepticism as a shield", "Over-thinking feelings"],
    short: "The seeker — analysis, depth and the search for truth.",
  },
  8: {
    title: "The Ambitious Achiever",
    keyword: "Power, resources, results",
    meaning:
      "Life Path 8 deals in the material world: money, organisations, influence and outcomes. You have an unusually direct relationship with cause and effect — what you build, earns; what you neglect, costs — and life tends to teach you this early. The 8's mastery is not just acquiring power but handling it cleanly: ethically, generously and without letting work eat the rest of life.",
    strengths: ["Ambition", "Financial judgement", "Resilience", "Executive presence"],
    challenges: ["Workaholism", "Control issues", "Measuring worth by results"],
    short: "The achiever — authority, resources and tangible results.",
  },
  9: {
    title: "The Compassionate Idealist",
    keyword: "Compassion, wisdom, letting go",
    meaning:
      "Life Path 9 is the last single digit, and it behaves like it: broad-minded, idealistic and most alive when its work serves something larger than itself. You tend to understand people quickly because you have, in a sense, been all the other numbers. Your lesson is release — of old grievances, finished chapters and the urge to rescue everyone. A 9 that lets go on time turns experience into wisdom people seek out.",
    strengths: ["Compassion", "Perspective", "Idealism", "Creative depth"],
    challenges: ["Holding on to the past", "Boundary leaks", "Disappointment with people"],
    short: "The idealist — compassion, wisdom and the bigger picture.",
  },
  11: {
    title: "The Inspired Intuitive — Master Number 11",
    keyword: "Intuition, inspiration, heightened sensitivity",
    meaning:
      "Master Number 11 is Life Path 2 with the volume turned up: the same sensitivity and diplomacy, plus a live-wire intuition and a talent for inspiring rooms full of people. 11s often feel their nervous system before they understand it — the path's work is grounding the static into a craft, a practice or a message. When an 11 builds a container for its energy, it illuminates; without one, it frazzles. Read the Life Path 2 meaning too — 11 carries all of it, intensified.",
    strengths: ["Sharp intuition", "Inspirational presence", "Creative voltage", "Perceptiveness"],
    challenges: ["Nervous tension", "Overstimulation", "Self-imposed pressure"],
    short: "Master 11 — heightened intuition and inspirational energy.",
  },
  22: {
    title: "The Master Builder — Master Number 22",
    keyword: "Vision made real, large-scale building",
    meaning:
      "Master Number 22 pairs the vision of 11 with the work ethic of 4, and it is considered the most powerful number in numerology precisely because it insists on both: dream it, then build it to last. 22s think in systems and decades, and feel frustrated by small games. The path's test is scale without burnout — big visions still get built one ordinary, well-run day at a time. Read Life Path 4 as well; 22 stands on its shoulders.",
    strengths: ["Strategic vision", "Manifesting power", "Discipline at scale", "Composure"],
    challenges: ["Extreme self-pressure", "Fear of failing big", "Impatience with process"],
    short: "Master 22 — turning large visions into lasting reality.",
  },
  33: {
    title: "The Master Teacher — Master Number 33",
    keyword: "Healing, teaching, selfless service",
    meaning:
      "Master Number 33 is the rarest Life Path result, combining the nurturing of 6 with a teacher's reach. People with this number are drawn to heal, mentor and lift others — often whole communities, not just individuals — and they do it best by example rather than sermon. The curriculum is boundaries: service that destroys the server helps no one for long. A grounded 33 gives from overflow, and that is what makes its care sustainable. Read Life Path 6 too — 33 is its amplified form.",
    strengths: ["Deep compassion", "Teaching gift", "Emotional courage", "Devotion"],
    challenges: ["Martyr tendencies", "Emotional exhaustion", "Carrying others' burdens"],
    short: "Master 33 — healing, teaching and service at scale.",
  },
};

const GLANCE_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33];

function ComponentRow({
  label,
  raw,
  reduction,
}: {
  label: string;
  raw: string;
  reduction: LifePathResult["month"];
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-2 border-b border-[#dee6da] last:border-0">
      <span className="text-xs font-semibold uppercase tracking-wider text-[#256b42] sm:w-24 shrink-0">
        {label}
      </span>
      <span className="text-sm text-[#33463a] leading-relaxed">
        <strong className="text-[#16402b]">{raw}</strong>
        {reduction.lines.length > 0 ? (
          <>
            {" → "}
            {reduction.lines.join("; ")}
            {" → "}
          </>
        ) : (
          " is already a single digit → "
        )}
        <strong className="text-[#16402b]">root {reduction.value}</strong>
      </span>
    </div>
  );
}

export function LifePathNumberCalculator() {
  const [dob, setDob] = useState("");

  const parsed = useMemo(() => {
    if (!dob) return null;
    const parts = dob.split("-").map((p) => parseInt(p, 10));
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
    const [year, month, day] = parts;
    if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31)
      return null;
    return { year, month, day, result: computeLifePath(year, month, day) };
  }, [dob]);

  const meaning = parsed ? LIFE_PATH_MEANINGS[parsed.result.lifePath] : null;

  return (
    <section className="glass-card p-5 md:p-6 animate-fade-in relative overflow-hidden">
      <div className="text-center mb-6">
        <div className="badge badge-gold mb-2">Pythagorean Birth-Date Math — Every Step Shown</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold gradient-text-gold">
          Life Path Number Calculator
        </h2>
        <p className="text-sky-200 text-xs sm:text-sm mt-1">
          Enter your date of birth. Your month, day and year are reduced separately —
          master numbers 11, 22 and 33 kept — and you can watch every step of the maths.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-6">
        <label className="text-xs font-semibold text-sky-200 block mb-1" htmlFor="lp-dob">
          Your Date of Birth
        </label>
        <input
          id="lp-dob"
          type="date"
          className="input-cosmic w-full text-center text-base font-bold text-amber-300"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>

      {parsed && meaning ? (
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="glass-card-hover p-6 border-[#D4E2DD] bg-black/50 text-center">
            <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block mb-1">
              Your Life Path Number
            </span>
            <div className="text-6xl font-display font-extrabold gradient-text-gold mb-2">
              {parsed.result.lifePath}
            </div>
            <p className="text-base font-bold text-white">{meaning.title}</p>
            <p className="text-xs text-amber-300 font-semibold mt-1">{meaning.keyword}</p>
            <p className="text-sm text-sky-100 leading-relaxed mt-4 text-left">
              {meaning.meaning}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left border-t border-[#D4E2DD] pt-4 mt-4">
              <div>
                <span className="text-xs font-semibold text-sky-300">Strengths</span>
                <ul className="text-xs text-sky-100 leading-relaxed mt-1 space-y-1">
                  {meaning.strengths.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-300">Growth Edges</span>
                <ul className="text-xs text-sky-100 leading-relaxed mt-1 space-y-1">
                  {meaning.challenges.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-xl">
            <h3 className="text-sm font-display font-bold text-[#16402b] mb-2">
              How Your Number Was Calculated
            </h3>
            <ComponentRow label="Month" raw={String(parsed.month)} reduction={parsed.result.month} />
            <ComponentRow label="Day" raw={String(parsed.day)} reduction={parsed.result.day} />
            <ComponentRow label="Year" raw={String(parsed.year)} reduction={parsed.result.year} />
            <p className="text-sm text-[#33463a] leading-relaxed pt-3">
              Add the three roots: {parsed.result.month.value} + {parsed.result.day.value} +{" "}
              {parsed.result.year.value} ={" "}
              <strong className="text-[#16402b]">{parsed.result.componentSum}</strong>
              {parsed.result.final.lines.length > 0 ? (
                <>
                  {" → "}
                  {parsed.result.final.lines.join("; ")}
                  {" → "}
                </>
              ) : (
                " — already a single digit → "
              )}
              <strong className="text-[#16402b]">
                Life Path {parsed.result.lifePath}
              </strong>
            </p>
          </div>

          {parsed.result.karmicDebt !== null && (
            <div className="glass-card p-5 rounded-xl border-l-4 border-amber-400">
              <h3 className="text-sm font-display font-bold text-[#16402b] mb-1">
                Karmic Debt Pattern: {parsed.result.karmicDebt}/
                {parsed.result.lifePath}
              </h3>
              <p className="text-sm text-[#33463a] leading-relaxed">
                Your three roots added up to {parsed.result.karmicDebt} before the final
                reduction — one of the four karmic debt numbers (13, 14, 16, 19). Numerologists
                read this as a specific lesson carried into this life, worked through the{" "}
                {parsed.result.lifePath} path. See what yours asks of you in the{" "}
                <Link
                  href="/tools/karmic-debt-number"
                  className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  Karmic Debt Number Calculator
                </Link>
                .
              </p>
            </div>
          )}

          <div className="glass-card p-5 rounded-xl">
            <h3 className="text-sm font-display font-bold text-[#16402b] mb-2">
              Where to Go Next
            </h3>
            <ul className="text-sm text-[#33463a] leading-relaxed space-y-1.5">
              <li>
                • Compare two Life Path numbers in the{" "}
                <Link
                  href="/tools/lifepath-compatibility"
                  className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  Life Path Compatibility Matcher
                </Link>{" "}
                — how your {parsed.result.lifePath} pairs with a partner's number.
              </li>
              <li>
                • Add your name numbers with the{" "}
                <Link
                  href="/tools/destiny-number"
                  className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  Destiny Number Calculator
                </Link>{" "}
                — the talents your birth name says you are here to express.
              </li>
              <li>
                • See what this year asks of you in the{" "}
                <Link
                  href="/tools/personal-year"
                  className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  Personal Year Calculator
                </Link>
                .
              </li>
              <li>
                • Prefer one combined reading? The{" "}
                <Link
                  href="/tools/numerology"
                  className="text-[#256b42] underline decoration-[#a9ead1] underline-offset-2 hover:text-[#16402b]"
                >
                  Numerology Calculator
                </Link>{" "}
                pairs this Life Path result with your Expression number on a single page.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="glass-card-hover p-6 max-w-xl mx-auto border-[#D4E2DD] bg-black/50 text-center">
          <p className="text-sm text-sky-100 leading-relaxed">
            Pick your birth date above and your Life Path number appears instantly — together
            with the full step-by-step reduction, so you can check the arithmetic yourself.
            No name, no birth time and no sign-up needed: the calendar date is all this
            number uses.
          </p>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-8">
        <h3 className="text-base font-display font-bold text-center text-[#16402b] mb-3">
          All Life Path Numbers at a Glance
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GLANCE_ORDER.map((n) => (
            <div key={n} className="glass-card-hover p-3 rounded-xl text-center">
              <span className="font-display font-extrabold text-lg gradient-text-gold">
                {n}
              </span>
              <p className="text-[11px] text-[#33463a] leading-snug mt-1">
                {LIFE_PATH_MEANINGS[n].short}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
