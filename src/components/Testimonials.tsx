import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "One of the most talented frontend developers I've worked with. Delivers exceptional work consistently.",
    author: " Athkins Johnson",
    role: "Product Manager",
    company: "Afric nigeria.",
  },
  {
    quote: "Incredible attention to detail and a deep understanding of modern web technologies. Highly recommended.",
    author: "charles chinedu",
    role: "CTO",
    company: "Promild tech",
  },
  {
    quote: "Transformed our design vision into a pixel-perfect, performant application. A true professional.",
    author: "Linda Mwangi",
    role: "Design Lead",
    company: "delish kitchen",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">What People Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="text-accent/30 mb-4" size={32} />
              <blockquote className="text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
