export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0D0E12]"
    >
      <img
        src="/hero-cover.jpg"
        alt="RedBone Gym"
        className="w-[90vw] max-w-xl sm:w-[70vw] sm:max-w-2xl lg:w-[45vw] lg:max-w-3xl h-auto object-contain"
      />
    </section>
  );
}
