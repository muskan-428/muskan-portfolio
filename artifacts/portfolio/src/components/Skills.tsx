import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";
import { Database, Terminal, Cpu, Network, Palette, Code2, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: <Code2 className="text-[#00599C]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "Java", icon: <Terminal className="text-[#007396]" /> },
      { name: "SQL", icon: <Database className="text-[#4479A1]" /> },
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", icon: <Globe className="text-[#E34F26]" /> },
      { name: "CSS", icon: <Palette className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-foreground" /> },
      { name: "VS Code", icon: <Wrench className="text-[#007ACC]" /> },
    ]
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures", icon: <Network className="text-primary" /> },
      { name: "Algorithms", icon: <Cpu className="text-accent" /> },
      { name: "OOPs", icon: <Terminal className="text-primary" /> },
      { name: "DBMS", icon: <Database className="text-accent" /> },
      { name: "OS", icon: <Cpu className="text-primary" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-skills-title">My Toolkit.</h2>
          <p className="text-lg text-muted-foreground" data-testid="text-skills-desc">
            A blend of core computer science fundamentals and modern web development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="bg-card border border-border/60 rounded-[2rem] p-8 shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              data-testid={`card-skill-category-${idx}`}
            >
              <h3 className="text-2xl font-bold mb-8">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 bg-secondary px-5 py-3 rounded-xl font-medium"
                    data-testid={`badge-skill-${skill.name.toLowerCase()}`}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
