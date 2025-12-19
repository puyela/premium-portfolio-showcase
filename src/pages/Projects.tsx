import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";

const allProjects = [
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
              <div className="grid grid-cols-1 md:grid-cols-1
               gap-6">
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
