"use client";

import { XCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function FailContent() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") === "ar" ? "ar" : "en";
  const isAr = locale === "ar";

  const content = {
    en: {
      title: "Payment Failed",
      subtitle: "Something went wrong with your payment. Please try again or contact us on WhatsApp.",
      retry: "Try Again",
      back: "Back to Plans",
    },
    ar: {
      title: "فشل الدفع",
      subtitle: "حدث خطأ أثناء الدفع. حاول مرة أخرى أو تواصل معنا على واتساب.",
      retry: "حاول مرة أخرى",
      back: "الرجوع للباقات",
    },
  };

  const c = content[locale];

  return (
    <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center px-4" dir={isAr ? "rtl" : "ltr"}>
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#CC2421]/10 border border-[#CC2421]/30">
          <XCircle className="h-10 w-10 text-[#CC2421]" />
        </div>
        <h1 className="text-3xl font-bold text-[#F6E8D1] mb-3">{c.title}</h1>
        <p className="text-[#7F7F7F] mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={isAr ? "/ar#subscriptions" : "/#subscriptions"}
            className="rounded-md bg-[#323232] px-8 py-3 font-semibold text-[#F6E8D1] hover:bg-[#7F7F7F]/30 transition-colors"
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

export default function PaymentFailPage() {
  return (
    <Suspense>
      <FailContent />
    </Suspense>
  );
}
