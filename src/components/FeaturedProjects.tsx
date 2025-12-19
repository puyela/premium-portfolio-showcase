import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
  title: "MorLabs Protocol",
  description: "A decentralized protocol website showcasing blockchain infrastructure, token utilities, and protocol architecture. Built with a focus on performance, clarity, and modern UI to communicate complex Web3 concepts effectively.",
  image: "https://res.cloudinary.com/ddurtcl0v/image/upload/v1766072114/Screen_Shot_2025-12-18_at_7.13.28_AM_cxffec.png",
  tags: ["Web3", "Blockchain", "Frontend", "UI/UX"],
  liveUrl: "https://morlabsprotocol.com/",
  featured: true,
}
,
  {
  title: "GKG Investment Holdings",
  description: "A corporate investment firm landing page with a clean, trust-focused design highlighting services, portfolio divisions, and company values. Built to present financial expertise and executive presence with clarity and modern UI principles.",
  image: "https://res.cloudinary.com/ddurtcl0v/image/upload/v1766072102/Screen_Shot_2025-12-18_at_7.34.15_AM_ezxu2m.png",
  tags: ["Corporate", "UI/UX", "Responsive Design"],
  liveUrl: "https://gkginvestmentholdings.com/",
  featured: false,
},

{
  title: "SpacePay Landing Page",
  description: "A modern landing page for a fintech remittance app showcasing core services, value propositions, and user trust elements. Built with a clean layout, engaging visuals, and responsive design to communicate SpacePay’s financial solutions effectively.",
  image: "https://res.cloudinary.com/ddurtcl0v/image/upload/v1766073442/Screen_Shot_2025-12-18_at_7.54.47_AM_i2t3om.png",
  tags: ["Fintech", "Responsive Design", "UI/UX"],
  liveUrl: "https://spacepay-landing-page.vercel.app/",
  featured: true,
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

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
