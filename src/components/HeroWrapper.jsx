import React from 'react'
import heroBg from '../assets/HeroBg.png'

const HeroWrapper = ({ children }) => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-top relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
    

      <div className="relative z-20">
        {children}
      </div>
    </section>
  )
}

export default HeroWrapper
