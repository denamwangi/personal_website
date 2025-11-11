import { getAllPosts, getAllPostSlugs, getPostBySlug, type Post, type PostMetadata } from "./markdown";

/**
 * Get all blog posts (sorted by date, most recent first)
 */
export function getPosts(): Post[] {
  return getAllPosts();
}

/**
 * Get all post slugs for static route generation
 */
export function getPostSlugs(): string[] {
  return getAllPostSlugs();
}

/**
 * Get a single post by slug
 */
export function getPost(slug: string): Post | null {
  return getPostBySlug(slug);
}

/**
 * Get post metadata only (without full content)
 */
export function getPostMetadata(slug: string): PostMetadata | null {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const { content, html, ...metadata } = post;
  return metadata;
}

/**
 * Get all posts metadata (for listing pages)
 */
export function getAllPostsMetadata(): PostMetadata[] {
  return getAllPosts().map((post) => {
    const { content, html, ...metadata } = post;
    return metadata;
  });
}
