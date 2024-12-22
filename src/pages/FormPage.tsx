import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FormPage = () => {
  const { language } = useParams();
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formSrc = language === "fr" 
    ? "https://tally.so/r/3N0jZl"
    : "https://tally.so/r/w2rWVM";

  return (
    <div className="h-screen w-screen">
      <iframe
        data-tally-src={formSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={`Convivio Form - ${language === "fr" ? "FR" : "EN"}`}
        className="absolute inset-0"
      ></iframe>
    </div>
  );
};

export default FormPage;