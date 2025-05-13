
import { useState, useEffect } from 'react';
import { Flame, ThumbsDown, Bug } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Character {
  name: string;
  image: React.ReactNode;
  votes: number;
}

export function RoastBattle() {
  const { toast } = useToast();
  const [characters, setCharacters] = useState<Character[]>([
    { name: "Shahan", image: <ThumbsDown className="w-16 h-16 text-roast-accent" />, votes: 42 },
    { name: "Eman", image: <Bug className="w-16 h-16 text-roast-accent" />, votes: 38 }
  ]);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 20
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleVote = (index: number) => {
    setCharacters(prev => {
      const newChars = [...prev];
      newChars[index].votes += 1;
      return newChars;
    });
    
    toast({
      title: `You voted for ${characters[index].name}!`,
      description: "Your vote for the biggest L has been counted.",
      variant: "default",
    });
  };
  
  return (
    <section id="roast-battle" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-roast-accent to-roast-pink mb-2">
            Weekly Roast Battle
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Vote for who deserves the biggest L this week
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
          {characters.map((char, idx) => (
            <div 
              key={char.name}
              className="w-full md:w-5/12 glass-card p-6 rounded-2xl mb-8 md:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-roast-dark/70 p-6 mb-4">
                  {char.image}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{char.name}</h3>
                <div className="text-xl font-bold text-roast-accent mb-4">
                  {char.votes} Votes
                </div>
                <button
                  onClick={() => handleVote(idx)}
                  className="w-full bg-gradient-to-r from-roast-accent to-roast-pink text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-roast-accent/30 hover:scale-105"
                >
                  Vote as Biggest L
                </button>
              </div>
            </div>
          ))}
          
          <div className="hidden md:flex flex-col items-center justify-center">
            <div className="relative h-24 w-24 flex items-center justify-center">
              <Flame className="absolute inset-0 w-24 h-24 text-roast-accent opacity-20 animate-pulse-slow" />
              <span className="text-3xl font-bold text-white">VS</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl font-bold text-white mb-4">Next Battle Update In:</h4>
          <div className="flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="glass-card p-3 rounded-lg min-w-[70px]">
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="text-xs text-white/60">{unit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
