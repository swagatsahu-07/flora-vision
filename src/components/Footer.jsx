import React, { useState } from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="text-white py-20 px-8">
      <div className="max-w-[1500px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">

         
          <div className="space-y-6">
          
            <img src={logo} className="w-48" alt="logo" />

          
            <p className="text-white/70 text-[22px] leading-relaxed max-w-lg">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>

            
            <div className="flex items-center gap-10 pt-4">
              <span className="text-white/90 text-[22px] tracking-wide">FB</span>
              <span className="text-white/90 text-[22px] tracking-wide">TW</span>
              <span className="text-white/90 text-[22px] tracking-wide">LI</span>
            </div>
          </div>

          
          <div>
            <h3 className="text-[28px] font-semibold mb-6">Quick Link’s</h3>

            <ul className="space-y-5">
              <li>
                <a className="text-white/85 text-[22px] underline underline-offset-4 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="text-white/85 text-[22px] underline underline-offset-4 cursor-pointer">
                  Type’s Of plant’s
                </a>
              </li>
              <li>
                <a className="text-white/85 text-[22px] underline underline-offset-4 cursor-pointer">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-white/85 text-[22px] underline underline-offset-4 cursor-pointer">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-[28px] font-semibold mb-6">For Every Update.</h3>

            <div className="flex w-10 ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="
                   px-6 py-4
                  bg-transparent border border-white/40
                  rounded-l-lg
                  text-[22px] text-white
                  placeholder:text-white/50
                  focus:outline-none
                "
              />

              <button
                onClick={handleSubscribe}
                className="
                  px-10 py-4 
                  bg-white text-[#1a1f1a]
                  text-[22px] font-semibold 
                  rounded-r-lg
                  hover:bg-white/90 transition
                "
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 flex justify-end">
          <p className="text-white/60 text-[20px]">
            FloraVision © all right reserve
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
