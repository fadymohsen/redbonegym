import { Locale, t } from "@/lib/translations";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
  "/gallery-8.jpg",
  "/gallery-9.jpg",
];

export default function Gallery({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  return (
    <section id="gallery" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
          {content.gallery.title}
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.gallery.items.map((label, i) => (
            <div
              key={label}
              className="group relative flex h-56 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={images[i]}
                alt={label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <span className="relative z-10 text-lg font-semibold text-[#F6E8D1] drop-shadow-lg">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
