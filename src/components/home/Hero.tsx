
import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const taglines = [
  "Roasting GC's Finest Since 2025",
  "Where Legends Fall & Cringe Rises",
  "Exposing The Hall of Big L's",
  "Your Favorite People's Worst Nightmares"
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visitorCount, setVisitorCount] = useLocalStorage("visitorCount", 0);
  
  useEffect(() => {
    // Increment visitor count once per session
    if (sessionStorage.getItem('counted') !== 'true') {
      setVisitorCount(visitorCount + 1);
      sessionStorage.setItem('counted', 'true');
    }
    
    // Rotate taglines
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [visitorCount, setVisitorCount]);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Floating flames */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="bg-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `rgba(255, ${Math.random() * 100 + 50}, ${Math.random() * 50}, ${Math.random() * 0.3 + 0.1})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto text-center z-10 px-4">
        <div className="inline-block mb-6">
          <div className="relative">
            <Flame size={80} className="text-roast-accent animate-flame mx-auto" />
            <div className="absolute -top-1 -right-1 bg-roast-purple/80 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold border border-white/20 animate-pulse">
              2.0
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-4 text-gradient from-white via-white to-roast-muted">
          Hall of Cringe
        </h1>
        
        <div className="h-16 mb-8 overflow-hidden">
          <p className="text-xl md:text-2xl text-white/80 overflow-hidden relative">
            {taglines.map((tagline, idx) => (
              <span 
                key={idx} 
                className={`block absolute transition-all duration-500 w-full ${
                  idx === taglineIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {tagline}
              </span>
            ))}
          </p>
        </div>
        
        <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl inline-block">
          <div className="flex items-center justify-center space-x-3">
            <Flame size={20} className="text-roast-accent animate-pulse-slow" />
            <div>
              <p className="text-sm text-white/70">Total Roast Visitors</p>
              <p className="text-2xl font-bold text-white">{visitorCount.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <a href="#roast-battle" className="bg-roast-accent hover:bg-roast-accent/80 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Explore The Roasts
          </a>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
