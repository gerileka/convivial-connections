import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Join = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: string) => {
    navigate(`/form/${language}`);
  };

  return (
    <div className="min-h-screen bg-convivio-bg flex items-center justify-center">
      <div className="max-w-lg w-full mx-4">
        <div className="space-y-12 text-center">
          <h1 className="text-4xl font-serif text-convivio-text">Welcome to Convivio Paris</h1>
          <div className="space-y-8">
            <p className="text-xl text-convivio-text">Which language feels most comfortable for you?</p>
            <div className="space-y-4">
              <Button 
                onClick={() => handleLanguageSelect("fr")}
                variant="outline"
                className="w-32 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors"
              >
                Français
              </Button>
              <div>
                <Button 
                  onClick={() => handleLanguageSelect("en")}
                  variant="outline"
                  className="w-32 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors"
                >
                  English
                </Button>
              </div>
              <Button 
                onClick={() => handleLanguageSelect("en")}
                variant="outline"
                className="w-auto px-8 border-convivio-text text-convivio-text hover:bg-convivio-text hover:text-white transition-colors"
              >
                I'm bilingual, I can go either way!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;