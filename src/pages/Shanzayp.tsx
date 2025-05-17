import { Image } from "lucide-react";

const Shanzay = () => {
  return (
    <div className="min-h-screen bg-roast-dark pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-slide-in">
          Shanzay: The Windows XP of Editing 💾
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="flex justify-center mb-6">
              <Image className="w-24 h-24 text-roast-accent" />
            </div>
            <div className="space-y-4 text-white/80">
              <p className="text-lg">Started cool, ended up as cringe as her edits 📱</p>
              <p className="text-lg">Her edits are so outdated, even Windows XP rejected them 💽</p>
              <p className="text-lg">Malik Riaz gave her 1000 rupees and regret 💸</p>
              <p className="text-lg">Trying to be cool since 2012. Still trying. ❄️</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">The Full Roast 🔥</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Shanzay used to seem chill, not gonna lie. But then boom — out comes the "vintage wedding edits" that look like they were made using Microsoft Paint on a laggy Pentium 3. Her idea of flexing is talking about how Malik Riaz gave her 1000 rupees — sis, that's not a flex, that's a pity payment.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                She acts like she met every celebrity alive, but the only place she's ever seen a star is in an Instagram filter. She talks in the GC like she's the main character, but sweetie, even extras in a 90s Lollywood movie got more impact.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                Her roast potential is unlimited — she acts like she's 25 and been through life, but still laughs like a 12-year-old at a poop joke. Cringe, chaotic, and convinced she's superior because she knows how to add a sepia tone to a photo. Ma'am, your attitude is like your edits — outdated and hard to look at.
              </p>
            </div>

            <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Timeline of Cringe</h2>
              <div className="space-y-2 text-white/80">
                <p>2012: Discovered editing apps</p>
                <p>2015: Still using the same filters</p>
                <p>2020: Upgraded to Windows XP</p>
                <p>2025: Time stopped here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shanzay;