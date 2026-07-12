# Matt Beitler // Personal System

A fictional public archive terminal for documenting projects, FTC robotics work, research, experiments, history, and work in progress.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS build pipeline with a custom CSS design system
- Motion for React
- Deployable on Vercel

## Run locally

Install [Node.js](https://nodejs.org/) 20.9 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before committing changes, verify the project:

```bash
npm run lint
npm run build
```

## Edit content

Recurring archive content lives in `data/archive.ts`:

- project build records and detail-page sections
- archive logs
- system history
- skill systems
- external links

Directory and command destinations live in `data/navigation.ts`. Update the flagged contact placeholders in `data/archive.ts` before publishing publicly.

## Push to GitHub

If this repository already has a GitHub remote:

```bash
git add .
git commit -m "Build personal portfolio"
git push origin main
```

If it does not, create an empty repository on GitHub and follow its instructions to add the remote before pushing.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and select **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js defaults and select **Deploy**.
5. Future pushes to the production branch will trigger new deployments automatically.

No environment variables are required for the current version.
