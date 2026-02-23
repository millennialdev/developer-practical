import { render, screen } from "@testing-library/react";
import { SectionWrapper } from "./SectionWrapper";

describe("SectionWrapper", () => {
  it("renders children content", () => {
    render(<SectionWrapper><p>Hello</p></SectionWrapper>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies section id when provided", () => {
    const { container } = render(
      <SectionWrapper id="about">Content</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "about");
  });

  it("renders with white background by default", () => {
    const { container } = render(
      <SectionWrapper>Default</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section?.className).toContain("bg-white");
  });

  it('renders with light background when background="light"', () => {
    const { container } = render(
      <SectionWrapper background="light">Light</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section?.className).toContain("bg-brand-gray-50");
  });

  it('renders with dark background when background="dark"', () => {
    const { container } = render(
      <SectionWrapper background="dark">Dark</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section?.className).toContain("bg-brand-black");
    expect(section?.className).toContain("text-white");
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <SectionWrapper className="extra-class">Styled</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section?.className).toContain("extra-class");
  });

  it("contains Container component", () => {
    const { container } = render(
      <SectionWrapper>Wrapped</SectionWrapper>
    );
    const containerDiv = container.querySelector(".max-w-7xl");
    expect(containerDiv).toBeInTheDocument();
  });
});
