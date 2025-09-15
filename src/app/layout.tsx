import "./globals.css";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdsInit from "@/components/AdsInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calculator Hub — Digital Empire",
  description: "Fast, accurate, free calculators and study tools.",
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
