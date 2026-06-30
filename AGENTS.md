# AGENTS.md

## Commands

- `pnpm dev` — dev server (Turbopack)
- `pnpm build` — production build (includes type-checking)
- `pnpm lint` — ESLint via `next/core-web-vitals`
- `pnpm typecheck` — standalone `tsc --noEmit`
- No test or format scripts exist

## Architecture

- **Next.js 16** App Router, **pnpm**, **Tailwind CSS 3.4**, **shadcn/ui** (New York, RSC)
- Single site — not a monorepo (`pnpm-workspace.yaml` only contains `"."`)
- Path alias `@/*` → `./src/*`

### Engagement (comments, likes, views)

- Comments via **giscus** (GitHub Discussions) — embed in `src/components/blog/blog-comments.tsx`. Requires filling in `data-repo-id` and `data-category-id` from [giscus.app](https://giscus.app) after enabling Discussions on the repo.
- View counter via **Upstash Redis** — API route at `src/app/api/blog/[slug]/route.ts`. Requires env vars `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (see `.env.example`).
- View deduplicated via `sessionStorage` (once per tab session).

### Content

- Blog posts are `.mdx` files in `content/`, read at request time (no pre-compilation)
- Frontmatter: `title`, `publishedAt`, `summary`, optional `image`
- MDX rendering pipeline in `src/data/blog.ts`: unified → remark-parse → remark-rehype → rehype-pretty-code → rehype-slug → rehype-autolink-headings → rehype-external-links → rehype-sanitize → rehype-stringify → `dangerouslySetInnerHTML`
- `src/components/mdx.tsx` exports `globalComponents` but they are **not wired into** the blog render pipeline (which uses pre-rendered HTML)
- All personal/professional data lives in the `DATA` const in `src/data/resume.tsx`

## Gotchas

- `package.json` name is `"porfolio"` (typo — missing second `t`)
- No test infrastructure exists; adding tests requires a framework from scratch
- Remote images allowed: `res.cloudinary.com`, `images.unsplash.com`, `sladenfeinstein.com`
- Adding shadcn/ui components: `npx shadcn@latest add <component>`
- No CI workflows in-repo; Vercel auto-deploys from Git
