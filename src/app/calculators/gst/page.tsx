"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcGst } from "@/lib/calc";
import AdBlock from "@/components/AdBlock";
import Faq from "@/components/Faq";

export default function GstCalculatorPage() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<string>("18");

  const { gst, total } = useMemo(() => {
    const a = parseFloat(amount) || 0;
    const r = parseFloat(rate) || 0;
    return calcGst(a, r);
  }, [amount, rate]);

  return (
    <CalcShell title="GST Calculator" subtitle="Compute GST and total amount instantly.">
      {/* Ad above content (policy-safe: separated from controls) */}
      <AdBlock slot="CALC_TOP_GST" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Amount (before GST)</span>
          <input
            className="rounded-xl border px-3 py-2 focus:ring-2"
            inputMode="decimal"
            placeholder="e.g. 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">GST Rate (%)</span>
          <input
            className="rounded-xl border px-3 py-2 focus:ring-2"
            inputMode="decimal"
            placeholder="e.g. 18"
            value={rate}
            onChange={(e) => setRate(e.target.value.replace(/[^\d.]/g, ""))}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">GST Amount</div>
          <div className="text-2xl font-bold">₹{gst.toFixed(2)}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Total with GST</div>
          <div className="text-2xl font-bold">₹{total.toFixed(2)}</div>
        </div>
      </div>

      <div className="prose mt-8 max-w-none">
        <h2>Formula</h2>
        <p><code>GST = Amount × (Rate ÷ 100)</code> and <code>Total = Amount + GST</code>.</p>
      </div>

      {/* In-article style ad block */}
      <AdBlock slot="CALC_MID_GST" />

      <Faq items={[
        { q: "What is GST?", a: "Goods and Services Tax is a value-added tax applied to most goods and services in India." },
        { q: "Do you store my inputs?", a: "No. Everything runs in your browser; no data is sent to a server." }
      ]} />
    </CalcShell>
  );
}
