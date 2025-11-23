import React from "react";
import person from "../assets/ronnie.png";
import starRow from "../assets/star.png"; 

const Testimonial = () => {
  return (
    <div className="mt-35 w-[350px] rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-6">

    
      <div className="flex items-center gap-4">
        <img
          src={person}
          alt="Ronnie"
          className="w-15 h-15 rounded-full object-cover"
        />

        <div>
          <h3 className="text-white text-[22px] font-normal leading-tight">
            Ronnie Hamill
          </h3>

         
          <img 
            src={starRow}
            alt="rating"
            className="w-[120px] h-auto object-contain mt-1"
          />

        </div>
      </div>

     
      <p className="text-gray-300 mt-5 leading-relaxed text-[14px]">
        I can't express how thrilled I am with my new natural plants!
        They bring such a fresh and vibrant energy to my home.
      </p>

    </div>
  );
};

export default Testimonial;
