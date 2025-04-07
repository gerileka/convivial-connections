import { Separator } from "@/components/ui/separator";

const steps = [
  {
    title: "You answer a few fun questions",
    description: "Nothing serious - just the kind of stuff you'd share over aperitivo. Think: What's your karaoke song? What's your relationship with coriander? That sort of thing.",
  },
  {
    title: "We work our matchmaking magic",
    description: "Behind the scenes, we pair you with a small group of strangers whose answers vibe with yours (or clash in just the right way). A mix of shared tastes and delightful differences.",
  },
  {
    title: "You show up, we handle the rest",
    description: "We pick the spot, set the table, and break the ice. You just bring yourself and an appetite for food and conversation.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-10 pb-20 bg-convivio-bg/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
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
                  <h3 className="text-xl font-serif font-bold text-convivio-text mb-2">
                    {step.title}
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
