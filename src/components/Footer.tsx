import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Subscriptions", href: "#subscriptions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [Facebook, Instagram, Twitter, Youtube];

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-12 pb-6 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Logo */}
          <div>
            <span className="text-2xl font-extrabold tracking-wider text-red-600">
              REDBONE GYM
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Science-based fitness programs designed to transform your body and
              mind.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-red-600 hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>&copy; 2026 RedBone Gym. All rights reserved.</span>
          <span>
            Designed and developed by{" "}
            <a href="https://gymmawy.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors">
              Gymmawy
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
