"use client";
import { ReactNode } from "react";

export default function CalcShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-[70vh] py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="rounded-2xl border bg-background/60 p-5 shadow-sm">
          {children}
        </div>
        <div className="mt-6 space-y-2 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold">How it works</h2>
          <p>
            Enter your values and the result updates instantly. This page is
            lightweight and runs entirely in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
