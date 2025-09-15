import { ReactNode } from "react";
import Link from "next/link";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border bg-white/80 p-5 shadow-sm transition hover:shadow-md">
      {children}
    </div>
  );
}

export function CardLink({ href, title, desc }:{
  href: string; title: string; desc?: string;
}) {
  return (
    <Link href={href} className="block rounded-2xl border bg-white/80 p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-1 text-lg font-semibold hover:underline">{title}</div>
      {desc ? <p className="text-sm text-muted-foreground">{desc}</p> : null}
    </Link>
  );
}
