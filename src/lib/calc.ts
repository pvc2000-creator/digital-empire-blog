export function calcGst(amount: number, ratePct: number) {
  const gst = (amount * ratePct) / 100;
  const total = amount + gst;
  return { gst, total };
}
