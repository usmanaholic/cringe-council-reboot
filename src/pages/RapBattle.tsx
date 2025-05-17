import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mic, Music, Award, ThumbsUp, Volume2, Flame } from 'lucide-react';
import Navigation from '@/components/Navigation';

const RapBattle = () => {
  const { toast } = useToast();
  const [activeVerse, setActiveVerse] = useState(0);
  const [votedFor, setVotedFor] = useState<string | null>(null);
  const [votes, setVotes] = useState({
    mehreen: Math.floor(Math.random() * 20) + 30,
    eman: Math.floor(Math.random() * 20) + 30
  });
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-scroll through verses with delay
  useEffect(() => {
    if (isPlaying && activeVerse < verses.length - 1) {
      const timer = setTimeout(() => {
        setActiveVerse(prev => prev + 1);
      }, 8000); // Time to read each verse
      return () => clearTimeout(timer);
    }
  }, [activeVerse, isPlaying]);

  const verses = [
    {
      rapper: "mehreen",
      name: "Mehreen",
      title: "The Bail with a Heart of Gold",
      avatar: "👩‍🍳",
      content: [
        "Eman Fatima, girl sit down, don't trip on your fake crown,",
        "You talk like you're royal but act like a circus clown.",
        "You call yourself a princess? In which fairytale?",
        "Cuz even Cinderella wouldn't wear that glitter fail.",
        "Your Wi-Fi runs on delusion, your ego's on boost,",
        "But sis, you've failed more times than my last NET boost.",
        "You yap like a speaker that won't shut off,",
        "Even Siri gets confused and says 'I'm off!'",
        "You say you're a CEO? Of what, cringe.com?",
        "You couldn't run a lemonade stand without yelling at your mom."
      ],
      color: "from-green-500 to-green-500/60",
      hype: "Sweet but savage"
    },
    {
      rapper: "eman",
      name: "Eman Fatima",
      title: "The Cringe Queen Churail",
      avatar: "🎀",
      content: [
        "Mehreen api? More like Mehreen aunty,",
        "Failed NET four times, still acting all jaunty.",
        "You're sweet, sure, like unsalted daal,",
        "And your cooking's a weapon — call the food recall!",
        "You're shaped like a bail and soft like a naan,",
        "Tryna roast me? Sis, you can't even turn on the fan.",
        "You're a walking TED Talk on how not to succeed,",
        "Even your fridge rejects your cooking with a 'please no' plead.",
        "At least I own my cringe — I serve drama with flair,",
        "You just sit there getting played like solitaire."
      ],
      color: "from-roast-pink to-roast-pink/60",
      hype: "Drama queen"
    },
    {
      rapper: "mehreen",
      name: "Mehreen",
      title: "The Bail with a Heart of Gold",
      avatar: "🥛",
      content: [
        "I might be a bail, but at least I'm not fake,",
        "You're so plastic, the ocean gave you back for the earth's sake.",
        "You post those quotes like you're deep and classy,",
        "But even your captions scream 'Help me, I'm sassy!'",
        "I may burn the toast, but at least I feed hearts,",
        "You just burn friendships and call it 'girlboss art'.",
        "You think being loud is a personality trait,",
        "But even your shadow tries to separate."
      ],
      color: "from-green-500 to-green-500/60",
      hype: "Serving truth"
    },
    {
      rapper: "eman",
      name: "Eman Fatima",
      title: "The Cringe Queen Churail",
      avatar: "🔥",
      content: [
        "Mehreen darling, you talk big for a flop queen,",
        "Even your alarm clock's like, 'Stay asleep, queen.'",
        "You're so sweet, people forget you're alive,",
        "You could stand in a room and still not vibe.",
        "Your fashion's stuck in 2003,",
        "Wearing floral prints like they're Gucci V.I.P.",
        "You're like a calm before a nap, all soft and slow,",
        "I'm the plot twist, the chaos — the Eman show!"
      ],
      color: "from-roast-pink to-roast-pink/60",
      hype: "Snapping back"
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (activeVerse < verses.length - 1) {
      setActiveVerse(activeVerse + 1);
    }
  };

  const handlePrev = () => {
    if (activeVerse > 0) {
      setActiveVerse(activeVerse - 1);
    }
  };

  const handleVote = (contestant: string) => {
    if (votedFor) {
      toast({
        title: "You already voted!",
        description: `You've already cast your vote for ${votedFor.charAt(0).toUpperCase() + votedFor.slice(1)}.`,
        variant: "destructive",
      });
      return;
    }

    setVotedFor(contestant);
    setVotes(prev => ({
      ...prev,
      [contestant]: prev[contestant as keyof typeof prev] + 1
    }));

    toast({
      title: `Vote Cast! 🎤`,
      description: `You voted for ${contestant.charAt(0).toUpperCase() + contestant.slice(1)}!`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-roast-dark to-black text-white pb-16">
      <Navigation />
      
      <div className="pt-24 pb-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold font-display text-gradient from-roast-purple via-roast-pink to-roast-accent mb-4">
              Epic Rap Battle
            </h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mic className="text-roast-accent animate-pulse" />
              <h2 className="text-2xl md:text-3xl text-white">Mehreen vs Eman</h2>
              <Mic className="text-roast-accent animate-pulse" />
            </div>
            <p className="text-xl text-white/70 mb-8">Theme: The Bail vs. The Churail</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8">
              <button
                onClick={handlePrev}
                disabled={activeVerse === 0}
                className={`px-4 py-2 rounded-lg font-semibold border border-roast-accent text-roast-accent bg-black/30 hover:bg-roast-accent/20 transition disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Previous
              </button>
              <button
                onClick={handlePlayPause}
                className={`px-4 py-2 rounded-lg font-semibold border border-roast-accent text-roast-accent bg-black/30 hover:bg-roast-accent/20 transition`}
              >
                {isPlaying ? "Pause" : "Auto-Play"}
              </button>
              <button
                onClick={handleNext}
                disabled={activeVerse === verses.length - 1}
                className={`px-4 py-2 rounded-lg font-semibold border border-roast-accent text-roast-accent bg-black/30 hover:bg-roast-accent/20 transition disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Next
              </button>
            </div>
          </div>
          
          {/* Battle Stage */}
          <div className="max-w-5xl mx-auto relative">
            {/* Stage background */}
            <div className="absolute inset-0 bg-gradient-radial from-roast-accent/20 to-transparent rounded-3xl opacity-50 blur-xl -z-10"></div>
            
            {/* Spotlight effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-roast-pink/30 rounded-full blur-3xl -z-10"></div>
            
            {/* Verses */}
            <div className="glass-card p-4 md:p-8 rounded-3xl border border-white/20">
              <div className={`flex flex-col md:flex-row items-start gap-4 animate-fade-in`}>
                {/* Rapper icon */}
                <div className={`text-5xl bg-gradient-to-r ${verses[activeVerse].color} p-4 rounded-full min-w-16 flex items-center justify-center mb-2 md:mb-0`}>
                  {verses[activeVerse].avatar}
                </div>
                {/* Verse content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">{verses[activeVerse].name}</h3>
                    <span className="bg-black/30 text-xs px-2 py-1 rounded-full">
                      {verses[activeVerse].hype}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{verses[activeVerse].title}</p>
                  <div className="space-y-2">
                    {verses[activeVerse].content.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-base md:text-xl font-medium animate-scale-in"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-8 flex gap-2 justify-center flex-wrap">
                {verses.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVerse(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeVerse === idx
                        ? verses[idx].rapper === "mehreen"
                          ? "bg-green-500 w-12"
                          : "bg-roast-pink w-12"
                        : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                    aria-label={`Go to verse ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Voting section */}
            <div className="mt-16">
              <h3 className="text-center text-2xl md:text-3xl font-display mb-8 text-gradient from-white to-roast-muted">
                Who Won This Battle? Cast Your Vote! 🔥
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
                {/* Mehreen */}
                <div className="flex-1 max-w-md glass-card p-6 rounded-2xl border border-green-500/30 hover:border-green-500/50 transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-5xl mb-4">👩‍🍳</div>
                    <h4 className="text-2xl font-bold mb-1">Mehreen</h4>
                    <p className="text-white/70 mb-4">The Bail with a Heart of Gold</p>
                    
                    <div className="text-3xl font-mono text-green-500 mb-4">
                      {votes.mehreen} <span className="text-sm text-white/60">votes</span>
                    </div>
                    
                    <Button
                      className={`bg-green-500 hover:bg-green-600 text-white ${votedFor === "mehreen" ? "animate-glow" : ""}`}
                      onClick={() => handleVote("mehreen")}
                      disabled={!!votedFor}
                    >
                      <ThumbsUp className="mr-2" />
                      {votedFor === "mehreen" ? "Voted!" : "Vote for Mehreen"}
                    </Button>
                  </div>
                </div>
                
                {/* VS Badge */}
                <div className="flex items-center justify-center">
                  <div className="bg-black/70 text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center backdrop-blur-lg border-2 border-roast-accent/50">
                    <span className="text-xl md:text-2xl font-bold">VS</span>
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                {/* Eman */}
                <div className="flex-1 max-w-md glass-card p-6 rounded-2xl border border-roast-pink/30 hover:border-roast-pink/50 transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-5xl mb-4">🎀</div>
                    <h4 className="text-2xl font-bold mb-1">Eman Fatima</h4>
                    <p className="text-white/70 mb-4">The Cringe Queen Churail</p>
                    
                    <div className="text-3xl font-mono text-roast-pink mb-4">
                      {votes.eman} <span className="text-sm text-white/60">votes</span>
                    </div>
                    
                    <Button
                      className={`bg-roast-pink hover:bg-roast-pink/80 text-white ${votedFor === "eman" ? "animate-glow" : ""}`}
                      onClick={() => handleVote("eman")}
                      disabled={!!votedFor}
                    >
                      <ThumbsUp className="mr-2" />
                      {votedFor === "eman" ? "Voted!" : "Vote for Eman"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Host conclusion */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-black/50 backdrop-blur-sm p-6 rounded-2xl max-w-xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-roast-gold mr-2" />
                  <h3 className="text-2xl font-display">Host's Take</h3>
                  <Award className="w-8 h-8 text-roast-gold ml-2" />
                </div>
                
                <p className="text-lg font-medium">
                  "AND THAT'S A WRAP! The bail baked the churail,<br/>
                  Or did the churail cast a spell so wild it derailed?<br/>
                  You decide: Calm and cute or chaos and loud —<br/>
                  Drop your votes and don't get disallowed!"
                </p>
              </div>
            </div>
            
            {/* Audience reactions */}
            <div className="mt-12">
              <h3 className="text-center text-xl mb-6">Live Audience Reactions</h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "🔥 BARS!",
                  "💀 DEAD",
                  "😂 LOL",
                  "👑 QUEEN",
                  "🤯 MIND BLOWN",
                  "👏 RESPECT"
                ].map((reaction) => (
                  <div key={reaction} className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer animate-float">
                    {reaction}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapBattle;