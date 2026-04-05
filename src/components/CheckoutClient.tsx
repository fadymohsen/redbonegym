"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle,
  MessageCircle,
  CreditCard,
  ArrowLeft,
  Smartphone,
  Building,
  Loader2,
} from "lucide-react";

const plans = {
  "1-month": { en: "1 Month", ar: "شهر واحد", price: "700", days: 30 },
  "3-months": { en: "3 Months", ar: "٣ أشهر", price: "1,600", days: 90 },
  "6-months": { en: "6 Months", ar: "٦ أشهر", price: "2,500", days: 180 },
  "1-year": { en: "1 Year", ar: "سنة واحدة", price: "3,900", days: 365 },
};

const PHONE = "201068521676";

const paymentMethods = [
  { id: 2, name: { en: "Credit / Debit Card", ar: "بطاقة ائتمان / خصم" }, icon: CreditCard },
  { id: 3, name: { en: "Fawry", ar: "فوري" }, icon: Building },
  { id: 4, name: { en: "Mobile Wallet", ar: "محفظة إلكترونية" }, icon: Smartphone },
];

export default function CheckoutClient() {
  const searchParams = useSearchParams();
  const planKey = (searchParams.get("plan") ?? "1-month") as keyof typeof plans;
  const locale = (searchParams.get("locale") ?? "en") as "en" | "ar";
  const isAr = locale === "ar";

  const plan = plans[planKey] ?? plans["1-month"];

  const [tab, setTab] = useState<"online" | "whatsapp">("online");
  const [selectedMethod, setSelectedMethod] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fawryCode, setFawryCode] = useState("");
  const [fawryExpire, setFawryExpire] = useState("");
  const [walletReference, setWalletReference] = useState("");

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
      days: "days",
      tabOnline: "Pay Online",
      tabWhatsapp: "Pay via WhatsApp",
      paymentMethod: "Payment Method",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      payNow: "Pay Now",
      back: "Back to Plans",
      howTitle: "How to subscribe",
      step1Title: "Send Payment",
      step1Desc: `Transfer ${plan.price} EGP via Vodafone Cash or InstaPay to`,
      step2Title: "Send the Receipt",
      step2Desc: "Take a screenshot of the transfer and send it to us on WhatsApp.",
      step3Title: "Get Activated",
      step3Desc: "We'll confirm your membership within minutes and you're good to go.",
      cta: "Confirm on WhatsApp",
      note: "Have a question? We're available on WhatsApp.",
      required: "Please fill in all fields.",
    },
    ar: {
      title: "أكمل اشتراكك",
      subtitle: "خطوة واحدة تفصلك عن بدء رحلتك الرياضية.",
      planLabel: "الباقة المختارة",
      priceLabel: "السعر",
      days: "يوم",
      tabOnline: "ادفع أونلاين",
      tabWhatsapp: "ادفع عبر واتساب",
      paymentMethod: "طريقة الدفع",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      payNow: "ادفع الآن",
      back: "رجوع للباقات",
      howTitle: "كيف تشترك",
      step1Title: "أرسل الدفع",
      step1Desc: `حوّل ${plan.price} جنيه عبر فودافون كاش أو انستاباي على رقم`,
      step2Title: "أرسل الإيصال",
      step2Desc: "خد سكرين شوت للتحويل وابعته علينا على واتساب.",
      step3Title: "فعّل اشتراكك",
      step3Desc: "هنأكد اشتراكك في دقايق وتبدأ على طول.",
      cta: "تأكيد عبر واتساب",
      note: "عندك سؤال؟ احنا متاحين على واتساب.",
      required: "من فضلك املأ جميع الحقول.",
    },
  };

  const c = content[locale];

  const steps = [
    { icon: CreditCard, title: c.step1Title, desc: c.step1Desc, extra: "+20 106 852 1676" },
    { icon: MessageCircle, title: c.step2Title, desc: c.step2Desc, extra: null },
    { icon: CheckCircle, title: c.step3Title, desc: c.step3Desc, extra: null },
  ];

  async function handlePayment(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !phone) {
      setError(c.required);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planName: `RedBone Gym - ${plan.en}`,
          amount: plan.price.replace(",", ""),
          paymentMethodId: selectedMethod,
          customer: {
            firstName,
            lastName,
            email,
            phone,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = typeof data?.error === "string" ? data.error : typeof data?.message === "string" ? data.message : "Payment failed. Please try again.";
        setError(msg);
        setLoading(false);
        return;
      }

      const paymentData = data?.data?.payment_data;

      // Credit Card — redirect
      if (paymentData?.redirectTo) {
        window.location.href = paymentData.redirectTo;
        return;
      }

      // Fawry — show reference code
      if (paymentData?.fawryCode) {
        setFawryCode(paymentData.fawryCode);
        setFawryExpire(paymentData.expireDate || "");
        setLoading(false);
        return;
      }

      // Mobile Wallet — show reference
      if (paymentData?.meezaReference) {
        setWalletReference(String(paymentData.meezaReference));
        setLoading(false);
        return;
      }

      setError(isAr ? "لم نتمكن من إنشاء الدفع. حاول مرة أخرى." : "Could not process payment. Please try again.");
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

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

          {/* Tab switcher */}
          <div className="flex rounded-lg bg-[#323232]/50 p-1 mb-8">
            <button
              onClick={() => setTab("online")}
              className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-colors ${
                tab === "online"
                  ? "bg-[#CC2421] text-[#F6E8D1]"
                  : "text-[#7F7F7F] hover:text-[#F6E8D1]"
              }`}
            >
              {c.tabOnline}
            </button>
            <button
              onClick={() => setTab("whatsapp")}
              className={`flex-1 rounded-md py-2.5 text-sm font-semibold transition-colors ${
                tab === "whatsapp"
                  ? "bg-[#25D366] text-white"
                  : "text-[#7F7F7F] hover:text-[#F6E8D1]"
              }`}
            >
              {c.tabWhatsapp}
            </button>
          </div>

          {/* Fawry Code Result */}
          {fawryCode && (
            <div className="rounded-xl border border-[#CC2421] bg-[#CC2421]/5 p-8 text-center space-y-4">
              <Building className="h-12 w-12 text-[#CC2421] mx-auto" />
              <h2 className="text-xl font-bold text-[#F6E8D1]">
                {isAr ? "كود فوري للدفع" : "Your Fawry Payment Code"}
              </h2>
              <div className="bg-[#323232]/50 rounded-lg p-4">
                <p className="text-3xl font-mono font-bold text-[#CC2421] tracking-widest" dir="ltr">
                  {fawryCode}
                </p>
              </div>
              <p className="text-sm text-[#7F7F7F]">
                {isAr
                  ? "توجه لأي فرع فوري وادفع بالكود ده"
                  : "Visit any Fawry outlet and pay using this code"}
              </p>
              {fawryExpire && (
                <p className="text-xs text-[#7F7F7F]">
                  {isAr ? "صالح حتى:" : "Expires:"}{" "}
                  <span className="text-[#F6E8D1]" dir="ltr">{fawryExpire}</span>
                </p>
              )}
              <button
                onClick={() => { setFawryCode(""); setFawryExpire(""); }}
                className="mt-4 text-sm text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors underline"
              >
                {isAr ? "دفع مرة أخرى" : "Make another payment"}
              </button>
            </div>
          )}

          {/* Mobile Wallet Result */}
          {walletReference && (
            <div className="rounded-xl border border-[#CC2421] bg-[#CC2421]/5 p-8 text-center space-y-4">
              <Smartphone className="h-12 w-12 text-[#CC2421] mx-auto" />
              <h2 className="text-xl font-bold text-[#F6E8D1]">
                {isAr ? "رقم مرجع المحفظة" : "Wallet Payment Reference"}
              </h2>
              <div className="bg-[#323232]/50 rounded-lg p-4">
                <p className="text-3xl font-mono font-bold text-[#CC2421] tracking-widest" dir="ltr">
                  {walletReference}
                </p>
              </div>
              <p className="text-sm text-[#7F7F7F]">
                {isAr
                  ? "ادفع من محفظتك الإلكترونية باستخدام الرقم المرجعي ده"
                  : "Pay from your mobile wallet using this reference number"}
              </p>
              <button
                onClick={() => setWalletReference("")}
                className="mt-4 text-sm text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors underline"
              >
                {isAr ? "دفع مرة أخرى" : "Make another payment"}
              </button>
            </div>
          )}

          {/* Online Payment Tab */}
          {tab === "online" && !fawryCode && !walletReference && (
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment method selection */}
              <div>
                <label className="block text-sm font-semibold text-[#F6E8D1] mb-3">{c.paymentMethod}</label>
                <div className="grid grid-cols-3 gap-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedMethod(method.id)}
                      className={`flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors ${
                        selectedMethod === method.id
                          ? "border-[#CC2421] bg-[#CC2421]/10"
                          : "border-[#323232] bg-[#323232]/30 hover:border-[#7F7F7F]"
                      }`}
                    >
                      <method.icon className={`h-6 w-6 ${selectedMethod === method.id ? "text-[#CC2421]" : "text-[#7F7F7F]"}`} />
                      <span className={`text-xs font-medium ${selectedMethod === method.id ? "text-[#F6E8D1]" : "text-[#7F7F7F]"}`}>
                        {method.name[locale]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#7F7F7F] mb-1.5">{c.firstName}</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg border border-[#323232] bg-[#323232]/30 px-4 py-2.5 text-[#F6E8D1] placeholder-[#7F7F7F]/50 outline-none focus:border-[#CC2421] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#7F7F7F] mb-1.5">{c.lastName}</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg border border-[#323232] bg-[#323232]/30 px-4 py-2.5 text-[#F6E8D1] placeholder-[#7F7F7F]/50 outline-none focus:border-[#CC2421] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7F7F7F] mb-1.5">{c.email}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#323232] bg-[#323232]/30 px-4 py-2.5 text-[#F6E8D1] placeholder-[#7F7F7F]/50 outline-none focus:border-[#CC2421] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7F7F7F] mb-1.5">{c.phone}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  dir="ltr"
                  className="w-full rounded-lg border border-[#323232] bg-[#323232]/30 px-4 py-2.5 text-[#F6E8D1] placeholder-[#7F7F7F]/50 outline-none focus:border-[#CC2421] transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-[#CC2421] bg-[#CC2421]/10 border border-[#CC2421]/30 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#CC2421] py-3.5 text-lg font-bold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {isAr ? "جاري التحويل..." : "Redirecting..."}
                  </>
                ) : (
                  c.payNow
                )}
              </button>
            </form>
          )}

          {/* WhatsApp Tab */}
          {tab === "whatsapp" && (
            <>
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

              <div className="h-px bg-[#323232] mb-10" />

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
            </>
          )}

        </div>
      </main>
    </div>
  );
}
