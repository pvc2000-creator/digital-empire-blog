"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import JsonLd from "@/components/JsonLd";
import AdBlock from "@/components/AdBlock";
import Faq from "@/components/Faq";

function evaluateExpression(input: string): { ok: boolean; value: number } {
  const allowed = /^[0-9+\-*/().%^\s]+$/;
  if (!allowed.test(input)) return { ok: false, value: NaN };
  let expr = input.replace(/\^/g, "**").replace(/(\d+(\.\d+)?)%/g, "($1/100)");
  try { const val = Function(`"use strict"; return (${expr})`)(); return { ok: Number.isFinite(val), value: Number(val) }; }
  catch { return { ok: false, value: NaN }; }
}

export default function BasicClient() {
  const [expr, setExpr] = useState<string>("");
  const result = useMemo(() => evaluateExpression(expr), [expr]);

  const keys = ["7","8","9","/","C","4","5","6","*","(","1","2","3","-",
                ")","0",".","%","+","←","="];

  const press = (k: string) => {
    if (k === "C") return setExpr("");
    if (k === "←") return setExpr((s) => s.slice(0, -1));
    if (k === "=") return setExpr((s) => result.ok ? String(result.value) : s);
    setExpr((s) => s + k);
  };

  const schema = { "@context":"https://schema.org", "@type":"Calculator",
    "name":"Basic Calculator", "description":"Free basic calculator with +, −, ×, ÷, %, parentheses." };

  return (
    <CalcShell title="Basic Calculator" subtitle="Add, subtract, multiply, divide, and more.">
      <JsonLd data={schema} />
      <AdBlock slot="CALC_TOP_BASIC" />

      <div className="grid gap-4 md:grid-cols-[1fr,280px]">
        <div className="space-y-3">
          <input className="w-full rounded-2xl border px-4 py-3 text-lg"
                 value={expr} onChange={(e)=>setExpr(e.target.value)}
                 placeholder="Type expression e.g. (100+20)%*50" />
          <div className="rounded-2xl border bg-white/70 p-4">
            <div className="text-sm text-muted-foreground">Result</div>
            <div className="text-2xl font-bold">{result.ok ? result.value : "—"}</div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 md:grid-cols-4">
          {keys.map((k)=>(
            <button key={k} onClick={()=>press(k)}
              className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold hover:shadow">{k}</button>
          ))}
        </div>
      </div>

      <AdBlock slot="CALC_MID_BASIC" />

      <Faq items={[
        { q: "Can I use % and ^ ?", a: "Yes. 18% becomes 0.18 and ^ is power (e.g., 2^5 = 32)." },
        { q: "Is it safe?", a: "Inputs are evaluated in a sandbox for the limited operators shown above only." }
      ]}/>
    </CalcShell>
  );
}
