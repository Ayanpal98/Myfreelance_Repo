import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why every Indian startup needs an EU AI Act audit before August 2026",
    excerpt: "If your software touches European users, the clock is ticking. Here's what you need to change in your architecture today.",
    tag: "Compliance"
  },
  {
    title: "Resume screening is broken — here's what we built instead",
    excerpt: "Black-box ATS systems reject brilliant candidates. We built ATSFy to give candidates actionable intelligence, not just silent rejections.",
    tag: "Product"
  },
  {
    title: "Farmer to founder: what rural India taught me about shipping AI products",
    excerpt: "Resource constraints breed ruthless prioritization. How the mindset of rural Tripura translates to lean MVP development.",
    tag: "Personal"
  }
];

export function BlogTeaser() {
  return (
    <section id="blog" className="py-24 relative bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="text-primary">Writing</span></h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Thoughts on AI product development, compliance, and startup lessons.
            </p>
          </div>
          <a href="https://medium.com/@ayanpal0698" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
            View all <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col h-full group"
            >
              <span className="text-xs font-mono text-primary mb-4 block uppercase tracking-wider">{post.tag}</span>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <a href="https://medium.com/@ayanpal0698" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors mt-auto">
                Read on Medium <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="https://medium.com/@ayanpal0698" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-medium">
            View all writing <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
