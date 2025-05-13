
import { Award, Users } from 'lucide-react';

interface LeaderboardItem {
  name: string;
  cringe: number;
  awareness: number;
  lPoints: number;
}

export function Leaderboard() {
  const leaderboardData: LeaderboardItem[] = [

    { name: "Eman", cringe: 100, awareness: 0, lPoints: 1000000000 },
    { name: "Nimra", cringe: 88, awareness: 20, lPoints: 232 },

    { name: "Shanzay", cringe: 84, awareness: 35, lPoints: 183 },
    { name: "Shahan", cringe: 50, awareness: 15, lPoints: 100},
    { name: "Sajeel", cringe: 40, awareness: 58, lPoints: 50 },
    { name: "Mehreen", cringe: 10, awareness: 60, lPoints: 0 }
  ].sort((a, b) => b.lPoints - a.lPoints);

  return (
    <section className="py-20 relative" id="leaderboard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Award className="w-12 h-12 text-roast-gold mx-auto mb-4 animate-pulse-slow" />
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-roast-gold to-yellow-400 mb-2">
            Cringe Leaderboard
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ranked by total L points - a sophisticated algorithm of pure shame
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-12 gap-2 p-4 border-b border-white/10 text-white/80 font-bold">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-3">Cringe Factor</div>
            <div className="col-span-3">Self-Awareness</div>
            <div className="col-span-2 text-right">L Points</div>
          </div>
          
          {leaderboardData.map((item, index) => (
            <div 
              key={item.name} 
              className={`grid grid-cols-12 gap-2 p-4 border-b border-white/5 ${
                index === 0 ? 'bg-roast-gold/10' : 
                index === 1 ? 'bg-gray-300/10' : 
                index === 2 ? 'bg-yellow-800/10' : ''
              } hover:bg-white/5 transition-colors`}
            >
              <div className="col-span-1 flex items-center">
                {index === 0 ? (
                  <span className="text-roast-gold font-bold">1</span>
                ) : index === 1 ? (
                  <span className="text-gray-300 font-bold">2</span>
                ) : index === 2 ? (
                  <span className="text-yellow-800 font-bold">3</span>
                ) : (
                  <span className="text-white/50">{index + 1}</span>
                )}
              </div>
              
              <div className="col-span-3 flex items-center">
                <a href={`/${item.name.toLowerCase()}`} className="text-white hover:text-roast-accent transition-colors">
                  {item.name}
                </a>
              </div>
              
              <div className="col-span-3">
                <div className="flex items-center">
                  <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden mr-2">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-500 to-red-600"
                      style={{ width: `${item.cringe}%` }}
                    />
                  </div>
                  <span className="text-xs text-white/70">{item.cringe}%</span>
                </div>
              </div>
              
              <div className="col-span-3">
                <div className="flex items-center">
                  <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden mr-2">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500"
                      style={{ width: `${item.awareness}%` }}
                    />
                  </div>
                  <span className="text-xs text-white/70">{item.awareness}%</span>
                </div>
              </div>
              
              <div className="col-span-2 text-right font-bold text-white">
                {item.lPoints}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Users className="w-5 h-5 text-white/50 mr-2" />
          <span className="text-white/50 text-sm">Based on community ratings and expert roast analysis</span>
        </div>
      </div>
    </section>
  );
}
