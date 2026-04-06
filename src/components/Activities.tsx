import { ArrowRight } from "lucide-react";
import { Locale, t } from "@/lib/translations";

const PHONE = "201068521676";

export default function Activities({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);
  const isAr = locale === "ar";
  const servicesHref = isAr ? "/ar/services" : "/services";

  return (
    <section id="services" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
          {content.activities.title}
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.activities.items.map((item, i) => {
            const isFree = item.price === "free";
            const whatsappMessage = isAr
              ? `مرحبًا، أريد حجز جلسة ${item.name}. أرجو تأكيد الموعد.`
              : `Hi, I'd like to book a ${item.name} session. Please confirm my appointment.`;
            const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <div
                key={i}
                className="rounded-xl bg-[#323232]/50 border border-[#323232] p-6 flex flex-col hover:border-[#CC2421]/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#F6E8D1]">
                    {item.name}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-0.5 text-sm font-bold ${
                      isFree
                        ? "bg-[#25D366]/20 text-[#25D366]"
                        : "bg-[#CC2421]/20 text-[#CC2421]"
                    }`}
                  >
                    {isFree ? item.freeLabel : `${item.price} EGP`}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full rounded-md bg-[#CC2421] py-2.5 text-sm font-semibold text-[#F6E8D1] text-center hover:bg-[#a01d1a] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {isAr ? "احجز" : "Book"}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={servicesHref}
            className="inline-flex items-center gap-2 rounded-md bg-[#CC2421] px-8 py-3 text-lg font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
          >
            {content.activities.viewAll}
            <ArrowRight className={`h-5 w-5 ${isAr ? "rotate-180" : ""}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
