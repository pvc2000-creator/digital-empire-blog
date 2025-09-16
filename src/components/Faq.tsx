"use client";
import JsonLd from "@/components/JsonLd";

type QA = { q: string; a: string };

export default function Faq({
  items,
  headline = "Frequently asked questions",
}: { items: QA[]; headline?: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(i => ({
      "@type": "Question",
      "name": i.q,
      "acceptedAnswer": { "@type": "Answer", "text": i.a }
    }))
  };
  return (
    <section className="prose mt-10 max-w-none">
      <h2>{headline}</h2>
      <dl>
        {items.map((i, idx) => (
          <div key={idx} className="mb-4">
            <dt className="font-semibold">{i.q}</dt>
            <dd>{i.a}</dd>
          </div>
        ))}
      </dl>
      <JsonLd data={data} />
    </section>
  );
}
