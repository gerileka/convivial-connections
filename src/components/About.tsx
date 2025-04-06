
import { Separator } from "@/components/ui/separator";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-convivio-bg/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
          
          <div className="flex flex-col md:flex-row items-center gap-12 py-16">
            <div className="text-center md:text-left space-y-6 md:w-1/2 order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-convivio-text">
                About Convivio
              </h2>
              <p className="text-convivio-text/90 leading-relaxed">
                The word <em className="text-convivio-accent font-medium">convivio</em>, from Italian, celebrates the joy of coming together around a table to share meals, laughter, and meaningful conversation.
              </p>
              <p className="text-convivio-text/90 leading-relaxed">
                At Convivio, we embrace generosity, hospitality, and the magic of real human connection.
              </p>
              <p className="text-convivio-text/90 leading-relaxed">
                Every dinner is an invitation — not just to eat, but to feel welcome, seen, and part of something special.
              </p>
              <p className="text-convivio-text/90 leading-relaxed">
                Join us for an experience that's about more than food — it's about the people around the table.
              </p>
            </div>
            
            <div className="relative md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-convivio-accent/20 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="overflow-hidden rounded-lg border border-convivio-accent/30 shadow-md">
                  <img 
                    src="/lovable-uploads/b81388aa-ebc6-4fae-ad59-99e35ebd9789.png" 
                    alt="A warm Convivio dinner scene" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="w-24 h-[2px] mx-auto bg-convivio-accent/40" />
        </div>
      </div>
    </section>
  );
};
