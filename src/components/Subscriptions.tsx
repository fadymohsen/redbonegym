import { Phone } from "lucide-react";

const plans = [
  {
    name: "1 Year",
    price: "3,900.00",
    days: 365,
    sessions: 0,
    featured: true,
    badge: "Best Value",
  },
  {
    name: "6 Months",
    price: "2,500.00",
    days: 180,
    sessions: 0,
    featured: false,
    badge: null,
  },
  {
    name: "3 Months",
    price: "1,600.00",
    days: 90,
    sessions: 0,
    featured: false,
    badge: null,
  },
  {
    name: "1 Month",
    price: "700.00",
    days: 30,
    sessions: 0,
    featured: false,
    badge: null,
  },
];

export default function Subscriptions() {
  return (
    <section id="subscriptions" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
          Subscriptions
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 ${
                plan.featured
                  ? "bg-[#323232]/50 border-2 border-[#CC2421] ring-1 ring-[#CC2421]/30 lg:scale-105"
                  : "bg-[#323232]/50 border border-[#323232]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#CC2421] px-4 py-1 text-xs font-bold text-[#F6E8D1] uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <h3 className="mt-4 text-2xl font-bold text-[#F6E8D1]">{plan.name}</h3>

              <div className="mt-6 w-full space-y-3 text-sm text-[#7F7F7F]">
                <div className="flex justify-between border-b border-[#323232] pb-2">
                  <span>Training period</span>
                  <span className="text-[#F6E8D1] font-medium">{plan.days} days</span>
                </div>
                <div className="flex justify-between border-b border-[#323232] pb-2">
                  <span>Sessions</span>
                  <span className="text-[#F6E8D1] font-medium">{plan.sessions}</span>
                </div>
              </div>

              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#CC2421]">
                  {plan.price}
                </span>
                <span className="ml-1 text-[#7F7F7F] text-sm">E.P</span>
              </div>

              <a
                href="#contact"
                className={`mt-auto w-full rounded-md py-2.5 text-sm font-semibold text-center transition-colors ${
                  plan.featured
                    ? "bg-[#CC2421] text-[#F6E8D1] hover:bg-[#a01d1a]"
                    : "bg-[#323232] text-[#F6E8D1] hover:bg-[#7F7F7F]/30"
                }`}
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-xl text-[#7F7F7F] mb-6">
            Ask about the latest offers and join now!
          </p>
          <a
            href="tel:+201068521676"
            className="inline-flex items-center gap-2 rounded-md bg-[#CC2421] px-8 py-3 text-lg font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
          >
            <Phone className="h-5 w-5" />
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
