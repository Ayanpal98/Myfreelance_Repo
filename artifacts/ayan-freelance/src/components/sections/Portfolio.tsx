import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "atsfy",
    title: "ATSFy",
    subtitle: "AI Resume Intelligence Platform",
    image: "/images/portfolio-atsfy.png",
    outcome: "The only product offering candidate-facing personalised action plans based on semantic matching.",
    tech: ["React", "Node", "OpenAI", "Postgres"],
    link: "#"
  },
  {
    id: "green",
    title: "Green-to-Gold",
    subtitle: "Sustainability-to-Revenue Advisory",
    image: "/images/portfolio-green.png",
    outcome: "Transforms compliance overhead into measurable business revenue using AI agent pipelines.",
    tech: ["Next.js", "AI Agents", "Python"],
    link: "#"
  },
  {
    id: "finance",
    title: "IntelliFinance",
    subtitle: "AI-Powered Personal Finance",
    image: "/images/portfolio-finance.png",
    outcome: "Automated categorization and predictive budgeting reducing manual tracking time by 85%.",
    tech: ["React Native", "ML Pipelines", "AWS"],
    link: "#"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Work</span></h2>
            <p className="text-muted-foreground text-lg">
              Production-ready products built from zero to one.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl overflow-hidden group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto h-full overflow-hidden bg-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-primary font-mono text-sm mb-2">{project.subtitle}</p>
                  <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
                  
                  <div className="mb-8">
                    <p className="text-white/70 leading-relaxed">
                      <strong className="text-white font-medium">Outcome:</strong> {project.outcome}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors mt-auto w-fit">
                    View case study <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
