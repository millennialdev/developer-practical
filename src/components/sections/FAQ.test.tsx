import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "./FAQ";
import { FAQ_ITEMS } from "@/lib/constants";

describe("FAQ", () => {
  it("renders the section heading with correct title", () => {
    render(<FAQ />);
    expect(
      screen.getByText("Frequently Asked Questions")
    ).toBeInTheDocument();
  });

  it("renders the FAQ tag", () => {
    render(<FAQ />);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });

  it("renders the subtitle text", () => {
    render(<FAQ />);
    expect(
      screen.getByText(
        "Common questions about working with IronPeak Construction Group."
      )
    ).toBeInTheDocument();
  });

  it("renders all FAQ questions", () => {
    render(<FAQ />);
    for (const item of FAQ_ITEMS) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    }
  });

  it("renders all FAQ answers", () => {
    render(<FAQ />);
    for (const item of FAQ_ITEMS) {
      expect(screen.getByText(item.answer)).toBeInTheDocument();
    }
  });

  it("has the section id 'faq'", () => {
    const { container } = render(<FAQ />);
    const section = container.querySelector("#faq");
    expect(section).toBeInTheDocument();
  });

  it("starts with all items collapsed", () => {
    const { container } = render(<FAQ />);
    const answerPanels = container.querySelectorAll("[class*='max-h-']");
    answerPanels.forEach((panel) => {
      expect(panel.className).toContain("max-h-0");
    });
  });

  it("opens an item when its question is clicked", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0].question);
    fireEvent.click(firstQuestion);

    const answerPanel = screen.getByText(FAQ_ITEMS[0].answer).parentElement;
    expect(answerPanel?.className).toContain("max-h-40");
  });

  it("closes an open item when clicked again", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0].question);

    fireEvent.click(firstQuestion);
    fireEvent.click(firstQuestion);

    const answerPanel = screen.getByText(FAQ_ITEMS[0].answer).parentElement;
    expect(answerPanel?.className).toContain("max-h-0");
  });

  it("only allows one item open at a time", () => {
    render(<FAQ />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0].question);
    const secondQuestion = screen.getByText(FAQ_ITEMS[1].question);

    fireEvent.click(firstQuestion);
    fireEvent.click(secondQuestion);

    const firstPanel = screen.getByText(FAQ_ITEMS[0].answer).parentElement;
    const secondPanel = screen.getByText(FAQ_ITEMS[1].answer).parentElement;
    expect(firstPanel?.className).toContain("max-h-0");
    expect(secondPanel?.className).toContain("max-h-40");
  });

  it("rotates the chevron icon when item is open", () => {
    const { container } = render(<FAQ />);
    const firstQuestion = screen.getByText(FAQ_ITEMS[0].question);
    fireEvent.click(firstQuestion);

    const buttons = container.querySelectorAll("button");
    const firstChevron = buttons[0].querySelector("svg");
    expect(firstChevron?.classList.contains("rotate-180")).toBe(true);
  });

  it("renders questions with heading font and brand-black color", () => {
    render(<FAQ />);
    const question = screen.getByText(FAQ_ITEMS[0].question);
    expect(question.className).toContain("font-heading");
    expect(question.className).toContain("text-brand-black");
  });

  it("uses a max-w-3xl container for the accordion", () => {
    const { container } = render(<FAQ />);
    const accordion = container.querySelector("[class*='max-w-3xl']");
    expect(accordion).toBeInTheDocument();
  });
});
