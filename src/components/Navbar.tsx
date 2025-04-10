import { useState, useEffect } from "react";
import { ArrowRight, Languages, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageSelect = (language: string) => {
    setShowLanguageModal(false);
    navigate(`/form/${language}`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-serif text-convivio-text">
              Convivio
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-convivio-text hover:text-convivio-accent transition-colors">
                About
              </a>
              <a href="#how-it-works" className="text-convivio-text hover:text-convivio-accent transition-colors">
                How it Works
              </a>
              <Button 
                className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors"
                onClick={() => setShowLanguageModal(true)}
              >
                Be part of the next story <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-convivio-text" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#about" className="text-convivio-text hover:text-convivio-accent transition-colors text-lg">
                    About
                  </a>
                  <a href="#how-it-works" className="text-convivio-text hover:text-convivio-accent transition-colors text-lg">
                    How it Works
                  </a>
                  <Button 
                    className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors w-full"
                    onClick={() => setShowLanguageModal(true)}
                  >
                    Be part of the next story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <Dialog open={showLanguageModal} onOpenChange={setShowLanguageModal}>
        <DialogContent className="sm:max-w-md bg-convivio-bg border border-convivio-accent/20">
          <DialogHeader>
            <DialogTitle className="text-center font-serif text-2xl text-convivio-text mb-2">
              Choose Your Language
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <Button
              variant="outline"
              className="h-12 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20"
              onClick={() => handleLanguageSelect("fr")}
            >
              Français
            </Button>
            <Button
              variant="outline"
              className="h-12 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20"
              onClick={() => handleLanguageSelect("en")}
            >
              English
            </Button>
            <Button
              variant="outline"
              className="h-12 text-lg font-serif hover:bg-convivio-accent/10 hover:text-convivio-accent border-convivio-text/20"
              onClick={() => handleLanguageSelect("both")}
            >
              Franglais (Both Languages)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
