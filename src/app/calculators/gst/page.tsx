"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcGst } from "@/lib/calc";

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
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Amount (before GST)</span>
          <input
            className="rounded-xl border px-3 py-2 outline-none ring-offset-0 focus:ring-2"
            inputMode="decimal"
            placeholder="e.g. 1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ""))}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-medium">GST Rate (%)</span>
          <input
            className="rounded-xl border px-3 py-2 outline-none ring-offset-0 focus:ring-2"
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

      <div className="prose prose-zinc mt-8 max-w-none">
        <h2>Formula</h2>
        <p>
          <code>GST = Amount × (Rate ÷ 100)</code> and <code>Total = Amount + GST</code>.
        </p>
        <h3>FAQ</h3>
        <p>
          This calculator runs completely in your browser and does not store any data.
        </p>
      </div>
    </CalcShell>
  );
}
