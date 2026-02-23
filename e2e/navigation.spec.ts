import { test, expect } from "@playwright/test";

test.describe("Navigation functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("clicking nav links scrolls to correct sections", async ({ page }) => {
    // Use desktop viewport to ensure desktop nav is visible
    await page.setViewportSize({ width: 1280, height: 720 });

    const navTests = [
      { name: "About Us", sectionId: "about" },
      { name: "Services", sectionId: "services" },
      { name: "Contact Us", sectionId: "contact" },
    ];

    for (const { name, sectionId } of navTests) {
      await page
        .locator("header")
        .getByRole("link", { name })
        .first()
        .click();
      // Wait for the section to be in view
      await expect(page.locator(`#${sectionId}`)).toBeInViewport();
    }
  });

  test("all nav link hrefs start with '#'", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    const navLinks = page.locator("header nav a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await navLinks.nth(i).getAttribute("href");
      expect(href).toBeTruthy();
      expect(href!.startsWith("#")).toBe(true);
    }
  });

  test('"Get Free Quote" button navigates to #contact', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    const quoteButton = page
      .locator("header")
      .getByRole("link", { name: "Get Free Quote" });
    const href = await quoteButton.getAttribute("href");
    expect(href).toBe("#contact");

    await quoteButton.click();
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("mobile menu opens when hamburger is clicked", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const hamburger = page.getByRole("button", { name: "Open menu" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    // After opening, the mobile nav links should be visible
    const mobileNav = page.locator("header div.fixed nav");
    await expect(mobileNav).toBeVisible();

    for (const label of ["Home", "About Us", "Services", "Contact Us"]) {
      await expect(mobileNav.getByRole("link", { name: label })).toBeVisible();
    }
  });

  test("mobile menu closes when close button is clicked", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open menu
    await page.getByRole("button", { name: "Open menu" }).click();
    const mobileNav = page.locator("header div.fixed nav");
    await expect(mobileNav).toBeVisible();

    // Close menu
    await page.getByRole("button", { name: "Close menu" }).click();

    // The menu overlay should become non-interactive (pointer-events-none)
    await expect(page.locator("header div.fixed.pointer-events-none")).toBeAttached();
  });

  test("clicking mobile nav links closes the menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Open menu
    await page.getByRole("button", { name: "Open menu" }).click();
    const mobileOverlay = page.locator("header div.fixed");
    await expect(mobileOverlay.locator("nav")).toBeVisible();

    // Click a nav link
    await mobileOverlay
      .getByRole("link", { name: "About Us" })
      .click();

    // Menu should close (pointer-events-none applied)
    await expect(page.locator("header div.fixed.pointer-events-none")).toBeAttached();
  });
});
