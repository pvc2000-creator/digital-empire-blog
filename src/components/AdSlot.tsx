"use client";
import { useEffect } from "react";

declare global {
  interface Window { adsbygoogle: any[] | undefined }
}

export default function AdSlot({
  slot,
  format = "auto",
  style = { display: "block" as const },
}: {
  slot: string;
  format?: string;
  style?: React.CSSProperties;
}) {
  const client = process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT;
  if (!client) return null;

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
