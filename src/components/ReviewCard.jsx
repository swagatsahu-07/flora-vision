import React from "react";
import starRow from "../assets/star.png";

const ReviewCard = ({ avatar, name, message }) => {
  return (
    <div
      className="
        relative
        mx-auto
        w-full max-w-[460px]
        h-auto
        aspect-460/360
      "
    >
      {/* GLASS BACKGROUND */}
      <div
        className="
          absolute inset-3
          bg-white/5
          backdrop-blur-md
          rounded-32px sm:rounded-[40px]
        "
      />

      {/* SVG BORDER */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 549 668"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="whiteToBlack" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>

        <path
          d="M18.4 88.1764C18.4 40.1213 61.9673 3.62113 109.575 10.1595C160.849 17.2011 224.399 24.2022 274.4 24.2022C324.401 24.2022 387.952 17.2011 439.225 10.1595C486.833 3.62113 530.4 40.1213 530.4 88.1764V562.871C530.4 605.397 495.926 639.871 453.4 639.871H95.4C52.8741 639.871 18.4 605.397 18.4 562.871V88.1764Z"
          fill="none"
          stroke="url(#whiteToBlack)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* CONTENT */}
      <div
        className="
          absolute inset-0 z-20
          flex flex-col
          px-6 sm:px-10 lg:px-14
          pt-10 sm:pt-16 lg:pt-20
          pb-8 sm:pb-12 lg:pb-14
          text-white
        "
      >
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-4 sm:mb-5">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-[18px] sm:text-[20px] lg:text-[22px]">
              {name}
            </h3>

            <img
              src={starRow}
              alt="rating"
              className="w-[100px] sm:w-[120px] h-auto mt-1"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <p className="text-white/80 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed max-w-[90%]">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
