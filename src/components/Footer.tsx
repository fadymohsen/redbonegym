import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Subscriptions", href: "#subscriptions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Activities", href: "#activities" },
];

const socialIcons = [Facebook, Instagram, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="bg-[#0D0E12] border-t border-[#323232] pt-12 pb-6 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Logo */}
          <div>
            <img src="/logo.jpg" alt="RedBone Gym" className="h-12 w-auto" />
            <p className="mt-3 text-sm text-[#7F7F7F] leading-relaxed max-w-xs">
              Science-based fitness programs designed to transform your body and
              mind.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">Quick Links</h4>
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
            <h4 className="mb-4 font-semibold text-[#F6E8D1]">Follow Us</h4>
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
          <span>&copy; 2026 RedBone Gym. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a href="https://veliq.tech" target="_blank" rel="noopener noreferrer" className="text-[#CC2421] hover:text-[#F6E8D1] transition-colors font-semibold">
              VELIQ
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
