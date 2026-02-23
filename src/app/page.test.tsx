import { render, screen } from "@testing-library/react";
import HomePage from "./page";

// Mock next/image to render a plain <img>
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
  });

  it("renders the Navbar with navigation links", () => {
    render(<HomePage />);
    const navs = screen.getAllByRole("navigation");
    expect(navs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the main content area with hero, about, and services sections", () => {
    const { container } = render(<HomePage />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(container.querySelector("#home")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#services")).toBeInTheDocument();
  });

  it("renders the Footer", () => {
    render(<HomePage />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
