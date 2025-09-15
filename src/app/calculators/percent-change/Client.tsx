"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcPercentChange } from "@/lib/calc";
import JsonLd from "@/components/JsonLd";

export default function PercentChangeClient() {
  const [oldVal, setOld] = useState<string>("");
  const [newVal, setNew] = useState<string>("");

  const { diff, changePct } = useMemo(() => {
    const a = parseFloat(oldVal) || 0;
    const b = parseFloat(newVal) || 0;
    return calcPercentChange(a, b);
  }, [oldVal, newVal]);

  const schema = {
    "@context":"https://schema.org",
    "@type":"Calculator",
    "name":"Percentage Change Calculator",
    "description":"Compute percentage increase/decrease and absolute difference.",
    "url":"https://digital-empire-blog.vercel.app/calculators/percent-change"
  };

  return (
    <CalcShell title="Percentage Change Calculator" subtitle="Find % increase/decrease and difference.">
      <JsonLd data={schema} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Old Value</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={oldVal} onChange={(e)=>setOld(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 1200" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">New Value</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
            value={newVal} onChange={(e)=>setNew(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 1380" />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Difference</div>
          <div className="text-2xl font-bold">{diff.toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">% Change</div>
          <div className="text-2xl font-bold">{changePct.toFixed(2)}%</div>
        </div>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none">
        <h2>Formula</h2>
        <p><code>% change = (New - Old) / |Old| × 100</code></p>
        <p>Positive = increase, negative = decrease.</p>
      </div>
    </CalcShell>
  );
}
