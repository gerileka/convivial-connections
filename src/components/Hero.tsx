
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
  
  // Using the uploaded dinner image
  const heroImage = "/lovable-uploads/ae8c2719-a117-400b-9dae-04deb359b2f6.png";
  const originalImage = "/lovable-uploads/723a9b50-dca6-43d7-8d22-2c75dd093c26.png";

  const handleLanguageSelect = (language: string) => {
    setShowLanguageModal(false);
    navigate(`/form/${language}`);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-convivio-bg pt-16 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Mobile-first design with stacked layout */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Text content - Stacked on mobile, side-by-side on desktop */}
          <div className="order-2 md:order-1 md:w-1/2 space-y-6 animate-fadeIn text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-convivio-accent/10 text-convivio-accent font-medium rounded-full text-sm">
              Welcome to Convivio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-convivio-text leading-tight">
              Where Strangers Become Friends Over Dinner
            </h1>
            <p className="text-lg text-convivio-muted max-w-lg mx-auto md:mx-0">
              Join intimate gatherings where meaningful conversations flow as freely as the wine, creating connections that last far beyond dessert.
            </p>
            <Button 
              className="bg-convivio-text hover:bg-convivio-accent text-white transition-colors duration-300 rounded-full px-6 py-6 h-auto text-base"
              onClick={() => setShowLanguageModal(true)}
            >
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Image container - Stacked on mobile, side-by-side on desktop */}
          <div className="order-1 md:order-2 md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] animate-fadeIn">
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-black/10 z-10"></div>
              
              {/* Mobile - main image overlay */}
              <img
                src={heroImage}
                alt="Convivio Dining Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Desktop - second layered image for depth */}
              <img
                src={originalImage}
                alt=""
                className="hidden md:block absolute -bottom-10 -right-10 w-1/2 h-2/3 object-cover rounded-2xl shadow-lg opacity-80 rotate-6 z-0"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 right-6 z-20">
                <div className="w-20 h-1 bg-convivio-accent rounded-full opacity-70"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-sm font-light italic text-white drop-shadow-md">
                  Every meal is a chance to make new connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection Modal */}
      <Dialog open={showLanguageModal} onOpenChange={setShowLanguageModal}>
        <DialogContent className="sm:max-w-md rounded-2xl border-convivio-accent/20">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl text-convivio-text">
              Choose Your Language
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300 rounded-xl"
              onClick={() => handleLanguageSelect("fr")}
            >
              Français
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300 rounded-xl"
              onClick={() => handleLanguageSelect("en")}
            >
              English
              <Sparkles className="ml-auto h-5 w-5 text-convivio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button
              variant="outline"
              className="group h-14 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20 hover:border-convivio-accent transition-all duration-300 rounded-xl flex items-center gap-2"
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
