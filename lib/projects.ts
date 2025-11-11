export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    title: "Example Project",
    description: "This is an example project to demonstrate the projects page. Replace this with your own projects!",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/example",
    image: "/projects/example.png",
    category: "Web Development",
  },
  {
    title: "Another Project",
    description: "Another example project showcasing different technologies and approaches.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/example",
    category: "Backend",
  },
];

