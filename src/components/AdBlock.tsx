"use client";
import AdSlot from "@/components/AdSlot";

export default function AdBlock({ slot, className="" }:{
  slot: string; className?: string;
}) {
  // Renders nothing until NEXT_PUBLIC_GOOGLE_AD_CLIENT is set.
  return (
    <div className={`my-6 flex justify-center ${className}`} aria-label="Advertisement">
      <AdSlot slot={slot} />
    </div>
  );
}
