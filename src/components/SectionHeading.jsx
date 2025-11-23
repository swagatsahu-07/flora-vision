import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <div className="relative w-full flex justify-center -mt-12 mb-35">
      
      
      <div
        className="
          absolute bottom-0 
          w-[450px] 
          h-20 
          bg-black/70 
          blur-3xl 
          opacity-80 
          rounded-full
        "
      ></div>

      <div className="relative flex items-center -mt-3">
        
        
        <div className="w-10 h-15 border-l-4 border-b-4 border-[#F3D03E] rounded-bl-xl"></div>

        
        <h2 className="text-white text-[40px] font-semibold tracking-wide px-4">
          {text}
        </h2>

       
        <div className="w-10 h-15 border-r-4 border-t-4 border-[#F3D03E] rounded-tr-xl"></div>

      </div>
    </div>
  );
};

export default SectionHeading;
