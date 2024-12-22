import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Join our community and tell us about your interests and dining preferences.",
  },
  {
    number: "02",
    title: "Get Matched",
    description: "We carefully curate dinner parties with like-minded individuals.",
  },
  {
    number: "03",
    title: "Attend Dinner",
    description: "Experience an unforgettable evening of food, conversation, and connection.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-convivio-text mb-4">
            How It Works
          </h2>
          <p className="text-convivio-muted max-w-2xl mx-auto">
            Join our community in three simple steps and start experiencing
            memorable dining moments.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="p-8 hover:shadow-lg transition-shadow">
              <span className="text-5xl font-serif text-convivio-accent opacity-50">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-convivio-text mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-convivio-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};