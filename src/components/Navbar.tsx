"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Locale, t } from "@/lib/translations";

function getLocaleSwitchHref(pathname: string, locale: Locale) {
  if (locale === "ar") {
    // Currently Arabic → switch to English: remove /ar prefix
    const stripped = pathname.replace(/^\/ar/, "") || "/";
    return stripped;
  }
  // Currently English → switch to Arabic: add /ar prefix
  const clean = pathname === "/" ? "" : pathname;
  return `/ar${clean}`;
}

export default function Navbar({ locale = "en" }: { locale?: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const content = t(locale);

  const prefix = locale === "ar" ? "/ar" : "";
  const switchHref = getLocaleSwitchHref(pathname, locale);
  const navLinks = [
    { label: content.nav.about, href: `${prefix}/about` },
    { label: content.nav.subscriptions, href: `${prefix}/subscriptions` },
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0E12]/95 backdrop-blur-sm border-b border-[#323232]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href={locale === "ar" ? "/ar" : "/"} className="flex items-center relative z-50">
              <img src="/logo.png" alt="RedBone Gym" className="h-10 w-auto" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={switchHref}
                className="hover:opacity-80 transition-opacity"
                title={locale === "ar" ? "English" : "العربية"}
              >
                {locale === "ar" ? (
                  <span className="text-sm font-medium text-[#7F7F7F] hover:text-[#F6E8D1]">English</span>
                ) : (
                  <span className="text-sm font-medium text-[#7F7F7F] hover:text-[#F6E8D1]">العربية</span>
                )}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden relative z-50 text-[#F6E8D1] hover:text-[#CC2421] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#0D0E12]" />

        <div className="absolute top-0 right-0 w-72 h-72 bg-[#CC2421]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#CC2421]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
          <img
            src="/logo.png"
            alt="RedBone Gym"
            className={`h-16 w-auto mb-12 transition-all duration-700 ease-out ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
          />

          <div className="flex flex-col items-center gap-2 w-full max-w-xs">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`w-full text-center py-4 text-2xl font-semibold tracking-wide text-[#F6E8D1] hover:text-[#CC2421] transition-all duration-500 ease-out border-b border-[#323232]/50 last:border-b-0 ${
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={switchHref}
              onClick={() => setMobileOpen(false)}
              className={`w-full text-center py-4 text-3xl transition-all duration-500 ease-out hover:opacity-80 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + navLinks.length * 80}ms` : "0ms",
              }}
              title={locale === "ar" ? "English" : "العربية"}
            >
              {locale === "ar" ? (
                <span className="text-2xl font-semibold text-[#F6E8D1] hover:text-[#CC2421]">English</span>
              ) : (
                <span className="text-2xl font-semibold text-[#F6E8D1] hover:text-[#CC2421]">العربية</span>
              )}
            </a>
          </div>

          <div
            className={`mt-12 h-0.5 bg-gradient-to-r from-transparent via-[#CC2421] to-transparent transition-all duration-700 ease-out ${
              mobileOpen ? "w-32 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "600ms" : "0ms" }}
          />
        </div>
      </div>
    </>
  );
}
