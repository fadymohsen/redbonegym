"use client";

import { Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PendingContent() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") === "ar" ? "ar" : "en";
  const isAr = locale === "ar";

  const content = {
    en: {
      title: "Payment Pending",
      subtitle: "Your payment is being processed. We'll confirm your subscription shortly. You can also reach us on WhatsApp.",
      back: "Back to Home",
    },
    ar: {
      title: "الدفع قيد المعالجة",
      subtitle: "جاري معالجة الدفع. هنأكد اشتراكك قريبًا. تقدر تتواصل معنا على واتساب.",
      back: "الرجوع للرئيسية",
    },
  };

  const c = content[locale];

  return (
    <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center px-4" dir={isAr ? "rtl" : "ltr"}>
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10 border border-yellow-500/30">
          <Clock className="h-10 w-10 text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold text-[#F6E8D1] mb-3">{c.title}</h1>
        <p className="text-[#7F7F7F] mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={isAr ? "/ar" : "/"}
            className="rounded-md bg-[#CC2421] px-8 py-3 font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
          >
            {c.back}
          </a>
          <a
            href="https://wa.me/201068521676"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#25D366] px-8 py-3 font-semibold text-white hover:bg-[#1ebe5d] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPendingPage() {
  return (
    <Suspense>
      <PendingContent />
    </Suspense>
  );
}
