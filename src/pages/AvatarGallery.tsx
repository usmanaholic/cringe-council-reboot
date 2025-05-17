import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Import your images here
import emanImg from '@/assets/avatars/eman.jpeg'
import sajeelImg from '@/assets/avatars/sajeel.jpeg'
import shahanImg from '@/assets/avatars/shahan.jpeg'
import shanzayImg from '@/assets/avatars/shanzay.jpeg'
import nimraImg from '@/assets/avatars/nimra.jpeg'
import mehreenImg from '@/assets/avatars/mehreen.jpeg'
import roshaanyImg from '@/assets/avatars/roshaany.jpeg'
import usmanImg from '@/assets/avatars/usman.jpeg'
// Add more as needed

const avatars = [
  { name: 'Eman', img: emanImg, roast: 'The Yapping YouTube Ad', link: '/eman' },
  { name: 'Sajeel', img: sajeelImg, roast: 'The Silent Aluuu', link: '/sajeel' },
  { name: 'Shahan', img: shahanImg, roast: 'The Spreadsheet Sultan', link: '/shahan' },
  { name: 'Shanzay', img: shanzayImg, roast: 'Queen of Cringe', link: '/shanzay' },
  { name: 'Nimra', img: nimraImg, roast: 'The Sass Machine', link: '/nimra' },
  { name: 'Mehreen', img: mehreenImg, roast: 'The Calm Roaster', link: '/mehreen' },
  { name: 'Roshaany', img: roshaanyImg, roast: 'The Over Exicted Boy', link: '/roshaany' },
  { name: 'Usman', img: usmanImg, roast: "Built this whole site to roast others, forgot he's the biggest meme in the group.", link: '#' },
  // Add more as needed
]

const AvatarGallery = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-roast-dark to-roast-accent/30 py-16 px-4 flex flex-col">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 mb-10">
        Avatar Roast Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {avatars.slice(0, -1).map((avatar) => (
          <div
            key={avatar.name}
            className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center border border-white/10 cursor-pointer hover:scale-105 transition"
            onClick={() => avatar.link !== '#' && navigate(avatar.link)}
            title={`Go to ${avatar.name}'s page`}
          >
            <div className="relative w-32 h-32 mb-4">
              <img
                src={avatar.img}
                alt={avatar.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-roast-accent shadow"
              />
            </div>
            <div className="text-center">
              <div
                className="text-xl font-bold text-white hover:underline"
                onClick={e => { e.stopPropagation(); avatar.link !== '#' && navigate(avatar.link) }}
                style={{ cursor: 'pointer' }}
              >
                {avatar.name}
              </div>
              <div className="text-roast-accent text-sm mt-1 italic">{avatar.roast}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Boss Section */}
      <div className="max-w-2xl mx-auto mt-16 mb-8">
        <div className="bg-gradient-to-r from-roast-accent via-black to-roast-purple rounded-3xl shadow-2xl p-8 flex flex-col items-center border-4 border-roast-accent/60 relative">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl select-none">🏆</span>
          <img
            src={usmanImg}
            alt="Usman"
            className="w-40 h-40 object-cover rounded-full border-4 border-yellow-400 shadow-xl mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2 text-center drop-shadow">
            Final Boss – Usman
          </h2>
          <div className="text-white text-lg text-center mb-2">
            Takes 0 damage from insults. Immune to girlfriend sarcasm. Weak to wisdom teeth.
          </div>
          <div className="text-roast-accent text-center italic mb-2">
            "Built this whole site to roast others, forgot he's the biggest meme in the group."
          </div>
          <button
            className="mt-4 text-2xl hover:scale-125 transition cursor-pointer"
            title="Find the hidden cringe"
            onClick={() => setShowModal(true)}
          >
            <span role="img" aria-label="flame">🔥</span>
          </button>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center relative">
            <button
              className="absolute top-2 right-2 text-roast-accent text-2xl"
              onClick={() => setShowModal(false)}
              title="Close"
            >
              ×
            </button>
            <div className="text-4xl mb-4">🐣</div>
            <div className="text-xl font-bold mb-2 text-roast-accent">You found the hidden cringe…</div>
            <div className="text-lg text-black mb-2">
              it’s <span className="font-bold">ME, Usman</span> – Dev by day, Disaster by night.
            </div>
          </div>
        </div>
      )}

      <p className="text-center text-white/40 text-sm mt-10">
        Only the admin can set or change roast avatars.
      </p>





















</div>
  )
}

export default AvatarGallery
