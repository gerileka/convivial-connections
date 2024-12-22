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
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <h1 className="text-3xl font-serif text-convivio-text text-center">Welcome to Convivio Paris</h1>
          <p className="text-lg text-convivio-muted text-center">Which language feels most comfortable for you?</p>
          <div className="space-y-4">
            <Button 
              onClick={() => handleLanguageSelect("fr")}
              className="w-full bg-convivio-text hover:bg-convivio-accent text-lg py-6"
            >
              Français
            </Button>
            <Button 
              onClick={() => handleLanguageSelect("en")}
              className="w-full bg-convivio-text hover:bg-convivio-accent text-lg py-6"
            >
              English
            </Button>
            <Button 
              onClick={() => handleLanguageSelect("en")}
              className="w-full bg-convivio-text hover:bg-convivio-accent text-lg py-6"
            >
              I am bilingual, I can go either way
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;