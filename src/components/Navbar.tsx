"use client";

import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Subscriptions", href: "#subscriptions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:block bg-gray-950 border-b border-gray-800 text-xs text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+201068521676" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3 w-3" />
              +201068521676
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              ٣ شارع جمال الدين دويدار متفرع من عباس العقاد مدينة نصر
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="text-2xl font-extrabold tracking-wider text-red-600">
              REDBONE GYM
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gray-950 border-t border-gray-800">
            <div className="flex flex-col gap-1 px-4 py-4">
              <div className="flex flex-col gap-2 mb-3 px-3 text-xs text-gray-400">
                <a href="tel:+201068521676" className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3" /> +201068521676
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> ٣ شارع جمال الدين دويدار متفرع من عباس العقاد مدينة نصر
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-md bg-red-600 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
