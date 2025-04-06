
import { ArrowRight, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-convivio-text">Convivio</h3>
            <p className="text-convivio-muted">
              Connecting people through curated dining experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/convivio__paris" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-convivio-muted hover:text-convivio-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-convivio-text mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-convivio-muted">Paris, France</li>
              <li>
                <a href="mailto:convivio.mailing@gmail.com" className="text-convivio-muted hover:text-convivio-accent transition-colors">
                  convivio.mailing@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-convivio-text mb-4">Newsletter</h4>
            <p className="text-convivio-muted mb-4">
              Stay updated with our latest events and news.
            </p>
            <button className="text-convivio-text hover:text-convivio-accent transition-colors inline-flex items-center">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-convivio-muted">
          <p>&copy; {new Date().getFullYear()} Convivio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
