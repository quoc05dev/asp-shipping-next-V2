# Phase 8G - Mobile Header / Offcanvas Geometry Report

## Overview
Phase 8G addresses the exact geometry, stacking, and scroll containment of the Mobile Header and Offcanvas Menu. This report verifies that the Offcanvas does not visually overlap the Header, that the Header remains fully functional while the menu is open, and that scroll boundaries are tightly contained without nested scroll regression or content clipping.

## Root Cause
The legacy layout relied heavily on `legacy-main.css` rules (`z-index: 1045` for offcanvas, `top: 0`, `height: 100vh`) which caused the offcanvas to render *over* the Header, completely obscuring it. The Bootstrap-based `.offcanvas-body` class inherently assumed full viewport height. The rich mobile submenus populated in Phase 8F introduced extremely tall DOM trees inside absolutely positioned containers (`.react-nav-submenu`), causing them to overflow statically sized wrappers, resulting in nested-scroll clipping.

## Implementation Details

### Geometry
The actual run-time height of the Header is computed dynamically rather than depending strictly on the static `--theme-header-height-rem` CSS variable.
- A React `ResizeObserver` on `Header.tsx` constantly measures the true height of the header element.
- This value is persisted directly into the CSS environment as `--actual-mobile-header-height`.
- `globals.css` applies this variable to `top` and calculates `height: calc(100dvh - var(--actual-mobile-header-height))` for the offcanvas exclusively on mobile (`max-width: 991.98px`).

**Invariant Met:** `offcanvas.top === header.bottom`

### Stacking Rules
The stacking hierarchy was carefully audited to guarantee correct Z-ordering while preserving Desktop parity:
1. `Header`: `z-index: 1050` (Bumped strictly on mobile from base 100).
2. `Offcanvas`: `z-index: 1045` (Native).
3. `Backdrop`: `z-index: 1040` (Native).

By forcing the Header over the Backdrop, the Header remains solid, clear, and cleanly separated. The backdrop geometry itself was completely untouched (remains `top: 0`), preventing visual gaps.

### Scrolling & Height Synchronization
To prevent nested scroll regression or clipped rich content (e.g. About Us statistics):
- `.offcanvas-body` correctly remains the *single* scroll owner.
- A dedicated `ResizeObserver` inside `MobileNav.tsx` dynamically tracks the actual `scrollHeight` of the active sliding panel (`.react-nav-submenu`).
- It applies this height to the wrapper's `minHeight`. This elegantly forces `.offcanvas-body` to grow to accommodate the active absolute submenu without introducing secondary scrolling areas.

### State Integrity
`isOpen` state logic was strictly retained in `MobileNav.tsx`. State synchronization to the Header (for the `.active` solid background style) is achieved cleanly via an `onMenuToggle` callback prop.

### Close X Route Semantics
When clicking the Hamburger/Close X, `closeMenu()` cleanly resets the `navStack` after the CSS transition, sets `isOpen` to false, and restores document body scroll. It does not invoke `router.push("/")`, preserving whatever path the user was previously browsing (e.g. `/careers`).

## Modified Files
- `components/layout/Header.tsx` (Added ResizeObserver & MobileNav prop)
- `components/layout/MobileNav.tsx` (Added sliderHeight calculation via ResizeObserver & onMenuToggle sync)
- `app/globals.css` (Added Phase 8 mobile breakpoint stacking/geometry rules)

## Build Status
`npm run build` completed successfully with 0 errors.
