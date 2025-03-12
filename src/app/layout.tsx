import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Light SaaS Landing Page",
  description: "Template created by Fronted Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#eaeefe]")}>
        {children}
      </body>
    </html>
  );
}
