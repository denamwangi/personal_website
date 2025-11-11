import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPostsMetadata } from "@/lib/posts";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPostsMetadata();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted-foreground mb-8">
        Thoughts, tutorials, and updates from my journey.
      </p>

      {posts.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground text-center py-8">
              No blog posts yet. Check back soon!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <Link href={`/blog/${post.slug}`}>
                      <CardTitle className="text-2xl hover:text-primary transition-colors mb-2">
                        {post.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="text-sm">
                      {formatDate(post.date)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              {post.description && (
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
