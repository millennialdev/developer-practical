import { Container } from "./Container";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "light" | "dark";
}

export function SectionWrapper({
  children,
  id,
  className = "",
  background = "white",
}: SectionWrapperProps) {
  const bgMap = {
    white: "bg-white",
    light: "bg-brand-gray-50",
    dark: "bg-brand-black text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${bgMap[background]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
