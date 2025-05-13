import React from 'react'

function Offended() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #ffe6e6 0%, #fff 100%)',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          color: '#d32f2f',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textShadow: '2px 2px 8px #ffb3b3',
        }}
      >
        I'm offended
      </h1>
      <p
        style={{
          fontSize: '2rem',
          color: '#333',
          background: '#fff3f3',
          padding: '1.5rem 2.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 24px rgba(211,47,47,0.08)',
        }}
      >
        So your roast is taken down.
      </p>
    </div>
  )
}

export default Offended
