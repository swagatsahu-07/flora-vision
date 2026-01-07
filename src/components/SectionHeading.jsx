import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <div
      className="
        relative
        w-full
        flex
        justify-center
        -mt-8 sm:-mt-12
        mb-20 sm:mb-35
        px-4
      "
    >
      {/* BLUR GLOW */}
      <div
        className="
          absolute
          bottom-0
          w-[260px] sm:w-[360px] lg:w-[450px]
          h-14 sm:h-18 lg:h-20
          bg-black/70
          blur-3xl
          opacity-80
          rounded-full
        "
      />

      {/* HEADING WRAPPER */}
      <div className="relative flex items-center -mt-2 sm:-mt-3">
        
        {/* LEFT CORNER */}
        <div
          className="
            w-6 sm:w-8 lg:w-10
            h-10 sm:h-12 lg:h-15
            border-l-4 border-b-4
            border-[#F3D03E]
            rounded-bl-xl
          "
        />

        {/* TEXT */}
        <h2
          className="
            text-white
            text-[24px] sm:text-[32px] lg:text-[40px]
            font-semibold
            tracking-wide
            px-3 sm:px-4
            text-center
            whitespace-nowrap
          "
        >
          {text}
        </h2>

        {/* RIGHT CORNER */}
        <div
          className="
            w-6 sm:w-8 lg:w-10
            h-10 sm:h-12 lg:h-15
            border-r-4 border-t-4
            border-[#F3D03E]
            rounded-tr-xl
          "
        />
      </div>
    </div>
  );
};

export default SectionHeading;
