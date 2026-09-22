# Azhar Manie — Portfolio

A cinematic, dark-mode personal portfolio built with Vue 3 and Vite, showcasing
Azhar's move from professional kitchens into software development.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build, output in dist/
npm run preview   # serve the production build locally
```

## Edit the content

Everything you're likely to want to change — name, role, project list, about
copy, skills table, timeline, social links, the contact form endpoint — lives
in one file:

```
src/data/content.js
```

Placeholder project entries are marked `placeholder: true` and use dashed
borders in the UI so they're obvious to spot and replace. Set a project's
`image` field to a path under `public/` (or a URL) to use a real screenshot
instead of the typographic poster number.

## Edit the look

Colours, type, spacing and motion timing are CSS custom properties at the top
of `src/style.css`. Everything else derives from those tokens.

## Structure

```
src/
├── components/     One component per section, plus Navbar/Intro/Footer
├── composables/     Scroll-linked hero motion, active-section tracking
├── directives/       v-reveal: scroll-triggered fade-in (skips for
│                     prefers-reduced-motion and repeat intro plays)
├── data/content.js   All site copy and links
├── App.vue
├── main.js
└── style.css         Design tokens + global styles
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds and publishes the site on
every push to `main`. One-time setup: in the repo's Settings → Pages, set
"Build and deployment" → Source to **GitHub Actions**.

## Notes

- The contact form posts to the same Formspree endpoint the old site used.
- The CV download at `public/azhar-manie-cv.pdf` contains a phone number, home
  address and date of birth — worth reviewing before it goes back online.
- Accessibility: axe-core reports zero violations at both mobile and desktop
  widths as of this build.
