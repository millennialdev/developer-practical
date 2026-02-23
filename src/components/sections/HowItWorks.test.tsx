import { render, screen } from "@testing-library/react";
import { HowItWorks } from "./HowItWorks";
import { PROCESS_STEPS } from "@/lib/constants";

describe("HowItWorks", () => {
  it("renders the section heading with correct title", () => {
    render(<HowItWorks />);
    expect(screen.getByText("How It Works")).toBeInTheDocument();
  });

  it("renders the OUR PROCESS tag", () => {
    render(<HowItWorks />);
    expect(screen.getByText("OUR PROCESS")).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<HowItWorks />);
    expect(
      screen.getByText(
        "A structured approach to every project — from first meeting to final walkthrough."
      )
    ).toBeInTheDocument();
  });

  it("renders all 4 process steps", () => {
    render(<HowItWorks />);
    for (const step of PROCESS_STEPS) {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
      expect(screen.getByText(step.number)).toBeInTheDocument();
    }
  });

  it("renders step numbers with brand-red color and low opacity", () => {
    render(<HowItWorks />);
    const stepNumber = screen.getByText("01");
    expect(stepNumber.className).toContain("text-brand-red");
    expect(stepNumber.className).toContain("opacity-20");
  });

  it("renders step titles with heading font and brand-black color", () => {
    render(<HowItWorks />);
    const title = screen.getByText("Initial Consultation");
    expect(title.tagName).toBe("H3");
    expect(title.className).toContain("font-heading");
    expect(title.className).toContain("text-brand-black");
  });

  it("uses a 4-column grid on large screens", () => {
    const { container } = render(<HowItWorks />);
    const grid = container.querySelector("[class*='grid']");
    expect(grid?.className).toContain("lg:grid-cols-4");
    expect(grid?.className).toContain("sm:grid-cols-2");
  });

  it("has the section id 'process'", () => {
    const { container } = render(<HowItWorks />);
    const section = container.querySelector("#process");
    expect(section).toBeInTheDocument();
  });

  it("uses light background via SectionWrapper", () => {
    const { container } = render(<HowItWorks />);
    const section = container.querySelector("#process");
    expect(section?.className).toContain("bg-brand-gray-50");
  });
});
