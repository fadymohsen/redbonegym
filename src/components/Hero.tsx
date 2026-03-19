export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0D0E12]"
    >
      {/* Desktop: full-screen background image */}
      <img
        src="/hero-cover.jpg"
        alt="RedBone Gym"
        className="hidden lg:block absolute inset-0 w-full h-full object-contain"
      />

      {/* Mobile/Tablet: centered image with tight spacing */}
      <img
        src="/hero-cover.jpg"
        alt="RedBone Gym"
        className="lg:hidden w-[88vw] sm:w-[75vw] h-auto object-contain -mb-12"
      />
    </section>
  );
}
