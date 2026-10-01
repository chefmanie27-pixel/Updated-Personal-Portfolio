# Azhar Manie: Personal Portfolio

A cinematic, dark-mode portfolio built with Vue 3 and Vite. It tells the story of my move from professional kitchens into software development, and showcases the projects I have built along the way.

**Live site:** [azhar-manie-portfolio.netlify.app](https://azhar-manie-portfolio.netlify.app/)

## About the site

The design borrows from film: an opening title sequence, a timeline laid out as a strip of film frames, and a closing credits roll. It is built to be fast, responsive and accessible.

**Sections**

- **Work:** featured projects with their tech stacks, descriptions and links
- **About:** who I am, my culinary mindset and my technical focus
- **Journey:** my path from the kitchen to code, shown as a film strip
- **Certifications:** my matric, culinary diploma and professional chef qualification
- **Skills:** what I know, and where I learned it
- **Contact:** a contact form, plus links to GitHub, LinkedIn and email

## Featured projects

| Project | Stack |
| --- | --- |
| Occasion: Halaal Catering Platform | Vue, Node.js, Express, MySQL, Axios, PayFast sandbox |
| Market Pulse: Price Monitor | Vue, Flask, Python, web scraping |
| ModernTech HR Portal | HTML, CSS, JavaScript, MySQL |
| Event Planning Service | HTML, CSS, JavaScript |
| HTML & CSS Portfolio | HTML, CSS |
| Python Mini Toolkit | Python |

Some of the full-stack projects have their backends offline, so their live demos show static data. Each project card says so where it applies.

## Tech stack

- [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vite](https://vitejs.dev/) for development and builds
- Plain CSS with design tokens (custom properties), no UI framework
- [Fontsource](https://fontsource.org/) for self-hosted Bodoni Moda and Hanken Grotesk
- [Formspree](https://formspree.io/) for the contact form

## Getting started

The Vue app lives in the `azhar-portfolio` folder.

```bash
git clone https://github.com/chefmanie27-pixel/Updated-Personal-Portfolio.git
cd Updated-Personal-Portfolio/azhar-portfolio
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local dev server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally |

## Editing the content

Almost all of the copy lives in one file:

```
azhar-portfolio/src/data/content.js
```

It holds my profile, navigation, projects, about text, journey timeline, certifications, skills and contact details. To add a project, add an entry to the `projects` array. To add a certification, add one to `certifications.items`.

Colours, typography, spacing and motion timing are CSS custom properties at the top of `src/style.css`, so the whole site follows when you change them.

## Project structure

```
azhar-portfolio/
├── public/                 Favicon, portrait and CV
├── src/
│   ├── components/         One component per section, plus Navbar, Intro and Footer
│   ├── composables/        Active-section tracking and hero motion
│   ├── directives/         v-reveal: scroll-triggered fade-in
│   ├── data/content.js     All site copy and links
│   ├── App.vue
│   ├── main.js
│   └── style.css           Design tokens and global styles
├── index.html
└── vite.config.js
```

## Deployment

The site is hosted on Netlify. Because the app sits in a subfolder, use these settings:

| Setting | Value |
| --- | --- |
| Base directory | `azhar-portfolio` |
| Build command | `npm run build` |
| Publish directory | `azhar-portfolio/dist` |

If the build fails on the Node version, set the environment variable `NODE_VERSION` to `22`.

A GitHub Actions workflow in `azhar-portfolio/.github/workflows/deploy.yml` can also publish the site to GitHub Pages. GitHub only runs workflows from the repository root's `.github` folder, so move it there (and set the paths to `azhar-portfolio`) if you want to use it.

## Accessibility

- Keyboard-friendly navigation with visible focus states and a skip link
- Respects `prefers-reduced-motion`
- Semantic landmarks and headings throughout
- Responsive from small phones to wide desktops

## Contact

**Azhar Manie**, Cape Town, South Africa

- Email: [chefmanie27@gmail.com](mailto:chefmanie27@gmail.com)
- GitHub: [chefmanie27-pixel](https://github.com/chefmanie27-pixel)
- LinkedIn: [Azhar Manie](https://www.linkedin.com/in/azhar-manie-b48244403/)
