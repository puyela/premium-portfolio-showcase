import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
   featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
   featured = false,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        featured && "md:col-span-2"
      )}
    >
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-1 bg-accent/10 text-accent rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ExternalLink size={14} />
              </a>
            </Button>
          )}
           </div>
      </div>
    </div>
  );
}
