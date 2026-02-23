import { render, screen } from "@testing-library/react";
import { About } from "./About";
import { COMPANY, STATS } from "@/lib/constants";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(
      screen.getByText("Experts In Modern Construction Services & Solutions")
    ).toBeInTheDocument();
  });

  it("renders about text from COMPANY.aboutText", () => {
    render(<About />);
    expect(screen.getByText(COMPANY.aboutText)).toBeInTheDocument();
  });

  it("renders all 3 stats with correct values", () => {
    render(<About />);
    for (const stat of STATS) {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    }
  });

  it('renders "Discover More" CTA button linking to #services', () => {
    render(<About />);
    const link = screen.getByText("Discover More").closest("a");
    expect(link).toHaveAttribute("href", "#services");
  });

  it("image uses responsive aspect ratios (4/3 mobile, 4/5 on lg)", () => {
    const { container } = render(<About />);
    const imageWrapper = container.querySelector("[class*='aspect-']");
    expect(imageWrapper?.className).toContain("aspect-[4/3]");
    expect(imageWrapper?.className).toContain("lg:aspect-[4/5]");
  });

  it("decorative red square is hidden on mobile", () => {
    const { container } = render(<About />);
    const decorSquare = container.querySelector(".bg-brand-red.-z-10");
    expect(decorSquare?.className).toContain("hidden");
    expect(decorSquare?.className).toContain("lg:block");
  });

  it("stats row supports flex-wrap for small screens", () => {
    const { container } = render(<About />);
    const statsRow = container.querySelector("[class*='flex-wrap']");
    expect(statsRow).toBeInTheDocument();
    expect(statsRow?.className).toContain("flex-wrap");
  });

  it("stats use responsive text sizes", () => {
    render(<About />);
    const statValue = screen.getByText("10+");
    expect(statValue.className).toContain("text-2xl");
    expect(statValue.className).toContain("sm:text-3xl");
  });

  it("has scroll animation wrapper with transition classes", () => {
    const { container } = render(<About />);
    const animationWrapper = container.querySelector("[class*='transition-all']");
    expect(animationWrapper).toBeInTheDocument();
    expect(animationWrapper?.className).toContain("duration-700");
  });

  it("starts in hidden state before scroll intersection", () => {
    const { container } = render(<About />);
    const animationWrapper = container.querySelector("[class*='transition-all']");
    expect(animationWrapper?.className).toContain("opacity-0");
    expect(animationWrapper?.className).toContain("translate-y-6");
  });
});
