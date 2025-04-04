
import { ArrowRight } from "lucide-react";

const steps = [
  {
    icon: (
      <div className="w-16 h-16 mx-auto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 9h10" />
          <path d="M7 13h6" />
          <path d="M7 17h4" />
        </svg>
      </div>
    ),
    title: "Sign up",
    description: "Answer a few simple questions",
  },
  {
    icon: (
      <div className="w-16 h-16 mx-auto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M8 12.2A3 3 0 0 1 11.2 9H21v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V12.2z" />
          <path d="M3 12.2A3 3 0 0 1 6.2 9H9" />
          <path d="M7 13h2M7 17h2" />
        </svg>
      </div>
    ),
    title: "Get matched",
    description: "We pair you with like-minded guests",
  },
  {
    icon: (
      <div className="w-16 h-16 mx-auto">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M8 21h8m-4-4v4m-8-7l3-2m2-7L8 3M5 8l-3 2m14 0l3-2M13 7l1-4M8 21h8" />
          <path d="M19 13v3a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-3l7-4 7 4Z" />
        </svg>
      </div>
    ),
    title: "Enjoy",
    description: "Meet, dine, and connect!",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-convivio-bg/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-convivio-text mb-4">
            How It Works
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-12 md:mb-0 relative">
                {/* Step */}
                <div className="mb-4 text-convivio-text">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-convivio-text mb-2">
                  {step.title}
                </h3>
                <p className="text-convivio-muted text-center max-w-[200px]">
                  {step.description}
                </p>
                
                {/* Arrow between steps (only for first two) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-8 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-convivio-text/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
