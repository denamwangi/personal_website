import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-border flex-shrink-0 bg-muted flex items-center justify-center" role="img" aria-label="Profile picture placeholder">
          {/* Add your profile image: Replace this div with:
              <Image src="/profile.jpg" alt="Profile" width={192} height={192} className="object-cover" />
          */}
          <div className="text-6xl font-bold text-muted-foreground" aria-hidden="true">?</div>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Your Name</h1>
          <p className="text-xl text-muted-foreground">Your Title / Role</p>
          <p className="text-lg leading-relaxed">
            Welcome to my personal website! I&apos;m a passionate developer, designer, and creative problem solver.
            This is where I share my thoughts, projects, and experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 pt-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
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
              I&apos;m a developer with a passion for building beautiful, functional, and user-friendly applications.
              I enjoy working with modern web technologies and am always eager to learn new tools and techniques.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Python",
              "Git",
              "Docker",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience/Interests Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Software Developer</h3>
                <p className="text-sm text-muted-foreground">Company Name • 2020 - Present</p>
                <p className="text-sm mt-2">
                  Building and maintaining web applications using modern frameworks and best practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Web Development</li>
              <li>Open Source</li>
              <li>UI/UX Design</li>
              <li>Machine Learning</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
