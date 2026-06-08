import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Shri Ramswaroop College of Engineering and Management",
    year: "2023 – 2027",
    score: "72.4%"
  },
  {
    degree: "Intermediate (CBSE)",
    school: "Rani Laxmi Bai Memorial School",
    year: "April 2023",
    score: "79%"
  },
  {
    degree: "High School (CBSE)",
    school: "Rani Laxmi Bai Memorial School",
    year: "April 2021",
    score: "93%"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="text-education-title">Education.</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 md:pl-12 space-y-12">
            {education.map((item, idx) => (
              <motion.div 
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                data-testid={`timeline-education-${idx}`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-sm">
                  <div className="w-1.5 h-1.5 bg-background rounded-full" />
                </div>

                <div className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{item.degree}</h3>
                      <p className="text-muted-foreground text-lg mt-1">{item.school}</p>
                    </div>
                    <div className="text-left md:text-right shrink-0">
                      <span className="inline-block bg-secondary text-foreground px-4 py-1.5 rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <GraduationCap size={20} />
                    <span>Score: {item.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
