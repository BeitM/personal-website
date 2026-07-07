# Matt Beitler — Personal Portfolio

A living portfolio for documenting projects, FTC robotics work, experiences, awards, technical skills, learning progress, and resume information.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
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

Most recurring content lives in `data/`:

- `data/projects.ts` — project cards
- `data/experiences.ts` — programs, competitions, activities, and research
- `data/awards.ts` — awards and categories
- `data/learning.ts` — learning log entries
- `data/skills.ts` — Home and Resume skill lists
- `data/search.ts` — global search results and keywords

Page-specific narrative content lives in the corresponding route under `app/`. Update contact placeholders in `app/contact/page.tsx` and resume placeholders in `app/resume/page.tsx` before publishing.

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
