import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Locale, t } from "@/lib/translations";

const socialIcons = [Facebook, Instagram, Twitter, Youtube];

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

  const quickLinks = [
    { label: content.nav.about, href: "#about" },
    { label: content.nav.gallery, href: "#gallery" },
    { label: content.nav.subscriptions, href: "#subscriptions" },
    { label: content.nav.facilities, href: "#activities" },
    { label: content.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-[#0D0E12] border-t border-[#323232] pt-12 pb-6 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="RedBone Gym" className="h-16 w-auto" />
            <p className="mt-3 text-sm text-[#7F7F7F] leading-relaxed max-w-xs">
              {content.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">{content.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#7F7F7F] hover:text-[#F6E8D1] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">{content.footer.followUs}</h4>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#323232] text-[#7F7F7F] hover:bg-[#CC2421] hover:text-[#F6E8D1] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#323232] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#7F7F7F]">
          <span>&copy; 2026 {content.footer.rights}</span>
          <span>
            {content.footer.poweredBy}{" "}
            <a href="https://www.veliq.co" target="_blank" rel="noopener noreferrer" className="text-[#CC2421] hover:text-[#F6E8D1] transition-colors font-semibold">
              VELIQ
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
