import type { Metadata } from "next";
import PercentChangeClient from "./Client";

export const metadata: Metadata = {
  title: "Percentage Change Calculator",
  description: "Find % increase or decrease between two values with difference and formula.",
  alternates: { canonical: "/calculators/percent-change" },
  keywords: ["percentage change calculator","percent increase","percent decrease","% difference"]
};

export default function Page() {
  return <PercentChangeClient />;
}
