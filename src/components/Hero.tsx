export default function Hero() {
  return (
    <section className="relative">
      <div className="container-x py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Calculator Hub
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Fast, accurate, and free calculators. Clean design, no sign-up.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/calculators" className="rounded-2xl border bg-white px-5 py-2 text-sm font-semibold shadow-sm hover:shadow">
            Browse Calculators
          </a>
          <a href="/blog" className="rounded-2xl border border-transparent bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            Visit Blog
          </a>
        </div>
      </div>
    </section>
  );
}
