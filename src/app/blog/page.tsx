import Link from "next/link";
import { Card, CardLink } from "@/components/Card";

export const metadata = {
  title: "How to Use the Calculators — Calculator Hub",
  description: "Quick guide and examples for using GST, EMI, and Age calculators.",
};

export default function Page() {
  return (
    <main className="py-10">
      <div className="container-x">
        <h1 className="mb-2 text-4xl font-bold">How to use the calculators</h1>
        <p className="mb-8 max-w-2xl text-muted-foreground">
          Pick a calculator, enter your values, and results update instantly.
          Everything runs in your browser—no sign-up needed.
        </p>

        {/* Quick links */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          <CardLink href="/calculators/gst" title="GST Calculator" desc="Compute GST and total." />
          <CardLink href="/calculators/emi" title="EMI Calculator" desc="Monthly EMI, interest & total." />
          <CardLink href="/calculators/age" title="Age Calculator" desc="Years, months, and days." />
        </div>

        {/* Quick guide */}
        <section className="prose mt-10 max-w-2xl">
          <h2>Quick guide</h2>
          <ol>
            <li>Open a tool from the list above or the <Link href="/calculators">All Calculators</Link> page.</li>
            <li>Enter your values in the input boxes.</li>
            <li>Read the results cards and the short formula explanation below.</li>
          </ol>
        </section>

        {/* Worked examples */}
        <section className="mt-10 grid gap-5 md:grid-cols-2">
          <Card>
            <div className="prose max-w-none">
              <h3>Example: EMI</h3>
              <p><strong>Input:</strong> ₹100,000 principal, 10% annual rate, 12 months.</p>
              <ul>
                <li>Monthly EMI: <strong>₹8,791.59</strong></li>
                <li>Total interest: <strong>₹5,499.06</strong></li>
                <li>Total payment: <strong>₹105,499.06</strong></li>
              </ul>
              <p><Link href="/calculators/emi">Open EMI Calculator →</Link></p>
            </div>
          </Card>
          <Card>
            <div className="prose max-w-none">
              <h3>Example: GST</h3>
              <p><strong>Input:</strong> Amount ₹1,000 at 18% GST.</p>
              <ul>
                <li>GST amount: <strong>₹180.00</strong></li>
                <li>Total with GST: <strong>₹1,180.00</strong></li>
              </ul>
              <p><Link href="/calculators/gst">Open GST Calculator →</Link></p>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link href="/calculators" className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold hover:shadow">
            Browse all calculators →
          </Link>
        </div>
      </div>
    </main>
  );
}
