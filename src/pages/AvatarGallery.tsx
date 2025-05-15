import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import your images here
import emanImg from '@/assets/avatars/eman.jpeg'
import sajeelImg from '@/assets/avatars/sajeel.jpeg'
import shahanImg from '@/assets/avatars/shahan.jpeg'
import shanzayImg from '@/assets/avatars/shanzay.jpeg'
import nimraImg from '@/assets/avatars/nimra.jpeg'
import mehreenImg from '@/assets/avatars/mehreen.jpeg'
import roshaanyImg from '@/assets/avatars/roshaany.jpeg'
// Add more as needed

const avatars = [
  { name: 'Eman', img: emanImg, roast: 'The Yapping YouTube Ad', link: '/eman' },
  { name: 'Sajeel', img: sajeelImg, roast: 'The Silent Meme Lord', link: '/sajeel' },
  { name: 'Shahan', img: shahanImg, roast: 'The Spreadsheet Sultan', link: '/shahan' },
  { name: 'Shanzay', img: shanzayImg, roast: 'Queen of Cringe', link: '/shanzay' },
  { name: 'Nimra', img: nimraImg, roast: 'The Sass Machine', link: '/nimra' },
  { name: 'Mehreen', img: mehreenImg, roast: 'The Calm Roaster', link: '/mehreen' },
   { name: 'Roshaany', img: roshaanyImg, roast: 'The Over Exicted Boy', link: '/roshaany' },
  // Add more as needed
]

const AvatarGallery = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-roast-dark to-roast-accent/30 py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 mb-10">
        Avatar Roast Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {avatars.map((avatar) => (
          <div
            key={avatar.name}
            className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center border border-white/10 cursor-pointer hover:scale-105 transition"
            onClick={() => navigate(avatar.link)}
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
                onClick={e => { e.stopPropagation(); navigate(avatar.link) }}
                style={{ cursor: 'pointer' }}
              >
                {avatar.name}
              </div>
              <div className="text-roast-accent text-sm mt-1 italic">{avatar.roast}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-white/40 text-sm mt-10">
        Only the admin can set or change roast avatars.
      </p>
    </div>
  )
}

export default AvatarGallery
