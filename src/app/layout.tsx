import type { Metadata } from "next";
import { Nunito, Manrope } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-nunito",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Rama Tranz",
  description: "Rama Tranz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(nunito.variable, manrope.variable)}>
        {children}
      </body>
    </html>
  );
}
