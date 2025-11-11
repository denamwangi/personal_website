import fs from "fs";
import path from "path";
import matter from "front-matter";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";

// Register languages
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);
hljs.registerLanguage("xml", html);

const postsDirectory = path.join(process.cwd(), "content/blog");

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: function (code: string, lang?: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {
        // Fall through to default
      }
    }
    // Auto-detect language if not specified or invalid
    try {
      return hljs.highlightAuto(code).value;
    } catch (err) {
      return code; // Return unhighlighted code if highlighting fails
    }
  },
} as any);

export interface PostMetadata {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  slug: string;
}

export interface Post extends PostMetadata {
  content: string;
  html: string;
}

/**
 * Get the slug from a filename (remove .md extension)
 */
function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

/**
 * Read and parse a markdown file
 */
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { attributes, body } = matter(fileContents);
  
  // Convert markdown to HTML
  const html = marked(body) as string;

  const attrs = attributes as {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
  };

  return {
    slug,
    title: attrs.title,
    date: attrs.date,
    description: attrs.description,
    tags: attrs.tags,
    content: body,
    html,
  };
}

/**
 * Get all blog posts
 */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = getSlugFromFilename(fileName);
      return getPostBySlug(slug);
    })
    .filter((post): post is Post => post !== null);

  // Sort posts by date (most recent first)
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => getSlugFromFilename(fileName));
}
