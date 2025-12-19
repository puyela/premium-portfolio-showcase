import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Github, Linkedin, Twitter, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    handle: "@puyela",
    href: "https://github.com/puyela/",
    description: "Check out my open source contributions",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "/isaac-cletus",
    href: "https://www.linkedin.com/in/isaac-cletus",
    description: "Connect with me professionally",
  },
  {
    icon: X,
    name: "X",
    handle: "@Puyela",
    href: "https://x.com/Puyela_",
    description: "Follow for tech insights and updates",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Get in touch for frontend development projects, collaborations, or just to say hello. Available for freelance work and full-time opportunities."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          {/* Header */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
                  Contact
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let's Build Something Amazing
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have a project in mind, want to discuss an opportunity, or just want to connect — I'd love to hear from you.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href="https://calendly.com/puyela" target="_blank" rel="noopener noreferrer">
                    <Calendar size={18} />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <ContactForm />

          {/* Social Links */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-2xl font-bold">Connect on Social</h2>
                <p className="text-muted-foreground">
                  Find me on these platforms
                </p>
              </div>

              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                      <social.icon className="text-muted-foreground group-hover:text-accent transition-colors" size={24} />
                    </div>
                    <h3 className="font-semibold mb-1">{social.name}</h3>
                    <p className="text-sm text-accent font-mono mb-2">{social.handle}</p>
                    <p className="text-xs text-muted-foreground">{social.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
