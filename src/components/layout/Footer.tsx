import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { COMPANY, FOOTER_SECTIONS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-black text-white">
      {/* Newsletter Strip */}
      <Container className="py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/images/logo.png"
            alt="IronPeak"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address..."
              className="bg-gray-900 border border-gray-700 rounded-l-md px-4 py-3 text-sm text-white placeholder-gray-500 w-full md:w-64 focus:outline-none focus:border-brand-red transition-colors"
            />
            <button className="bg-brand-red text-white px-6 py-3 font-semibold text-sm rounded-r-md hover:bg-brand-red-dark transition-colors whitespace-nowrap">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </Container>

      {/* Main Content */}
      <div className="border-t border-gray-800">
        <Container className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1 — About Company */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">
                {FOOTER_SECTIONS.about.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {FOOTER_SECTIONS.about.text}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-gray-400 text-sm min-h-[44px] hover:text-brand-red transition-colors"
                >
                  <Phone size={16} />
                  {COMPANY.phone}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-gray-400 text-sm min-h-[44px] hover:text-brand-red transition-colors"
                >
                  <Mail size={16} />
                  {COMPANY.email}
                </a>
                <span className="flex items-center gap-2 text-gray-400 text-sm min-h-[44px]">
                  <MapPin size={16} />
                  {COMPANY.address}
                </span>
              </div>
            </div>

            {/* Column 2 — Industries */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">
                {FOOTER_SECTIONS.industries.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_SECTIONS.industries.links.map((link) => (
                  <li key={link}>
                    <span className="text-gray-400 text-sm hover:text-brand-red transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Useful Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">
                {FOOTER_SECTIONS.usefulLinks.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_SECTIONS.usefulLinks.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-brand-red transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Core Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold mb-6">
                {FOOTER_SECTIONS.coreServices.title}
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_SECTIONS.coreServices.links.map((link) => (
                  <li key={link}>
                    <span className="text-gray-400 text-sm hover:text-brand-red transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 py-6">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 IronPeak Construction Group. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end gap-2">
            <a
              href="#"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-500 hover:text-brand-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-500 hover:text-brand-red transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-500 hover:text-brand-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-500 hover:text-brand-red transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
