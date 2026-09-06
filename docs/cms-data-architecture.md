# Universal CMS Data Architecture

## Overview
This document outlines the data architecture for the ASP Shipping Universal CMS. The core principle is that **content is editable while design remains locked in React code**. Presentation components are completely agnostic to the data source (local mock vs. Supabase), ensuring a seamless migration path to a fully dynamic backend.

## Data Flow
The architecture enforces a strict unidirectional data flow:
`SERVER ROUTE/PAGE` -> `CMS REPOSITORY` -> `TYPED DATA` -> `PRESENTATION COMPONENT`

Presentation components (like `FaqSection`) receive their data strictly through strongly-typed props and do not fetch data internally.

## Domain Entities
The architecture separates content into two categories:

### 1. Structured Entities
Repeatable business records that will map to specific database tables.
- `Service`, `ServiceFaq`, `FleetCategory`, `FleetVessel`, `NewsCategory`, `NewsArticle`, `Partner`, `Office`, `LeadershipProfile`, `JobPosting`, `GalleryItem`, `GlossaryTerm`, `SiteSettings`

### 2. Page Section Model
Editorial content that maps to a specific layout component. To prevent generic JSON blobs and "one row per sentence" anti-patterns, sections are strictly typed via a registry.
- `SectionContentMap`: Registry mapping keys (e.g., `faq`, `primary_intro`) to their exact expected content shapes (e.g., `FaqSectionContent`).
- `PageSection<K>`: A generic interface that strictly infers the correct content payload type based on the `sectionKey` provided.

## Media Reference
Media assets are abstracted via the `MediaRef` interface (`url`, `alt`, `width?`, `height?`). This abstraction ensures compatibility with both current local `/wp-content/uploads/` paths and future Supabase Storage URLs without coupling the frontend to a specific provider.

## Code-Controlled vs CMS-Controlled Responsibility
- **CMS-Controlled (Content):** Headings, paragraph text, image URLs, alt text, display order, publish status.
- **Code-Controlled (Design):** CSS layouts, grid/flex properties, typography scales, colors, padding/margins, animations, SVG decorations, breakpoints.

## Repository Pattern
The `CmsRepository` interface acts as the boundary layer. All data fetching must occur through this interface. Currently, it is backed by a local mock implementation (`MockCmsRepository`). In a future phase, a Supabase implementation will be injected without modifying the consuming presentation components.
