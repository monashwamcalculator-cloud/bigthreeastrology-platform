/**
 * faq-extract.ts — pull Q&A pairs out of a blog post's FAQ section so the
 * post can emit FAQPage schema (added 2 Nov 2026, 10/10 programme Phase A2).
 *
 * Posts write FAQs as a `## FAQs` / `## Frequently Asked Questions` section
 * (sometimes a `###` heading) followed by `### Question` sub-headings and
 * paragraph answers. Answers are cleaned to plain text for schema use.
 */

export type FaqItem = { question: string; answer: string };

function cleanText(s: string): string {
  return s
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const FAQ_HEADING = /faq|frequently asked/i;

export function extractFaqs(markdown: string): FaqItem[] {
  const lines = (markdown ?? "").split("\n");
  const items: FaqItem[] = [];
  let inFaq = false;
  let question: string | null = null;
  let buf: string[] = [];

  const flush = () => {
    if (question) {
      const answer = cleanText(buf.join(" "));
      if (answer.length >= 25) items.push({ question, answer });
    }
    question = null;
    buf = [];
  };

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)/);
    const h3 = line.match(/^###\s+(.*)/);

    if (h2) {
      if (inFaq) {
        flush();
        inFaq = false;
      }
      if (FAQ_HEADING.test(h2[1])) inFaq = true;
      continue;
    }

    if (h3) {
      if (!inFaq && FAQ_HEADING.test(h3[1])) {
        inFaq = true;
        continue;
      }
      if (inFaq) {
        flush();
        question = cleanText(h3[1].replace(/^Q\d+\s*[:.\-]\s*/i, ""));
        continue;
      }
    }

    // Newer posts format FAQs as a bold question line + paragraph answer.
    const boldQ = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (inFaq && boldQ && /\?\s*$/.test(boldQ[1])) {
      flush();
      question = cleanText(boldQ[1].replace(/^Q\d+\s*[:.\-]\s*/i, ""));
      continue;
    }

    if (inFaq && question) buf.push(line);
  }
  flush();

  return items.slice(0, 8);
}
