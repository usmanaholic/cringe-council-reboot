import { HelpCircle } from "lucide-react";

const Emanp = () => {
  return (
    <div className="min-h-screen bg-roast-dark pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-slide-in">
          Eman: A Background Character in a Bad Sitcom 🎬
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-24 h-24 text-roast-accent" />
            </div>
            <div className="space-y-4 text-white/80">
              <p className="text-lg">The third wheel of toxicity 🎭</p>
              <p className="text-lg">Professional backup laugher for Shahan's lame jokes 😂</p>
              <p className="text-lg">Failed NET but still acts superior 📚</p>
              <p className="text-lg">Living proof that NPCs exist in real life 🤖</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">The Full Roast 🔥</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Eman out here acting like the silent supporter of Shahan's roast fest, as if being the sidekick of a villain makes you relevant. Girl, you failed the NET — instead of mocking people, maybe mock your own prep strategy.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                Always lurking in the background, occasionally throwing shade like she's some GC mastermind. But guess what? You're just a faded watermark in the cringe document these people live in. She thinks staying lowkey makes her mysterious — no, it just makes you forgettable. Like background noise in a badly produced podcast.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mt-4">
                If Shahan is the main cringe, Eman is the echo. No identity, no originality — just a "me too" vibe floating in every roast that wasn't even about her. You've got the energy of someone who claps at the end of a movie no one liked. Honestly, her presence in the roast just makes it better — like seasoning on a plate of disaster.
              </p>
            </div>

            <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">NPC Dialogue Options</h2>
              <div className="space-y-2 text-white/80">
                <p>"*Laughs at Shahan's jokes*"</p>
                <p>"I'm actually really smart..."</p>
                <p>"NET doesn't define intelligence!"</p>
                <p>"*Tries to act superior*"</p>
              </div>
            </div>

            <div className="bg-roast-gray/30 rounded-lg p-6 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Special Abilities</h2>
              <p className="text-roast-accent mb-2">
                🎭 Master of Background Support
              </p>
              <p className="text-white/60">
                Can laugh at any joke, no matter how cringe. A true professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emanp;