export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-wider text-white">
          REDBONE <span className="text-[#b51112]">GYM</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl font-light text-gray-300 tracking-wide">
          Science-Based Journey
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-md bg-[#b51112] px-8 py-3 text-lg font-semibold text-white hover:bg-[#931010] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
