import { render, screen } from "@testing-library/react";
import { Services } from "./Services";
import { SERVICES } from "@/lib/constants";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("Services", () => {
  it("renders the section heading", () => {
    render(<Services />);
    expect(
      screen.getByText("Our Construction Services")
    ).toBeInTheDocument();
  });

  it("renders exactly 6 service cards", () => {
    render(<Services />);
    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(6);
  });

  it("renders each service title from SERVICES array", () => {
    render(<Services />);
    for (const service of SERVICES) {
      expect(screen.getByText(service.title)).toBeInTheDocument();
    }
  });

  it('renders a "Learn More" link with href="#contact" for each card', () => {
    render(<Services />);
    const links = screen.getAllByText("Learn More");
    expect(links).toHaveLength(6);
    for (const link of links) {
      expect(link.closest("a")).toHaveAttribute("href", "#contact");
    }
  });

  it("grid uses responsive gap (gap-6 mobile, md:gap-8 desktop)", () => {
    const { container } = render(<Services />);
    const grid = container.querySelector("[class*='grid-cols-1']");
    expect(grid?.className).toContain("gap-6");
    expect(grid?.className).toContain("md:gap-8");
  });

  it("Learn More links have minimum 44px touch target", () => {
    render(<Services />);
    const links = screen.getAllByText("Learn More");
    for (const link of links) {
      expect(link.closest("a")?.className).toContain("min-h-[44px]");
    }
  });
});
