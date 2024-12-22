import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Join = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: string) => {
    navigate(`/form/${language}`);
  };

  return (
    <div className="min-h-screen bg-convivio-bg flex flex-col items-center justify-center px-4 py-12 space-y-16">
      <div className="max-w-3xl w-full space-y-16">
        <h1 className="text-6xl font-serif text-convivio-text text-center leading-tight">
          Welcome to Convivio Paris
        </h1>
        <div className="space-y-12">
          <h2 className="text-4xl font-serif text-convivio-text text-center">
            Which language feels most comfortable for you?
          </h2>
          <div className="flex flex-col items-center space-y-6">
            <Button 
              onClick={() => handleLanguageSelect("fr")}
              variant="outline"
              className="w-48 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors rounded-xl"
            >
              Francais
            </Button>
            <Button 
              onClick={() => handleLanguageSelect("en")}
              variant="outline"
              className="w-48 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors rounded-xl"
            >
              English
            </Button>
            <Button 
              onClick={() => handleLanguageSelect("en")}
              variant="outline"
              className="w-auto px-8 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors rounded-xl"
            >
              I'm bilingual, I can go either way!
            </Button>
          </div>
        </div>
      </div>
      <Button
        onClick={() => handleLanguageSelect("en")}
        className="bg-convivio-text hover:bg-convivio-text/90 text-white text-xl font-serif px-8 h-14 rounded-xl"
      >
        Connect <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default Join;