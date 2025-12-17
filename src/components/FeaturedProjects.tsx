import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart management, checkout flow, and payment integration. Built with React, TypeScript, and Stripe.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task manager with drag-and-drop, team features, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    tags: ["Next.js", "Prisma", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Writing Assistant",
    description: "Smart writing tool powered by GPT-4 with grammar checking, tone adjustment, and content suggestions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    tags: ["React", "OpenAI", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div className="space-y-4">
            <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent work showcasing modern frontend development
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/projects">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
