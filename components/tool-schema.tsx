import { absoluteUrl } from "@/lib/seo";

type ToolSchemaProps = {
  name: string;
  description: string;
  path: string;
  category?: string;
  /** Optional category crumb (Programme P1): inserted between "Tools" and the
   *  tool itself so the JSON-LD matches the visible ToolPageHeader breadcrumb. */
  categoryCrumb?: { name: string; path: string };
  faqs?: Array<{ question: string; answer: string }>;
  steps?: string[];
};

export function ToolSchema({
  name,
  description,
  path,
  category = "LifestyleApplication",
  categoryCrumb,
  faqs = [],
  steps = [
    "Enter your birth date and exact time of birth.",
    "Select your birth city or location.",
    "Click Calculate to receive your instant astrological analysis."
  ]
}: ToolSchemaProps) {
  const url = absoluteUrl(path);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    applicationCategory: category,
    operatingSystem: "All",
    url: url,
    description: description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    publisher: {
      "@type": "Organization",
      name: "BIGThreeAstrology",
      url: absoluteUrl("/"),
      email: "asbusiness276@gmail.com"
    }
  };

  const crumbItems: Array<{ name: string; item: string }> = [
    { name: "Home", item: absoluteUrl("/") },
    { name: "Tools", item: absoluteUrl("/tools") },
    ...(categoryCrumb
      ? [{ name: categoryCrumb.name, item: absoluteUrl(categoryCrumb.path) }]
      : []),
    { name: name, item: url }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbItems.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${name}`,
    description: description,
    step: steps.map((stepText, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `Step ${idx + 1}`,
      text: stepText
    }))
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}
