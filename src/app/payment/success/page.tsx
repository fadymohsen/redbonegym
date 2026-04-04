"use client";

import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") === "ar" ? "ar" : "en";
  const isAr = locale === "ar";

  const content = {
    en: {
      title: "Payment Successful!",
      subtitle: "Your subscription has been activated. Welcome to RedBone Gym!",
      back: "Back to Home",
    },
    ar: {
      title: "تم الدفع بنجاح!",
      subtitle: "تم تفعيل اشتراكك. أهلاً بك في ريدبون جيم!",
      back: "الرجوع للرئيسية",
    },
  };

  const c = content[locale];

  return (
    <div className="min-h-screen bg-[#0D0E12] flex items-center justify-center px-4" dir={isAr ? "rtl" : "ltr"}>
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-[#F6E8D1] mb-3">{c.title}</h1>
        <p className="text-[#7F7F7F] mb-8">{c.subtitle}</p>
        <a
          href={isAr ? "/ar" : "/"}
          className="inline-block rounded-md bg-[#CC2421] px-8 py-3 font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
        >
          {c.back}
        </a>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
