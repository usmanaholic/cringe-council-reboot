import { useEffect, useState } from 'react';
import { Flame, Trophy, Skull, Zap, Crown } from 'lucide-react';

const taglines = [
  "Roasting GC's Finest Since 2025",
  "Where Legends Fall & Cringe Rises",
  "Exposing The Hall of Big L's",
  "Your Favorite People's Worst Nightmares"
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              background: `rgba(255, ${Math.random() * 100 + 50}, ${Math.random() * 50}, ${Math.random() * 0.3 + 0.1})`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Loser of the Week Section */}
      <div className="absolute top-6 right-4 md:top-10 md:right-10 z-20 bg-roast-purple/90 backdrop-blur-sm p-4 rounded-xl border-2 border-dashed border-roast-accent animate-wiggle">
        <div className="flex items-center gap-3">
          <Crown className="w-8 h-8 text-yellow-400 animate-spin-slow" />
          <div>
            <p className="text-sm font-bold text-white/80">👑 Current L-Train Rider</p>
            <p className="text-xl font-display text-roast-accent">Eman</p>
            <p className="text-xs text-white/60">"Queen of Awkward Turtle Moments"</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center z-10 px-4 relative">
        {/* Version Badge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
          <Skull className="w-5 h-5 text-roast-accent" />
          <span className="text-sm font-bold text-white">v2.0 - Cringe Edition</span>
        </div>

        <div className="inline-block mb-6 transform hover:scale-105 transition-transform">
          <Flame size={80} className="text-roast-accent animate-flame mx-auto drop-shadow-flame" />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold font-display mb-4 text-gradient bg-gradient-to-r from-roast-accent via-roast-purple to-roast-muted bg-clip-text text-transparent">
          Hall of Cringe
        </h1>
        
        <div className="h-16 mb-8 overflow-hidden">
          <p className="text-xl md:text-3xl text-white/80 overflow-hidden relative h-full">
            {taglines.map((tagline, idx) => (
              <span 
                key={idx} 
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                  idx === taglineIndex 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-full opacity-0"
                }`}
              >
                {tagline}
              </span>
            ))}
          </p>
        </div>

        {/* Cringe of the Month Section */}
        <div className="max-w-2xl mx-auto mb-12 bg-black/30 backdrop-blur-lg p-6 rounded-2xl border-2 border-roast-accent/50 hover:border-roast-accent transition-all group">
          <div className="flex items-center justify-center gap-6 flex-col md:flex-row">
            <div className="relative">
              <Trophy className="w-16 h-16 text-roast-accent animate-trophy-float" />
             
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-white/70 mb-1">🏆 Cringe Monarch of the Month</p>
              <h2 className="text-3xl font-bold text-roast-accent mb-2">Eman</h2>
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-white/80">Unmatched Cringe Streak: 17 Days</span>
              </div>
              <div className="mt-3 w-full bg-black/40 rounded-full h-2.5">
                <div 
                  className="bg-roast-accent h-2.5 rounded-full animate-progress" 
                  style={{ width: '87%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 animate-bounce-slow">
          <a href="/eman" className="inline-block bg-roast-accent hover:bg-roast-purple text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-lg shadow-roast-accent/30">
            Witness the Eman Cringe →
          </a>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-0" />
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black to-transparent z-0" />
    </section>
  );
}