
import { Separator } from "@/components/ui/separator";

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
    title: "You answer a few fun questions",
    description: "Nothing serious - just the kind of stuff you'd share over aperitivo. Think: What's your karaoke song? What's your relationship with coriander? That sort of thing.",
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
    title: "We work our matchmaking magic",
    description: "Behind the scenes, we pair you with a small group of strangers whose answers vibe with yours (or clash in just the right way). A mix of shared tastes and delightful differences.",
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
    title: "You show up, we handle the rest",
    description: "We pick the spot, set the table, and break the ice. You just bring yourself and an appetite for food and conversation.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-convivio-bg/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
          
          <div className="py-16 space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-serif font-bold text-convivio-text mb-4">
                How It Works
              </h2>
              <p className="text-convivio-text/80 max-w-2xl mx-auto italic font-medium">
                A little magic (and a little matchmaking)
              </p>
              <p className="text-convivio-text/80 max-w-2xl mx-auto mt-4">
                We bring strangers together around good food and better conversation.
                Here's how it works:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-convivio-bg p-4 rounded-lg border border-convivio-accent/20 mb-4 inline-block group-hover:border-convivio-accent/40 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-convivio-text mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-convivio-text/80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
        </div>
      </div>
    </section>
  );
};
