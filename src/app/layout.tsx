import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedBone Gym | Build Your Body. Transform Your Life.",
  description:
    "RedBone Gym in Nasr City, Cairo — your ultimate fitness destination. Science-based training programs, expert coaching, and a supportive community to help you reach your goals. Join us today!",
  keywords: [
    "RedBone Gym",
    "gym",
    "fitness",
    "Nasr City",
    "Cairo",
    "personal training",
    "bodybuilding",
    "workout",
    "gym near me",
    "جيم",
    "ريدبون",
    "مدينة نصر",
  ],
  authors: [{ name: "RedBone Gym" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://redbonegym.com",
    languages: {
      "en": "https://redbonegym.com",
      "ar": "https://redbonegym.com/ar",
    },
  },
  openGraph: {
    title: "RedBone Gym | Build Your Body. Transform Your Life.",
    description:
      "Your ultimate fitness destination in Nasr City, Cairo. Science-based training, expert coaching, and a community that pushes you forward.",
    url: "https://redbonegym.com",
    siteName: "RedBone Gym",
    locale: "en_US",
    alternateLocale: "ar_EG",
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
    title: "RedBone Gym | Build Your Body. Transform Your Life.",
    description:
      "Your ultimate fitness destination in Nasr City, Cairo. Science-based training, expert coaching, and a community that pushes you forward.",
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
