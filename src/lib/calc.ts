export function calcGst(amount: number, ratePct: number) {
  const gst = (amount * ratePct) / 100;
  const total = amount + gst;
  return { gst, total };
}

export function calcEmi(principal: number, annualRatePct: number, years: number, months: number) {
  const n = Math.max(1, Math.round((years || 0) * 12 + (months || 0)));
  const r = (annualRatePct || 0) / 12 / 100;
  if (r === 0) {
    const emi = principal / n;
    const total = emi * n;
    return { emi, totalInterest: total - principal, totalPayment: total, months: n };
  }
  const pow = Math.pow(1 + r, n);
  const emi = principal * r * pow / (pow - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;
  return { emi, totalInterest, totalPayment, months: n };
}

export function calcAge(birthISO: string, refISO?: string) {
  if (!birthISO) return { years: 0, months: 0, days: 0 };
  const b = new Date(birthISO);
  const r = refISO ? new Date(refISO) : new Date();

  let years = r.getFullYear() - b.getFullYear();
  let months = r.getMonth() - b.getMonth();
  let days = r.getDate() - b.getDate();

  if (days < 0) {
    const prevMonth = new Date(r.getFullYear(), r.getMonth(), 0).getDate();
    days += prevMonth; months -= 1;
  }
  if (months < 0) { months += 12; years -= 1; }
  return { years: Math.max(0, years), months: Math.max(0, months), days: Math.max(0, days) };
}

export function calcPercentChange(oldVal: number, newVal: number) {
  const diff = newVal - oldVal;
  const changePct = oldVal === 0 ? (newVal === 0 ? 0 : 100) : (diff / Math.abs(oldVal)) * 100;
  return { diff, changePct };
}

export function calcSimpleInterest(p: number, ratePct: number, years: number, months: number) {
  const t = (years || 0) + (months || 0)/12;
  const r = (ratePct || 0) / 100;
  const interest = p * r * t;
  const total = p + interest;
  return { interest, total, years: t };
}
