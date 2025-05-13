
import { useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ThumbsDown, Image, Bug, Trash2, Calculator, Cpu } from 'lucide-react';

interface QuoteItem {
  quote: string;
  author: string;
  icon: React.ReactNode;
  color: string;
}

export function HallOfShame() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const quotes: QuoteItem[] = [
    {
      quote: "She's the kind of person who'll say, 'I'm not toxic, people are just jealous of my vibe.' No, Eman. We're not jealous. We're exhausted.",
      author: "Eman Roast",
      icon: <Bug className="w-6 h-6" />,
      color: "from-roast-accent to-roast-accent/60"
    },
    {
      quote: "Shahan doesn't even try to be funny — He just exists, and the comedy writes itself.",
      author: "Shahan Roast",
      icon: <ThumbsDown className="w-6 h-6" />,
      color: "from-roast-purple to-roast-purple/60"
    },
    {
      quote: "So here lies Nimra's roast: Age: physically 20, spiritually 47. Mindset: 'Marry rich, die richer'",
      author: "Nimra Roast",
      icon: <Trash2 className="w-6 h-6" />,
      color: "from-roast-pink to-roast-pink/60"
    },
    {
      quote: "She drops edits so outdated they look like they were made on Windows XP using MS Paint.",
      author: "Shanzay Roast",
      icon: <Image className="w-6 h-6" />,
      color: "from-roast-gold to-roast-gold/60"
    },
    {
      quote: "Bro literally panicked once because someone said 'Hi' in a slightly louder tone.",
      author: "Sajeel Roast",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-blue-500 to-blue-500/60"
    },
    {
      quote: "Mehreen's presence is like that one cow that stands in the middle of the road and refuses to move.",
      author: "Mehreen Roast",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-green-500/60"
    }
  ];

  return (
    <section className="py-20 relative" id="hall-of-shame">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-white via-white to-roast-muted mb-2">
            Hall of Shame
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Unforgettable moments from our finest roasts
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <Carousel 
            className="w-full" 
            onSelect={(idx) => setActiveIndex(idx)}
          >
            <CarouselContent>
              {quotes.map((item, index) => (
                <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4">
                  <div className="glass-card p-8 rounded-2xl">
                    <div className="flex flex-col items-center text-center">
                      <div className={`bg-gradient-to-r ${item.color} p-4 rounded-full mb-6`}>
                        {item.icon}
                      </div>
                      
                      <blockquote className="text-xl md:text-2xl font-display text-white mb-6 italic">
                        "{item.quote}"
                      </blockquote>
                      
                      <p className="text-roast-accent font-bold">— {item.author}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
          
          <div className="flex justify-center mt-8 gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? "bg-roast-accent w-8" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
