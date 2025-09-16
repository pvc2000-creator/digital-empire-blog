"use client";
import { useMemo, useState } from "react";
import CalcShell from "@/components/CalcShell";
import JsonLd from "@/components/JsonLd";
import AdBlock from "@/components/AdBlock";
import Faq from "@/components/Faq";

function prepare(expr: string) {
  let s = expr.replace(/\^/g, "**").replace(/(\d+(\.\d+)?)%/g, "($1/100)");
  s = s.replace(/\bln\(/g, "Math.log(")
       .replace(/\blog10\(/g, "Math.log10(")
       .replace(/\blog\(/g, "Math.log10(")
       .replace(/\bsqrt\(/g, "Math.sqrt(")
       .replace(/\bsin\(/g, "Math.sin(")
       .replace(/\bcos\(/g, "Math.cos(")
       .replace(/\btan\(/g, "Math.tan(")
       .replace(/\bpi\b/gi, "Math.PI")
       .replace(/\be\b/g, "Math.E");
  return s;
}
function evaluateAdvanced(input: string){ 
  const allowed = /^[0-9+\-*/().,^%\sA-Za-z]+$/;
  if (!allowed.test(input)) return { ok:false, value: NaN };
  try { const val = Function(`"use strict"; return (${prepare(input)})`)(); 
        return { ok: Number.isFinite(val), value: Number(val) }; }
  catch { return { ok:false, value: NaN }; }
}

export default function AdvancedClient() {
  const [expr, setExpr] = useState("");
  const res = useMemo(()=>evaluateAdvanced(expr), [expr]);

  const keys = ["sin(","cos(","tan(","sqrt(","ln(","log(","^","(",")","C",
                "7","8","9","/","←","4","5","6","*","pi",
                "1","2","3","-","e","0",".","%","+","="];

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
      <AdBlock slot="CALC_TOP_ADVANCED" />

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

      <AdBlock slot="CALC_MID_ADVANCED" />

      <Faq items={[
        { q: "Angles for sin/cos/tan?", a: "Radians (e.g., sin(pi/2)=1). You can convert degrees by multiplying by pi/180." },
        { q: "Natural vs common log?", a: "ln() is natural log (base e). log() or log10() is base-10." }
      ]}/>
    </CalcShell>
  );
}
