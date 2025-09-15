import Link from "next/link";
import Hero from "@/components/Hero";
import { CardLink } from "@/components/Card";

const featured = [
  { href: "/calculators/gst", name: "GST Calculator", desc: "Compute GST and total." },
  { href: "/calculators/emi", name: "EMI Calculator", desc: "Monthly EMI & totals." },
  { href: "/calculators/age", name: "Age Calculator", desc: "Years, months, days." },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container-x pb-14">
        <h2 className="mb-5 text-center text-2xl font-semibold">Popular Tools</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featured.map(f => (
            <CardLink key={f.href} href={f.href} title={f.name} desc={f.desc} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/calculators" className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold hover:shadow">
            See all calculators →
          </Link>
        </div>
      </section>
    </main>
  );
}
