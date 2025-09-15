"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import { calcAge } from "@/lib/calc";

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState<string>("");

  const { years, months, days } = useMemo(() => calcAge(dob), [dob]);

  return (
    <CalcShell title="Age Calculator" subtitle="Find age in years, months, and days.">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Date of Birth</span>
          <input type="date" className="rounded-xl border px-3 py-2 focus:ring-2" value={dob}
            onChange={(e) => setDob(e.target.value)} />
        </label>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Years</div>
          <div className="text-2xl font-bold">{years}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Months</div>
          <div className="text-2xl font-bold">{months}</div>
        </div>
        <div className="rounded-2xl border bg-white/70 p-4">
          <div className="text-sm text-muted-foreground">Days</div>
          <div className="text-2xl font-bold">{days}</div>
        </div>
      </div>

      <div className="prose prose-zinc mt-8 max-w-none">
        <h2>Notes</h2>
        <p>This calculator runs entirely in your browser and does not store any data.</p>
      </div>
    </CalcShell>
  );
}
