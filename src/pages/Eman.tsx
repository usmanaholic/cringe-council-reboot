
import { Bug } from "lucide-react";

const Eman = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-roast-dark to-black pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-roast-accent/80 mb-8 animate-slide-in">
          Eman Fatima: The Yapping YouTube Ad You Can't Skip 💥
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 h-fit">
            <div className="flex justify-center mb-6">
              <Bug className="w-24 h-24 text-roast-accent" />
            </div>
            <div className="space-y-4 text-white/80">
              <p className="text-lg">Mouth: nonstop 🗣️</p>
              <p className="text-lg">Logic: unavailable 📴</p>
              <p className="text-lg">Vibe: 404 Not Found 🚫</p>
              <p className="text-lg">NET score: classified due to national embarrassment 📉</p>
              <p className="text-lg">Fashion sense: 2020 TikTok threw up on a mehndi function 👗</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">The Full Roast 🔥</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Ladies and gentlemen, welcome to the tragic tale of Eman Fatima — the self-proclaimed "baddie", "princess", and "future CEO", who in reality is just a walking cringe compilation with a Wi-Fi connection.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                She talks like she's starring in a drama, but it's giving season 35 of "Yap Yap Ki Duniya". Her mouth moves more than the Pakistani government in an election year — nonstop, loud, and full of nothing. If she ever goes quiet, people might think there's a national emergency.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                You ever seen someone so fake, even Barbie would feel insecure? That's Eman. She says things like "I'm not like other girls" while wearing the exact same cringe "I'm daddy's princess" hoodie that AliExpress stopped selling in 2019 because it was too embarrassing.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Life Goals</h2>
              <p className="text-white/80 mb-3">
                Eman's ambitious life plan:
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-roast-accent">✓</span>
                  <span className="text-white/90">Marrying a rich guy</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-roast-accent">✓</span>
                  <span className="text-white/90">Living in a mansion</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-roast-accent">✓</span>
                  <span className="text-white/90">Owning a pink Mercedes she can't even reverse park</span>
                </p>
              </div>
              <p className="text-white/80 mt-3">
                In reality, she's failing harder than Internet Explorer trying to load a modern website.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Memorable Quotes</h2>
              <div className="p-3 bg-roast-dark/40 rounded-lg mb-3">
                <p className="italic text-white/90">"I'm not toxic, people are just jealous of my vibe."</p>
              </div>
              <p className="text-white/80">
                No, Eman. We're not jealous. We're exhausted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eman;
