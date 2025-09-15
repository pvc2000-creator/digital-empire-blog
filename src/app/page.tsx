import Link from "next/link";
import Hero from "@/components/Hero";

const featured = [
  { href: "/calculators/gst", name: "GST Calculator", desc: "Compute GST and total." },
  { href: "/calculators/emi", name: "EMI Calculator", desc: "Monthly EMI, total interest." },
  { href: "/calculators/age", name: "Age Calculator", desc: "Age in years, months, days." },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-5 text-center text-2xl font-semibold">Popular Tools</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((f) => (
            <Link key={f.href} href={f.href} className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-1 text-lg font-semibold group-hover:underline">{f.name}</div>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/calculators" className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:shadow">
            See all calculators →
          </Link>
        </div>
      </section>
    </main>
  );
}
