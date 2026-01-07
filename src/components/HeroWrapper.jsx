import React from "react";
import heroBg from "../assets/HeroBg.png";

const HeroWrapper = ({ children }) => {
  return (
    <section
      className="
        w-full
        min-h-screen
        bg-cover
        bg-top
        bg-no-repeat
        relative
        flex
        items-start
      "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* OPTIONAL OVERLAY FOR CONTRAST (SAFE & SUBTLE) */}
      <div className="absolute inset-0 bg-black/10 sm:bg-black/0 pointer-events-none" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-20
          w-full
          px-4 sm:px-6 md:px-10
        "
      >
        {children}
      </div>
    </section>
  );
};

export default HeroWrapper;
