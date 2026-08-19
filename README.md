# NusaBuild

NusaBuild is a modern architecture and construction company website built with Next.js. The project presents a professional corporate identity for a building consultancy and contractor brand, featuring portfolio showcases, service explanations, project workflow, careers, blog content, and consultation contact flows.

## Overview

This project is designed as a polished company landing page for an architecture and construction studio. It includes:

- A premium homepage with hero, statistics, and value propositions
- Multi-language support for Indonesian and English
- Responsive layouts for desktop and mobile devices
- Portfolio and project detail presentation
- Service and company information sections
- Career opportunities and recruitment content
- Blog/news article presentation
- WhatsApp-based consultation call-to-action
- Light and dark mode support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl for multilingual routing and translations
- Lucide React and Hugeicons for icons
- Base UI and shadcn-inspired component patterns

## Project Structure

```bash
.
├── public/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   └── globals.css
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── i18n/
│   ├── lib/
│   ├── messages/
│   └── ...
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Features

- Modern corporate branding for a construction and architecture studio
- Bilingual locale switching between Indonesian and English
- Business-focused sections for About, Services, Projects, Careers, Blog, and Contact
- Elegant UI with smooth motion and visual hierarchy
- Portfolio cards with project metadata and detail views
- Structured content management via static data modules

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 20 or later
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Then open one of the following in your browser:

- http://localhost:3000/id
- http://localhost:3000/en

The root route redirects to the Indonesian homepage by default.

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Linting

Run the linter with:

```bash
npm run lint
```

## Notes

This application is structured as a content-driven marketing website and is easy to extend by editing the files in `src/data/` and the locale files in `src/messages/`.

## License

This project is currently distributed without a dedicated license file. Please check with the repository owner before using it in production or reusing it commercially.
