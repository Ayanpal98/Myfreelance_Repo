import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "About", href: "about" },
    { name: "Blog", href: "blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2.5 group"
          aria-label="Ayan Pal — AI Consultant, back to top"
        >
          <img
            src="/images/logo-3d.png"
            alt="Ayan Pal logo"
            className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(245,166,35,0.45)] group-hover:scale-110 transition-transform duration-300"
          />
          <span><span className="text-primary">A</span>yan Pal</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(245,166,35,0.3)]"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-lg text-muted-foreground hover:text-white py-2 border-b border-white/5"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollTo("contact")}
            className="mt-2 py-3 w-full text-center font-medium bg-primary text-primary-foreground rounded-lg"
          >
            Book a Call
          </button>
        </motion.div>
      )}
    </header>
  );
}
