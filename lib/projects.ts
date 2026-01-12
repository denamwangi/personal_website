import { Network } from "lucide-react";

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
    title: "LeetCode AI Study Assistant",
    description:
      "AI-powered study plan generator. Two-step LLM pipeline (topic decision → problem selection) that analyzes your leetcode history and creates personalized daily plans.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Claude API",
      "React",
      "TypeScript",
      "Langfuse",
    ],
    github: "https://github.com/denamwangi/leetai",
    image: "/projects/leetcode.png",
    category: "AI/ML Tools",
  },
  {
    title: "BatchMates",
    description:
      "Multi-stage LLM pipeline that transforms unstructured introductions into interactive social network. Built data processing workflow (extraction → normalization → relationship mapping) and integrated Google ADK agent with MCP tools for natural language database querying.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "OpenAI API",
      "Google ADK",
      "React",
      "react-force-graph",
    ],
    github: "https://github.com/denamwangi/batchmates",
    image: "/projects/batchmates.png",
    category: "AI/ML Tools",
  },
  {
    title: "PelicansLLM",
    description:
      "Visual analysis platform comparing how Claude and GPT models interpret identical prompts across model generations. Built with service layer architecture and database-backed storage. Inspired by Simon Willison's conference talk.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://pelicans.denamwangi.com/",
    github: "https://github.com/denamwangi/pelicanLLM_demo",
    image: "/projects/anthropic.png",
    category: "AI/ML Tools",
  },
];
