import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-12 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to start your project?
            </h2>
            <p className="text-primary-foreground/80">
              Let's collaborate to create something exceptional. I'm available for freelance projects part-time and full-time opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild variant="accent" size="xl">
                <a href="mailto:isaaccletus52@gmail.com">
                  Hire Me Now
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="https://calendly.com/puyela" target="_blank" rel="noopener noreferrer">
                  Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
