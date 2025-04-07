
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="bg-convivio-bg">
      <Navbar />
      <Hero />
      <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
      <About />
      <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
