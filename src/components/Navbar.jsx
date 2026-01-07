import React, { useState } from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";
import down from "../assets/Polygon.png";
import Line1 from "../assets/Line1.png";
import Line2 from "../assets/Line2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full z-50 px-5 md:px-10 py-6 flex justify-between items-center">

      {/* LOGO */}
      <img src={logo} className="w-58 h-10" alt="logo" />

      {/* DESKTOP NAV */}
      <ul className="hidden md:flex font-indie items-center gap-15 text-white/90">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-white">
          Plants Type <img src={down} className="w-3" />
        </li>
        <li className="hover:text-white cursor-pointer">More</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* DESKTOP ICONS */}
      <div className="hidden md:flex items-center gap-15">
        <img src={search} className="w-5 cursor-pointer" />
        <img src={cart} className="w-5 cursor-pointer" />
      </div>

      {/* HAMBURGER */}
      <div
        className="md:hidden w-6 h-5 relative cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span
          className={`absolute w-full h-0.5 bg-white transition ${
            menuOpen ? "top-2 rotate-45" : "top-0"
          }`}
        />
        <span
          className={`absolute w-full h-0.5 bg-white top-2 transition ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute w-full h-0.5 bg-white transition ${
            menuOpen ? "top-2 -rotate-45" : "top-4"
          }`}
        />
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f1410] z-999 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-10 font-indie text-white/90">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-white">
              Plants Type <img src={down} className="w-3" />
            </li>
            <li className="cursor-pointer hover:text-white">More</li>
            <li className="cursor-pointer hover:text-white">Contact</li>

            <div className="flex gap-8 pt-4">
              <img src={search} className="w-5 cursor-pointer" />
              <img src={cart} className="w-5 cursor-pointer" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
