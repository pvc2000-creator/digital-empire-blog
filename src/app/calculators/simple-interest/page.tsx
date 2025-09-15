import type { Metadata } from "next";
import SimpleInterestClient from "./Client";

export const metadata: Metadata = {
  title: "Simple Interest (SI) Calculator",
  description: "Compute simple interest and total amount from principal, rate and time.",
  alternates: { canonical: "/calculators/simple-interest" },
  keywords: ["simple interest calculator","SI calculator","interest calculator"]
};

export default function Page() {
  return <SimpleInterestClient />;
}
