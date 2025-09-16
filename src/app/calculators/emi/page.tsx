"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcEmi } from "@/lib/calc";
import AdBlock from "@/components/AdBlock";
import Faq from "@/components/Faq";

export default function EmiCalculatorPage() {
  const [p, setP] = useState<string>("");
  const [r, setR] = useState<string>("10");
  const [y, setY] = useState<string>("1");
  const [m, setM] = useState<string>("0");

  const res = useMemo(() => {
    const P = parseFloat(p) || 0;
    const R = parseFloat(r) || 0;
    const Y = parseFloat(y) || 0;
    const M = parseFloat(m) || 0;
    return calcEmi(P, R, Y, M);
  }, [p,r,y,m]);

  return (
    <CalcShell title="EMI Calculator" subtitle="Monthly EMI, total interest & total payment.">
      <AdBlock slot="CALC_TOP_EMI" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Principal (₹)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
                 value={p} onChange={(e)=>setP(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 300000" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Annual Rate (%)</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
                 value={r} onChange={(e)=>setR(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 10" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Years</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
                 value={y} onChange={(e)=>setY(e.target.value.replace(/[^\d.]/g,""))} placeholder="e.g. 2" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">Additional Months</span>
          <input className="rounded-xl border px-3 py-2 focus:ring-2" inputMode="decimal"
                 value={m} onChange={(e)=>setM(e.target.value.replace(/[^\d.]/g,""))} placeholder="0" />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Monthly EMI</div>
          <div className="text-2xl font-bold">₹{res.emi.toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total Interest</div>
          <div className="text-2xl font-bold">₹{res.totalInterest.toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total Payment</div>
          <div className="text-2xl font-bold">₹{res.totalPayment.toFixed(2)}</div>
        </div>
      </div>

      <div className="prose mt-8 max-w-none">
        <h2>Formula</h2>
        <p><code>EMI = P × r × (1+r)^n / ((1+r)^n − 1)</code> where <code>r = annual%/12/100</code> and <code>n</code> is months.</p>
      </div>

      <AdBlock slot="CALC_MID_EMI" />

      <Faq items={[
        { q: "Is EMI affected by prepayment?", a: "Yes. Prepayment reduces principal, which lowers interest and may reduce EMI or tenure depending on the lender." },
        { q: "Is this calculation exact?", a: "It matches the standard amortization formula; banks may round differently." }
      ]}/>
    </CalcShell>
  );
}
