"use client";
import Script from "next/script";

export default function AdsInit() {
  const client = process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT;
  if (!client) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
