import { test, expect } from "@playwright/test";

test.describe("Homepage smoke test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/IronPeak Construction/);
  });

  test("Navbar renders with logo and navigation links", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    const logo = header.getByAltText("IronPeak Construction Group");
    await expect(logo).toBeVisible();

    for (const label of ["Home", "About Us", "Services", "Contact Us"]) {
      await expect(
        header.getByRole("link", { name: label }).first()
      ).toBeAttached();
    }
  });

  test("Hero section renders with background image and CTAs", async ({
    page,
  }) => {
    const hero = page.locator("#home");
    await expect(hero).toBeVisible();

    await expect(
      hero.getByRole("heading", { level: 1 })
    ).toContainText("Built With Strength And Precision");

    await expect(hero.getByRole("link", { name: "Our Services" })).toBeVisible();
    await expect(hero.getByRole("link", { name: "Get Free Quote" })).toBeVisible();

    const bgImage = hero.locator('img[alt="Construction site"]');
    await expect(bgImage).toBeAttached();
  });

  test("About section renders with image, text, and stats", async ({
    page,
  }) => {
    const about = page.locator("#about");
    await expect(about).toBeVisible();

    await expect(
      about.getByRole("heading", { level: 2 })
    ).toContainText("Experts In Modern Construction");

    const aboutImage = about.locator(
      'img[alt="IronPeak construction team reviewing project plans"]'
    );
    await expect(aboutImage).toBeAttached();

    await expect(about.getByText("10+")).toBeVisible();
    await expect(about.getByText("500+")).toBeVisible();
    await expect(about.getByText("100%")).toBeVisible();

    await expect(about.getByRole("link", { name: "Discover More" })).toBeVisible();
  });

  test("Services section renders 6 cards in a grid", async ({ page }) => {
    const services = page.locator("#services");
    await expect(services).toBeVisible();

    await expect(
      services.getByRole("heading", { level: 2 })
    ).toContainText("Our Construction Services");

    const cards = services.locator("article");
    await expect(cards).toHaveCount(6);

    const expectedTitles = [
      "Residential Construction",
      "Home Remodeling & Renovation",
      "Commercial Build Outs",
      "Design Build Services",
      "Structural & Concrete Work",
      "Project Management & Consulting",
    ];
    for (const title of expectedTitles) {
      await expect(services.getByText(title)).toBeVisible();
    }
  });

  test("Footer renders with newsletter, 4 columns, and copyright", async ({
    page,
  }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    const emailInput = footer.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    await expect(footer.getByText("Let's Talk")).toBeVisible();

    await expect(footer.getByText("About Company")).toBeVisible();
    await expect(footer.getByText("Industries")).toBeVisible();
    await expect(footer.getByText("Useful Links")).toBeVisible();
    await expect(footer.getByText("Core Services")).toBeVisible();

    await expect(footer.getByText("(408) 555-0198")).toBeVisible();
    await expect(footer.getByText("info@ironpeakcg.com")).toBeVisible();

    await expect(footer.getByText(/© 2026 IronPeak/)).toBeVisible();
  });
});
