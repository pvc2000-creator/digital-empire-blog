import type { Metadata } from "next";
import BasicClient from "./Client";

export const metadata: Metadata = {
  title: "Basic Calculator",
  description: "Free online basic calculator (+, −, ×, ÷, %, parentheses).",
  alternates: { canonical: "/calculators/basic" },
  keywords: ["basic calculator","online calculator","free calculator"]
};

export default function Page() { return <BasicClient />; }
