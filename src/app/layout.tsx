import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redbone Gym",
  description: "Redbone Gym - Science-Based Fitness Journey",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Redbone Gym",
    description: "Redbone Gym - Science-Based Fitness Journey",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "RedBone Gym Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Redbone Gym",
    description: "Redbone Gym - Science-Based Fitness Journey",
    images: ["/logo.png"],
  },
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
