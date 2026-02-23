import { test, expect } from "@playwright/test";

test.describe("Mobile-specific tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");
  });

  test("hamburger menu button is visible on mobile", async ({ page }) => {
    const hamburger = page.getByRole("button", { name: "Open menu" });
    await expect(hamburger).toBeVisible();
  });

  test("desktop nav links are hidden on mobile", async ({ page }) => {
    // Desktop nav uses the lg:flex class — target it specifically
    const desktopNav = page.locator("header nav.hidden");
    await expect(desktopNav).toBeHidden();
  });

  test("mobile menu opens and displays all nav links", async ({ page }) => {
    await page.getByRole("button", { name: "Open menu" }).click();

    const mobileNav = page.locator("header div.fixed nav");
    await expect(mobileNav).toBeVisible();

    for (const label of ["Home", "About Us", "Services", "Contact Us"]) {
      await expect(mobileNav.getByRole("link", { name: label })).toBeVisible();
    }
  });

  test("mobile menu closes correctly", async ({ page }) => {
    // Open
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.locator("header div.fixed nav")).toBeVisible();

    // Close
    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(page.locator("header div.fixed.pointer-events-none")).toBeAttached();
  });

  test("no horizontal overflow on mobile viewport", async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth);
  });
});
