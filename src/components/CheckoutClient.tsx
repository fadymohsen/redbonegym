"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle, MessageCircle, CreditCard, ArrowLeft } from "lucide-react";

const plans = {
  "1-month": { en: "1 Month", ar: "شهر واحد", price: "700", days: 30 },
  "3-months": { en: "3 Months", ar: "٣ أشهر", price: "1,600", days: 90 },
  "6-months": { en: "6 Months", ar: "٦ أشهر", price: "2,500", days: 180 },
  "1-year": { en: "1 Year", ar: "سنة واحدة", price: "3,900", days: 365 },
};

const PHONE = "201068521676";

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const planKey = (searchParams.get("plan") ?? "1-month") as keyof typeof plans;
  const locale = (searchParams.get("locale") ?? "en") as "en" | "ar";
  const isAr = locale === "ar";

  const plan = plans[planKey] ?? plans["1-month"];

  const whatsappMessage = isAr
    ? `مرحبًا، أريد الاشتراك في باقة ${plan.ar} بسعر ${plan.price} جنيه. أرجو تفعيل اشتراكي.`
    : `Hi, I'd like to subscribe to the ${plan.en} plan (${plan.price} EGP). Please activate my membership.`;

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMessage)}`;
  const backHref = isAr ? "/ar#subscriptions" : "/#subscriptions";

  const content = {
    en: {
      title: "Complete Your Subscription",
      subtitle: "You're one step away from starting your fitness journey.",
      planLabel: "Selected Plan",
      priceLabel: "Price",
      durationLabel: "Duration",
      days: "days",
      howTitle: "How to subscribe",
      step1Title: "Send Payment",
      step1Desc: `Transfer ${plan.price} EGP via Vodafone Cash or InstaPay to`,
      step2Title: "Send the Receipt",
      step2Desc: "Take a screenshot of the transfer and send it to us on WhatsApp.",
      step3Title: "Get Activated",
      step3Desc: "We'll confirm your membership within minutes and you're good to go.",
      cta: "Confirm on WhatsApp",
      back: "Back to Plans",
      note: "Have a question? We're available on WhatsApp.",
    },
    ar: {
      title: "أكمل اشتراكك",
      subtitle: "خطوة واحدة تفصلك عن بدء رحلتك الرياضية.",
      planLabel: "الباقة المختارة",
      priceLabel: "السعر",
      durationLabel: "المدة",
      days: "يوم",
      howTitle: "كيف تشترك",
      step1Title: "أرسل الدفع",
      step1Desc: `حوّل ${plan.price} جنيه عبر فودافون كاش أو انستاباي على رقم`,
      step2Title: "أرسل الإيصال",
      step2Desc: "خد سكرين شوت للتحويل وابعته علينا على واتساب.",
      step3Title: "فعّل اشتراكك",
      step3Desc: "هنأكد اشتراكك في دقايق وتبدأ على طول.",
      cta: "تأكيد عبر واتساب",
      back: "رجوع للباقات",
      note: "عندك سؤال؟ احنا متاحين على واتساب.",
    },
  };

  const c = content[locale];

  const steps = [
    { icon: CreditCard, title: c.step1Title, desc: c.step1Desc, extra: "+20 106 852 1676" },
    { icon: MessageCircle, title: c.step2Title, desc: c.step2Desc, extra: null },
    { icon: CheckCircle, title: c.step3Title, desc: c.step3Desc, extra: null },
  ];

  return (
    <div
      className="min-h-screen bg-[#0D0E12] text-[#F6E8D1] flex flex-col"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="border-b border-[#323232] px-4 py-4">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <a href={backHref} className="flex items-center gap-2 text-sm text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors">
            <ArrowLeft className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
            {c.back}
          </a>
          <img src="/logo.png" alt="RedBone Gym" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-3xl">

          {/* Hero text */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-[#F6E8D1]">{c.title}</h1>
            <p className="mt-2 text-[#7F7F7F]">{c.subtitle}</p>
          </div>

          {/* Plan summary */}
          <div className="rounded-xl border border-[#CC2421] bg-[#CC2421]/5 p-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#CC2421] mb-1">{c.planLabel}</p>
              <p className="text-2xl font-bold text-[#F6E8D1]">{plan[locale]}</p>
              <p className="text-sm text-[#7F7F7F] mt-1">{plan.days} {c.days}</p>
            </div>
            <div className={`${isAr ? "text-left" : "text-right"}`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7F7F7F] mb-1">{c.priceLabel}</p>
              <p className="text-4xl font-extrabold text-[#CC2421]">{plan.price}</p>
              <p className="text-sm text-[#7F7F7F]">EGP</p>
            </div>
          </div>

          {/* Steps */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-[#F6E8D1] mb-6">{c.howTitle}</h2>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2421]/10 border border-[#CC2421]/30">
                    <step.icon className="h-5 w-5 text-[#CC2421]" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-[#F6E8D1]">
                      <span className="text-[#CC2421] mr-1">{i + 1}.</span>
                      {step.title}
                    </p>
                    <p className="text-sm text-[#7F7F7F] mt-0.5">
                      {step.desc}
                      {step.extra && (
                        <span className="block font-semibold text-[#F6E8D1] mt-0.5" dir="ltr">{step.extra}</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#323232] mb-10" />

          {/* CTA */}
          <div className="text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-10 py-4 text-lg font-bold text-white hover:bg-[#1ebe5d] transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
              {c.cta}
            </a>
            <p className="mt-4 text-sm text-[#7F7F7F]">{c.note}</p>
          </div>

        </div>
      </main>
    </div>
  );
}
