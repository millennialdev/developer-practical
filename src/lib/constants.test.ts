import {
  SERVICES,
  NAV_LINKS,
  PROCESS_STEPS,
  FAQ_ITEMS,
  STATS,
  COMPANY,
  FOOTER_SECTIONS,
} from "./constants";

describe("SERVICES", () => {
  it("has exactly 6 items", () => {
    expect(SERVICES).toHaveLength(6);
  });

  it("each service has required fields: title, description, icon, image", () => {
    for (const service of SERVICES) {
      expect(service).toHaveProperty("title");
      expect(service).toHaveProperty("description");
      expect(service).toHaveProperty("icon");
      expect(service).toHaveProperty("image");
      expect(typeof service.title).toBe("string");
      expect(typeof service.description).toBe("string");
      expect(typeof service.icon).toBe("string");
      expect(typeof service.image).toBe("string");
    }
  });
});

describe("NAV_LINKS", () => {
  it("has exactly 4 items", () => {
    expect(NAV_LINKS).toHaveLength(4);
  });

  it("each nav link has label and href starting with '#'", () => {
    for (const link of NAV_LINKS) {
      expect(typeof link.label).toBe("string");
      expect(link.href).toMatch(/^#/);
    }
  });
});

describe("PROCESS_STEPS", () => {
  it("has exactly 4 items", () => {
    expect(PROCESS_STEPS).toHaveLength(4);
  });

  it("each process step has number, title, description", () => {
    for (const step of PROCESS_STEPS) {
      expect(step).toHaveProperty("number");
      expect(step).toHaveProperty("title");
      expect(step).toHaveProperty("description");
      expect(typeof step.number).toBe("string");
      expect(typeof step.title).toBe("string");
      expect(typeof step.description).toBe("string");
    }
  });
});

describe("FAQ_ITEMS", () => {
  it("has exactly 6 items", () => {
    expect(FAQ_ITEMS).toHaveLength(6);
  });

  it("each FAQ item has question and answer", () => {
    for (const item of FAQ_ITEMS) {
      expect(item).toHaveProperty("question");
      expect(item).toHaveProperty("answer");
      expect(typeof item.question).toBe("string");
      expect(typeof item.answer).toBe("string");
    }
  });
});

describe("STATS", () => {
  it("has exactly 3 items", () => {
    expect(STATS).toHaveLength(3);
  });

  it("each stat has value and label", () => {
    for (const stat of STATS) {
      expect(stat).toHaveProperty("value");
      expect(stat).toHaveProperty("label");
      expect(typeof stat.value).toBe("string");
      expect(typeof stat.label).toBe("string");
    }
  });
});

describe("COMPANY", () => {
  it("has all required fields", () => {
    const requiredFields = [
      "name",
      "tagline",
      "phone",
      "email",
      "address",
      "founded",
      "serviceArea",
      "heroSubtext",
      "aboutText",
      "aboutText2",
    ] as const;

    for (const field of requiredFields) {
      expect(COMPANY).toHaveProperty(field);
      expect(typeof COMPANY[field]).toBe("string");
    }
  });
});

describe("FOOTER_SECTIONS", () => {
  it("has all 4 subsections (about, industries, usefulLinks, coreServices)", () => {
    expect(FOOTER_SECTIONS).toHaveProperty("about");
    expect(FOOTER_SECTIONS).toHaveProperty("industries");
    expect(FOOTER_SECTIONS).toHaveProperty("usefulLinks");
    expect(FOOTER_SECTIONS).toHaveProperty("coreServices");
  });
});
