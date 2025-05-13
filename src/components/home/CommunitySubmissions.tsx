
import { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface SubmissionProps {
  author: string;
  content: string;
  character: string;
  likes: number;
}

export function CommunitySubmissions() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    character: '',
    roast: ''
  });
  
  const featuredSubmissions: SubmissionProps[] = [
    {
      author: "RoastMaster2000",
      content: "Eman talks so much, even Siri got tired and filed for retirement.",
      character: "Eman",
      likes: 47
    },
    {
      author: "BurntToast",
      content: "Shahan's gaming chair has seen more success than his gaming career.",
      character: "Shahan",
      likes: 35
    },
    {
      author: "FlameQueen",
      content: "Mehreen's approach to the NET is like me approaching the gym - lots of planning, zero results.",
      character: "Mehreen",
      likes: 28
    }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Submission Received!",
      description: "Your roast has been submitted for review.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      character: '',
      roast: ''
    });
  };
  
  const handleLike = (index: number) => {
    toast({
      title: "Liked!",
      description: "You've appreciated this high-quality roast.",
      variant: "default",
    });
  };
  
  return (
    <section className="py-20 relative" id="submissions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MessageSquarePlus className="w-12 h-12 text-roast-accent mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient from-roast-accent to-roast-light mb-2">
            Community Submissions
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Submit your own roast or check out what others have written
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Submission Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Submit Your Roast</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-roast-accent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-roast-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="character" className="block text-white/70 mb-2 text-sm">Select Character to Roast</label>
                <select
                  id="character"
                  name="character"
                  value={formData.character}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-roast-accent"
                  required
                >
                  <option value="">-- Select a character --</option>
                  <option value="Shahan">Shahan</option>
                  <option value="Shanzay">Shanzay</option>
                  <option value="Eman">Eman</option>
                  <option value="Nimra">Nimra</option>
                  <option value="Sajeel">Sajeel</option>
                  <option value="Mehreen">Mehreen</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="roast" className="block text-white/70 mb-2 text-sm">Your Roast</label>
                <textarea
                  id="roast"
                  name="roast"
                  value={formData.roast}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-roast-accent min-h-[120px]"
                  required
                  placeholder="Write your creative roast here..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-roast-accent to-roast-light text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-roast-accent/30"
                >
                  Submit Roast
                </button>
              </div>
            </form>
          </div>
          
          {/* Featured Submissions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Featured Submissions</h3>
            
            <div className="space-y-4">
              {featuredSubmissions.map((submission, index) => (
                <div key={index} className="glass-card p-5 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-roast-accent font-bold">{submission.author}</p>
                      <p className="text-white/50 text-sm">roasting {submission.character}</p>
                    </div>
                    <button
                      onClick={() => handleLike(index)}
                      className="flex items-center text-white/50 hover:text-roast-accent transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                      </svg>
                      <span>{submission.likes}</span>
                    </button>
                  </div>
                  
                  <p className="text-white text-lg">{submission.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-roast-accent hover:text-roast-light transition-colors">
                Load More Submissions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
