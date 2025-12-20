import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-slide-up">
            <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              Frontend Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Building{" "}
              <span className="text-accent">digital experiences</span>{" "}
              that matter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I craft performant, accessible web applications using React, TypeScript, and modern tooling. Let's turn your ideas into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/projects">
                View My Work
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <a href="/CV/Isaac_Cletus_Frontend_Engineer_CV.pdf" download>
                Download Resume
                <Download size={18} />
              </a>
            </Button>
          </div>

          <div className="pt-12 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">5+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">30+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
