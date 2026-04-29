import { FaLinkedin, FaXTwitter, FaMedium, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">Ayan.</h3>
            <p className="text-sm text-muted-foreground mb-1">Agartala, Tripura, India</p>
            <p className="text-xs text-white/40 font-mono">Founder @ ATSFy Technologies | Green-to-Gold</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FaMedium size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono">
          <p>© 2026 Ayan. All rights reserved.</p>
          <p>Built on Replit</p>
        </div>
      </div>
    </footer>
  );
}
