"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <SectionHeading
        tag="FAQ"
        title="Frequently Asked Questions"
        subtitle="Common questions about working with IronPeak Construction Group."
        centered
      />
      <div className="max-w-3xl mx-auto mt-12 divide-y divide-brand-gray-100">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-5 text-left"
            >
              <span className="font-heading font-semibold text-brand-black text-lg pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`text-brand-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-5" : "max-h-0"}`}
            >
              <p className="text-brand-gray-500 text-base leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
