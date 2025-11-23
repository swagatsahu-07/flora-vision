import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import down from '../assets/Polygon.png'
import Line1 from '../assets/Line1.png'
import Line2 from '../assets/Line2.png'

const Navbar = () => {
  return (
    <nav className="w-full  top-0 left-0 z-50 px-5 py-11 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} className="w-58 h-10" alt="logo" />
      </div>

      {/* Navigation Links */}
      <ul className="font-indie font-normal  flex items-center gap-15 text-white/90">
        
        <li className="hover:text-white cursor-pointer">Home</li>

        <li className="hover:text-white cursor-pointer flex items-center gap-3">
          Plants Type 
          <span className="inline-block">
            <img src={down} alt="dropdown icon" className="w-3" />
          </span>
        </li>

        <li className="hover:text-white cursor-pointer">More</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      
      <div className="flex items-center gap-15 ml-15">
  
  <img src={search} alt="search icon" className="w-5 h-5 cursor-pointer" />

  <img src={cart} alt="cart icon" className="w-5 cursor-pointer" />

  <div className="relative w-5 h-5 cursor-pointer shrink-0">
    <img src={Line1} className="absolute top-0 left-0 w-full" />
    <img src={Line2} className="absolute top-0 left-0 w-full" />
  </div>

</div>

    </nav>
  )
}

export default Navbar
