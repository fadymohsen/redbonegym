"use client";

import { useState } from "react";
import { ChevronDown, Target, Eye, Dumbbell } from "lucide-react";
import { Locale, t } from "@/lib/translations";

export default function AboutPageContent({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);
  const c = content.aboutPage;
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

      {/* Our Story */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className={isAr ? "lg:order-2" : ""}>
              <div className="h-80 lg:h-[28rem] overflow-hidden rounded-xl">
                <img
                  src="/gallery-1.jpg"
                  alt="RedBone Gym"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className={isAr ? "lg:order-1" : ""}>
              <h2 className="text-sm font-bold tracking-widest uppercase text-[#CC2421] mb-3">
                {c.storyTitle}
              </h2>
              <p className="text-[#7F7F7F] leading-relaxed mb-4 text-lg">
                {c.storyP1}
              </p>
              <p className="text-[#7F7F7F] leading-relaxed text-lg">
                {c.storyP2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl bg-[#323232]/50 border border-[#323232] p-8 hover:border-[#CC2421]/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#CC2421]/10 mb-6">
                <Target className="h-6 w-6 text-[#CC2421]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F6E8D1] mb-4">{c.missionTitle}</h3>
              <p className="text-[#7F7F7F] leading-relaxed">{c.missionDesc}</p>
            </div>
            <div className="rounded-xl bg-[#323232]/50 border border-[#323232] p-8 hover:border-[#CC2421]/50 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#CC2421]/10 mb-6">
                <Eye className="h-6 w-6 text-[#CC2421]" />
              </div>
              <h3 className="text-2xl font-bold text-[#F6E8D1] mb-4">{c.visionTitle}</h3>
              <p className="text-[#7F7F7F] leading-relaxed">{c.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
            {c.valuesTitle}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.values.map((value, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#323232]/50 border border-[#323232] p-6 text-center hover:border-[#CC2421]/50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CC2421]/10 mx-auto mb-4">
                  <span className="text-lg font-bold text-[#CC2421]">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-[#F6E8D1] mb-2">{value.title}</h3>
                <p className="text-sm text-[#7F7F7F] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
            {c.ownerTitle}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className={isAr ? "lg:order-2" : ""}>
              <div className="h-80 lg:h-[28rem] overflow-hidden rounded-xl">
                <img
                  src="/owner.jpg"
                  alt={content.about.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <div className={isAr ? "lg:order-1" : ""}>
              <h3 className="text-sm font-bold tracking-widest uppercase text-[#CC2421] mb-3">
                {content.about.role}
              </h3>
              <h2 className="text-4xl font-bold text-[#F6E8D1] mb-6">
                {content.about.name}
              </h2>
              <p className="text-[#7F7F7F] leading-relaxed mb-4">
                {content.about.bio1}
              </p>
              <p className="text-[#7F7F7F] leading-relaxed">
                {content.about.bio2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
            {c.faqTitle}
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />
          <div className="space-y-3">
            {c.faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Dumbbell className="h-12 w-12 text-[#CC2421] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#F6E8D1] mb-4">
            {isAr ? "جاهز تبدأ رحلتك؟" : "Ready to Start Your Journey?"}
          </h2>
          <p className="text-[#7F7F7F] mb-8 text-lg">
            {isAr
              ? "انضم لعيلة ريدبون النهاردة وابدأ تحوّلك."
              : "Join the RedBone family today and begin your transformation."}
          </p>
          <a
            href={isAr ? "/ar/subscriptions" : "/subscriptions"}
            className="inline-flex items-center gap-2 rounded-md bg-[#CC2421] px-8 py-3 text-lg font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
          >
            {isAr ? "شوف الباقات" : "View Plans"}
          </a>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[#323232] bg-[#323232]/30 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-[#F6E8D1] pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#CC2421] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-5 px-5" : "max-h-0"
        }`}
      >
        <p className="text-[#7F7F7F] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
