import { CheckCircle, Dumbbell, Clock, Trophy, Users } from "lucide-react";
import { Locale, t } from "@/lib/translations";

const plans = [
  { name: { en: "1 Month", ar: "شهر واحد" }, slug: "1-month", price: "700", days: 30, featured: false, badge: false },
  { name: { en: "3 Months", ar: "٣ أشهر" }, slug: "3-months", price: "1,600", days: 90, featured: false, badge: false },
  { name: { en: "6 Months", ar: "٦ أشهر" }, slug: "6-months", price: "2,500", days: 180, featured: false, badge: false },
  { name: { en: "1 Year", ar: "سنة واحدة" }, slug: "1-year", price: "3,900", days: 365, featured: true, badge: true },
];

const whyIcons = [Users, Dumbbell, Trophy, Clock];

export default function SubscriptionsPageContent({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);
  const c = content.subscriptionsPage;
  const isAr = locale === "ar";

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#0D0E12] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC2421]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#F6E8D1] mb-6">
            {c.heroTitle}
          </h1>
          <p className="text-xl text-[#7F7F7F] max-w-2xl mx-auto">
            {c.heroSubtitle}
          </p>
          <div className="mx-auto mt-8 h-1 w-20 bg-[#CC2421] rounded" />
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2">
            {plans.map((plan, i) => {
              const planContent = c.plans[i];
              return (
                <div
                  key={plan.slug}
                  className={`relative rounded-xl p-6 flex flex-col transition-transform hover:scale-105 ${
                    plan.featured
                      ? "bg-[#323232]/50 border-2 border-[#CC2421] ring-1 ring-[#CC2421]/30 lg:scale-105"
                      : "bg-[#323232]/50 border border-[#323232]"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#CC2421] px-4 py-1 text-xs font-bold text-[#F6E8D1] uppercase tracking-wider">
                      {content.subscriptions.bestValue}
                    </span>
                  )}

                  {/* Motivational header */}
                  <p className="text-sm font-bold tracking-widest uppercase text-[#CC2421] mt-2 mb-1">
                    {planContent.motivational}
                  </p>
                  <h3 className="text-2xl font-bold text-[#F6E8D1] mb-3">
                    {plan.name[locale]}
                  </h3>
                  <p className="text-sm text-[#7F7F7F] leading-relaxed mb-6">
                    {planContent.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-[#CC2421]">{plan.price}</span>
                    <span className="ml-1 text-[#7F7F7F] text-sm">EGP</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {planContent.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#CC2421] flex-shrink-0" />
                        <span className="text-sm text-[#7F7F7F]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/checkout?plan=${plan.slug}&locale=${locale}`}
                    className={`w-full rounded-md py-3 text-sm font-semibold text-center transition-colors ${
                      plan.featured
                        ? "bg-[#CC2421] text-[#F6E8D1] hover:bg-[#a01d1a]"
                        : "bg-[#323232] text-[#F6E8D1] hover:bg-[#7F7F7F]/30 border border-[#323232]"
                    }`}
                  >
                    {content.subscriptions.subscribe}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
            {c.whyTitle}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.whyItems.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div
                  key={i}
                  className="rounded-xl bg-[#323232]/50 border border-[#323232] p-6 text-center hover:border-[#CC2421]/50 transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#CC2421]/10 mx-auto mb-4">
                    <Icon className="h-6 w-6 text-[#CC2421]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F6E8D1] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#7F7F7F] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#F6E8D1] mb-4">
            {isAr ? "لسه مش متأكد؟" : "Still Not Sure?"}
          </h2>
          <p className="text-[#7F7F7F] mb-8 text-lg">
            {isAr
              ? "تواصل معانا وهنساعدك تختار الباقة المناسبة ليك."
              : "Reach out and we'll help you pick the perfect plan for your goals."}
          </p>
          <a
            href="https://wa.me/201068521676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-3 text-lg font-semibold text-white hover:bg-[#1ebe5d] transition-colors"
          >
            {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
}
