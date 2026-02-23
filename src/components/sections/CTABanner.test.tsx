import { render, screen } from "@testing-library/react";
import { CTABanner } from "./CTABanner";
import { CTA } from "@/lib/constants";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("CTABanner", () => {
  it("renders the heading from constants", () => {
    render(<CTABanner />);
    expect(screen.getByText(CTA.heading)).toBeInTheDocument();
  });

  it("renders the subtext from constants", () => {
    render(<CTABanner />);
    expect(screen.getByText(CTA.subtext)).toBeInTheDocument();
  });

  it("renders primary CTA button linking to #contact", () => {
    render(<CTABanner />);
    const link = screen.getByText(CTA.primaryLabel).closest("a");
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("renders secondary CTA button with tel: link", () => {
    render(<CTABanner />);
    const link = screen.getByText(CTA.secondaryLabel).closest("a");
    expect(link).toHaveAttribute("href", expect.stringContaining("tel:"));
  });

  it("renders a decorative background image with empty alt", () => {
    render(<CTABanner />);
    const img = screen.getByRole("presentation");
    expect(img).toHaveAttribute("alt", "");
    expect(img).toHaveAttribute("src", CTA.backgroundImage);
  });

  it("has a dark overlay for text contrast", () => {
    const { container } = render(<CTABanner />);
    const overlay = container.querySelector(".bg-brand-black\\/80");
    expect(overlay).toBeInTheDocument();
  });

  it("buttons have minimum 44px touch targets", () => {
    render(<CTABanner />);
    const primaryLink = screen.getByText(CTA.primaryLabel).closest("a");
    const secondaryLink = screen.getByText(CTA.secondaryLabel).closest("a");
    expect(primaryLink?.className).toContain("min-h-[44px]");
    expect(secondaryLink?.className).toContain("min-h-[44px]");
  });
});
