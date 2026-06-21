# Cookiemonster Portfolio — Style Reference

> **vCard Sidebar SPA.** A dark, gold-accented personal portfolio built on a fixed-sidebar + main-content architecture, with gradient-bordered cards floating over a smoky-black canvas. Adapted from the reference UI at [aakashrajbanshi.com.np](https://aakashrajbanshi.com.np/) (itself a build of the well-known "vCard Personal Portfolio" design system).

**Theme:** dark (only)

The aesthetic is confident and "premium dark": deep near-black backgrounds, surfaces lifted by subtle onyx-to-transparent gradient borders, and a single warm **vegas-gold** accent used sparingly for emphasis, active states, and the text gradient on headings. Poppins carries everything with a clean fluid type scale. Depth comes from layered soft shadows and the signature `border-gradient` + `bg-gradient` card treatment — never from heavy outlines.

---

## Layout Architecture

The page is a **single-page app**. Two columns on desktop:

```
┌──────────────┬─────────────────────────────────────────┐
│              │                    About  Resume  Portf… │  ← top pill navbar (in main card)
│   SIDEBAR    │  ─────────────────────────────────────  │
│  (fixed)     │                                          │
│  avatar      │   <article data-page="about">  …         │
│  name        │   <article data-page="resume" hidden> …  │
│  title pill  │   <article data-page="portfolio" hidden> │
│  contacts ▾  │   …only the active page is visible…       │
│  socials     │                                          │
└──────────────┴─────────────────────────────────────────┘
```

- **Sidebar** is a gradient-bordered card, fixed-width (~340px) on desktop, sticky. On mobile it collapses to just the avatar + name + a chevron button that expands the contacts/socials.
- **Main content** is a gradient-bordered card holding the **navbar** (top-right pill links) and all `[data-page]` articles. Clicking a `[data-nav-link]` shows the matching `[data-page]` and marks it active; all others get `hidden`.
- Content max-width container is centered with generous padding; the two cards sit side by side within it.
- **Avatar lightbox** (faithful touch from the reference): clicking the avatar opens an enlarged overlay.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Smoky Black | `hsl(0, 0%, 7%)` | `--smoky-black` | Page background (the canvas everything floats on). |
| Eerie Black 1 | `hsl(240, 2%, 13%)` | `--eerie-black-1` | Card body fills, image placeholders. |
| Eerie Black 2 | `hsl(240, 2%, 12%)` | `--eerie-black-2` | Sidebar / main-content card base. |
| Onyx | `hsl(240, 1%, 17%)` | `--onyx` | Inner surfaces, contact/skill item backgrounds. |
| Jet | `hsl(0, 0%, 22%)` | `--jet` | Borders, separators, avatar ring, progress-bar track. |
| Vegas Gold | `hsl(45, 100%, 72%)` | `--orange-yellow-crayola` | **Primary accent.** Active links, labels, icons, emphasis. |
| Gold Glow | `hsl(35, 100%, 68%)` | `--gold-2` | Second stop of the gold gradient (headings, hovers). |
| White | `hsl(0, 0%, 100%)` | `--white-1` | High-emphasis headings. |
| White 2 | `hsl(0, 0%, 98%)` | `--white-2` | Default heading / strong text. |
| Light Gray | `hsl(0, 0%, 84%)` | `--light-gray` | Body copy. |
| Light Gray 70 | `hsla(0, 0%, 84%, .7)` | `--light-gray-70` | Muted / secondary text. |
| Bittersweet | `hsl(0, 43%, 51%)` | `--bittersweet-shimmer` | Rare error/alert accent only. |

### Gradients

| Token | Value | Role |
|-------|-------|------|
| `--bg-gradient-onyx` | `linear-gradient(to bottom right, hsl(240,1%,25%) 3%, hsl(0,0%,19%) 97%)` | Sidebar/main card base wash. |
| `--bg-gradient-jet` | `linear-gradient(to bottom right, hsla(240,1%,18%,.251) 0%, hsla(240,2%,11%,0) 100%), hsl(240,2%,13%)` | Inner card fill (services, projects, posts). |
| `--border-gradient-onyx` | `linear-gradient(to bottom right, hsl(0,0%,25%) 0%, hsla(0,0%,25%,0) 50%)` | **Signature gradient border** — applied as the element background, with the real fill inset 1px on top. |
| `--text-gradient-yellow` | `linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%))` | Gold heading text (via `background-clip: text`). |

**The signature card pattern:** an element gets `background: var(--border-gradient-onyx)` and a `::before` (or inset child) with `inset: 1px; background: var(--bg-gradient-jet)`. This produces a hairline gradient edge that catches light at the top-left and fades out — the core texture of the whole system. Hover lifts with `transform: translateY(-3px)` + a heavier shadow; the gold border becomes more visible.

---

## Tokens — Typography

**Family:** `--ff-poppins: "Poppins", sans-serif` for everything. `Courier New, monospace` for rare code/mono accents.
**Weights:** 300 (light body), 400 (regular), 500 (medium — most headings/labels), 600 (semibold — big headings), 700 (occasional).

### Type Scale

| Token | Size | Typical use |
|-------|------|-------------|
| `--fs-1` | 24px (→32px ≥ lg) | Page titles ("About Me", "Resume"). |
| `--fs-2` | 18px (→24px) | Section subheads, project/post titles on hover. |
| `--fs-3` | 17px (→26px) | Article H2s. |
| `--fs-4` | 16px (→18px) | Card titles, nav links. |
| `--fs-5` | 15px | Service item titles. |
| `--fs-6` | 14px (→16px) | Body copy, descriptions. |
| `--fs-7` | 13px (→15px) | Meta text, secondary descriptions. |
| `--fs-8` | 11px (→15px) | Micro-labels, project category, contact titles. |

Body copy is `--fs-6` weight 300, color `--light-gray-70`, line-height ~1.6. Headings are `--white-2`, weight 500–600. Eyebrow labels and active states use `--orange-yellow-crayola`.

---

## Tokens — Spacing, Shape, Motion

**Density:** comfortable. Cards use 15–30px internal padding; sections separated by ~24–36px.

### Border Radius

| Element | Value |
|---------|-------|
| Sidebar / main content card | 20px |
| Standard cards (service, project, post, contact) | 14px |
| Inputs, small buttons, icon boxes | 8–12px |
| Avatar | 50% (or 18px rounded square in lightbox) |
| Pills (title, filter, toggle) | 8px / 50px |

### Shadows

| Token | Value |
|-------|-------|
| `--shadow-1` | `-4px 8px 24px hsla(0,0%,0%,.25)` |
| `--shadow-2` | `0 16px 30px hsla(0,0%,0%,.25)` |
| `--shadow-3` | `0 16px 40px hsla(0,0%,0%,.25)` |
| `--shadow-4` | `0 25px 50px hsla(0,0%,0%,.15)` |
| `--shadow-5` | `0 24px 80px hsla(0,0%,0%,.25)` |

### Motion

| Token | Value | Use |
|-------|-------|-----|
| `--transition-1` | `.25s ease` | Hover color/background/transform. |
| `--transition-2` | `.5s ease-in-out` | Page-switch fades, skill-bar fills, image zoom. |

Page transitions fade + rise (`opacity 0→1`, `translateY(10px→0)`). Skill bars animate their fill width on first reveal. Project images scale ~1.07 on card hover.

---

## Components

### Sidebar — Identity Block
Gradient-bordered card. Avatar (80px, rounded, jet ring, clickable → lightbox), name in `--fs-3` white-2, and a **title pill** (`--onyx` bg, `--fs-8`, e.g. "Full Stack Developer & Designer"). A separator (`1px var(--jet)`) divides identity from contacts.

### Sidebar — Contacts List
Each row = an **icon box** (gold-tinted `--onyx` rounded square holding an ionicon) + a stacked label (`--fs-8` light-gray-70 uppercase title) and value (`--fs-7`). Items: Email, Discord, GitHub, (optional Location). On mobile the whole contacts/socials region is hidden behind a chevron toggle on the identity block.

### Sidebar — Social Row
Horizontal list of `--light-gray-70` icons (GitHub, Discord, Gmail) that brighten on hover.

### Navbar (top pill)
`[data-nav-link]` buttons in `--fs-8`/`--fs-7`, `--light-gray` default → `--orange-yellow-crayola` active/hover. On desktop it sits top-right inside the main card as a rounded `--onyx` bar; on mobile it becomes a fixed bottom bar.

### Service Card ("What I'm Doing")
Gradient-bordered inner card (`--bg-gradient-jet`). Left: gold icon box. Right: title (`--fs-5` white-2) + description (`--fs-6` light-gray-70). 2-up grid on desktop.

### Timeline (Resume)
Vertical list with a `1px var(--jet)` rail and gold-ringed nodes. Each entry: year/range in gold `--fs-8`, title `--fs-4` white-2, description `--fs-7` light-gray-70.

### Skill Bar
Label + percent on one row (`--fs-7`), then a track (`--jet`, 8px, radius 10px) with a **gold-gradient fill** that animates its width from 0 on reveal.

### Project Card (Portfolio)
Image (16:11, `--eerie-black-1` placeholder, scales on hover) with a gold icon overlay on hover; below, title (`--fs-5` white-2) + category (`--fs-8` light-gray-70). Filterable via a `--onyx` filter pill row (desktop) / select (mobile): All / Games / Web / ML.

### Blog Card
Gradient-bordered card; meta (gold `--fs-8` uppercase) + title (`--fs-2`, gold on hover) + preview (`--fs-6`) + an "expand/collapse" pill that reveals markdown-rendered content in place.

### Contact Card
Gradient-bordered link card: gold icon box + label/value. Hover lifts and turns the value gold.

---

## Do's and Don'ts

### Do
- Float every surface as a **gradient-bordered card** over `--smoky-black`; use the `border-gradient-onyx` + inset `bg-gradient-jet` pattern.
- Reserve **vegas-gold** for accents: active nav, eyebrow labels, icons, emphasis, heading gradient. It should feel scarce.
- Use Poppins throughout; body copy weight 300 in `--light-gray-70`, headings 500–600 in `--white-2`.
- Lift cards on hover with `translateY(-3px)` + a heavier shadow.
- Keep radii soft (14–20px) and shadows deep but diffuse.

### Don't
- No light mode, no colored backgrounds — the canvas stays smoky-black.
- Don't outline cards with hard 1px solid borders; depth comes from the gradient edge + shadow.
- Don't overuse gold (no gold body text, no gold-filled buttons everywhere).
- Don't introduce a second accent hue (bittersweet is reserved for errors only).
- Don't use sharp corners or flat fills on cards.

---

## Imagery

Avatar and project thumbnails are the only real imagery. Projects without a thumbnail use an `--eerie-black-1` placeholder with a centered gold ionicon. Icons throughout are **ionicons** (outline style), gold or light-gray. Visual density is moderate; negative space and the gradient texture do the heavy lifting.

---

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --smoky-black: hsl(0, 0%, 7%);
  --eerie-black-1: hsl(240, 2%, 13%);
  --eerie-black-2: hsl(240, 2%, 12%);
  --onyx: hsl(240, 1%, 17%);
  --jet: hsl(0, 0%, 22%);
  --orange-yellow-crayola: hsl(45, 100%, 72%);
  --gold-2: hsl(35, 100%, 68%);
  --white-1: hsl(0, 0%, 100%);
  --white-2: hsl(0, 0%, 98%);
  --light-gray: hsl(0, 0%, 84%);
  --light-gray-70: hsla(0, 0%, 84%, 0.7);
  --bittersweet-shimmer: hsl(0, 43%, 51%);

  /* Gradients */
  --bg-gradient-onyx: linear-gradient(to bottom right, hsl(240,1%,25%) 3%, hsl(0,0%,19%) 97%);
  --bg-gradient-jet: linear-gradient(to bottom right, hsla(240,1%,18%,0.251) 0%, hsla(240,2%,11%,0) 100%), hsl(240,2%,13%);
  --border-gradient-onyx: linear-gradient(to bottom right, hsl(0,0%,25%) 0%, hsla(0,0%,25%,0) 50%);
  --text-gradient-yellow: linear-gradient(to right, hsl(45,100%,72%), hsl(35,100%,68%));

  /* Typography */
  --ff-poppins: "Poppins", sans-serif;
  --fs-1: 24px;  --fs-2: 18px;  --fs-3: 17px;  --fs-4: 16px;
  --fs-5: 15px;  --fs-6: 14px;  --fs-7: 13px;  --fs-8: 11px;
  --fw-300: 300; --fw-400: 400; --fw-500: 500; --fw-600: 600;

  /* Shadows */
  --shadow-1: -4px 8px 24px hsla(0,0%,0%,0.25);
  --shadow-2: 0 16px 30px hsla(0,0%,0%,0.25);
  --shadow-3: 0 16px 40px hsla(0,0%,0%,0.25);
  --shadow-4: 0 25px 50px hsla(0,0%,0%,0.15);
  --shadow-5: 0 24px 80px hsla(0,0%,0%,0.25);

  /* Motion & Shape */
  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease-in-out;
  --radius-card: 14px;
  --radius-shell: 20px;
}
```
