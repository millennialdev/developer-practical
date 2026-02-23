import { test, expect } from "@playwright/test";

test.describe("Responsive layout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("services grid: 1 column on mobile, 2 on tablet, 3 on desktop", async ({
    page,
  }) => {
    const grid = page.locator("#services .grid");

    // Mobile — 1 column
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileCols = await grid.evaluate((el) =>
      getComputedStyle(el).getPropertyValue("grid-template-columns")
    );
    const mobileColCount = mobileCols.split(" ").length;
    expect(mobileColCount).toBe(1);

    // Tablet — 2 columns
    await page.setViewportSize({ width: 768, height: 1024 });
    const tabletCols = await grid.evaluate((el) =>
      getComputedStyle(el).getPropertyValue("grid-template-columns")
    );
    const tabletColCount = tabletCols.split(" ").length;
    expect(tabletColCount).toBe(2);

    // Desktop — 3 columns
    await page.setViewportSize({ width: 1280, height: 720 });
    const desktopCols = await grid.evaluate((el) =>
      getComputedStyle(el).getPropertyValue("grid-template-columns")
    );
    const desktopColCount = desktopCols.split(" ").length;
    expect(desktopColCount).toBe(3);
  });

  test("about section stacks vertically on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const aboutGrid = page.locator("#about .grid");
    const cols = await aboutGrid.evaluate((el) =>
      getComputedStyle(el).getPropertyValue("grid-template-columns")
    );
    const colCount = cols.split(" ").length;
    expect(colCount).toBe(1);
  });

  test("footer columns stack on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const footerGrid = page.locator("footer .grid");
    const cols = await footerGrid.evaluate((el) =>
      getComputedStyle(el).getPropertyValue("grid-template-columns")
    );
    const colCount = cols.split(" ").length;
    expect(colCount).toBe(1);
  });

  test("hero buttons stack vertically on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const heroButtons = page.locator("#home").locator("a.inline-flex");
    const count = await heroButtons.count();
    expect(count).toBeGreaterThanOrEqual(2);

    const firstBox = await heroButtons.nth(0).boundingBox();
    const secondBox = await heroButtons.nth(1).boundingBox();

    expect(firstBox).not.toBeNull();
    expect(secondBox).not.toBeNull();

    // Stacked means the second button is below the first (not side by side)
    expect(secondBox!.y).toBeGreaterThan(firstBox!.y);
  });

  test("logo scales appropriately across breakpoints", async ({ page }) => {
    const logo = page
      .locator("header")
      .getByAltText("IronPeak Construction Group");

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileBox = await logo.boundingBox();
    expect(mobileBox).not.toBeNull();

    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    const desktopBox = await logo.boundingBox();
    expect(desktopBox).not.toBeNull();

    // Logo should be visible and reasonably sized on both
    expect(mobileBox!.width).toBeGreaterThan(0);
    expect(desktopBox!.width).toBeGreaterThan(0);
  });
});
