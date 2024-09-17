import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leandro Agueiro",
  description: "Site oficial do Assistente Financeiro Leandro Agueiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
  rel="icon"
  href="/saving.png"
  type="image/png"
  sizes="32x32"
/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
