"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "3 Gamal El-Din Dwidar St., off Abbas El-Akkad, Nasr City, Cairo", href: undefined },
  { icon: Mail, label: "Email", value: "ahmedmagedzzz1997@gmail.com", href: "mailto:ahmedmagedzzz1997@gmail.com" },
  { icon: Phone, label: "Phone", value: "+201068521676", href: "tel:+201068521676" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Contact Info.
        </h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#b51112] rounded" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b51112]/10">
                  <item.icon className="h-5 w-5 text-[#b51112]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
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
              placeholder="Your Name"
              className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#b51112] focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#b51112] focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-[#b51112] focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#b51112] py-3 font-semibold text-white hover:bg-[#931010] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
