import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const inter = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Portfolio",
  description: "Portfolio website created by Ankit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
