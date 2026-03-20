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
      className="relative flex min-h-[70vh] sm:min-h-screen items-center justify-center overflow-hidden bg-[#0D0E12] pt-16 pb-4 sm:pt-0 sm:pb-0"
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
      <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-l-2 border-t-2 border-[#CC2421]/20 m-4 sm:m-8" />
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-r-2 border-b-2 border-[#CC2421]/20 m-4 sm:m-8" />

      {/* Vertical side lines */}
      <div className="absolute left-4 sm:left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#CC2421]/20 to-transparent" />
      <div className="absolute right-4 sm:right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#CC2421]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Title */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-[#F6E8D1] mb-4 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {locale === "ar" ? (<><span className="text-[#CC2421]">ريدبون</span> جيم</>) : (<><span className="text-[#CC2421]">REDBONE</span> GYM</>)}
        </h1>

        {/* Divider */}
        <div
          className={`h-px bg-gradient-to-r from-transparent via-[#CC2421] to-transparent mb-8 transition-all duration-1000 ease-out delay-300 ${
            loaded ? "w-48 sm:w-64 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Tagline */}
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#F6E8D1] mb-4 transition-all duration-1000 ease-out delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {locale === "ar" ? "ابني جسمك. غيّر حياتك." : "BUILD YOUR BODY."}
        </h2>
        <h3
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wider text-[#CC2421] mb-12 transition-all duration-1000 ease-out delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {locale === "ar" ? "ابدأ رحلتك معانا." : "TRANSFORM YOUR LIFE."}
        </h3>

        {/* Scroll indicator */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-1000 ease-out delay-[1000ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-7 h-11 rounded-full border-2 border-[#7F7F7F]/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-[#CC2421] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
