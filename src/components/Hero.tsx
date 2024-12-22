import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-convivio-bg pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <span className="text-convivio-accent font-medium">Welcome to Convivio</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-convivio-text leading-tight">
              Connect Over Curated Dining Experiences
            </h1>
            <p className="text-lg text-convivio-muted max-w-lg">
              Join intimate dinner parties where strangers become friends over exceptional food and meaningful conversations.
            </p>
            <Button 
              className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors"
              onClick={() => navigate("/join")}
            >
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative h-[500px] animate-fadeIn">
            <img
              src="/lovable-uploads/0e961c5a-8778-4551-8fe0-2c4ca39e765f.png"
              alt="Convivio Dining Experience"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};