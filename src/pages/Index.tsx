
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-convivio-bg">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
