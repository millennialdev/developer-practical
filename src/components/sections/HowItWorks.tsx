import { PROCESS_STEPS } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <SectionWrapper id="process" background="light">
      <SectionHeading
        tag="OUR PROCESS"
        title="How It Works"
        subtitle="A structured approach to every project — from first meeting to final walkthrough."
        centered
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="text-center lg:text-left">
            <div className="text-brand-red text-5xl font-heading font-extrabold opacity-20">
              {step.number}
            </div>
            <h3 className="font-heading text-xl font-semibold text-brand-black mt-2">
              {step.title}
            </h3>
            <p className="text-brand-gray-500 text-sm leading-relaxed mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
