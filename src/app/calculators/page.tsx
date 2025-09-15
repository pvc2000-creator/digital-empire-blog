import Link from "next/link";

const calculators = [
  { slug: "gst", name: "GST Calculator", description: "Compute GST and total amount quickly." },
  { slug: "emi", name: "EMI Calculator", description: "Monthly EMI, total interest & payment." },
  { slug: "age", name: "Age Calculator", description: "Age in years, months, and days." },
];

export default function CalculatorsIndex() {
  return (
    <main className="relative min-h-[75vh] py-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-6 text-center text-4xl font-bold">Calculators</h1>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Fast, accurate and ad-friendly calculators. No sign-up required.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {calculators.map((c) => (
            <Link
              key={c.slug}
              href={`/calculators/${c.slug}`}
              className="group rounded-2xl border bg-white/80 p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-2 text-lg font-semibold group-hover:underline">
                {c.name}
              </div>
              <p className="text-sm text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
