import type { Metadata } from "next";
import AdvancedClient from "./Client";

export const metadata: Metadata = {
  title: "Advanced (Scientific) Calculator",
  description: "Scientific calculator with sin, cos, tan, sqrt, log, ln, π, e, power and parentheses.",
  alternates: { canonical: "/calculators/advanced" },
  keywords: ["scientific calculator","advanced calculator","online calculator"]
};

export default function Page(){ return <AdvancedClient/>; }
