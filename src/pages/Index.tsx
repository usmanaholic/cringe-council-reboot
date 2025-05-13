
import { Hero } from '@/components/home/Hero';
import { RoastBattle } from '@/components/home/RoastBattle';
import { Leaderboard } from '@/components/home/Leaderboard';
import { CringeCategories } from '@/components/home/CringeCategories';
import { HallOfShame } from '@/components/home/HallOfShame';
import { RoastGenerator } from '@/components/home/RoastGenerator';
import { CommunitySubmissions } from '@/components/home/CommunitySubmissions';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="bg-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              background: i % 3 === 0 
                ? `rgba(255, ${Math.random() * 77}, 0, ${Math.random() * 0.15 + 0.05})` 
                : i % 3 === 1
                ? `rgba(155, 135, 245, ${Math.random() * 0.15 + 0.05})` 
                : `rgba(255, 215, 0, ${Math.random() * 0.15 + 0.05})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`
            }}
          />
        ))}
      </div>

      <Hero />
   <CringeCategories />
      <Leaderboard />
   
      <HallOfShame />
 

      
      <footer className="bg-black/40 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60">© 2025 GC Cringe Council Roast. All rights reserved.</p>
          <p className="text-white/40 text-sm mt-2">This site is a work of comedic fiction.</p>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
