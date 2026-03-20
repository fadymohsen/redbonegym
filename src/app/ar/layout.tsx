import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ريدبون جيم | ابني جسمك. غيّر حياتك.",
  description:
    "ريدبون جيم في مدينة نصر، القاهرة — وجهتك المثالية للياقة البدنية. برامج تدريب قائمة على العلم، مدربين محترفين، ومجتمع يدعمك توصل لهدفك. انضم لينا النهاردة!",
  keywords: [
    "ريدبون جيم",
    "جيم",
    "لياقة بدنية",
    "مدينة نصر",
    "القاهرة",
    "تدريب شخصي",
    "كمال أجسام",
    "تمارين",
    "جيم قريب مني",
    "RedBone Gym",
    "gym",
    "Nasr City",
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
    canonical: "https://redbonegym.com/ar",
    languages: {
      "en": "https://redbonegym.com",
      "ar": "https://redbonegym.com/ar",
    },
  },
  openGraph: {
    title: "ريدبون جيم | ابني جسمك. غيّر حياتك.",
    description:
      "وجهتك المثالية للياقة البدنية في مدينة نصر، القاهرة. تدريب قائم على العلم، مدربين محترفين، ومجتمع يدفعك للأمام.",
    url: "https://redbonegym.com/ar",
    siteName: "ريدبون جيم",
    locale: "ar_EG",
    alternateLocale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 400,
        alt: "شعار ريدبون جيم",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ريدبون جيم | ابني جسمك. غيّر حياتك.",
    description:
      "وجهتك المثالية للياقة البدنية في مدينة نصر، القاهرة. تدريب قائم على العلم، مدربين محترفين، ومجتمع يدفعك للأمام.",
    images: ["/logo.png"],
  },
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0D0E12] text-[#F6E8D1] antialiased">{children}</body>
    </html>
  );
}
