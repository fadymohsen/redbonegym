export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#323232]/30 via-[#0D0E12] to-[#323232]/20" />
      <div className="absolute inset-0 bg-[#0D0E12]/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-wider text-[#F6E8D1]">
          REDBONE <span className="text-[#CC2421]">GYM</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-light text-[#7F7F7F] tracking-wide">
          Science-Based Journey
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-md bg-[#CC2421] px-8 py-3 text-lg font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
