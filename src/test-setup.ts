import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => createElement("img", props),
}));

// Mock IntersectionObserver for scroll animation tests
vi.stubGlobal(
  "IntersectionObserver",
  class MockIntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
  }
);
