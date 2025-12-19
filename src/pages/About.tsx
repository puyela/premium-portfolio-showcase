import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Timeline } from "@/components/Timeline";
import { CTASection } from "@/components/CTASection";
import { Code2, Coffee, Heart, Rocket } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I believe in writing maintainable, readable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Every millisecond counts. I optimize for speed without sacrificing quality.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Great products start with understanding user needs and delivering delight.",
  },
  {
    icon: Coffee,
    title: "Continuous Learning",
    description: "The web evolves fast. I stay current with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Me | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Learn about my journey as a frontend developer, my values, and what drives me to build exceptional web experiences."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
                    About Me
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Hi, I'm Isaac — a Frontend Developer
                  </h1>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      With over 5 years of experience in web development, I specialize in building modern, performant web applications using React, TypeScript, and cutting-edge frontend technologies.
                    </p>
                    <p>
                      My journey began with a curiosity about how websites work and evolved into a passion for creating seamless digital experiences. I've had the privilege of working with startups and established companies, helping them bring their visions to life.
                    </p>
                    <p>
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                    <img
                      src="https://res.cloudinary.com/ddurtcl0v/image/upload/v1766173848/WhatsApp_Image_2025-12-18_at_5.59.28_AM_1_ca18yy.jpg"
                      alt="Developer portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/40 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="text-center space-y-4 mb-16">
                <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
                  Philosophy
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">What Drives Me</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="p-6 bg-card rounded-lg border border-border text-center hover:border-accent/50 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <SkillsGrid />
          <Timeline />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
