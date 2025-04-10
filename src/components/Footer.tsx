import { ArrowRight, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-convivio-bg/90 pt-12 border-t border-convivio-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-convivio-text">Convivio</h3>
            <p className="text-convivio-text/80">
              Connecting people through curated dining experiences.
            </p>
            <div className="flex items-center">
              <a 
                href="https://www.instagram.com/convivio__paris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-convivio-text/80 hover:text-convivio-accent transition-colors inline-flex items-center"
                aria-label="Follow Convivio on Instagram"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-convivio-text mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-convivio-text/80">Paris, France</li>
              <li>
                <a href="mailto:convivio.mailing@gmail.com" className="text-convivio-text/80 hover:text-convivio-accent transition-colors">
                  convivio.mailing@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-convivio-text mb-4">Newsletter</h4>
            <p className="text-convivio-text/80 mb-4">
              Stay updated with our latest events and news.
            </p>
            <button className="text-convivio-text hover:text-convivio-accent transition-colors inline-flex items-center group">
              Subscribe <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="border-t border-convivio-accent/20 mt-12 pt-8 text-center text-convivio-text/70">
          <p>&copy; {new Date().getFullYear()} Convivio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
