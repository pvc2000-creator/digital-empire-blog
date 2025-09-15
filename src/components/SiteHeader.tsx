import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="text-lg font-bold">Calculator Hub</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/calculators" className="hover:underline">Calculators</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
