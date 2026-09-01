# PHASE 8 RECOVERY R1C SUBMENU NAV REPORT

## Diagnostics
- **ABOUT CLICK RECEIVED:** YES (After fixing `pointer-events`)
- **ABOUT HIT TARGET:** `A` (`#menu-item-nav-slider-53`)
- **NAVSTACK BEFORE:** `["root"]`
- **NAVSTACK AFTER:** `["root", "menu-item-nav-slider-53"]`
- **ABOUT PANEL IN DOM:** YES
- **ABOUT PANEL X BEFORE:** `390px` (Off screen to the right)
- **ABOUT PANEL X AFTER:** `0px` (On screen)
- **ROOT PANEL X AFTER:** `-390px` (Off screen to the left)

## Classification
- **BUG CLASSIFICATION:** HIT TEST & DOUBLE TRANSFORM
- **DOUBLE TRANSLATION PRESENT:** YES

## Root Cause
1. **Hit Test Blocked:** Because the `#siteNavOffcanvas` used `.show` instead of the legacy `.offcanvas-open` class, it fell into the `legacy-main.css` rule `.offcanvas:not(.offcanvas-open) { pointer-events: none; }`. This caused all clicks to pass completely through the mobile menu and hit elements beneath it (e.g., `.banner-overlay`). 
2. **Double Translation:** The `.react-nav-submenu` class inside `globals.css` assigned `left: 100%`. However, the legacy `.nav-slider-submenu` class already applied `transform: translateX(100%)`. Together, this pushed the submenu 200% off screen. When the root wrapper translated by `-100%`, the submenu only shifted to `100%` (still entirely off-screen), making it appear invisible.

## Fix
1. Explicitly added `pointerEvents: isOpen ? 'auto' : 'none'` to the inline styles of `#siteNavOffcanvas` in `MobileNav.tsx`. This immediately restored click targetability.
2. Removed the redundant `left: 100%` from `.react-nav-submenu` in `app/globals.css`, letting the legacy CSS `transform` handle the geometry exactly as designed.

## Verification
- **ABOUT US:** PASS
- **SUSTAINABILITY:** PASS
- **MEDIA:** PASS
- **CAREERS:** PASS
- **SUPPLIERS:** PASS
- **OUR FLEET:** PASS
- **CONTACT US:** PASS
- **BACK:** PASS

## Regressions
- **HAMBURGER REGRESSION:** NONE
- **CLOSE X REGRESSION:** NONE
- **BUILD:** PASS
- **LEGACY MODIFIED:** NO
