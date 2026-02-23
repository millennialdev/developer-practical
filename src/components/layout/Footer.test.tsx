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
});
