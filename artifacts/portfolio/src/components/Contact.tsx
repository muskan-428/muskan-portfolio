import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Github, Linkedin, Code2, BookOpen } from "lucide-react";

export default function Contact() {
  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/muskan428", icon: <Linkedin size={24} /> },
    { name: "GitHub", url: "https://github.com/muskan-428", icon: <Github size={24} /> },
    { name: "LeetCode", url: "https://leetcode.com/muskan428", icon: <Code2 size={24} /> },
    { name: "GeeksForGeeks", url: "https://auth.geeksforgeeks.org/user/muskan428", icon: <BookOpen size={24} /> }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8" data-testid="text-contact-title">Let's build together.</h2>
          <p className="text-xl text-muted-foreground mb-12" data-testid="text-contact-desc">
            Whether you have a project in mind, want to discuss hackathons, or just want to play a game of basketball — my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="mailto:muskan428singh@gmail.com"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 w-full sm:w-auto justify-center"
              data-testid="link-contact-email"
            >
              <Mail size={20} /> Say Hello
            </a>
            <a 
              href="tel:+919580344546"
              className="flex items-center gap-3 bg-secondary text-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/80 transition-transform hover:scale-105 w-full sm:w-auto justify-center"
              data-testid="link-contact-phone"
            >
              <Phone size={20} /> +91 9580344546
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((s, idx) => (
              <a 
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-full hover:border-primary transition-colors"
                data-testid={`link-contact-social-${s.name.toLowerCase()}`}
              >
                <span className="text-muted-foreground group-hover:text-primary transition-colors">{s.icon}</span>
                <span className="font-bold">{s.name}</span>
                <ArrowUpRight size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
