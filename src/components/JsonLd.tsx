"use client";
import Script from "next/script";
export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <Script id={"jsonld-"+Math.random().toString(36).slice(2)} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(data)}
    </Script>
  );
}
