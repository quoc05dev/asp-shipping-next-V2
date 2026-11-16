import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asia Pacific Shipping - Independent Vietnamese Shipowner",
  description: "Independent Vietnamese Shipowner",
};

// Content comes from the database at request time, so admin edits are visible without a rebuild.
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-US" className="no-js rfs-clamp-vars">
      <body className="home wp-singular page-template-default page page-id-8 wp-embed-responsive wp-theme-restless-theme u-pt-0">
        {children}
      </body>
    </html>
  );
}
