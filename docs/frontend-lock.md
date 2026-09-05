# FRONTEND LOCK PURPOSE

This document establishes the formal checkpoint locking the approved ASP Shipping frontend structure, presentation, and visual geometry before beginning backend CMS migration (Supabase/Database integration).

# LOCKED AREAS

- Home Page
- What We Do Hub & 5 detail pages
- About Us (all routes)
- Our Fleet (all routes)
- Sustainability (all routes)
- Media (all routes)
- Careers
- Contact Us
- Global Header & Footer
- Mega Menu & Mobile Navigation

# PROTECTED VISUAL RULES

- Site container widths
- Section spacing and dividers
- Typography hierarchy
- Button styling
- Card geometry and hover states
- Image geometry (e.g. How We Work image aspect ratio must remain natural and avoid compression)
- Desktop/Mobile Header behavior
- Detail-page two-column structures
- FAQ interactions and spacing
- Related Services layout
- Crew role cards

# CURRENT PUBLIC ROUTE GROUPS

- /
- /what-we-do (and sub-routes)
- /about-us (and sub-routes)
- /our-fleet (and sub-routes)
- /sustainability (and sub-routes)
- /media (and sub-routes)
- /careers
- /contact-us

# CURRENT CMS DATA FLOW

The application currently uses a strict boundary pattern:
Server Component -> CMS Repository -> Typed Models -> Props -> Presentation Component

No presentation component directly fetches business data from the repository layer. The current repository (data/cms/repository.ts) provides full mock data for all What We Do service content.

# WHAT FUTURE BACKEND TASKS MAY CHANGE

- Backend data sources (Supabase/PostgreSQL).
- Server Actions for form submissions.
- Authentication/Admin CMS implementation.
- Content values returned by the cmsRepository.

# WHAT FUTURE BACKEND TASKS MUST NOT CHANGE

- React/JSX layout geometry and structures.
- ClassNames, padding, margins, or responsive grid breakpoints.
- Typography styles and aesthetic design rules.
- Data fetching logic leaking into Client Components.

# KNOWN CONTENT ISSUES

- Placeholder BWEK/Kosan content remains in sections that haven't been migrated yet (e.g., Home Page, About, Fleet), pending future CMS data population.

# LOCK DATE

2026-09-06

Frontend visual structure is locked.
Business content remains CMS-migratable/editable.
