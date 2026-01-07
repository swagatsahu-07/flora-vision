import React from "react";
import play from "../assets/Polygon2.png";
import HeroProduct from "./HeroProduct";
import Testimonial from "./Testimonial";

const HeroSection = () => {
  return (
    <div
      className="
        w-full
        flex flex-col lg:flex-row
        items-center lg:items-start
        justify-between
        px-6 md:px-12
        py-20 md:py-30
        gap-16
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 text-gray-300 lg:pr-10 text-center lg:text-left">
        
        <h1
          className="
            text-[56px] sm:text-[72px] lg:text-[102px]
            font-bold
            leading-[0.95] lg:leading-[0.9]
            mb-4
          "
        >
          Earth’s Exhale
        </h1>

        <p
          className="
            text-[18px] sm:text-[20px] lg:text-[22px]
            font-normal
            mb-6
            max-w-2xl
            mx-auto lg:mx-0
          "
        >
          "Earth Exhale" symbolizes the purity and vitality of the Earth's
           natural environment and its
          essential role in sustaining life.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
          <button className="px-10 lg:px-12 py-3 rounded-xl border-2 border-white/70 text-lg lg:text-2xl">
            Buy Now
          </button>

          <div className="w-14 h-14 lg:w-15 lg:h-15 rounded-full border-2 border-white flex items-center justify-center">
            <img src={play} className="w-4 h-4 lg:w-5 lg:h-5" alt="play" />
          </div>

          <span className="font-indie text-[18px] lg:text-[20px]">
            Live Demo
          </span>
        </div>

        <Testimonial />
      </div>

      {/* RIGHT PRODUCT */}
      <div className="transform lg:-translate-y-10">
        <HeroProduct />
      </div>
    </div>
  );
};

export default HeroSection;
