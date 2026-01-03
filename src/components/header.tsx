"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menu = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Training", href: "/training" },
  { title: "Calendar", href: "/schedule" },
  { title: "Media", href: "/media" },
  { title: "Shop", href: "/shop" },
  { title: "FAQ", href: "/faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute inset-x-0 top-3 md:top-4 z-50 flex justify-end md:justify-center px-3 md:px-4">
      {/* Mobile Menu Button - Top Right, Smaller */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center gap-1.5 h-10 px-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-md hover:bg-white transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-4 h-4 text-gray-700" />
        ) : (
          <Menu className="w-4 h-4 text-gray-700" />
        )}
        <span className="text-sm text-gray-700 font-medium">Menu</span>
      </button>

      {/* Desktop Menu - Centered */}
      <div className="hidden md:flex h-16 items-center gap-20 px-6 bg-white rounded-full border border-gray-200 shadow-lg">
        <div className="flex items-center gap-1">
          {menu.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:bg-gray-100 rounded-full px-4 py-2 text-lg text-gray-800 transition-colors"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu - Top Right aligned */}
      {isOpen && (
        <div className="absolute top-14 right-3 w-48 md:hidden bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200 shadow-xl overflow-hidden">
          <nav className="py-1">
            {menu.map(({ title, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-gray-800 hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 bg-black/20 md:hidden -z-10 cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
