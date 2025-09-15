import { CardLink } from "@/components/Card";

const calculators = [
  { slug: "gst", name: "GST Calculator", description: "Compute GST and total amount quickly." },
  { slug: "emi", name: "EMI Calculator", description: "Monthly EMI, interest & totals." },
  { slug: "age", name: "Age Calculator", description: "Age in years, months, days." },
  { slug: "percent-change", name: "Percentage Change", description: "% increase/decrease & difference." },
  { slug: "simple-interest", name: "Simple Interest", description: "Interest and total amount." },
];

export default function CalculatorsIndex() {
  return (
    <main className="py-10">
      <div className="container-x">
        <h1 className="mb-6 text-center text-4xl font-bold">Calculators</h1>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Free tools that run entirely in your browser.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {calculators.map(c => (
            <CardLink key={c.slug} href={`/calculators/${c.slug}`} title={c.name} desc={c.description} />
          ))}
        </div>
      </div>
    </main>
  );
}
