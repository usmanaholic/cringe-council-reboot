
import { Image, MessageSquare, ThumbsDown, Calculator, Bug, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Category {
  name: string;
  icon: React.ReactNode;
  description: string;
  character: string;
}

export function CringeCategories() {
  const categories: Category[] = [
    {
      name: "Delusion King SHAHAN",
      icon: <ThumbsDown className="w-6 h-6 text-roast-accent" />,
      description: "Masters of their own imaginary universe",
      character: "shahan"
    },
    {
      name: "Bathroom Star SHANZAY",
      icon: <Image className="w-6 h-6 text-roast-accent" />,
      description: "Singing like they're famous, but only in the shower",
      character: "shanzay"
    },
    {
      name: "Non-Stop Talker EMAN",
      icon: <Bug className="w-6 h-6 text-roast-accent" />,
      description: "Speaking with infinite energy but zero content",
      character: "eman"
    },
    {
      name: "Gold Digger Goal NIMRA",
      icon: <ThumbsDown className="w-6 h-6 text-roast-accent" />,
      description: "Marriage as a financial strategy, not love",
      character: "nimra"
    },
    {
      name: "Genius Crybaby SAJEEL",
      icon: <Calculator className="w-6 h-6 text-roast-accent" />,
      description: "Smart enough to solve equations, too sensitive to handle jokes",
      character: "sajeel"
    },
    {
      name: "Perpetual Failure MEHREEN",
      icon: <Cpu className="w-6 h-6 text-roast-accent" />,
      description: "Making failure a lifestyle choice, not an event",
      character: "mehreen"
    }
  ];

  return (
    <section className="py-20 relative" id="categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-roast-purple to-roast-pink mb-2">
            Cringe Categories
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore the specialized fields of embarrassment
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/${category.character}`}
              className="glass-card glass-card-hover rounded-xl overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-roast-dark/50 rounded-lg mr-3 group-hover:bg-roast-accent/20 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-roast-accent transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <p className="text-white/70 mb-4">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-roast-accent">View Collection</span>
                  <MessageSquare className="w-4 h-4 text-white/40 group-hover:text-roast-accent transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
