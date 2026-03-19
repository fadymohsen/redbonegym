import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Locale, t } from "@/lib/translations";

const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/p/RedBone-Gym-61568916578359" },
  { Icon: Instagram, href: "https://www.instagram.com/redbone.gym/" },
  { Icon: MessageCircle, href: "https://wa.me/201068521676" },
];

const workingHours = [
  { day: { en: "Monday", ar: "الإثنين" }, hours: "8 AM – 2 AM" },
  { day: { en: "Tuesday", ar: "الثلاثاء" }, hours: "8 AM – 2 AM" },
  { day: { en: "Wednesday", ar: "الأربعاء" }, hours: "8 AM – 2 AM" },
  { day: { en: "Thursday", ar: "الخميس" }, hours: "8 AM – 2 AM" },
  { day: { en: "Friday", ar: "الجمعة" }, hours: "2 PM – 2 AM" },
  { day: { en: "Saturday", ar: "السبت" }, hours: "8 AM – 2 AM" },
  { day: { en: "Sunday", ar: "الأحد" }, hours: "8 AM – 2 AM" },
];

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const content = t(locale);

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

          {/* Working Hours */}
          <div>
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">{content.footer.workingHours}</h4>
            <ul className="space-y-1.5">
              {workingHours.map((item) => (
                <li key={item.day.en} className="flex justify-between text-sm gap-4">
                  <span className="text-[#7F7F7F]">{item.day[locale]}</span>
                  <span className="text-[#F6E8D1] font-medium">{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & App Links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">{content.footer.followUs}</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#323232] text-[#7F7F7F] hover:bg-[#CC2421] hover:text-[#F6E8D1] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* App Store Links */}
            <div className="flex flex-col gap-2">
              <a
                href="https://apps.apple.com/eg/app/redbone-gym/id6748324835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#323232]/50 border border-[#323232] px-4 py-2 text-[#F6E8D1] hover:bg-[#323232] transition-colors w-fit"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-xs font-medium">App Store</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.gymmawy.redbone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#323232]/50 border border-[#323232] px-4 py-2 text-[#F6E8D1] hover:bg-[#323232] transition-colors w-fit"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.67c-.4-.2-.68-.6-.68-1.05V1.38c0-.45.28-.85.68-1.05l11.1 11.67L3.18 23.67zm1.44-23L16.1 10.83l-2.6 2.73L4.62.67zM21.54 10.5l-3.66-2.12-2.87 3.01 2.87 3.01 3.66-2.12c.58-.34.58-1.44 0-1.78zM4.62 23.33l8.88-9.16 2.6 2.73L4.62 23.33z" />
                </svg>
                <span className="text-xs font-medium">Google Play</span>
              </a>
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
