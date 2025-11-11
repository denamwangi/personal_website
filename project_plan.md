# Personal Website Project Plan

## Overview
Build a personal website with three main tabs (About, Blog, Projects) using Next.js, shadcn/ui, and Tailwind CSS. Deploy to Vercel.

---

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Markdown Processing**: `front-matter` + `marked`
- **Deployment**: Vercel
- **Git**: GitHub (for auto-deploy)

---

## Project Structure
```
project-root/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home/About page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   └── projects/
│       └── page.tsx        # Projects page
├── content/
│   └── blog/               # Markdown blog posts
│       ├── post-1.md
│       └── post-2.md
├── lib/
│   ├── markdown.ts         # Markdown parsing utilities
│   └── posts.ts            # Blog post loading logic
├── components/
│   ├── nav.tsx             # Navigation/Tab component
│   └── ...                 # Other shadcn components
├── public/                 # Images, assets
└── package.json
```

---

## Implementation Steps

### Phase 1: Project Setup
- [ ] Create Next.js project with `create-next-app`
- [ ] Install dependencies: `front-matter`, `marked`, `shadcn/ui`
- [ ] Set up Tailwind CSS
- [ ] Create folder structure for content and components
- [ ] Initialize Git repo personal_website and push to GitHub

### Phase 2: Navigation & Layout
- [ ] Create root `layout.tsx` with base styling
- [ ] Build navigation component with three tabs (About, Blog, Projects)
- [ ] Use shadcn/ui `Tabs` or custom nav component
- [ ] Add responsive design for mobile

### Phase 3: About Page
- [ ] Create `app/page.tsx` (home/about)
- [ ] Add personal bio/introduction
- [ ] Use shadcn/ui `Card` components for sections
- [ ] Add profile image, social links
- [ ] Style with Tailwind + prose for nice typography

### Phase 4: Blog Setup
- [ ] Create `lib/markdown.ts` with functions to:
  - Read markdown files from `content/blog/`
  - Parse frontmatter with `front-matter`
  - Convert markdown to HTML with `marked`
  - Extract metadata (title, date, description)
- [ ] Create `lib/posts.ts` to:
  - Get all blog posts
  - Sort by date
  - Generate static routes

### Phase 5: Blog Listing Page
- [ ] Create `app/blog/page.tsx`
- [ ] Display all blog posts as cards (shadcn/ui `Card`)
- [ ] Show title, date, and excerpt
- [ ] Add link to individual post
- [ ] Sort by most recent first
- [ ] Optional: Add search/filter

### Phase 6: Individual Blog Post Page
- [ ] Create `app/blog/[slug]/page.tsx`
- [ ] Fetch post by slug
- [ ] Display title, date, author info
- [ ] Render markdown HTML with `prose` styling
- [ ] Add navigation to other posts
- [ ] Handle 404 for missing posts

### Phase 7: Projects Page
- [ ] Create `app/projects/page.tsx`
- [ ] Define project data structure (JSON or array)
- [ ] Create `Project` card component with shadcn/ui
- [ ] Show project title, description, tech stack, links
- [ ] Add images/thumbnails and optional see demo link
- [ ] Optional: Filter by tech/category

### Phase 8: Styling & Polish
- [ ] Apply Tailwind prose plugin to blog posts
- [ ] Ensure responsive design across all pages
- [ ] Add code block styling for blog posts
- [ ] Optimize images
- [ ] Dark mode support (optional but easy with shadcn)
- [ ] Add loading states and animations

### Phase 9: Deployment
- [ ] Push to GitHub repository
- [ ] Connect repo to Vercel
- [ ] Set up automatic deployments
- [ ] Configure custom domain (optional)
- [ ] Test live site

---

## Key Features to Build

### Navigation
- Sticky/fixed header with three tabs
- Active state indicator
- Mobile hamburger menu (optional)

### Blog Features
- Markdown frontmatter (title, date, description, tags)
- Static generation (SSG) for performance
- Pretty code syntax highlighting
- Responsive images
- Reading time estimate (optional)

### Projects Section
- Project cards with image, title, description
- Tech stack badges
- Links to GitHub/live demo
- Filter or category system (optional)

### Design Elements
- Clean, minimal aesthetic
- Consistent typography with Tailwind
- Good spacing and hierarchy
- Accessible color contrast

---

## Sample Content Needed

### Blog Post (Markdown)
```markdown
---
title: "My First Post"
date: "2025-01-15"
description: "A brief description of this post"
---

# Content here...
```

### Projects Data
```typescript
{
  title: "Project Name",
  description: "What it does",
  tech: ["Next.js", "React", "Tailwind"],
  link: "https://...",
  github: "https://...",
  image: "/projects/image.png"
}
```

---

## Deployment Checklist
- [ ] All pages accessible and working
- [ ] Mobile responsive tested
- [ ] Images optimized
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors
- [ ] Meta tags/SEO set up
- [ ] Vercel project created
- [ ] GitHub connected
- [ ] Environment variables configured (if needed)
- [ ] Live site tested

---

## Future Enhancements
- Dark mode toggle
- Search functionality
- Blog categories/tags
- Newsletter signup
- Comments on blog posts
- Analytics integration
- Social sharing buttons