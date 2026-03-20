"use client";

import { useEffect, useState } from "react";
import { Locale, t } from "@/lib/translations";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0E12]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F6E8D1 1px, transparent 1px), linear-gradient(90deg, #F6E8D1 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC2421]/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#CC2421]/5 rounded-full blur-[80px] animate-pulse" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#CC2421]/20 m-8 hidden sm:block" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#CC2421]/20 m-8 hidden sm:block" />

      {/* Vertical side lines */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#CC2421]/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#CC2421]/20 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="RedBone Gym"
          className={`w-48 sm:w-56 lg:w-72 h-auto mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        />

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-[#CC2421] to-transparent mb-8 transition-all duration-1000 ease-out delay-300 ${
            loaded ? "w-48 sm:w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Tagline */}
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#F6E8D1] mb-4 transition-all duration-1000 ease-out delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {locale === "ar" ? "ابني جسمك. غيّر حياتك." : "BUILD YOUR BODY."}
        </h1>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#CC2421] mb-8 transition-all duration-1000 ease-out delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {locale === "ar" ? "ابدأ رحلتك معانا." : "TRANSFORM YOUR LIFE."}
        </h2>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base text-[#7F7F7F] tracking-[0.3em] uppercase mb-10 transition-all duration-1000 ease-out delay-900 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {content.hero.subtitle}
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className={`group relative rounded-md overflow-hidden px-10 py-4 text-sm font-bold tracking-widest uppercase text-[#F6E8D1] transition-all duration-1000 ease-out delay-[1100ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="absolute inset-0 bg-[#CC2421] transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#CC2421] to-[#a01d1a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10">{content.hero.cta}</span>
        </a>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ease-out delay-[1300ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-5 h-8 rounded-full border-2 border-[#7F7F7F]/30 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#CC2421] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
