import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="home">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-start gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter" data-testid="text-hero-title">
            Hi, I'm <span className="text-primary">Muskan</span><br />
            <span className="text-stroke">Singh.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-medium" data-testid="text-hero-subtitle">
            B.Tech CS student, developer, and athlete. I code by day, sketch by night, and bring a gold-medal mindset to everything I build.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full font-bold hover:bg-foreground/90 transition-all hover:gap-3"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-hero-projects"
            >
              See my work <ArrowRight size={18} />
            </a>
            <div className="flex items-center gap-3 px-4">
              <a href="https://github.com/muskan-428" target="_blank" rel="noreferrer" className="p-2.5 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors" data-testid="link-hero-github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/muskan428" target="_blank" rel="noreferrer" className="p-2.5 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors" data-testid="link-hero-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://leetcode.com/muskan428" target="_blank" rel="noreferrer" className="p-2.5 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors" data-testid="link-hero-leetcode">
                <Code2 size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="relative lg:h-[700px] flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden bg-secondary shadow-2xl">
            <img 
              src="/hero-avatar.png" 
              alt="Muskan Singh Illustration" 
              className="w-full h-full object-cover object-center"
              data-testid="img-hero-avatar"
            />
            {/* Overlay badge */}
            <motion.div 
              className="absolute bottom-8 -left-8 md:left-8 bg-background p-4 rounded-2xl shadow-xl flex items-center gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                🥇
              </div>
              <div>
                <p className="text-sm font-bold">Gold Medalist</p>
                <p className="text-xs text-muted-foreground">Basketball</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
