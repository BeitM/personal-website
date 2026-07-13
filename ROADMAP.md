# Roadmap

This roadmap reflects only work made explicit by the current repository. Product choices that cannot be inferred are listed as questions rather than commitments.

## Current phase

Content completion and stabilization of the MB/OS portfolio after the July 2026 desktop redesign.

## Immediate priorities

1. Replace the placeholder email, GitHub, and LinkedIn values and destinations with approved public details.
2. Supply exact award names, dates, levels, placements, education details, and missing activity dates. Keep placeholders until the facts are confirmed.
3. Decide whether the advertised resume PDF export should be implemented or the label removed.
4. Confirm the canonical deployment target and update deployment documentation accordingly.
5. Review the two moderate dependency audit findings against a safe supported Next.js release; do not use the suggested forced downgrade.

## Near-term improvements

- Audit `app/globals.css` by interface layer, identify selectors tied to deleted components, and consolidate only with desktop/mobile visual regression coverage.
- Perform keyboard, focus, reduced-motion, responsive-layout, contrast, and external-link checks in supported browsers.
- Decide on a minimal automated test strategy after the intended browser support and highest-risk flows are known.
- Reformat the largest compact JSX route bodies when they next receive functional changes, avoiding a repository-wide formatting diff.

## Later features

These are supported by visible but non-interactive records, but require product approval before implementation:

- Archive-entry detail pages driven by `archiveEntries[*].slug`
- Project-log detail pages or links
- A downloadable resume asset in addition to the HTML personnel record

## Technical debt

- Multiple historical styling layers and likely unused selectors in `app/globals.css`
- No automated test suite or browser regression coverage
- No formatter configuration or format-check command
- Page-specific arrays for awards and experience are separate from the shared data module; keep them local unless reuse or editing workflow justifies consolidation
- Host-derived metadata makes most routes dynamic; confirm whether that tradeoff is required for the chosen host
- npm install-script policy warnings for `sharp` and `unrs-resolver` under npm 11

## Open questions

- What public contact/profile information is approved?
- What are the authoritative missing biography, award, education, and date details?
- Which deployment platform should be documented as canonical?
- Should archive and log summaries be browseable detail content or remain index-only?
- Is a downloadable PDF resume required?
- Which browsers, screen sizes, and accessibility target are in scope?
- Is the current strongly stylized MB/OS interaction final, or should future work prioritize a simpler alternate presentation?
