import { Code2, Palette, Server, TestTube, Zap, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    icon: Code2,
    title: "React & Next.js",
    description: "Building modern, performant SPAs and SSR applications with React ecosystem.",
    tags: ["React", "Next.js", "Redux", "React Query"],
  },
  {
    icon: Palette,
    title: "TypeScript",
    description: "Writing type-safe, maintainable code with full TypeScript integration.",
    tags: ["TypeScript", "Type Safety", "Interfaces", "Generics"],
  },
  {
    icon: Zap,
    title: "Tailwind CSS",
    description: "Creating beautiful, responsive designs with utility-first CSS framework.",
    tags: ["Tailwind", "CSS", "Responsive", "Animations"],
  },
  {
    icon: Server,
    title: "API Integration",
    description: "Connecting frontends to RESTful APIs, GraphQL, and real-time data streams.",
    tags: ["REST", "GraphQL", "WebSockets", "Fetch"],
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Ensuring code quality with unit, integration, and end-to-end testing.",
    tags: ["Jest", "React Testing Library", "Cypress", "Vitest"],
  },
  {
    icon: Globe,
    title: "Performance",
    description: "Optimizing web vitals, bundle size, and runtime performance.",
    tags: ["Lighthouse", "Bundle Analysis", "Lazy Loading", "Caching"],
  },
];

export function SkillsGrid() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                "group p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
