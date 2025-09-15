"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcEmi } from "@/lib/calc";

export default function EmiCalculatorPage() {
  const [p, setP] = useState<string>("");
  const [r, setR] = useState<string>("10");
  const [y, setY] = useState<string>("1");
  const [m, setM] = useState<string>("0");

  const { emi, totalInterest, totalPayment, months } = useMemo(() => {
    const principal = parseFloat(p) || 0;
    const rate = parseFloat(r) || 0;
    const years = parseFloat(y) || 0;
    const months = parseFloat(m) || 0;
    return calcEmi(principal, rate, years, months);
  }, [p, r, y, m]);

  return (
    <CalcShell title="EMI Calculator" subtitle="Monthly EMI, total interest & payment.">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Principal (₹)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal" value={p}
            onChange={(e) => setP(e.target.value.replace(/[^\d.]/g, ""))} placeholder="e.g. 100000" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Annual Rate (%)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal" value={r}
            onChange={(e) => setR(e.target.value.replace(/[^\d.]/g, ""))} placeholder="e.g. 10" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Years</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal" value={y}
            onChange={(e) => setY(e.target.value.replace(/[^\d.]/g, ""))} placeholder="e.g. 1" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Additional Months</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal" value={m}
            onChange={(e) => setM(e.target.value.replace(/[^\d.]/g, ""))} placeholder="e.g. 6" />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Monthly EMI</div>
          <div className="text-2xl font-bold">₹{(emi ?? 0).toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total Interest</div>
          <div className="text-2xl font-bold">₹{(totalInterest ?? 0).toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total Payment</div>
          <div className="text-2xl font-bold">₹{(totalPayment ?? 0).toFixed(2)}</div>
        </div>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none">
        <h2>Formula</h2>
        <p><code>EMI = P × r × (1+r)^n / ((1+r)^n − 1)</code>, where <code>r = annual%/12/100</code> and <code>n</code> is total months.</p>
        <p>When rate is 0%, EMI = Principal / Months.</p>
        <p>Tenure used: {months} months.</p>
      </div>
    </CalcShell>
  );
}
