import { useEffect } from "react";

export const TallyForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="join" className="py-24 bg-convivio-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/r/3N0jvO"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Join Convivio"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};