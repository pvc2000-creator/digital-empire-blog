import "./globals.css";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdsInit from "@/components/AdsInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://digital-empire-blog.vercel.app"),
  title: {
    default: "Calculator Hub — Digital Empire",
    template: "%s — Calculator Hub",
  },
  description: "Fast, accurate, free calculators (GST, EMI, Age, Percentage Change, Simple Interest) with clear formulas and examples.",
  keywords: [
    "calculators", "online calculator", "GST", "EMI", "Age",
    "percentage change", "simple interest", "finance calculator",
    "math calculator", "free tools"
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Calculator Hub — Digital Empire",
    title: "Free Online Calculators (GST, EMI, Age, % Change, SI)",
    description: "Use fast, accurate calculators with step-by-step formulas and examples.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Calculators",
    description: "GST, EMI, Age, Percentage Change, Simple Interest.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <AdsInit />
      </body>
    </html>
  );
}
