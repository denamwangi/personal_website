import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link href="/blog">
        <Button>Back to Blog</Button>
      </Link>
    </div>
  );
}

