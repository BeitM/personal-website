# Project context

## Purpose and audience

The project is Matt Beitler's public personal portfolio, framed as a fictional read-only desktop/archive named MB/OS. It presents student work across FTC robotics, software, AI, computational biology, competitions, and research.

The copy explicitly invites project, academic, research, and collaborative opportunities. That supports an audience of potential collaborators, academic programs, teams, and people reviewing Matt's work. No stronger audience conclusion is encoded in the repository.

## Architecture

The application uses the Next.js App Router with a single root layout:

1. `app/layout.tsx` loads fonts and global CSS, derives the metadata base from request headers, and wraps every route in `ArchiveShell`.
2. `ArchiveShell` is a client component responsible for the persistent menu bar, file launcher, application-window chrome, clock, Escape/back behavior, and boot overlay.
3. Route pages are server components unless they need a browser interaction. They render typed local records and links; they do not fetch remote data.
4. `data/archive.ts` supplies projects, archive entries, timeline events, skill groups, and external links. `data/navigation.ts` supplies the file menu.
5. `app/builds/[slug]/page.tsx` uses `generateStaticParams` to build the four known project records and calls `notFound()` for unknown slugs.

The root metadata function reads request headers so it can create absolute Open Graph URLs for the active host. As a consequence, most routes are server-rendered on demand in the current production build; the generated project slugs remain statically enumerated.

## Main entry points and routes

| Path | Purpose |
| --- | --- |
| `/` | Desktop home and entry point to all primary records |
| `/identity` | About/identity record and capability overview |
| `/builds` | Project directory |
| `/builds/[slug]` | Generated project record for one item in `projects` |
| `/experience` | Experience records and shared timeline |
| `/archive` | Notes and experiment summaries |
| `/awards` | Recognition database, currently containing incomplete fields |
| `/personnel-record` | HTML resume/personnel record |
| `/uplink` | External contact/profile destinations |
| `/instructions` | User guide for the MB/OS interaction model |

Compatibility routes permanently redirect as follows: `/projects` to `/builds`, `/resume` to `/personnel-record`, `/robotics` to `/builds/robolab-ftc`, `/learning` to `/archive`, and `/contact` to `/uplink`.

## Important directories and files

- `app/`: route components, route metadata, the root layout, and all site styling.
- `components/system/`: the shared client-side interface. `ArchiveShell` owns global navigation; `BootSequence` owns session-scoped startup behavior; the two button components dispatch custom events to those systems.
- `data/`: typed content and navigation configuration. This is the closest thing to a data layer.
- `public/`: static public assets. `og.png` is a 1792 x 934 social preview image referenced by root metadata.
- `.openai/hosting.json`: associates the repository with an OpenAI Sites project. It contains an identifier, not a runtime secret.

## Major user flows

- On the first page load in a browser session, `BootSequence` stores `mb-desktop-booted-v2` in `sessionStorage`, runs a staged introduction, and waits for the user to enter. Reduced-motion users receive the ready state without timed animation.
- The desktop exposes seven primary files plus replay and instructions controls. Selecting a file navigates to its route inside the persistent application-window shell.
- The `FILES` menu provides the canonical navigation list from `data/navigation.ts` on every route.
- Escape closes the file menu first; otherwise, from a record route it returns to the desktop. Application windows also expose close, browser-back, and desktop controls.
- The system disk button opens the file menu through the `mb:open-files` custom event. The replay file triggers `mb:replay-boot`.
- Project files navigate from the directory to a generated detail page, then cycle to the next project. Unknown project slugs return 404.
- Uplink records open direct links. HTTP links open a new tab; internal and email links remain in the current browsing context.

## External services and integrations

- No database, CMS, authentication provider, API, analytics service, form handler, or email service is used.
- Three Google font families are integrated through `next/font/google` and compiled by Next.js.
- Motion for React provides animation primitives and reduced-motion detection.
- External email, GitHub, and LinkedIn links exist, but all three are intentionally marked as placeholders.
- `.openai/hosting.json` indicates an OpenAI Sites project association. The earlier README described Vercel deployment. The canonical host is not established by repository evidence alone.

## Environment variables

No `process.env` or `NEXT_PUBLIC_*` usage exists in source code. No environment variables are required by the current implementation.

## Current implementation status

### Working and verified

- Dependency installation from the npm lockfile
- ESLint and strict TypeScript checks
- Optimized Next.js production build
- All primary routes return HTTP 200
- Unknown project slugs return HTTP 404
- All five compatibility routes return permanent HTTP 308 redirects to their intended destinations
- Four project pages are generated from typed shared data
- Root and page-specific document titles render as intended

### Incomplete by explicit repository markers

- Email, GitHub, and LinkedIn values and destinations
- Award names, dates, event levels, placements, and recognition levels
- Education school and graduation year
- Some activity, tennis, and German exchange dates/distinctions
- Resume PDF export
- Archive entry detail content and routes
- Project log detail content and routes

### Technical debt and risks

- `app/globals.css` is approximately 86 KB and contains base portfolio styles plus several later design layers (`ANALOG CRT`, `DESKTOP OS`, `MACHINE PRESENCE`, final scale/readability overrides). Git history shows components such as the old command palette were removed without a matching CSS cleanup. Static analysis therefore reports many likely unused class rules and many repeated selectors. The cascade is intentional in places, so cleanup needs visual regression checks.
- There is no automated test suite, formatter command, component catalog, or browser regression harness.
- Most JSX is intentionally compact, but several route files contain large single-line trees that are harder to review and merge.
- `npm audit` reports two moderate PostCSS findings through the installed Next.js dependency tree. The offered forced fix would install a breaking, obsolete Next.js version and is not appropriate without upstream/version analysis.
- npm 11 warns that install scripts for `sharp` and `unrs-resolver` are not covered by its `allowScripts` configuration. The production build still succeeds in the verified environment.
- The application relies on JavaScript for its shell controls and boot overlay. Browser-level keyboard, focus, reduced-motion, responsive-layout, and contrast verification has not been recorded.

## Relevant technical decisions visible in history

- The repository began as a conventional portfolio skeleton and was redesigned into the desktop/archive interface on July 12, 2026.
- The command palette was removed in the next revision in favor of visible files and an instructions page. CSS associated with the removed palette remains.
- Legacy public route names were retained as permanent redirects during the redesign.
- Content was consolidated from multiple older `data/*.ts` modules into `data/archive.ts`; navigation remains separate in `data/navigation.ts`.
- The custom Open Graph image and host-derived metadata were added with the desktop redesign.

## Areas requiring clarification

- Which host is canonical for production: OpenAI Sites, Vercel, or another target?
- What exact public email and profile URLs should replace the uplink placeholders?
- What are the final award, education, experience, activity, and date details?
- Should the resume link to a downloadable PDF, remain HTML-only, or both?
- Should archive entries and related project logs become navigable detail records?
- Which browsers, device sizes, and accessibility standard should define visual verification?
