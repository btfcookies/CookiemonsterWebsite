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

Not currently deployed. Because this is a Vite app, the built output in `dist/`
must be published — serving the repository root directly will not work. If
deploying to GitHub Pages as a project site, set `base: '/CookiemonsterWebsite/'`
in `vite.config.js` and publish `dist/` via a build workflow.

## History

This repository previously held a static HTML/CSS/JS portfolio (the dark
vCard-style sidebar design). It was replaced by this React rewrite; the old
files and their `design.md` style reference remain in git history at commit
`7eb6858`.
