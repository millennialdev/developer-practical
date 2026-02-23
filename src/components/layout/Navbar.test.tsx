import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "./Navbar";

// Mock next/image to render a plain <img>
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("Navbar", () => {
  it("renders the logo image", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("IronPeak Construction Group");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/logo.png");
  });

  it("renders all 4 nav links with correct hrefs", () => {
    render(<Navbar />);
    const expectedLinks = [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Contact Us", href: "#contact" },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const links = screen.getAllByText(label);
      expect(links.length).toBeGreaterThanOrEqual(1);
      links.forEach((link) => {
        expect(link.closest("a")).toHaveAttribute("href", href);
      });
    });
  });

  it('renders "Get Free Quote" CTA button', () => {
    render(<Navbar />);
    const ctas = screen.getAllByText("Get Free Quote");
    expect(ctas.length).toBeGreaterThanOrEqual(1);
    ctas.forEach((cta) => {
      expect(cta.closest("a")).toHaveAttribute("href", "#contact");
    });
  });

  it("mobile menu opens and closes correctly", () => {
    render(<Navbar />);

    // Menu should be hidden initially (opacity-0)
    const mobileMenu = screen
      .getAllByText("Home")
      .find((el) => el.closest("[class*='fixed top-20']"));
    const menuContainer = mobileMenu?.closest("[class*='fixed top-20']");
    expect(menuContainer?.className).toContain("opacity-0");

    // Open menu
    const openButton = screen.getByLabelText("Open menu");
    fireEvent.click(openButton);

    // Menu should be visible
    expect(menuContainer?.className).toContain("opacity-100");

    // Close menu
    const closeButton = screen.getByLabelText("Close menu");
    fireEvent.click(closeButton);

    // Menu should be hidden again
    expect(menuContainer?.className).toContain("opacity-0");
  });

  it("mobile menu links close the menu when clicked", () => {
    render(<Navbar />);

    // Open menu
    const openButton = screen.getByLabelText("Open menu");
    fireEvent.click(openButton);

    // Find a mobile menu link and click it
    const mobileMenu = screen
      .getAllByText("Home")
      .find((el) => el.closest("[class*='fixed top-20']"));
    const menuContainer = mobileMenu?.closest("[class*='fixed top-20']");

    expect(menuContainer?.className).toContain("opacity-100");

    // Click a nav link inside the mobile menu
    if (mobileMenu) {
      fireEvent.click(mobileMenu);
    }

    // Menu should close
    expect(menuContainer?.className).toContain("opacity-0");
  });

  it("logo has responsive height classes (h-8 mobile, sm:h-10 desktop)", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("IronPeak Construction Group");
    expect(logo.className).toContain("h-8");
    expect(logo.className).toContain("sm:h-10");
  });

  it("hamburger button has minimum 44x44px touch target", () => {
    render(<Navbar />);
    const hamburger = screen.getByLabelText("Open menu");
    expect(hamburger.className).toContain("min-h-[44px]");
    expect(hamburger.className).toContain("min-w-[44px]");
  });

  it("mobile nav links have minimum 44px touch target height", () => {
    render(<Navbar />);
    const mobileLink = screen
      .getAllByText("Home")
      .find((el) => el.closest("[class*='fixed top-20']"));
    expect(mobileLink?.className).toContain("min-h-[44px]");
  });

  it("mobile CTA button closes menu when clicked", () => {
    render(<Navbar />);

    const openButton = screen.getByLabelText("Open menu");
    fireEvent.click(openButton);

    const menuContainer = screen
      .getAllByText("Home")
      .find((el) => el.closest("[class*='fixed top-20']"))
      ?.closest("[class*='fixed top-20']");
    expect(menuContainer?.className).toContain("opacity-100");

    // Click the mobile CTA
    const mobileCtas = screen.getAllByText("Get Free Quote");
    const mobileCta = mobileCtas.find((el) =>
      el.closest("[class*='fixed top-20']")
    );
    if (mobileCta) {
      fireEvent.click(mobileCta);
    }

    expect(menuContainer?.className).toContain("opacity-0");
  });
});
