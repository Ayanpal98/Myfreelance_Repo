import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Calendar, QrCode, Send, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Product Development",
    budget: "Rs. 25k - 50k",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:info.atsfy@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client opened",
      description: "Your message has been pre-filled. Please send it from your email client.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="text-primary">Build.</span></h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your AI product, compliance audit, or technical content? Drop a line.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 uppercase">Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 uppercase">Email</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 uppercase">Service Interest</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="AI Product Development">AI Product Development</option>
                    <option value="Resume Intelligence">Resume Intelligence (ATSFy)</option>
                    <option value="AI / ML Consulting">AI / ML Consulting</option>
                    <option value="EU AI Act Compliance">EU AI Act Compliance</option>
                    <option value="Technical Writing">Technical Writing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/70 uppercase">Project Budget</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="< Rs. 10k">&lt; Rs. 10,000</option>
                    <option value="Rs. 10k - 25k">Rs. 10,000 - 25,000</option>
                    <option value="Rs. 25k - 50k">Rs. 25,000 - 50,000</option>
                    <option value="Rs. 50k - 1L">Rs. 50,000 - 1,00,000</option>
                    <option value="> Rs. 1L">&gt; Rs. 1,00,000</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/70 uppercase">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
              >
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <a 
              href="https://wa.me/919862510477?text=Hi%20Ayan%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">WhatsApp Business</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">+91 98625 10477</p>
              </div>
            </a>

            <a
              href="tel:+919862510477"
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Call Direct</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">+91 98625 10477</p>
              </div>
            </a>

            <a
              href="mailto:info.atsfy@gmail.com"
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1 break-all">info.atsfy@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://calendly.com/ayan/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">15-Min Discovery</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">Via Calendly</p>
              </div>
            </a>
            
            <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <QrCode size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">UPI Payment</h3>
                <p className="text-sm text-muted-foreground font-mono mt-1">ayan@upi</p>
              </div>
              
              {/* Dummy QR visual */}
              <div className="absolute right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v3h-3v-3zm-3 3h3v3h-3v-3zm3 3h3v3h-3v-3zm-3-3h-3v-3h3v3zm-3 3h3v3h-3v-3z"/>
                </svg>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
