import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redbone Gym",
  description: "Redbone Gym - Science-Based Fitness Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0D0E12] text-[#F6E8D1] antialiased">{children}</body>
    </html>
  );
}
