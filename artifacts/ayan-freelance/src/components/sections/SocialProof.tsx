import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ayan didn't just build our MVP, he architected it to be EU AI Act compliant from day one. Saved us months of refactoring.",
    author: "Rahul S.",
    role: "Founder, Enterprise SaaS"
  },
  {
    quote: "The ATSFy tech is brilliant. Ayan understands both the deep ML requirements and the actual business pain points of HR teams.",
    author: "Priya M.",
    role: "VP of People, FinTech Startup"
  },
  {
    quote: "His technical writing is impeccable. Translated our complex API docs into something our enterprise clients actually want to read.",
    author: "Vikram K.",
    role: "CTO, Logistics Tech"
  }
];

const stats = [
  { value: "120+", label: "Resumes Screened" },
  { value: "40+", label: "Pieces Published" },
  { value: "5", label: "Client Projects Delivered" },
  { value: "1", label: "India AI Summit Feature" }
];

export function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <p className="text-white/80 leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
              <div>
                <p className="text-white font-medium">{t.author}</p>
                <p className="text-xs text-primary font-mono mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
