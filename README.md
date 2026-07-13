# Matt Beitler // Personal System

A public personal archive presented as a fictional desktop operating system. It documents Matt Beitler's robotics, software, AI, computational biology, experience, awards, and work in progress.

The current site is a content-driven portfolio. It has no database, authentication, form backend, analytics, or runtime API integration.

## Main features

- MB/OS desktop navigation with file, folder, and application metaphors
- First-session boot sequence with a replay control and reduced-motion support
- Persistent application-window shell with keyboard navigation
- Project directory and statically generated project detail pages
- Identity, experience, archive, awards, resume, contact, and instructions records
- Legacy route redirects for older public URLs
- Per-page metadata and a custom social preview image

## Technology stack

- [Next.js 15](https://nextjs.org/) App Router
- React 19 and TypeScript in strict mode
- Motion for React for shell and boot-sequence animation
- Tailwind CSS 4's PostCSS pipeline, with the visual system authored in `app/globals.css`
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules
- npm with a committed lockfile

## Prerequisites

- Node.js 20.9 or newer
- npm (included with a supported Node.js installation)

The repository was most recently verified with Node.js 24.18.0 and npm 11.16.0.

## Installation

Install the exact dependency versions recorded in `package-lock.json`:

```bash
npm ci
```

Use `npm install` instead when intentionally changing dependencies so the lockfile is updated.

## Environment setup

No environment variables are read by the current application. No `.env` file is required, and an `.env.example` is intentionally not included.

## Development and verification

```bash
npm run dev        # Start the development server at http://localhost:3000
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm run build      # Create and validate the production build
npm start          # Serve an existing production build
```

There is currently no automated test suite or formatter command. `npm run build` also performs Next.js compilation and type validation, but the dedicated type-check command is useful for a faster focused check.

## Project structure

```text
app/                  App Router pages, root layout, metadata, and global CSS
  builds/[slug]/      Generated project detail route
components/system/    Client-side desktop shell and boot controls
data/                 Typed content records and navigation definitions
public/               Static assets, including the social preview image
.openai/hosting.json  OpenAI Sites project association
```

Recurring project, archive, timeline, skill, and external-link content lives in `data/archive.ts`. Desktop and file-menu destinations live in `data/navigation.ts`. Page-specific records currently remain beside the route that renders them.

See [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) for architecture and implementation status, [ROADMAP.md](ROADMAP.md) for evidence-based follow-up work, and [AGENTS.md](AGENTS.md) for repository working conventions.

## Deployment

The repository contains an OpenAI Sites project association in `.openai/hosting.json`. Earlier documentation also described Vercel deployment, and the application remains compatible with the normal Next.js deployment flow. The intended canonical production host needs to be confirmed before adding host-specific instructions or automation.

## Current limitations

- Email, GitHub, and LinkedIn destinations are placeholders and must be replaced before public promotion.
- Award details, education information, several dates, and distinctions are explicitly incomplete.
- Resume PDF export is labeled but not linked.
- Archive entries and project-related logs are summaries only; they do not have detail routes.
- Automated tests, a formatter command, and browser-level accessibility/regression checks are not configured.
- `app/globals.css` contains several historical style layers and likely unused selectors; cleanup should be measured and visually verified rather than done as a broad rewrite.
- `npm audit` currently reports two moderate PostCSS findings through Next.js. Its proposed forced fix is a breaking downgrade and should not be applied blindly.
