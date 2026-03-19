export default function About() {
  return (
    <section id="about" className="bg-black py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Placeholder image */}
          <div className="flex h-80 lg:h-[28rem] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#b51112]/30 to-gray-900">
            <span className="text-lg font-semibold text-white/70">
              Captain Maged
            </span>
            <span className="mt-2 text-sm font-bold tracking-widest uppercase text-[#b51112]">
              Owner
            </span>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#b51112] mb-3">
              Owner
            </h3>
            <h2 className="text-4xl font-bold text-white mb-6">
              Captain Maged
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              My gym journey began early, and it was the spark that sparked a
              passion that continues to this day. Over the years, I have gained
              deep experience in fitness training and nutrition science, and I
              have dedicated myself to helping others achieve their goals through
              science-based programs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              At RedBone Gym, we believe fitness is not just about lifting
              weights — it&apos;s about building a lifestyle. Every program is
              designed with anatomy, biomechanics, and your individual goals in
              mind. Our approach combines cutting-edge training methodologies
              with personalized nutrition plans to deliver real, lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
