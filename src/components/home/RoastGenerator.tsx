
import { useState } from 'react';
import { Dices, Share2 } from 'lucide-react';

type CharacterName = 'Shahan' | 'Shanzay' | 'Eman' | 'Nimra' | 'Sajeel' | 'Mehreen';

interface RoastLineCollection {
  [key: string]: string[];
}

export function RoastGenerator() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterName | null>(null);
  const [generatedRoast, setGeneratedRoast] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const roastLines: RoastLineCollection = {
    Shahan: [
      "He's like if a Disney villain had Wi-Fi and a gaming headset.",
      "Shahan doesn't care. Because Shahan is not here to be loved. He's here to be LEGENDARY.",
      "One minute you're fighting him in the GC, the next minute you're laughing at his 8-bit gaming memes.",
      "You'll catch him saying stuff like: 'Bro I'm gay, evil and jobless — but at least I'm not Eman.'",
      "Shahan is that one broken, hilarious, beautifully messed-up friend who makes life 100x more interesting."
    ],
    Shanzay: [
      "She drops edits so outdated they look like they were made on Windows XP using MS Paint.",
      "Like fr, what are these?? Old wedding-style edits with pink glitter, 480p quality, and 'forever queen' written in Urdu calligraphy??",
      "Forget Coke Studio, she's straight outta Toilet Tunes Volume 3.",
      "She walks in with that 'main celebrity hoon' vibe like she just met Malik Riaz and he gave her 1,000 rupees as if that's some award of honor.",
      "She HATES when you spell her name wrong. So SHAZANY it is — engraved in HTML, CSS, and your downfall."
    ],
    Eman: [
      "She talks like she's starring in a drama, but it's giving season 35 of 'Yap Yap Ki Duniya'.",
      "Her mouth moves more than the Pakistani government in an election year — nonstop, loud, and full of nothing.",
      "It's like someone gave a megaphone to an overconfident goat and taught it feminism through TikTok comments.",
      "She enters the GC like it's her stage. But nobody claps. Everyone just stares like, 'Why is this cursed energy here again?'",
      "She's the kind of person who'll say, 'I'm not toxic, people are just jealous of my vibe.' No, Eman. We're not jealous. We're exhausted."
    ],
    Nimra: [
      "She says she's 20, but acts like she just came back from giving marriage advice at a Shadi.com seminar.",
      "You scroll through life like it's a catalog of uncles — 'Ooo that one's rich, lemme emotionally attach real quick.'",
      "She walks in with that 'main classy hoon' vibe, but it's giving 'Rich auntie stuck in a Facebook comments section'",
      "The only guy looking at you is the 60-year-old uncle reading his will.",
      "She says stuff like: 'I don't need love, I need luxury.' Sis, you don't need love or luxury — You need reality, a mirror, and a personality upgrade."
    ],
    Sajeel: [
      "Sajeel Nadeem is the only person who can score full marks on a test and still say: 'I could've done better bro.'",
      "He's the kinda guy who'd correct your grammar, apologize immediately, then cry about it later because 'he didn't mean to hurt your feelings.'",
      "Bro literally panicked once because someone said 'Hi' in a slightly louder tone.",
      "Even his heartbreaks are intellectual. Normal guy: 'She left me, I'm sad.' Sajeel: 'The emotional dissonance created by her absence has fractured my cognitive equilibrium.'",
      "He gives powerpoint presentation-level panic when someone rings the doorbell unexpectedly."
    ],
    Mehreen: [
      "The walking combination of lost dreams, overcooked biryani, and missed opportunities — all wrapped in a shawl of sadness and confusion.",
      "If procrastination had a queen, her name would be Queen Mehreen Api of Neverland.",
      "Mehreen's presence is like that one cow that stands in the middle of the road and refuses to move.",
      "Mehreen Api texts like she's applying for an arranged marriage. Every message is a balance of oversharing and soft crying.",
      "She once got emotionally blackmailed by a cat. A CAT, bro."
    ]
  };
  
  const handleGenerateRoast = () => {
    if (!selectedCharacter) return;
    
    setIsGenerating(true);
    
    // Simulate generation delay for effect
    setTimeout(() => {
      const lines = roastLines[selectedCharacter];
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      setGeneratedRoast(randomLine);
      setIsGenerating(false);
    }, 800);
  };
  
  const handleShareRoast = () => {
    if (!generatedRoast || !selectedCharacter) return;
    
    // Create shareable text
    const shareText = `"${generatedRoast}" - ${selectedCharacter} Roast from GC Cringe Council`;
    
    // Use Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'GC Cringe Council Roast',
        text: shareText,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText)
        .then(() => {
          alert('Roast copied to clipboard!');
        })
        .catch(() => {
          alert('Failed to copy. Select and copy manually.');
        });
    }
  };
  
  return (
    <section className="py-20 relative" id="generator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Dices className="w-12 h-12 text-roast-purple mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-roast-purple to-blue-500 mb-2">
            Roast Generator
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Generate a random roast line about any character
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8">
          <div className="mb-8">
            <h3 className="text-white text-xl mb-4">Select a Character:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {Object.keys(roastLines).map((character) => (
                <button
                  key={character}
                  onClick={() => setSelectedCharacter(character as CharacterName)}
                  className={`py-2 px-3 rounded-lg border transition-all ${
                    selectedCharacter === character 
                      ? 'bg-roast-accent text-white border-roast-accent' 
                      : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
                  }`}
                >
                  {character}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <button
              onClick={handleGenerateRoast}
              disabled={!selectedCharacter || isGenerating}
              className={`bg-gradient-to-r from-roast-purple to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all ${
                !selectedCharacter ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-roast-purple/20'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : 'Generate Roast'}
            </button>
          </div>
          
          {generatedRoast && (
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg mb-4 animate-scale-in">
              <blockquote className="text-xl text-white font-display italic mb-3">
                "{generatedRoast}"
              </blockquote>
              <p className="text-right text-roast-accent">— {selectedCharacter} Roast</p>
            </div>
          )}
          
          {generatedRoast && (
            <div className="flex justify-end">
              <button 
                onClick={handleShareRoast}
                className="flex items-center text-white/70 hover:text-roast-accent transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share this roast
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
