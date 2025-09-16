"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { percentOf, whatPercentOf, increaseByPercent, decreaseByPercent } from "@/lib/calc";
import AdBlock from "@/components/AdBlock";
import Faq from "@/components/Faq";

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

  return (
    <CalcShell title="Percentage Calculator" subtitle="X% of Y, what percent, increase/decrease.">
      <AdBlock slot="CALC_TOP_PERCENTAGE" />

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

      <AdBlock slot="CALC_MID_PERCENTAGE" />

      <Faq items={[
        { q: "When to use each mode?", a: "Use X% of Y to apply a percentage; 'what %' to compare two numbers; increase/decrease to adjust Y by X%." },
        { q: "Are results rounded?", a: "Values show 2 decimals for readability; the internal math uses full precision." }
      ]}/>
    </CalcShell>
  );
}
