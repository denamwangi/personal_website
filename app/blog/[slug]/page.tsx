import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPost, getPostSlugs, getAllPostsMetadata } from "@/lib/posts";
import { Button } from "@/components/ui/button";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description || post.title,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  // Get all posts for navigation
  const allPosts = getAllPostsMetadata();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back to Blog Link */}
      <Link href="/blog">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      {/* Post Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.description && (
          <p className="text-xl text-muted-foreground">{post.description}</p>
        )}
      </header>

      {/* Post Content */}
      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      {/* Post Navigation */}
      <nav className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between gap-4">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="group flex-1 p-4 border rounded-lg hover:bg-accent transition-colors"
          >
            <div className="text-sm text-muted-foreground mb-1">Previous Post</div>
            <div className="font-semibold group-hover:text-primary transition-colors">
              {previousPost.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="group flex-1 p-4 border rounded-lg hover:bg-accent transition-colors text-right"
          >
            <div className="text-sm text-muted-foreground mb-1">Next Post</div>
            <div className="font-semibold group-hover:text-primary transition-colors">
              {nextPost.title}
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </nav>
    </article>
  );
}

