import { Suspense } from "react";
import GA from "./GoogleAnalytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
        <GA />
      </Suspense>
        {children}
      </body>
    </html>
  );
}

