
import { Trash2 } from "lucide-react";

const Nimra = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-roast-dark to-black pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-roast-accent/80 mb-8 animate-slide-in">
          Nimra: Gold Digger Gone Wrong – Auntycore Edition 💄👜
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 h-fit">
            <div className="flex justify-center mb-6">
              <Trash2 className="w-24 h-24 text-roast-accent" />
            </div>
            <div className="space-y-4 text-white/80">
              <p className="text-lg">The aura: Puraani aunty energy with the delusion of a Gen Z influencer 👵</p>
              <p className="text-lg">Dream plan: Marry rich old, inherit, marry young gym bro 💰</p>
              <p className="text-lg">Fake classy with big "Main Facebook comments section mein rehti hoon" energy 📱</p>
              <p className="text-lg">The only people turning heads: ceiling fans 💀</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">The Full Roast 🔥</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Introducing Nimra — the one-woman cringe festival who talks like she's auditioning for Desperate Housewives: Gulshan Block C Edition. She says she's 20, but acts like she just came back from giving marriage advice at a Shadi.com seminar.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                You scroll through life like it's a catalog of uncles — "Ooo that one's rich, lemme emotionally attach real quick." 💅 Her dream wedding plan? 1. Marry a 60-year-old millionaire, 2. Wait for him to die, 3. Loot all his money, 4. Marry a young gym bro. Like what in the "Netflix true crime documentary" is this??
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                Her mouth opens and suddenly the room smells like expired judgment and self-obsession. She walks in with that "main classy hoon" vibe, but it's giving: "Rich auntie stuck in a Facebook comments section," "Beta, mujhe WhatsApp par photo kaise bhejni hai?" and "Mujhe bas Gucci ka bag chahiye warna zindagi barbaad hai."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Most Memorable Quotes</h2>
              <div className="space-y-3 text-white/90">
                <p className="italic">"I don't need love, I need luxury."</p>
                <p className="italic">"He left a diamond for a stone."</p>
                <p className="italic">"Mujhe lagta hai mujhe ladkiyan zyada samajhti hain…"</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Final Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-roast-dark/40 p-3 rounded-lg">
                  <p className="text-roast-accent font-semibold">Age</p>
                  <p className="text-white">Physically 20, spiritually 47</p>
                </div>
                <div className="bg-roast-dark/40 p-3 rounded-lg">
                  <p className="text-roast-accent font-semibold">Mindset</p>
                  <p className="text-white">"Marry rich, die richer"</p>
                </div>
                <div className="bg-roast-dark/40 p-3 rounded-lg">
                  <p className="text-roast-accent font-semibold">Personality</p>
                  <p className="text-white">Bank account empty, ego in billions</p>
                </div>
                <div className="bg-roast-dark/40 p-3 rounded-lg">
                  <p className="text-roast-accent font-semibold">Relevance</p>
                  <p className="text-white">Missing since 2004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nimra;
