import { Locale, t } from "@/lib/translations";

export default function About({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  return (
    <section id="about" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Owner image */}
          <div className="h-80 lg:h-[28rem] overflow-hidden rounded-xl">
            <img
              src="/owner.jpg"
              alt={content.about.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#CC2421] mb-3">
              {content.about.role}
            </h3>
            <h2 className="text-4xl font-bold text-[#F6E8D1] mb-6">
              {content.about.name}
            </h2>
            <p className="text-[#7F7F7F] leading-relaxed mb-4">
              {content.about.bio1}
            </p>
            <p className="text-[#7F7F7F] leading-relaxed">
              {content.about.bio2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
