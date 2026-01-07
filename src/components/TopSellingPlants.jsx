import React from "react";

const cardSVG = `
<svg viewBox='0 0 549 668' xmlns='http://www.w3.org/2000/svg'>
  <path
    d="M18.4 88.1764C18.4 40.1213 61.9673 3.62113 109.575 10.1595C160.849 17.2011 224.399 24.2022 274.4 24.2022C324.401 24.2022 387.952 17.2011 439.225 10.1595C486.833 3.62113 530.4 40.1213 530.4 88.1764V562.871C530.4 605.397 495.926 639.871 453.4 639.871H95.4C52.8741 639.871 18.4 605.397 18.4 562.871V88.1764Z"
    fill="black"
  />
</svg>
`;

const maskURL = `url("data:image/svg+xml;utf8,${encodeURIComponent(cardSVG)}")`;

const TopSellingPlants = ({
  name,
  category,
  price,
  image,
  customStyle = {},
}) => {
  return (
   
    <div className="relative pt-[120px] sm:pt-[150px] lg:pt-[180px] w-full flex justify-center">

      {/* Card wrapper */}
      <div className="relative w-full max-w-[480px] aspect-549/668">

        {/* Glass card */}
        <div
          className="absolute inset-0 bg-white/5 backdrop-blur-md"
          style={{
            WebkitMaskImage: maskURL,
            maskImage: maskURL,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        />

        {/* Border */}
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

        {/* 🌿 PLANT IMAGE — NOW RESPONSIVE */}
        <img
          src={image}
          alt={name}
          className="
            absolute
            left-1/2 -translate-x-1/2
            z-20
            max-h-240px sm:max-h-[300px] lg:max-h-[360px]
            w-auto
          "
          style={{
            top: customStyle.top || "-8%",
          }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 md:px-10 pb-10 md:pb-14 text-white z-20">
          <p className="text-white/70 text-[13px] sm:text-[14px] md:text-[15px] mb-3">
            {category}
          </p>

          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-normal leading-tight mb-2">
            {name}
          </h2>

          <p className="text-white/60 text-[14px] sm:text-[15px] md:text-[17px] leading-[1.4] w-[90%] mb-6">
            {customStyle.description}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] font-normal">
              Rs. {price}/-
            </p>

            <div className="w-10 h-10 rounded-xl border border-white/50 flex items-center justify-center text-xl">
              🛒
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopSellingPlants;
