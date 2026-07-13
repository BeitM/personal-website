# AGENTS.md

## Purpose

This is Matt Beitler's content-driven personal portfolio, presented as a fictional MB/OS public desktop. Preserve the desktop/archive interaction model and do not invent biographical details to replace marked content gaps.

## Important locations

- `app/`: App Router pages, `layout.tsx`, metadata, and `globals.css`
- `components/system/`: client-only shell, boot sequence, and desktop controls
- `data/archive.ts`: shared project, archive, timeline, skill, and external-link records
- `data/navigation.ts`: canonical desktop/file-menu routes
- `public/og.png`: social preview image
- `PROJECT_CONTEXT.md`: architecture, flows, status, and known issues
- `ROADMAP.md`: evidence-based follow-up work and open product questions

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

There is no formatter command or automated test suite. Run lint and type-check for code changes; run the production build for routing, metadata, dependency, or deployment changes.

## Conventions and boundaries

- Use strict TypeScript, two-space indentation, semicolons, and double-quoted imports/strings.
- Components use PascalCase; routes and slugs use kebab-case; imports use the `@/` alias.
- Keep shared content in `data/archive.ts` and navigation destinations in `data/navigation.ts`. Keep one-off page records local unless reuse justifies extraction.
- Pages are server components by default. Add `"use client"` only for browser state, effects, or event APIs.
- Keep persistent shell behavior in `ArchiveShell`; route pages should focus on record content.
- Treat `app/globals.css` as layered legacy code. Inspect all matching selectors and visually verify desktop/mobile states before consolidating or removing rules.
- Preserve legacy redirect routes unless a deliberate URL migration is approved.

## Safe-change rules

- Inspect the route, its shared data, shell behavior, and relevant CSS before editing.
- Do not replace placeholder biography with guesses or activate placeholder external links.
- Do not add dependencies, environment variables, or services without a demonstrated requirement.
- Do not publish or change the hosting target without explicit authorization.
- Keep generated directories (`.next`, `node_modules`) and secrets out of Git.
- After changes, run the checks relevant to the touched surface and report any unavailable checks or failures honestly.

Known limitations are summarized in `README.md` and detailed in `PROJECT_CONTEXT.md`.
