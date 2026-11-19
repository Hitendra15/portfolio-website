# Hitendra Marathe — Developer Portfolio

A responsive personal portfolio built with React, Vite, React Router and Tailwind CSS v4.

## Requirements

- Node.js 20 or newer (Node 22 LTS recommended)
- npm 10 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Verify a production build

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home
- `/about` — About, education and skills
- `/services` — Development services and process
- `/projects` — Selected projects and repository links
- `/experience` — Work history and education
- `/contact` — Contact options and inquiry form

## Before publishing

1. Replace `public/profile-placeholder.svg` with a professional portrait and update the image path in `src/components/Hero.jsx`.
2. Add your approved resume PDF at `public/resume.pdf`.
3. Verify every project description and repository URL before making the site public.
4. The contact form currently opens the visitor's email application using a `mailto:` link. It does not submit to a server yet.
5. Add a backend contact endpoint and server-side validation before treating form submissions as stored inquiries.

## Main structure

```text
src/
├── components/       # Shared and homepage sections
├── data/siteData.js  # Portfolio content and contact details
├── pages/            # Responsive routed inner pages
├── App.jsx           # React Router routes and shared shell
└── main.jsx
```

Update content in `src/data/siteData.js` wherever possible rather than duplicating it across page components.
