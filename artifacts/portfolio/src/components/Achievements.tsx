import { motion } from "framer-motion";
import { Trophy, Medal, Star, CheckCircle2, Heart } from "lucide-react";

export default function Achievements() {
  const achievements = [
    { text: "Participated in IIT BHU Technex 2026 Coding Hackathon", icon: <Star className="text-yellow-500" /> },
    { text: "Participated in Smart India Hackathon 2025 and cleared the Internal Round", icon: <Trophy className="text-primary" /> },
    { text: "Earned Certificate in Java Project Bootcamp and GitHub Bootcamp", icon: <CheckCircle2 className="text-green-500" /> },
    { text: "Earned NCC 'B' Certificate with Corporal rank — demonstrating leadership and discipline", icon: <Medal className="text-blue-500" /> },
    { text: "Gold Medalist in Zonal Level Basketball Tournament", icon: <Trophy className="text-yellow-500" /> },
  ];

  const hobbies = [
    "Sketch Artist", "Athletics", "Dancing", "Basketball", "Modelling"
  ];

  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black mb-10" data-testid="text-achievements-title">Milestones.</h2>
          <div className="space-y-6">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start gap-4 bg-background p-6 rounded-2xl border border-border/50 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                data-testid={`card-achievement-${idx}`}
              >
                <div className="shrink-0 p-2 bg-secondary rounded-xl">
                  {item.icon}
                </div>
                <p className="text-lg font-medium leading-tight pt-1.5">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-black mb-10" data-testid="text-hobbies-title">Beyond Code.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            When I'm not in front of a screen, you can find me expressing myself through art, sports, and movement.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {hobbies.map((hobby, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-6 py-4 rounded-full text-lg font-bold"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                data-testid={`badge-hobby-${idx}`}
              >
                <Heart size={18} /> {hobby}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
