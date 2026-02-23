# IronPeak Construction Group — Project Instructions

## Overview
Single-page marketing website for IronPeak Construction Group, a Bay Area construction company.
Built with Next.js 15 (App Router), TypeScript, Tailwind CSS.

## Brand
- **Colors:** Red #C41E2A, Black #1A1A1A, White, Grays (#F8F8F8, #6B6B6B, #4A4A4A)
- **Fonts:** Outfit (headings, sharp geometric), Inter (body, clean professional)
- **Feel:** Classic but modern, professional, sharp edges — NOT rounded/bubbly
- **Logo:** public/images/logo.png (red roofs + hammer icon + bold text)

## Architecture — Reusable Components
Every section uses `SectionWrapper` for consistent layout. All text comes from `constants.ts`.
```
src/components/ui/       → Atomic primitives (Button, Container, SectionWrapper, SectionHeading, Card)
src/components/layout/   → Page structure (Navbar, Footer)
src/components/sections/ → Content sections (Hero, About, Services, etc.)
src/lib/constants.ts     → ALL static content data
src/lib/types.ts         → Shared TypeScript interfaces
```

## Design Reference
- **Like:** metropolitan-interiors.vercel.app — clean service cards, simple nav, generous whitespace, subtle hover shadows
- **Avoid:** lundconst.com — cluttered, carousel-heavy, inconsistent spacing, nested dropdowns

## Conventions
- Check `constants.ts` before hardcoding ANY text
- Use `SectionWrapper` for every new section
- Use `Card` component for any card-based layouts
- Use `SectionHeading` for section titles
- All images via `next/image` from `public/images/`
