import { Dumbbell, Brain, Heart } from "lucide-react";
import { Locale, t } from "@/lib/translations";

const icons = [Dumbbell, Brain, Heart];

export default function Features({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  return (
    <section className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={feature.title}
                className="rounded-xl bg-[#323232]/50 border border-[#323232] p-8 text-center hover:border-[#CC2421]/50 transition-colors"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#CC2421]/10">
                  <Icon className="h-8 w-8 text-[#CC2421]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#F6E8D1]">
                  {feature.title}
                </h3>
                <p className="text-[#7F7F7F] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
