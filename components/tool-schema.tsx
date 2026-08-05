import { absoluteUrl } from "@/lib/seo";

type ToolSchemaProps = {
  name: string;
  description: string;
  path: string;
  category?: string;
  faqs?: Array<{ question: string; answer: string }>;
  steps?: string[];
};

export function ToolSchema({
  name,
  description,
  path,
  category = "LifestyleApplication",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Tools", item: absoluteUrl("/tools/big-three") },
      { "@type": "ListItem", position: 3, name: name, item: url }
    ]
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
