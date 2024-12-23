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
    <div className="h-screen bg-convivio-bg flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/5fa4c5e7-4c08-480b-9bd0-bb5b2d5fadc7.png')] bg-cover bg-center opacity-5" />
      
      <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-md border-convivio-text/10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-convivio-accent/0 via-convivio-accent to-convivio-accent/0" />
        
        <CardContent className="p-8 space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-convivio-text leading-tight animate-fadeIn">
              Bienvenue à
              <span className="block mt-2 text-5xl md:text-6xl italic">Convivio Paris</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-convivio-text/20" />
              <Grape className="w-6 h-6 text-convivio-accent" />
              <div className="w-16 h-px bg-convivio-text/20" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-convivio-text text-center leading-relaxed">
              Choose your preferred language
            </h2>

            <div className="grid gap-3 max-w-md mx-auto">
              <Button
                onClick={() => handleLanguageSelect("fr")}
                variant="outline"
                className="group h-14 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <span className="text-xl font-serif">Français</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>

              <Button
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="group h-14 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <span className="text-xl font-serif">English</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>

              <Button
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="group h-14 border-2 border-convivio-text/20 hover:border-convivio-text bg-white/50 hover:bg-white/80 text-convivio-text transition-all duration-300"
              >
                <Languages className="w-5 h-5 mr-2" />
                <span className="text-xl font-serif">I'm bilingual, I can go either way!</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-5 h-5 text-convivio-accent" />
                </div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Join;