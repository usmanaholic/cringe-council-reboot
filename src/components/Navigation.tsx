
import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const people = [
    "shahan", "shanzay", "eman", "nimra", "sajeel", "mehreen"
  ];

  return (
    <nav className="fixed top-0 w-full bg-roast-dark/95 backdrop-blur-sm border-b border-roast-accent/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Flame className="w-6 h-6 text-roast-accent animate-flame" />
            <span className="font-bold text-white">GC Cringe Council</span>
          </Link>
          
          {isMobile ? (
            <>
              <button 
                onClick={toggleMenu}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-roast-dark/98 backdrop-blur-md border-b border-roast-accent/20 p-4">
                  <div className="flex flex-col space-y-4 py-2">
                    {people.map(person => (
                      <Link 
                        key={person}
                        to={`/${person}`} 
                        className="text-white capitalize hover:text-roast-accent transition-colors py-2 border-b border-white/10"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {person}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex space-x-6">
              {people.map(person => (
                <Link 
                  key={person}
                  to={`/${person}`} 
                  className="text-white capitalize hover:text-roast-accent transition-colors"
                >
                  {person}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
