# Personal Website

A modern personal website built with Next.js, featuring a blog, projects showcase, and about page. Deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Markdown Processing**: `front-matter` + `marked` + `highlight.js`
- **Theme**: Dark mode support with `next-themes`
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # About page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   └── projects/
│       └── page.tsx        # Projects page
├── components/
│   ├── nav.tsx             # Navigation component
│   ├── theme-toggle.tsx    # Dark mode toggle
│   └── ui/                 # shadcn/ui components
├── content/
│   └── blog/               # Markdown blog posts
├── lib/
│   ├── markdown.ts         # Markdown parsing utilities
│   ├── posts.ts            # Blog post helpers
│   └── projects.ts         # Projects data
└── public/                 # Static assets
```

## Adding Content

### Blog Posts

Create markdown files in `content/blog/` with frontmatter:

```markdown
---
title: "My Blog Post"
date: "2025-01-15"
description: "A brief description"
tags: ["tag1", "tag2"]
---

# Your content here

Code blocks are automatically syntax highlighted!
```

### Projects

Edit `lib/projects.ts` to add your projects:

```typescript
{
  title: "Project Name",
  description: "Project description",
  tech: ["Next.js", "React", "TypeScript"],
  link: "https://example.com",
  github: "https://github.com/username/repo",
  image: "/projects/image.png",
  category: "Web Development"
}
```

### About Page

Edit `app/page.tsx` to customize your about page content.

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark mode support
- ✅ Syntax highlighting for code blocks
- ✅ Static site generation (SSG)
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Fast performance

## Deployment

The site is configured for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Automatic deployments on every push

## License

MIT

