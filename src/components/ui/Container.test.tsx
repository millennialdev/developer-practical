import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children content", () => {
    render(<Container><p>Inner content</p></Container>);
    expect(screen.getByText("Inner content")).toBeInTheDocument();
  });

  it("has max-w-7xl class", () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("max-w-7xl");
  });

  it("has horizontal padding classes (px-6 lg:px-8)", () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("px-6");
    expect(div.className).toContain("lg:px-8");
  });

  it("has horizontal margin auto (mx-auto) for centering", () => {
    const { container } = render(<Container>Content</Container>);
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("mx-auto");
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <Container className="py-4">Content</Container>
    );
    const div = container.firstChild as HTMLElement;
    expect(div.className).toContain("py-4");
  });
});
