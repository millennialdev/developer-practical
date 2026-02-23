import { renderHook, act } from "@testing-library/react";
import { useScrollAnimation } from "./useScrollAnimation";

let observerCallback: IntersectionObserverCallback;
let observerOptions: IntersectionObserverInit | undefined;
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();

  vi.stubGlobal(
    "IntersectionObserver",
    class MockIntersectionObserver {
      observe = mockObserve;
      unobserve = mockUnobserve;
      disconnect = mockDisconnect;
      constructor(
        callback: IntersectionObserverCallback,
        options?: IntersectionObserverInit
      ) {
        observerCallback = callback;
        observerOptions = options;
      }
    }
  );
});

describe("useScrollAnimation", () => {
  it("returns isVisible as false initially", () => {
    const { result } = renderHook(() => useScrollAnimation());
    expect(result.current.isVisible).toBe(false);
  });

  it("returns a ref object", () => {
    const { result } = renderHook(() => useScrollAnimation());
    expect(result.current.ref).toBeDefined();
    expect(result.current.ref.current).toBeNull();
  });

  it("creates an IntersectionObserver with default threshold", () => {
    renderHook(() => useScrollAnimation());
    expect(observerOptions).toEqual({ threshold: 0.1 });
  });

  it("creates an IntersectionObserver with custom threshold", () => {
    renderHook(() => useScrollAnimation(0.5));
    expect(observerOptions).toEqual({ threshold: 0.5 });
  });

  it("sets isVisible to true when element is intersecting", () => {
    const { result } = renderHook(() => useScrollAnimation());

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target: document.createElement("div") }] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver
      );
    });

    expect(result.current.isVisible).toBe(true);
  });

  it("does not set isVisible when element is not intersecting", () => {
    const { result } = renderHook(() => useScrollAnimation());

    act(() => {
      observerCallback(
        [{ isIntersecting: false, target: document.createElement("div") }] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver
      );
    });

    expect(result.current.isVisible).toBe(false);
  });

  it("unobserves the element after it becomes visible", () => {
    renderHook(() => useScrollAnimation());
    const target = document.createElement("div");

    act(() => {
      observerCallback(
        [{ isIntersecting: true, target }] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver
      );
    });

    expect(mockUnobserve).toHaveBeenCalledWith(target);
  });

  it("disconnects observer on unmount", () => {
    const { unmount } = renderHook(() => useScrollAnimation());
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
