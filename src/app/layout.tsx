import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redbone Gym",
  description: "Redbone Gym - Your fitness destination",
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
