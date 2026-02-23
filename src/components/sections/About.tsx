"use client";

import Image from "next/image";
import { COMPANY, STATS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <SectionWrapper id="about" background="light">
      <div
        ref={ref}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Left column — Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/about-workers.jpg"
              alt="IronPeak construction team reviewing project plans"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-brand-red rounded-lg -z-10" />
        </div>

        {/* Right column — Content */}
        <div>
          <SectionHeading
            tag="ABOUT IRONPEAK CONSTRUCTION"
            title="Experts In Modern Construction Services & Solutions"
          />
          <p className="text-brand-gray-500 text-base leading-relaxed mt-6">
            {COMPANY.aboutText}
          </p>
          <p className="text-brand-gray-500 text-base leading-relaxed mt-4">
            {COMPANY.aboutText2}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center mt-8 gap-y-4 divide-x divide-brand-gray-300">
            {STATS.map((stat) => (
              <div
                className="px-4 sm:px-6 first:pl-0 last:pr-0"
                key={stat.label}
              >
                <div className="text-brand-black text-2xl sm:text-3xl font-heading font-bold">
                  {stat.value}
                </div>
                <div className="text-brand-gray-500 text-xs sm:text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button href="#services" variant="secondary" showArrow>
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
