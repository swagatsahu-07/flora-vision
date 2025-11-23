import React from "react";

import play from "../assets/Polygon2.png"; 
import HeroProduct from "./HeroProduct";
import Testimonial from "./Testimonial";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center justify-between px-12 py-30">

      
      <div className="flex-1 text-gray-300 pr-10 ">
        
        <h1 className="text-[102px] font-bold leading-[0.9] mb-2">
          Earth’s Exhale
        </h1>

        <p className="text-[22px] font-normal mb-2">
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
          natural <br /> environment and its essential role in sustaining life.
        </p>

        <div className="flex items-center gap-4">
          <button className="px-12 py-3 rounded-xl border-2 border-white/70 text-2xl">
            Buy Now
          </button>

          <div className="w-15 h-15 rounded-full border-2 border-white flex items-center justify-center">
            <img src={play} className="w-5 h-5" alt="" />
          </div>

          <span className="font-indie text-[20px]">
            Live Demo
          </span>
        </div>

        <Testimonial />
      </div>

      
      <div className="transform -translate-y-10">
        <HeroProduct />
      </div>

    </div>
  );
};

export default HeroSection;
