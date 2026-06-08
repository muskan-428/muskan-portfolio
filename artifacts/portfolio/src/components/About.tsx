import { motion } from "framer-motion";
import { Code2, Palette, Trophy, Target } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Code2 size={24} className="text-primary" />,
      title: "Budding Developer",
      desc: "Passionate about building clean, efficient, and user-centric web applications."
    },
    {
      icon: <Palette size={24} className="text-accent" />,
      title: "Sketch Artist",
      desc: "Translating imagination onto paper. Creativity fuels my technical problem-solving."
    },
    {
      icon: <Trophy size={24} className="text-yellow-500" />,
      title: "Athlete & Medalist",
      desc: "Zonal level gold medalist in basketball. I bring discipline and teamwork to every project."
    },
    {
      icon: <Target size={24} className="text-blue-500" />,
      title: "NCC Cadet",
      desc: "'B' Certificate with Corporal rank. Leadership, resilience, and a drive to lead by example."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black" data-testid="text-about-title">Multi-dimensional.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-desc">
              I am currently pursuing my B.Tech in Computer Science at Shri Ramswaroop College of Engineering and Management (2023–2027). 
              But I'm more than just a CS student.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether I'm debugging complex logic, leading my team on the basketball court, or sketching portraits, I believe in giving 100%. I thrive at the intersection of logical engineering and creative expression.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-background p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`card-about-${i}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
