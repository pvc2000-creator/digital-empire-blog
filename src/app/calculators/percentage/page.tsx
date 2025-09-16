import type { Metadata } from "next";
import PercentageClient from "./Client";

export const metadata: Metadata = {
  title: "Percentage Calculator",
  description: "X% of Y, what percent X is of Y, and increase/decrease by X%.",
  alternates: { canonical: "/calculators/percentage" },
  keywords: ["percentage calculator","percent of","what percent","increase by percent","decrease by percent"]
};

export default function Page(){ return <PercentageClient/>; }
