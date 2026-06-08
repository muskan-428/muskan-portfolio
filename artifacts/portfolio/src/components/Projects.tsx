import { motion } from "framer-motion";
import { Github, ExternalLink, CloudRain, Search } from "lucide-react";

const projects = [
  {
    title: "Dev Detective",
    description: "A sleek web application that fetches GitHub user data via the official GitHub API and displays it on a clean, responsive UI. Features a custom dark mode toggle built in vanilla JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub API"],
    github: "https://github.com/muskan-428/dev-detective",
    icon: <Search size={32} className="text-primary" />,
    color: "bg-primary/10"
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking application utilizing the OpenWeather API. Displays accurate temperature, wind speed, humidity, and cloud coverage for any city globally.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/muskan-428/weather-app",
    icon: <CloudRain size={32} className="text-accent" />,
    color: "bg-accent/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4" data-testid="text-projects-title">Featured Work.</h2>
            <p className="text-lg text-muted/80 max-w-xl">
              Practical applications built to solve real problems and learn modern APIs.
            </p>
          </div>
          <a 
            href="https://github.com/muskan-428" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-colors font-bold"
            data-testid="link-projects-github-all"
          >
            View all on GitHub <Github size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative bg-background/5 border border-background/10 rounded-[2.5rem] p-8 md:p-10 hover:bg-background/10 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              data-testid={`card-project-${idx}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center mb-8`}>
                {project.icon}
              </div>
              
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted/80 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 rounded-full border border-background/20 text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-primary font-bold hover:underline"
                  data-testid={`link-project-github-${idx}`}
                >
                  <Github size={20} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
