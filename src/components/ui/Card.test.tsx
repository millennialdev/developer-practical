import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children content", () => {
    render(<Card><p>Card body</p></Card>);
    expect(screen.getByText("Card body")).toBeInTheDocument();
  });

  it("renders image when provided", () => {
    render(
      <Card image="/images/test.jpg" imageAlt="Test image">
        Content
      </Card>
    );
    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/test.jpg");
  });

  it("does not render image when not provided", () => {
    const { container } = render(<Card>No image</Card>);
    const img = container.querySelector("img");
    expect(img).not.toBeInTheDocument();
  });

  it("applies hover effect by default", () => {
    const { container } = render(<Card>Hoverable</Card>);
    const article = container.querySelector("article");
    expect(article?.className).toContain("hover:shadow-xl");
  });

  it("does not apply hover effect when hoverEffect={false}", () => {
    const { container } = render(
      <Card hoverEffect={false}>Static</Card>
    );
    const article = container.querySelector("article");
    expect(article?.className).not.toContain("hover:shadow-xl");
  });

  it("renders as article element", () => {
    const { container } = render(<Card>Article</Card>);
    const article = container.querySelector("article");
    expect(article).toBeInTheDocument();
  });

  it("has red accent strip (h-1 w-full bg-brand-red)", () => {
    const { container } = render(<Card>Accent</Card>);
    const strip = container.querySelector(".h-1.w-full.bg-brand-red");
    expect(strip).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <Card className="mt-6">Styled</Card>
    );
    const article = container.querySelector("article");
    expect(article?.className).toContain("mt-6");
  });

  it("has h-full and flex flex-col for consistent grid heights", () => {
    const { container } = render(<Card>Flex</Card>);
    const article = container.querySelector("article");
    expect(article?.className).toContain("h-full");
    expect(article?.className).toContain("flex");
    expect(article?.className).toContain("flex-col");
  });

  it("content area uses flex-col grow for consistent card heights", () => {
    const { container } = render(<Card>Growing</Card>);
    const contentDiv = container.querySelector(".p-6");
    expect(contentDiv?.className).toContain("flex");
    expect(contentDiv?.className).toContain("flex-col");
    expect(contentDiv?.className).toContain("grow");
  });
});
