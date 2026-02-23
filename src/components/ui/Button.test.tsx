import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as <a> element when href prop is provided", () => {
    render(<Button href="/test">Link</Button>);
    const el = screen.getByRole("link", { name: "Link" });
    expect(el.tagName).toBe("A");
    expect(el).toHaveAttribute("href", "/test");
  });

  it("renders as <button> element when href prop is not provided", () => {
    render(<Button>Click</Button>);
    const el = screen.getByRole("button", { name: "Click" });
    expect(el.tagName).toBe("BUTTON");
  });

  it("applies primary variant styles by default", () => {
    render(<Button>Primary</Button>);
    const el = screen.getByRole("button", { name: "Primary" });
    expect(el.className).toContain("bg-brand-red");
    expect(el.className).toContain("text-white");
  });

  it('applies secondary variant styles when variant="secondary"', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const el = screen.getByRole("button", { name: "Secondary" });
    expect(el.className).toContain("border-brand-red");
    expect(el.className).toContain("text-brand-red");
  });

  it("shows ArrowUpRight icon when showArrow={true}", () => {
    const { container } = render(<Button showArrow>Arrow</Button>);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("does not show arrow icon when showArrow is omitted", () => {
    const { container } = render(<Button>No Arrow</Button>);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeInTheDocument();
  });

  it("calls onClick handler when clicked (button variant)", () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click Me</Button>);
    fireEvent.click(screen.getByRole("button", { name: "Click Me" }));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("navigates to href when clicked (link variant)", () => {
    render(<Button href="#contact">Contact</Button>);
    const link = screen.getByRole("link", { name: "Contact" });
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("applies custom className correctly", () => {
    render(<Button className="mt-4">Custom</Button>);
    const el = screen.getByRole("button", { name: "Custom" });
    expect(el.className).toContain("mt-4");
  });

  it("has focus ring styles", () => {
    render(<Button>Focus</Button>);
    const el = screen.getByRole("button", { name: "Focus" });
    expect(el.className).toContain("focus:ring-2");
    expect(el.className).toContain("focus:ring-brand-red");
  });
});
