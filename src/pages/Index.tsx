import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsGrid } from "@/components/SkillsGrid";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Frontend Developer Portfolio | React & TypeScript Expert</title>
        <meta
          name="description"
          content="Expert frontend developer specializing in React, TypeScript, and modern web technologies. View my portfolio of performant, accessible web applications."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <SkillsGrid />
          <FeaturedProjects />
          <Timeline />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
