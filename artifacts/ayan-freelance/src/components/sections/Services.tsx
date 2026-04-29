import { motion } from "framer-motion";
import { Code2, FileText, BrainCircuit, PenTool, SearchCheck, MessageSquare } from "lucide-react";

const services = [
  {
    id: "ai-dev",
    title: "AI Product Development",
    icon: <Code2 className="w-6 h-6" />,
    price: "Rs. 25,000 – 1,50,000",
    unit: "per project",
    featured: true,
    description: "MVP builds, AI integrations, chatbot systems, and automation pipelines. EU AI Act-compliant architecture built from day one.",
  },
  {
    id: "resume",
    title: "Resume Intelligence (ATSFy)",
    icon: <SearchCheck className="w-6 h-6" />,
    price: "Rs. 999 – 4,999",
    unit: "per report",
    featured: false,
    description: "AI-powered resume screening with personalised action plans. Available in Free, Pro, and Premium tiers for ambitious candidates.",
  },
  {
    id: "consulting",
    title: "AI / ML Consulting",
    icon: <BrainCircuit className="w-6 h-6" />,
    price: "Rs. 3,000 – 8,000",
    unit: "per hour",
    featured: false,
    description: "AI strategy, EU AI Act compliance advisory (Aug 2026 deadline), model evaluation, and technical hiring intelligence.",
  },
  {
    id: "tech-writing",
    title: "Technical Writing",
    icon: <FileText className="w-6 h-6" />,
    price: "Rs. 5,000 – 40,000",
    unit: "per deliverable",
    featured: false,
    description: "API docs, whitepapers, product documentation, grant applications (Tri-Seed, DPIIT), and technical pitch decks.",
  },
  {
    id: "academic",
    title: "Academic Content",
    icon: <PenTool className="w-6 h-6" />,
    price: "Rs. 3,000 – 20,000",
    unit: "per project",
    featured: false,
    description: "Research articles, EdTech content, and curriculum design backed by academic rigor and deep domain expertise.",
  },
  {
    id: "ghostwriting",
    title: "Strategy & Ghostwriting",
    icon: <MessageSquare className="w-6 h-6" />,
    price: "Rs. 8,000 – 35,000",
    unit: "per month",
    featured: false,
    description: "LinkedIn, Twitter/X ghostwriting, brand narrative, and startup pitch content to establish your founder authority.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Capabilities & <span className="text-primary">Pricing</span></h2>
          <p className="text-muted-foreground text-lg">
            Specialized AI and content services designed for Indian B2B startups, SMEs, and enterprise teams.
          </p>
          <p className="text-xs text-muted-foreground mt-4 font-mono opacity-60">
            * All pricing + 18% GST for B2B invoicing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-6 flex flex-col h-full ${
                service.featured ? "border-primary/30 relative overflow-hidden" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Featured
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-primary/20 text-primary" : "bg-white/5 text-white/80"
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6">
                <div className="mb-4">
                  <span className="text-lg font-bold text-white">{service.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">/ {service.unit}</span>
                </div>
                
                <a
                  href={`https://wa.me/919999999999?text=Hi%20Ayan,%20I'm%20interested%20in%20getting%20a%20quote%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center transition-colors ${
                    service.featured 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
