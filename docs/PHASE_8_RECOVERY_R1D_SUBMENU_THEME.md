# PHASE 8 RECOVERY R1D SUBMENU THEME REPORT

**LIGHT BACKGROUND ELEMENT:**
`div` with `.react-nav-submenu`

**LIGHT BACKGROUND CLASS:**
`.react-nav-submenu` (overriding inherited styles)

**LIGHT BACKGROUND SOURCE FILE:**
`app/globals.css` (line 149)

**ROOT MENU BACKGROUND:**
`var(--theme-body-bg-color)` (ASP dark green) from `.nav-slider` in `styles/legacy-main.css`

**SUBMENU BACKGROUND BEFORE:**
`var(--theme-color-light, #fff)` (Explicitly set in `app/globals.css`)

**SUBMENU BACKGROUND AFTER:**
`var(--theme-body-bg-color)` (Inherited naturally from `.nav-slider`)

**ROOT / SUBMENU COLOR MATCH:**
YES

**ABOUT US:**
PASS

**SUSTAINABILITY:**
PASS

**MEDIA:**
PASS

**CAREERS:**
PASS

**SUPPLIERS:**
PASS

**OUR FLEET:**
PASS

**CONTACT US:**
PASS

**BACK ROW:**
PASS (Naturally blends into the dark-green navigation surface)

**TEXT CONTRAST:**
PASS (Links correctly inherit white `--theme-link-color: var(--theme-color-tertiary-yiq)`, section titles and arrows inherit ASP accent green `--theme-color-primary`, and dividers are a subtle white border `var(--theme-color-white-30)` from Legacy CSS).

**WHITE HEADER PRESERVED:**
YES (Header remains entirely independent from the offcanvas navigation container).

**SUBMENU INTERACTION REGRESSION:**
NONE (Hit-testing remains accurate).

**HAMBURGER REGRESSION:**
NONE

**CLOSE X REGRESSION:**
NONE

**390PX:**
PASS

**768PX:**
PASS

**DESKTOP REGRESSION:**
NONE (Desktop styling remains isolated above 992px).

**BUILD:**
PASS

**LEGACY MODIFIED:**
NO

**GIT CHECKPOINT:**
CREATED

**COMMIT HASH:**
(Will be provided in standard output)

**RECOVERY STATUS:**
R1 NEEDS MANUAL CONFIRMATION
