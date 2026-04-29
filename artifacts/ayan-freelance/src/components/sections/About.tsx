import { motion } from "framer-motion";
import { MapPin, Award, BookOpen, ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Farmer to <span className="text-primary">Founder.</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
              <p>
                I was raised in rural Tripura, India. There wasn't much tech around, but there was an incredible drive to build. I taught myself AI and machine learning, turning curiosity into a career.
              </p>
              <p>
                Today, I operate out of Agartala, advising startups, scaling products, and navigating the complexities of international tech policy. I founded <strong className="text-white font-medium">ATSFy Technologies</strong> to fix broken recruitment pipelines, and <strong className="text-white font-medium">Green-to-Gold</strong> to turn sustainability into a revenue center.
              </p>
              <p>
                I bridge the gap between heavy academic research and fast-paced startup shipping. Whether it's architecting an MVP or auditing for the upcoming EU AI Act, I build systems that last.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm text-white/60 font-mono">
              <MapPin size={16} className="text-primary" />
              <span>Based in Agartala, Tripura, India</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">India AI Summit</h3>
              <p className="text-sm text-muted-foreground">Featured speaker on deploying scalable AI models in resource-constrained environments.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl space-y-4 sm:translate-y-8">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">EU AI Act Expert</h3>
              <p className="text-sm text-muted-foreground">Advising Indian B2B tech companies on compliance architecture before the Aug 2026 deadline.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-semibold text-white">Multi-Domain</h3>
              <p className="text-sm text-muted-foreground">Deep technical background paired with rigorous academic content creation and research.</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl space-y-4 sm:translate-y-8 bg-primary/5 border-primary/20">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <span className="font-bold font-serif text-lg">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white">ATSFy Founder</h3>
              <p className="text-sm text-muted-foreground">Built the first resume intelligence tool offering personalized candidate action plans.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
