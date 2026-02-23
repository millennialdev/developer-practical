"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home">
          <div className="bg-white/90 rounded px-2 py-1">
            <Image
              src="/images/logo.png"
              alt="IronPeak Construction Group"
              height={40}
              width={160}
              className="h-10 w-auto"
              priority
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-[15px] font-medium font-body relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full hover:text-brand-red transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button variant="primary" href="#contact" showArrow>
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-brand-black/95 z-40 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-8 transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-xl font-medium py-3 hover:text-brand-red transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button variant="primary" href="#contact" showArrow>
          Get Free Quote
        </Button>
      </div>
    </header>
  );
}
