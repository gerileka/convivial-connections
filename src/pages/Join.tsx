import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Grape, Languages, Sparkles } from "lucide-react";

const Join = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: string) => {
    navigate(`/form/${language}`);
  };

  return (
    <div className="min-h-screen bg-convivio-bg flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5fa4c5e7-4c08-480b-9bd0-bb5b2d5fadc7.png')] bg-cover bg-center opacity-5" />
      
      <Card className="w-full max-w-3xl bg-white/80 backdrop-blur-md border-convivio-text/10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-convivio-accent/0 via-convivio-accent to-convivio-accent/0" />
        
        <CardContent className="p-8 md:p-12 space-y-12">
          <div className="space-y-6 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-convivio-text leading-tight animate-fadeIn">
              Bienvenue à
              <span className="block mt-2 text-5xl md:text-7xl italic">Convivio Paris</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-convivio-text/20" />
              <Grape className="w-6 h-6 text-convivio-accent" />
              <div className="w-16 h-px bg-convivio-text/20" />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif text-convivio-text text-center leading-relaxed">
              Choose your preferred language
            </h2>

            <div className="grid gap-4 max-w-md mx-auto">
              <Button
                onClick={() => handleLanguageSelect("fr")}
                variant="outline"
                className="group h-16 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <span className="text-xl font-serif">Français</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>

              <Button
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="group h-16 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <span className="text-xl font-serif">English</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>

              <Button
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="group h-16 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <Languages className="w-5 h-5 mr-2" />
                <span className="text-xl font-serif">Bilingual</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-convivio-text/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white/80 px-4 text-sm text-convivio-text/60 font-serif">
                or
              </span>
            </div>
          </div>

          <Button
            onClick={() => handleLanguageSelect("en")}
            className="w-full md:w-auto mx-auto flex items-center justify-center bg-convivio-text hover:bg-convivio-text/90 text-white text-xl font-serif px-12 h-16 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Connect Now
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Join;