import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { TallyForm } from "@/components/TallyForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-convivio-bg">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TallyForm />
      <Footer />
    </div>
  );
};

export default Index;