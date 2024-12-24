import { Button } from "@/components/ui/button";
import { ArrowRight, Languages, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const Hero = () => {
  const navigate = useNavigate();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleLanguageSelect = (language: string) => {
    setShowLanguageModal(false);
    navigate(`/form/${language}`);
  };

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
              onClick={() => setShowLanguageModal(true)}
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

      <Dialog open={showLanguageModal} onOpenChange={setShowLanguageModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl text-convivio-text">
              Choose Your Language
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300"
              onClick={() => handleLanguageSelect("fr")}
            >
              Français
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300"
              onClick={() => handleLanguageSelect("en")}
            >
              English
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300 flex items-center gap-2"
              onClick={() => handleLanguageSelect("both")}
            >
              <Languages className="h-5 w-5" />
              I'm bilingual, I can go either way!
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};