import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("Footer", () => {
  it("renders contact info (phone, email, address)", () => {
    render(<Footer />);
    expect(screen.getByText("(408) 555-0198")).toBeInTheDocument();
    expect(screen.getByText("info@ironpeakcg.com")).toBeInTheDocument();
    expect(screen.getByText("San Jose, California")).toBeInTheDocument();
  });

  it("renders newsletter email input", () => {
    render(<Footer />);
    expect(
      screen.getByPlaceholderText("Your email address...")
    ).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        /© 2026 IronPeak Construction Group\. All rights reserved\./
      )
    ).toBeInTheDocument();
  });

  it("renders all 4 footer section headings", () => {
    render(<Footer />);
    expect(screen.getByText("About Company")).toBeInTheDocument();
    expect(screen.getByText("Industries")).toBeInTheDocument();
    expect(screen.getByText("Useful Links")).toBeInTheDocument();
    expect(screen.getByText("Core Services")).toBeInTheDocument();
  });

  it("grid uses sm:grid-cols-2 for tablet breakpoint", () => {
    const { container } = render(<Footer />);
    const grid = container.querySelector("[class*='grid-cols-1']");
    expect(grid?.className).toContain("sm:grid-cols-2");
    expect(grid?.className).toContain("lg:grid-cols-4");
  });

  it("copyright text is centered on mobile", () => {
    render(<Footer />);
    const copyright = screen.getByText(
      /© 2026 IronPeak Construction Group/
    );
    expect(copyright.className).toContain("text-center");
    expect(copyright.className).toContain("md:text-left");
  });

  it("social icons have minimum 44x44px touch targets", () => {
    render(<Footer />);
    const fbLink = screen.getByLabelText("Facebook");
    expect(fbLink.className).toContain("min-h-[44px]");
    expect(fbLink.className).toContain("min-w-[44px]");
  });

  it("social icons container is centered on mobile and right-aligned on md+", () => {
    render(<Footer />);
    const fbLink = screen.getByLabelText("Facebook");
    const socialContainer = fbLink.parentElement;
    expect(socialContainer?.className).toContain("justify-center");
    expect(socialContainer?.className).toContain("md:justify-end");
  });

  it("contact links have minimum 44px touch target height", () => {
    render(<Footer />);
    const phoneLink = screen.getByText("(408) 555-0198").closest("a");
    expect(phoneLink?.className).toContain("min-h-[44px]");
  });
});
