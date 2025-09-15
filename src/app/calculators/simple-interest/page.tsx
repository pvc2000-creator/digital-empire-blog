"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcSimpleInterest } from "@/lib/calc";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Interest (SI) Calculator",
  description: "Compute simple interest and total amount from principal, rate and time.",
  alternates: { canonical: "/calculators/simple-interest" },
  keywords: ["simple interest calculator","SI calculator","interest calculator"]
};

export default function SimpleInterestPage() {
  const [p, setP] = useState<string>("");
  const [r, setR] = useState<string>("10");
  const [y, setY] = useState<string>("1");
  const [m, setM] = useState<string>("0");

  const { interest, total, years } = useMemo(() => {
    const P = parseFloat(p) || 0;
    const R = parseFloat(r) || 0;
    const Y = parseFloat(y) || 0;
    const M = parseFloat(m) || 0;
    return calcSimpleInterest(P, R, Y, M);
  }, [p,r,y,m]);

  const schema = {
    "@context":"https://schema.org",
    "@type":"Calculator",
    "name":"Simple Interest Calculator",
    "description":"Calculate simple interest and total amount.",
    "url":"https://digital-empire-blog.vercel.app/calculators/simple-interest"
  };

  return (
    <CalcShell title="Simple Interest Calculator" subtitle="Interest and total amount.">
      <JsonLd data={schema} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Principal (₹)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={p} onChange={(e)=>setP(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 100000" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Annual Rate (%)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={r} onChange={(e)=>setR(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 10" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Years</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={y} onChange={(e)=>setY(e.target.value.replace(/[^\d.]/g,""))} placeholder="1" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Additional Months</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={m} onChange={(e)=>setM(e.target.value.replace(/[^\d.]/g,""))} placeholder="0" />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Simple Interest</div>
          <div className="text-2xl font-bold">₹{interest.toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total Amount</div>
          <div className="text-2xl font-bold">₹{total.toFixed(2)}</div>
        </div>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none">
        <h2>Formula</h2>
        <p><code>SI = P × R × T</code>, where <code>R = annual% ÷ 100</code> and <code>T</code> is time in years.</p>
        <p><code>Total = P + SI</code>. Months are converted to years automatically.</p>
      </div>
    </CalcShell>
  );
}
