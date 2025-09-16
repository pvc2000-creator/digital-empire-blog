"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import JsonLd from "@/components/JsonLd";

/* prepare expression for Math scope */
function prepare(expr: string) {
  let s = expr;
  s = s.replace(/\^/g, "**");
  s = s.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
  // allow common function aliases
  s = s.replace(/\bln\(/g, "Math.log(");
  s = s.replace(/\blog10\(/g, "Math.log10(");
  s = s.replace(/\blog\(/g, "Math.log10(");
  s = s.replace(/\bsqrt\(/g, "Math.sqrt(");
  s = s.replace(/\bsin\(/g, "Math.sin(");
  s = s.replace(/\bcos\(/g, "Math.cos(");
  s = s.replace(/\btan\(/g, "Math.tan(");
  s = s.replace(/\bpi\b/gi, "Math.PI");
  s = s.replace(/\be\b/g, "Math.E");
  return s;
}

function evaluateAdvanced(input: string): { ok: boolean; value: number } {
  const allowed = /^[0-9+\-*/().,^%\sA-Za-z]+$/; // only simple names/operators
  if (!allowed.test(input)) return { ok: false, value: NaN };
  const expr = prepare(input);
  try {
    // eslint-disable-next-line no-new-func
    const val = Function(`"use strict"; return (${expr})`)();
    return { ok: Number.isFinite(val), value: Number(val) };
  } catch { return { ok: false, value: NaN }; }
}

export default function AdvancedClient() {
  const [expr, setExpr] = useState("");
  const res = useMemo(()=>evaluateAdvanced(expr), [expr]);

  const keys = [
    "sin(","cos(","tan(","sqrt(","ln(","log(","^","(",")","C",
    "7","8","9","/","←",
    "4","5","6","*","pi",
    "1","2","3","-","e",
    "0",".","%","+","="
  ];

  const press = (k:string)=>{
    if (k==="C") return setExpr("");
    if (k==="←") return setExpr(s=>s.slice(0,-1));
    if (k==="=") return setExpr(s=>res.ok ? String(res.value) : s);
    setExpr(s=>s+k);
  };

  const schema = { "@context":"https://schema.org","@type":"Calculator","name":"Advanced Calculator",
    "description":"Scientific calculator with sin, cos, tan, √, log, ln, π, e, power and parentheses." };

  return (
    <CalcShell title="Advanced Calculator" subtitle="Scientific functions with clean UI.">
      <JsonLd data={schema} />
      <div className="grid gap-4 md:grid-cols-[1fr,360px]">
        <div className="space-y-3">
          <input className="w-full rounded-2xl border px-4 py-3 text-lg"
                 value={expr} onChange={(e)=>setExpr(e.target.value)}
                 placeholder="e.g. sqrt(3^2 + 4^2)" />
          <div className="rounded-2xl border bg-white/70 p-4">
            <div className="text-sm text-muted-foreground">Result</div>
            <div className="text-2xl font-bold">{res.ok ? res.value : "—"}</div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 md:grid-cols-5">
          {keys.map(k=>(
            <button key={k} onClick={()=>press(k)}
              className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold hover:shadow">{k}</button>
          ))}
        </div>
      </div>
      <div className="prose mt-8 max-w-none">
        <h2>Examples</h2>
        <ul>
          <li><code>sqrt(3^2 + 4^2)</code> → 5</li>
          <li><code>sin(pi/2)</code> → 1</li>
          <li><code>ln(e^2)</code> → 2</li>
        </ul>
      </div>
    </CalcShell>
  );
}
