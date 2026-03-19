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
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
