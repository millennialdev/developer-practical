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
});
