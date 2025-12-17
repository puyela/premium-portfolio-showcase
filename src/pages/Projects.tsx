import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";

const allProjects = [
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
  {
    title: "Finance Dashboard",
    description: "Interactive financial analytics dashboard with real-time data visualization and portfolio tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["React", "D3.js", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Social Media App",
    description: "Modern social platform with posts, comments, real-time notifications, and user profiles.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    tags: ["Next.js", "Supabase", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=450&fit=crop",
    tags: ["React", "Weather API", "Geolocation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Explore my portfolio of frontend projects including e-commerce platforms, dashboards, and web applications built with React and TypeScript."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
                  Portfolio
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
                <p className="text-lg text-muted-foreground">
                  A collection of projects showcasing my expertise in frontend development, from interactive dashboards to full-stack applications.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allProjects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
