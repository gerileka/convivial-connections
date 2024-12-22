import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-serif text-convivio-text">
            Convivio
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#concept" className="text-convivio-text hover:text-convivio-accent transition-colors">
              Concept
            </a>
            <a href="#how-it-works" className="text-convivio-text hover:text-convivio-accent transition-colors">
              How it Works
            </a>
            <Button 
              className="bg-convivio-text text-white hover:bg-convivio-accent transition-colors"
              onClick={() => navigate("/join")}
            >
              Join Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};