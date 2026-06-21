# g1park.dev

> Personal tech blog on building **production AI agents** — the real problems I run into, and how I solve them.

[![Live](https://img.shields.io/badge/live-g1park.dev-2337ff)](https://g1park.dev)
[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)

Built and run by **[Jiwon Park (박지원)](https://github.com/PG1tHub)** — AI Engineer building customer-support AI agents end-to-end (LangGraph · RAG · Text-to-SQL · multi-agent).

🔗 **Live:** https://g1park.dev · **About:** https://g1park.dev/about

---

## Stack

| | |
|---|---|
| **Framework** | [Astro](https://astro.build) (static site generation) |
| **Content** | Markdown / MDX |
| **Styling** | Tailwind CSS · [Shiki](https://shiki.style) syntax highlighting |
| **Hosting** | Cloudflare Workers (Static Assets) — auto-deploy on `git push` |
| **Language** | TypeScript |

## Quick start

```bash
npm install      # Node 20+ (see .nvmrc → 22)
npm run dev      # local dev server → http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

## Writing a post

```bash
# 1. create a file
src/content/blog/2026-my-post.md   # copy from _template.md

# 2. fill frontmatter (title, description, pubDate, tags, draft)
# 3. flip draft: false when ready
# 4. publish
git push         # → live at g1park.dev in ~1–2 min
```

Drafts (`draft: true`) are excluded from the production build and only visible in `npm run dev`.

## Project structure

```text
src/
├── content/blog/      # posts (.md / .mdx)
├── components/        # BaseHead, SocialLinks, Header, Footer …
├── layouts/           # BlogPost layout
├── pages/             # index, about, blog/, rss.xml
├── content.config.ts  # blog frontmatter schema
└── styles/global.css
public/                # favicon, og.png, robots.txt
```

## Deployment

Push to `main` → Cloudflare Workers Build runs `npm run build`, then `npx wrangler deploy`
serves `dist/` as static assets (config in [`wrangler.jsonc`](./wrangler.jsonc)).

## Docs

Full architecture, infra, and runbook → [**`CLAUDE.md`**](./CLAUDE.md)

---

<sub>© Jiwon Park · Built with [Astro](https://astro.build)</sub>
