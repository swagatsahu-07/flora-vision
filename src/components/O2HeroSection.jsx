import React from "react";
import plant from "../assets/ASTP1.png";
import SectionHeading from "./SectionHeading";

const O2HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-24 lg:mt-35 mb-24 lg:mb-35">
      <SectionHeading text="O2 Plants" />

      {/* CARD WRAPPER */}
      <div className="w-full flex justify-center mb-10 px-4">
        <div
          className="
            w-full max-w-[1460px]
            rounded-[48px] sm:rounded-[80px] lg:rounded-[121px]
            border border-white/20
            bg-white/5 backdrop-blur-md
            px-6 sm:px-10 lg:px-16
            py-8 sm:py-10
            flex flex-col lg:flex-row
            items-center
            gap-12
          "
        >
          {/* IMAGE */}
          <div className="flex-1 flex justify-center relative">
            <img
              src={plant}
              alt="O2 Plant"
              className="
                w-[260px] sm:w-[420px] lg:w-[700px]
                h-auto
                object-cover
                drop-shadow-2xl
                lg:mt-20
              "
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col gap-5 px-0 sm:px-6 lg:px-8 text-center lg:text-left">
            <h2 className="text-white text-[22px] sm:text-[26px] lg:text-[32px] font-semibold leading-snug">
              We Have Small And Best O2 Plants
              <br className="hidden sm:block" />
              Collection’s
            </h2>

            <p className="text-white/75 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-[90%] mx-auto lg:mx-0">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>

            <p className="text-white/75 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-[90%] mx-auto lg:mx-0">
              Many plants can help filter out pollutants and toxins from the
              air, such as formaldehyde, benzene, and trichloroethylene. This
              makes the air cleaner and healthier to breathe.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[90%] mx-auto lg:mx-0">
              <button
                className="
                  px-8 sm:px-10 py-2.5
                  rounded-xl
                  text-[18px] sm:text-[22px] lg:text-[26px]
                  text-white
                  border-2 border-white/60
                  hover:bg-white/20
                  transition
                "
              >
                Explore
              </button>

              <div className="flex items-center gap-6 text-white/70 text-sm">
                <button className="hover:text-white text-lg">{"<"}</button>
                <span>01/04</span>
                <button className="hover:text-white text-lg">{">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INDICATOR */}
      <div className="flex justify-center items-center gap-2.5 mt-12 mb-5">
        <div className="w-7 h-2 bg-white rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>
    </section>
  );
};

export default O2HeroSection;
