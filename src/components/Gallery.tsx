import { Locale, t } from "@/lib/translations";

const gradients = [
  "from-[#CC2421]/20 to-[#323232]",
  "from-[#323232] to-[#CC2421]/15",
  "from-[#CC2421]/15 to-[#0D0E12]",
  "from-[#0D0E12] to-[#CC2421]/20",
  "from-[#CC2421]/20 to-[#323232]",
  "from-[#323232] to-[#CC2421]/15",
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i]}`}
              />
              <span className="relative z-10 text-lg font-semibold text-[#F6E8D1]/80 group-hover:text-[#F6E8D1] transition-colors">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
