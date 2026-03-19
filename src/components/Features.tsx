import { Dumbbell, Brain, Heart } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Science-Based Journey",
    description:
      "Every piece of information and every movement in your Redbone Gym workouts is based on accurate science. We rely on the latest studies in nutrition and training to help you achieve your goals effectively and safely.",
  },
  {
    icon: Brain,
    title: "Anatomy",
    description:
      "Every movement in your body has a reason, and every exercise has a purpose. At Redbone Gym, we focus on anatomy so that you understand how your muscles and joints work — helping you train smarter and avoid injury.",
  },
  {
    icon: Heart,
    title: "Connection",
    description:
      "We connect your body, your mind, and your goals. We believe that strength isn't measured by muscles alone — it's built through consistency, awareness, and the right support system around you.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-[#323232]/50 border border-[#323232] p-8 text-center hover:border-[#CC2421]/50 transition-colors"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#CC2421]/10">
                <feature.icon className="h-8 w-8 text-[#CC2421]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#F6E8D1]">
                {feature.title}
              </h3>
              <p className="text-[#7F7F7F] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
