import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ברוכים הבאים",
  description: "תבנית פרויקט Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
