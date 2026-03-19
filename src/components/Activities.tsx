import { Locale, t } from "@/lib/translations";

const gradients = [
  "from-[#CC2421]/20 to-[#323232]",
  "from-[#323232] to-[#CC2421]/15",
  "from-[#CC2421]/15 to-[#323232]",
];

export default function Activities({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  return (
    <section id="activities" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
          {content.activities.title}
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.activities.items.map((item, i) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl bg-[#323232]/50 border border-[#323232] hover:border-[#CC2421]/50 transition-colors"
            >
              <div
                className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradients[i]}`}
              >
                <span className="text-lg font-semibold text-[#F6E8D1]/70">
                  {item.title}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#F6E8D1]">
                  {item.title}
                </h3>
                <p className="text-[#7F7F7F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
