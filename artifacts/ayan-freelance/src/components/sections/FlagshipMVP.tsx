import { motion } from "framer-motion";
import { ExternalLink, ShoppingBag, Stethoscope, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Stethoscope,
    title: "Built for MedTech",
    text: "Patient queue, clinician routing, case history & symptom intake — production-grade flows."
  },
  {
    icon: ShieldCheck,
    title: "Offline-first & Secure",
    text: "Local persistence + secure sync. Designed for low-bandwidth Tier-2/3 deployments."
  },
  {
    icon: Sparkles,
    title: "AI-Routed Triage",
    text: "Symptom-to-specialist matching, ready to plug into your model or LLM provider."
  },
];

export function FlagshipMVP() {
  return (
    <section id="acquire" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase tracking-wider mb-5">
            <ShoppingBag size={14} />
            MVP Available — Direct Sale or Acquisition
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            For the next <span className="text-primary">MedTech</span> startup ready to ship.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A production-ready telehealth MVP — designed, built and battle-tested by me. White-label it, fork the codebase, or acquire the project outright. Skip 4 months of engineering and launch under your brand next quarter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-panel rounded-3xl overflow-hidden max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Preview image */}
            <a
              href="https://t-echnical-consultant.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block group bg-gradient-to-br from-blue-500/10 to-primary/10 p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10"
              aria-label="View TeleHealth Connect live demo"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src="/images/telehealth-connect.png"
                  alt="TeleHealth Connect — patient queue, AI routing and case history dashboard"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={18} />
              </div>
            </a>

            {/* Content */}
            <div className="p-6 lg:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                    <Stethoscope size={20} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Flagship MVP · 2025</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">TeleHealth Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Healthcare without bounds. A next-generation medical platform bridging patients and clinicians through AI routing, offline-first architecture, and secure local persistence — already trusted by 200+ specialists in pilot.
                </p>

                <div className="space-y-3 mb-6">
                  {highlights.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://t-echnical-consultant.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-5 rounded-xl hover:bg-white/90 transition-colors"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
                <a
                  href="https://wa.me/919862510477?text=Hi%20Ayan%2C%20I%27d%20like%20to%20discuss%20acquiring%20or%20licensing%20the%20TeleHealth%20Connect%20MVP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-5 rounded-xl hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(245,166,35,0.25)]"
                >
                  Acquire / License <ArrowRight size={16} />
                </a>
              </div>

              <p className="text-xs text-muted-foreground/70 font-mono">
                Includes full source code, deployment scripts, design system & a 30-day white-label support window.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
