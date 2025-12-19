import { Briefcase, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  current?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    organization: "Blockspace technologies",
    period: "2024 - Present",
    description: "Leading frontend architecture decisions, mentoring junior developers, and building scalable React applications.",
    current: true,
  },
  {
    type: "work",
    title: "Frontend Developer",
    organization: "Guru innovations hub",
    period: "2020 - 2022",
    description: "Developed responsive web applications for diverse clients, focusing on performance and accessibility.",
  },
  {
    type: "education",
    title: "Senior Developer",
    organization: "Alt Schools Africa",
    period: "2023 - 2024",
    description: "Built and maintained user interfaces, collaborated with designers, and participated in agile development.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of Calabar",
    period: "2015 - 2019",
    description: "Focused on software engineering, web technologies, and human-computer interaction.",
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {timelineData.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={cn(
                  "relative pl-20 pb-12 last:pb-0 animate-slide-in-right"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "absolute left-4 w-8 h-8 rounded-full flex items-center justify-center",
                    item.current
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground border border-border"
                  )}
                >
                  {item.type === "work" ? (
                    <Briefcase size={16} />
                  ) : (
                    <GraduationCap size={16} />
                  )}
                </div>

                {/* Content */}
                <div className="bg-card p-6 rounded-lg border border-border hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
