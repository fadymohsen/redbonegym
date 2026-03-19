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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
