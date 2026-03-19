const galleryItems = [
  { label: "Gym Floor", gradient: "from-[#b51112]/30 to-gray-800" },
  { label: "Weight Area", gradient: "from-gray-800 to-[#b51112]/20" },
  { label: "Cardio Zone", gradient: "from-[#b51112]/20 to-gray-900" },
  { label: "Training Area", gradient: "from-gray-900 to-[#b51112]/30" },
  { label: "Equipment", gradient: "from-[#b51112]/25 to-gray-900" },
  { label: "Locker Room", gradient: "from-gray-800 to-[#b51112]/30" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-950 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Our Facility
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#b51112] rounded" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className="group relative flex h-56 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br transition-transform duration-300 hover:scale-105 cursor-pointer"
              style={{}}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
              />
              <span className="relative z-10 text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
