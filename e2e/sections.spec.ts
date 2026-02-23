import { test, expect } from "@playwright/test";

test.describe("Section rendering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("all major sections render correctly", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });

  test("Hero section contains tagline text", async ({ page }) => {
    const hero = page.locator("#home");
    await expect(hero.getByRole("heading", { level: 1 })).toContainText(
      "Built With Strength And Precision"
    );
  });

  test('Hero section has "Our Services" and "Get Free Quote" CTAs', async ({
    page,
  }) => {
    const hero = page.locator("#home");
    await expect(
      hero.getByRole("link", { name: "Our Services" })
    ).toBeVisible();
    await expect(
      hero.getByRole("link", { name: "Get Free Quote" })
    ).toBeVisible();
  });

  test('About section displays all 3 stats ("10+", "500+", "100%")', async ({
    page,
  }) => {
    const about = page.locator("#about");
    await expect(about.getByText("10+")).toBeVisible();
    await expect(about.getByText("500+")).toBeVisible();
    await expect(about.getByText("100%")).toBeVisible();
  });

  test("About section contains about text content", async ({ page }) => {
    const about = page.locator("#about");
    await expect(about).toContainText(
      "full-service construction company delivering high-quality"
    );
  });

  test("Services section displays exactly 6 service cards with titles", async ({
    page,
  }) => {
    const services = page.locator("#services");
    const cards = services.locator("article");
    await expect(cards).toHaveCount(6);

    const titles = [
      "Residential Construction",
      "Home Remodeling & Renovation",
      "Commercial Build Outs",
      "Design Build Services",
      "Structural & Concrete Work",
      "Project Management & Consulting",
    ];
    for (const title of titles) {
      await expect(services.getByText(title)).toBeVisible();
    }
  });

  test("Footer contains contact info (phone, email, address)", async ({
    page,
  }) => {
    const footer = page.locator("footer");
    await expect(footer.getByText("(408) 555-0198")).toBeVisible();
    await expect(footer.getByText("info@ironpeakcg.com")).toBeVisible();
    await expect(footer.getByText("San Jose, California")).toBeVisible();
  });

  test("Footer has newsletter input field", async ({ page }) => {
    const footer = page.locator("footer");
    const emailInput = footer.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
  });

  test("Footer displays all 4 section headings", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer.getByText("About Company")).toBeVisible();
    await expect(footer.getByText("Industries")).toBeVisible();
    await expect(footer.getByText("Useful Links")).toBeVisible();
    await expect(footer.getByText("Core Services")).toBeVisible();
  });
});
