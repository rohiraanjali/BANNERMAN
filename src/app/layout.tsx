import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Built the product? Let us fix your distribution.",
  description: "Notion page clone in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
