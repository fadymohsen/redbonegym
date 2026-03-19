import { Locale, t } from "@/lib/translations";

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#323232]/30 via-[#0D0E12] to-[#323232]/20" />
      <div className="absolute inset-0 bg-[#0D0E12]/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src="/hero-logo.jpg"
          alt="RedBone Gym"
          className="w-[85vw] max-w-2xl sm:w-[60vw] lg:w-[40vw] h-auto object-contain"
        />
        <p className="mt-6 text-xl sm:text-2xl font-light text-[#7F7F7F] tracking-wide">
          {content.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-md bg-[#CC2421] px-8 py-3 text-lg font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
        >
          {content.hero.cta}
        </a>
      </div>
    </section>
  );
}
