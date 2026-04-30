import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/bg-texture.png')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel mb-6 text-xs font-mono text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            I build <span className="glow-text">AI products</span> that generate revenue.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl font-light leading-relaxed">
            I'm Ayan — an AI consultant and builder for Indian B2B clients. From strategy and EU AI Act compliance to full-stack MVP builds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,166,35,0.4)]"
            >
              Book a Discovery Call <ArrowRight size={18} />
            </button>
            <a 
              href="https://wa.me/919862510477?text=Hi%20Ayan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass-panel text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Me
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">50+</span>
              <span>Clients Served</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">100%</span>
              <span>Compliance Ready</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">Top 10</span>
              <span>India AI Summit</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-md mx-auto"
        >
          <div className="aspect-[4/5] rounded-2xl glass-panel p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/hero-portrait.png" 
              alt="Ayan - AI Consultant" 
              className="w-full h-full object-cover rounded-xl grayscale-[0.2] contrast-125"
            />
            
            {/* Floating glass cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Founder</p>
                <p className="text-sm font-bold text-white">ATSFy & Green-to-Gold</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 -right-8 glass-panel py-2 px-4 rounded-full flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-xs font-medium text-white">EU AI Act Expert</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
