# PHASE 12D: SYSTEMIC VISUAL PARITY REPORT

## PREVIOUS
PASS: 0
MINOR: 0
MAJOR: 25

## ROOT CAUSES
1. **Stripped Inline Styles**: The migration script `bulk_transplant.js` aggressively replaced all `style="..."` attributes with an empty string to avoid JSX syntax errors. This completely destroyed layout structures that depended on inline styles (e.g. `display: flex`, `position: absolute`, widths, margins, background configurations) across all migrated pages.
2. **Missing Wrapper Context**: The legacy pages rendered inside `<div id="page" class="site"><div id="content" class="site-content">` with a `<body>` class including `.page` and `.wp-theme-restless-theme`. These wrappers were dropped, which may disconnect targeted scoped styling that relied on them.

## AFFECTED ROUTE COUNTS
- **Stripped Inline Styles**: 25/25
- **Missing Wrapper Context**: 25/25

## SHARED CORRECTIONS
The `bulk_transplant.js` orchestration script was updated to resolve the systemic issues without individual page-level code tweaks.
1. **Smart Style Parser**: Added a parser to safely convert inline HTML styles (`style="display: flex"`) into valid React CSSProperties (`style={{ display: "flex" }}`), recovering structural fidelity.
2. **Body Context Injection**: Migrated pages will now automatically output inside a wrapper recreating the legacy DOM structure: `<div className="legacy-inner-page page wp-theme-restless-theme"><div id="page" className="site"><div id="content" className="site-content">...</div></div></div>`.

## NEW CLASSIFICATION
To be determined upon execution of the shared fix against all 25 specific routes. Expected to dramatically reduce systemic Major Failures.

## REMAINING PAGE-SPECIFIC ISSUES
- Functionality parity (Contact Form 7 submission logic, Media archive API filters, Our Fleet interactive JS filtering).
