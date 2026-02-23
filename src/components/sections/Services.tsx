import { SERVICES } from "@/lib/constants";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Home,
  Hammer,
  Building2,
  PenTool,
  Boxes,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Home,
  Hammer,
  Building2,
  PenTool,
  Boxes,
  ClipboardList,
};

export function Services() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        tag="WHAT WE OFFER"
        title="Our Construction Services"
        subtitle="From residential builds to commercial projects, IronPeak delivers comprehensive construction solutions backed by a decade of Bay Area experience."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
        {SERVICES.map((service) => {
          const IconComponent = iconMap[service.icon];
          return (
            <Card
              key={service.title}
              image={service.image}
              imageAlt={service.title}
            >
              {IconComponent ? (
                <IconComponent size={28} className="text-brand-red" />
              ) : null}
              <h3 className="font-heading text-xl font-semibold text-brand-black mt-3">
                {service.title}
              </h3>
              <p className="text-brand-gray-500 text-[15px] leading-relaxed mt-2 grow">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-brand-red font-medium text-sm mt-4 min-h-[44px] hover:gap-3 transition-all duration-300"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
