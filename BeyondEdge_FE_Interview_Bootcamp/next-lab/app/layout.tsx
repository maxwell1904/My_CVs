import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brick Desk | Next.js learning lab",
  description: "An independent catalog for the BeyondEdge interview bootcamp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link className="brand" href="/">
            Brick Desk<span>Next.js lab</span>
          </Link>
          <nav aria-label="Main navigation">
            <Link href="/">Overview</Link>
            <Link href="/catalog">Catalog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Local sample data · Nothing is purchased or saved</footer>
      </body>
    </html>
  );
}
