import React, { useState } from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="text-white py-20 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

          {/* BRAND SECTION */}
          <div className="space-y-6">
            <img src={logo} className="w-44" alt="logo" />

            <p className="text-white/70 text-[18px] md:text-[20px] leading-relaxed max-w-lg">
              From lush indoor greens to vibrant outdoor blooms, our plants are
              curated to thrive and elevate your living environment.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <span className="text-white/80 text-[18px] cursor-pointer hover:text-white transition">
                FB
              </span>
              <span className="text-white/80 text-[18px] cursor-pointer hover:text-white transition">
                TW
              </span>
              <span className="text-white/80 text-[18px] cursor-pointer hover:text-white transition">
                LI
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[24px] md:text-[26px] font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {["Home", "Types of Plants", "Contact", "Privacy"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a className="text-white/80 text-[18px] md:text-[20px] underline underline-offset-4 cursor-pointer hover:text-white transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div>
            <h3 className="text-[24px] md:text-[26px] font-semibold mb-6">
              For Every Update
            </h3>

            <div className="flex flex-col sm:flex-row w-full max-w-xl gap-4 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  w-full
                  px-5 py-4
                  bg-transparent
                  border border-white/40
                  rounded-lg sm:rounded-r-none
                  text-[16px] md:text-[18px]
                  text-white
                  placeholder:text-white/50
                  focus:outline-none
                  focus:border-white
                  transition
                "
              />

              <button
                onClick={handleSubscribe}
                className="
                  px-8 py-4
                  bg-white text-[#1a1f1a]
                  text-[16px] md:text-[18px]
                  font-semibold
                  rounded-lg sm:rounded-l-none
                  hover:bg-white/90
                  transition
                  whitespace-nowrap
                "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 border-t border-white/10 flex justify-center md:justify-end">
          <p className="text-white/60 text-[16px]">
            FloraVision © All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
