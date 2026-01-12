import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-border flex-shrink-0">
          <div className="absolute inset-0 -translate-y-[0%]">
            <Image
              src="/profile.jpg"
              alt="Profile picture"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Dena</h1>
          <p className="text-xl text-muted-foreground">
            {" "}
            engineer | data nerd | speaker{" "}
          </p>
          {/* <p className="text-lg leading-relaxed">
            Welcome to my personal website! I&apos;m a passionate developer, designer, and creative problem solver.
            This is where I share my thoughts, projects, and experiences.
          </p> */}

          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <Link
              href="https://github.com/denamwangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/dena-metili-mwangi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:hello@denamwangi.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Hi! I&apos;m Dena, an engineering leader and product builder
              exploring how AI, creativity, and design intersect to make
              technology more human. I&apos;ve led product, growth, and
              monetization engineering teams at Pinterest and Honeycomb.io,
              building systems that turn complexity into clarity and drive
              meaningful impact for users and businesses alike.
            </p>
            <h4>How I got here</h4>
            <p>
              I&apos;m a big fan of personal reinvention. After graduating from
              Duke with a Masters in Economics, I worked in International
              Development running field experiments and answering questions like
              &ldquo;did all this money we spent make any difference?&rdquo;
              (spoiler: only sometimes). Most recently at the World Bank. That
              work shaped how I think about equity and meaningful impact in
              tech.
            </p>
            <h4>Loves</h4>
            <p>
              I&apos;m endlessly curious about how people and systems connect. I
              care about building tools that make the invisible visible,
              designing technology that serves everyone, and using data as a
              lens for empathy. I&apos;m passionate about community and good
              conversations about fairness, design, and what technology could
              be.
            </p>
            <p>
              Also: Beyoncé, cats, coffee, cycling, and kindred spirits who
              think deeply about how we build.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
