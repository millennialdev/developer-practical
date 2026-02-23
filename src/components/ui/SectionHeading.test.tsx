import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders title in h2 element", () => {
    render(<SectionHeading title="Our Services" />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Our Services");
  });

  it("renders optional tag when provided", () => {
    render(<SectionHeading title="Title" tag="About Us" />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("renders optional subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="A subtitle here" />);
    expect(screen.getByText("A subtitle here")).toBeInTheDocument();
  });

  it("centers text when centered={true}", () => {
    const { container } = render(
      <SectionHeading title="Centered" centered />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("text-center");
  });

  it("applies light mode styles when light={true}", () => {
    render(<SectionHeading title="Light Title" light />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.className).toContain("text-white");
  });

  it("applies custom className correctly", () => {
    const { container } = render(
      <SectionHeading title="Styled" className="mb-8" />
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("mb-8");
  });
});
