# Cookiemonster Portfolio

Personal portfolio site — a React single-page app built with Vite.

## Stack

- React 19 (React Compiler enabled via `babel-plugin-react-compiler`)
- Vite 8
- React Router for page routing
- Oxlint for linting

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Structure

```
index.html          entry document
src/main.jsx        app bootstrap + router
src/App.jsx         layout and routes
src/pages/          Home, Work, Blog, Contact, Timeline, ProjectCard
src/assets/         bundled images (imported from components)
public/             static files served at the site root
```

## Deployment

Deployed on **Vercel** at https://www.lawrencetong.dev (apex `lawrencetong.dev`
308-redirects to `www`). Vercel builds `npm run build` and publishes `dist/`.

`vercel.json` holds the SPA fallback: this app uses `BrowserRouter`, so any deep
link (`/work`, `/blog`, ...) has no file behind it and must be rewritten to
`/index.html` or the host returns its own 404. Vercel applies `rewrites` only
after the filesystem check, so real files under `/assets/` and `public/` still
serve normally.

`netlify.toml` is left over from an earlier Netlify plan and is **not** what
serves this site — Vercel ignores it. If you ever move hosts, that file already
carries the equivalent redirect rule.

## History

This repository previously held a static HTML/CSS/JS portfolio (the dark
vCard-style sidebar design). It was replaced by this React rewrite; the old
files and their `design.md` style reference remain in git history at commit
`7eb6858`.
