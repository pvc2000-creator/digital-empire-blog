"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { percentOf, whatPercentOf, increaseByPercent, decreaseByPercent } from "@/lib/calc";
import JsonLd from "@/components/JsonLd";

type Mode = "of" | "what" | "inc" | "dec";

export default function PercentageClient() {
  const [mode, setMode] = useState<Mode>("of");
  const [x, setX] = useState<string>("");
  const [y, setY] = useState<string>("");

  const out = useMemo(() => {
    const a = parseFloat(x) || 0;
    const b = parseFloat(y) || 0;
    switch (mode) {
      case "of":  return { label: "Result", value: percentOf(a, b) };
      case "what":return { label: "%", value: whatPercentOf(a, b) };
      case "inc": return { label: "Increased value", value: increaseByPercent(b, a) };
      case "dec": return { label: "Decreased value", value: decreaseByPercent(b, a) };
    }
  }, [mode, x, y]);

  const schema = { "@context":"https://schema.org","@type":"Calculator","name":"Percentage Calculator",
    "description":"X% of Y, what percent X is of Y, and increase/decrease by X%." };

  return (
    <CalcShell title="Percentage Calculator" subtitle="X% of Y, what percent, increase/decrease.">
      <JsonLd data={schema} />
      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Mode</span>
          <select className="rounded-xl border px-3 py-2"
                  value={mode} onChange={(e)=>setMode(e.target.value as Mode)}>
            <option value="of">X% of Y</option>
            <option value="what">X is what % of Y</option>
            <option value="inc">Increase Y by X%</option>
            <option value="dec">Decrease Y by X%</option>
          </select>
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">X</span>
          <input className="rounded-xl border px-3 py-2" inputMode="decimal"
                 value={x} onChange={(e)=>setX(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 20" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Y</span>
          <input className="rounded-xl border px-3 py-2" inputMode="decimal"
                 value={y} onChange={(e)=>setY(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 1500" />
        </label>
      </div>

      <div className="mt-6 rounded-2xl border bg-white/70 p-4">
        <div className="text-sm text-muted-foreground">{out?.label}</div>
        <div className="text-2xl font-bold">{(out?.value ?? 0).toFixed(2)}</div>
      </div>

      <div className="prose mt-8 max-w-none">
        <h2>Formulas</h2>
        <ul>
          <li><code>X% of Y = (X / 100) × Y</code></li>
          <li><code>% of X in Y = (X / Y) × 100</code></li>
          <li><code>Increase = Y × (1 + X/100)</code>; Decrease = <code>Y × (1 − X/100)</code></li>
        </ul>
      </div>
    </CalcShell>
  );
}
