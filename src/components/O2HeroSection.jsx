import React from "react";
import plant from "../assets/ASTP1.png"; 
import SectionHeading from "./Sectionheading";

const O2HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-35 mb-35">
      <SectionHeading text="Our Trendy plants" />
      
      <div className="h-[666px] flex justify-center mb-10">
        <div
          className="
            w-[1460px] h-full
            rounded-[121px]
            border border-white/20
            bg-white/5 backdrop-blur-md
            px-16 py-10
            flex items-center
          "
        >
      
          <div className="flex-1 flex  justify-center w-full">
            <img
              src={plant}
              alt="O2 Plant"
              className="
                h-[1077px]
                w-[1077px]
                object-cover
                drop-shadow-2xl
                mt-38
                -ml-27
                
              "
            />
          </div>

          
          <div className="flex-1 flex flex-col gap-5 px-8">
            <h2 className="text-white text-[32px] font-semibold leading-snug">
              We Have Small And Best O2 Plants
              <br />
              Collection’s
            </h2>

            <p className="text-white/75 text-[16px] leading-relaxed w-[90%]">
              Oxygen-producing plants, often referred to as "O2 plants," are those
              that release oxygen into the atmosphere through the process of
              photosynthesis.
            </p>

            <p className="text-white/75 text-[16px] leading-relaxed w-[90%]">
              Many plants can help filter out pollutants and toxins from the air,
              such as formaldehyde, benzene, and trichloroethylene. This makes
              the air cleaner and healthier to breathe.
            </p>

           
            <div className="mt-6 flex items-center justify-between w-[90%]">
              
              <button
                className="
                  px-10 py-2.5 
                  rounded-xl
                  text-[26px]
                  text-white
                  border-2 border-white/60
              
                  hover:bg-white/20
                  transition
                "
              >
                Explore
              </button>

            
              <div className="flex items-center gap-6 text-white/70 text-sm">
                <button className="hover:text-white text-lg">{'<'}</button>
                <span>01/04</span>
                <button className="hover:text-white text-lg">{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-center items-center gap-2.5 mt-15 mb-5">
          <div className="w-7 h-2 bg-white rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
        </div>
    </section>
  );
};

export default O2HeroSection;
