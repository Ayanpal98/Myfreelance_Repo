import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { SocialProof } from "@/components/sections/SocialProof";
import { Contact } from "@/components/sections/Contact";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <SocialProof />
        <Contact />
        <BlogTeaser />
      </main>

      <Footer />
    </div>
  );
}
