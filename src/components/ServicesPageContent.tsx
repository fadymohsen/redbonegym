import { Locale, t } from "@/lib/translations";

const PHONE = "201068521676";

export default function ServicesPageContent({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);
  const c = content.servicesPage;
  const isAr = locale === "ar";

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-[#0D0E12] py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CC2421]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#F6E8D1] mb-6">
            {c.heroTitle}
          </h1>
          <p className="text-xl text-[#7F7F7F] max-w-2xl mx-auto">
            {c.heroSubtitle}
          </p>
          <div className="mx-auto mt-8 h-1 w-20 bg-[#CC2421] rounded" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.map((service, i) => {
              const isFree = service.price === "free";
              const whatsappMessage = isAr
                ? `مرحبًا، أريد حجز جلسة ${service.name}${!isFree ? ` بسعر ${service.price} جنيه` : ""}. أرجو تأكيد الموعد.`
                : `Hi, I'd like to book a ${service.name} session${!isFree ? ` (${service.price} EGP)` : ""}. Please confirm my appointment.`;
              const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

              return (
                <div
                  key={i}
                  className="relative rounded-xl bg-[#323232]/50 border border-[#323232] p-6 flex flex-col hover:border-[#CC2421]/50 transition-colors"
                >
                  {/* Price Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#F6E8D1]">
                      {service.name}
                    </h3>
                    <span
                      className={`rounded-full px-4 py-1 text-sm font-bold ${
                        isFree
                          ? "bg-[#25D366]/20 text-[#25D366]"
                          : "bg-[#CC2421]/20 text-[#CC2421]"
                      }`}
                    >
                      {isFree
                        ? c.free
                        : `${service.price} EGP`}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#7F7F7F] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* WhatsApp CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-md bg-[#25D366] py-3 text-sm font-semibold text-white text-center hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {c.bookNow}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0D0E12] py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#F6E8D1] mb-4">
            {c.ctaTitle}
          </h2>
          <p className="text-[#7F7F7F] mb-8 text-lg">
            {c.ctaDesc}
          </p>
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-8 py-3 text-lg font-semibold text-white hover:bg-[#1ebe5d] transition-colors"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
}
