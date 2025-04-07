import { Button } from "@/components/ui/button";
import { ArrowRight, Languages, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
    <section className="pt-20 pb-10 bg-convivio-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center gap-12 py-16">
            <div className="text-center md:text-left space-y-6 md:w-1/2 order-1 md:order-1">
              <span className="text-convivio-accent font-medium">Welcome to Convivio</span>
              <h1 className="text-4xl font-serif font-bold text-convivio-text">
                Where Strangers Become Friends Over Exceptional Meals
              </h1>
              <p className="text-convivio-text/90 leading-relaxed">
                Experience intimate dinner gatherings designed to foster genuine connections through shared culinary experiences and heartfelt conversations.
              </p>
              <Button 
                className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors" 
                onClick={() => setShowLanguageModal(true)}
              >
                Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative md:w-1/2 order-2 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-convivio-accent/20 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="overflow-hidden rounded-lg border border-convivio-accent/30 shadow-md">
                  <img src="/lovable-uploads/79b72843-5f5b-45d1-8a40-6dc422feacab.png" alt="Convivio Dining Experience" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
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
            <Button variant="outline" className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300" onClick={() => handleLanguageSelect("fr")}>
              Français
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button variant="outline" className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300" onClick={() => handleLanguageSelect("en")}>
              English
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button variant="outline" className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300 flex items-center gap-2" onClick={() => handleLanguageSelect("both")}>
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
