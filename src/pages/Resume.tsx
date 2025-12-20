import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";
import { CTASection } from "@/components/CTASection";

const workExperience = [
  {
    title: "Senior Frontend Developer",
    company: "Blockspace technologies",
    period: "2024 - Present",
    responsibilities: [
      "Lead frontend architecture for a SaaS platform serving 1K+ users",
      "Mentor team of 5 junior developers",
      "Improved application performance by 40%",
      "Implemented CI/CD pipelines and testing strategies",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Guru innovations hub",
    period: "2020 - 2022",
    responsibilities: [
      "Developed responsive web applications for 15+ clients",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Built reusable component libraries",
      "Optimized SEO and accessibility across projects",
    ],
  },
  {
    title: "Junior Developer",
    company: "Promild Technologies",
    period: "2019 - 2020",
    responsibilities: [
      "Built and maintained user interfaces using React",
      "Participated in agile development sprints",
      "Integrated RESTful APIs and third-party services",
      "Wrote unit tests with Jest and React Testing Library",
    ],
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "UNiversity of Calabar",
    period: "2015 - 2019",
    details: "Focus on Software Engineering and Web Technologies",
  },
];



const technicalSkills = {
  Languages: ["TypeScript", "JavaScript", "HTML5", "CSS3", "SQL"],
  Frameworks: ["React", "Next.js", "Node.js", "Express"],
  Styling: ["Tailwind CSS", "Styled Components", "SASS", "CSS Modules"],
  Tools: ["Git", "Webpack", "Vite", "Docker", "Figma"],
  Testing: ["Jest", "React Testing Library", "Cypress", "Vitest"],
  Other: ["REST APIs", "GraphQL", "WebSockets", "Agile/Scrum"],
};

const Resume = () => {
  return (
    <>
      <Helmet>
        <title>Resume | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="View my professional resume showcasing experience, education, certifications, and technical skills in frontend development."
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24">
          {/* Header */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
                    Resume
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Professional Background
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    5+ years of experience building modern web applications with a focus on React ecosystem and TypeScript.
                  </p>
                </div>
                <Button asChild variant="hero" size="lg">
                  <a href="/CV/Isaac_Cletus_Frontend_Engineer_CV.pdf" download>
                    <Download size={18} />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <div className="py-16">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Work Experience */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Briefcase className="text-accent" size={20} />
                      </div>
                      <h2 className="text-2xl font-bold">Work Experience</h2>
                    </div>
                    <div className="space-y-8">
                      {workExperience.map((job, index) => (
                        <div
                          key={job.title}
                          className="p-6 bg-card rounded-lg border border-border"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                            <div>
                              <h3 className="font-semibold text-lg">{job.title}</h3>
                              <p className="text-accent">{job.company}</p>
                            </div>
                            <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded w-fit">
                              {job.period}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <span className="text-accent mt-1.5">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education */}
                  <section>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <GraduationCap className="text-accent" size={20} />
                      </div>
                      <h2 className="text-2xl font-bold">Education</h2>
                    </div>
                    {education.map((edu) => (
                      <div
                        key={edu.degree}
                        className="p-6 bg-card rounded-lg border border-border"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{edu.degree}</h3>
                            <p className="text-accent">{edu.school}</p>
                          </div>
                          <span className="text-sm font-mono text-muted-foreground bg-secondary px-3 py-1 rounded w-fit">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.details}</p>
                      </div>
                    ))}
                  </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Technical Skills */}
                  <section className="p-6 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Code2 className="text-accent" size={20} />
                      </div>
                      <h2 className="text-xl font-bold">Technical Skills</h2>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(technicalSkills).map(([category, skills]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs px-2 py-1 bg-secondary rounded-md"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;
