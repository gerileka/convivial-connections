
import { Button } from "@/components/ui/button";
import { ArrowRight, Languages, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

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
        <div className="max-w-6xl mx-auto">
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40 mb-16" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <span className="text-convivio-accent font-medium">Welcome to Convivio</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-convivio-text leading-tight">
                Connect Over Curated Dining Experiences
              </h1>
              <p className="text-lg text-convivio-text/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                Join intimate dinner parties where strangers become friends over exceptional food and meaningful conversations.
              </p>
              <Button 
                className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors mt-4"
                onClick={() => setShowLanguageModal(true)}
              >
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative order-first md:order-last mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-convivio-accent/20 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="overflow-hidden rounded-lg border border-convivio-accent/30 shadow-md">
                  <img
                    src="/lovable-uploads/0e961c5a-8778-4551-8fe0-2c4ca39e765f.png"
                    alt="Convivio Dining Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40 mt-16" />
        </div>
      </div>

      <Dialog open={showLanguageModal} onOpenChange={setShowLanguageModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl text-convivio-text">
              Choose Your Language
            </DialogTitle>
            <DialogDescription className="text-center text-convivio-text/80">
              Select your preferred language for the application form.
            </DialogDescription>
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
