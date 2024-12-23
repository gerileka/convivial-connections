import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Join = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: string) => {
    navigate(`/form/${language}`);
  };

  return (
    <div className="min-h-screen bg-convivio-bg flex flex-col items-center justify-center px-4 py-12">
      <Card className="max-w-2xl w-full bg-white/50 backdrop-blur-sm border-convivio-text/10">
        <CardContent className="p-12 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif text-convivio-text text-center leading-tight animate-fadeIn">
              Welcome to Convivio Paris
            </h1>
            <div className="w-24 h-1 bg-convivio-accent mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-convivio-text text-center leading-relaxed">
              Which language feels most comfortable for you?
            </h2>
            
            <div className="flex flex-col items-center space-y-4">
              <Button 
                onClick={() => handleLanguageSelect("fr")}
                variant="outline"
                className="w-48 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
              >
                Français
              </Button>
              
              <Button 
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="w-48 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
              >
                English
              </Button>
              
              <Button 
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="w-auto px-8 h-14 text-xl font-serif border-2 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
              >
                I'm bilingual, I can go either way!
              </Button>
            </div>
          </div>
          
          <div className="pt-6">
            <Button
              onClick={() => handleLanguageSelect("en")}
              className="w-full md:w-auto mx-auto flex items-center justify-center bg-convivio-text hover:bg-convivio-text/90 text-white text-xl font-serif px-12 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Connect <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Join;