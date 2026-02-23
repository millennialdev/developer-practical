import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";
import { COMPANY } from "@/lib/constants";

// Mock next/image to render a plain <img>
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("Hero", () => {
  it("renders the hero tagline from COMPANY.tagline", () => {
    render(<Hero />);
    expect(screen.getByText(COMPANY.tagline)).toBeInTheDocument();
  });

  it('renders "Our Services" CTA button with href="#services"', () => {
    render(<Hero />);
    const link = screen.getByText("Our Services").closest("a");
    expect(link).toHaveAttribute("href", "#services");
  });

  it('renders "Get Free Quote" CTA button with href="#contact"', () => {
    render(<Hero />);
    const link = screen.getByText("Get Free Quote").closest("a");
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("renders the background image", () => {
    render(<Hero />);
    const img = screen.getByAltText("Construction site");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/hero-bg.jpg");
  });

  it("uses responsive min-height (80vh mobile, screen on sm+)", () => {
    const { container } = render(<Hero />);
    const section = container.querySelector("section#home");
    expect(section?.className).toContain("min-h-[80vh]");
    expect(section?.className).toContain("sm:min-h-screen");
  });

  it("heading uses responsive text sizes (text-3xl base, sm:text-4xl)", () => {
    render(<Hero />);
    const heading = screen.getByText(COMPANY.tagline);
    expect(heading.className).toContain("text-3xl");
    expect(heading.className).toContain("sm:text-4xl");
  });

  it("buttons are full-width on mobile and auto on sm+", () => {
    render(<Hero />);
    const servicesBtn = screen.getByText("Our Services").closest("a");
    const quoteBtn = screen.getByText("Get Free Quote").closest("a");
    expect(servicesBtn?.className).toContain("w-full");
    expect(servicesBtn?.className).toContain("sm:w-auto");
    expect(quoteBtn?.className).toContain("w-full");
    expect(quoteBtn?.className).toContain("sm:w-auto");
  });
});
