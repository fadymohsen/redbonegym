"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Locale, t } from "@/lib/translations";

export default function Contact({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  const contactInfo = [
    { icon: MapPin, label: content.contact.address, value: content.contact.addressValue, href: "https://maps.app.goo.gl/cAp9JP1HD69kTX4q8?g_st=ic" },
    { icon: Mail, label: content.contact.email, value: "ahmedmagedzzz1997@gmail.com", href: "mailto:ahmedmagedzzz1997@gmail.com" },
    { icon: Phone, label: content.contact.phone, value: "+201068521676", href: "tel:+201068521676" },
    { icon: MessageCircle, label: "WhatsApp", value: "+201068521676", href: "https://wa.me/201068521676" },
  ];

  return (
    <section id="contact" className="bg-[#0D0E12] py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-[#F6E8D1] mb-4">
          {content.contact.title}
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#CC2421] rounded" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#CC2421]/10">
                  <item.icon className="h-5 w-5 text-[#CC2421]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#F6E8D1]">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#7F7F7F]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder={content.contact.namePlaceholder}
              className="rounded-lg border border-[#323232] bg-[#323232]/50 px-4 py-3 text-[#F6E8D1] placeholder-[#7F7F7F] focus:border-[#CC2421] focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder={content.contact.emailPlaceholder}
              className="rounded-lg border border-[#323232] bg-[#323232]/50 px-4 py-3 text-[#F6E8D1] placeholder-[#7F7F7F] focus:border-[#CC2421] focus:outline-none transition-colors"
            />
            <textarea
              placeholder={content.contact.messagePlaceholder}
              rows={5}
              className="rounded-lg border border-[#323232] bg-[#323232]/50 px-4 py-3 text-[#F6E8D1] placeholder-[#7F7F7F] focus:border-[#CC2421] focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#CC2421] py-3 font-semibold text-[#F6E8D1] hover:bg-[#a01d1a] transition-colors"
            >
              {content.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
