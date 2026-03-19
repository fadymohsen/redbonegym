import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ريدبون جيم",
  description: "ريدبون جيم - رحلة لياقة قائمة على العلم",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "ريدبون جيم",
    description: "ريدبون جيم - رحلة لياقة قائمة على العلم",
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
    title: "ريدبون جيم",
    description: "ريدبون جيم - رحلة لياقة قائمة على العلم",
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
