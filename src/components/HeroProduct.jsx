import React from "react";
import plant from "../assets/RoseGold.png";


const cardSVG = `
<svg viewBox='0 0 549 668' xmlns='http://www.w3.org/2000/svg'>
  <path
    d="M18.4 88.1764C18.4 40.1213 61.9673 3.62113 109.575 10.1595C160.849 17.2011 224.399 24.2022 274.4 24.2022C324.401 24.2022 387.952 17.2011 439.225 10.1595C486.833 3.62113 530.4 40.1213 530.4 88.1764V562.871C530.4 605.397 495.926 639.871 453.4 639.871H95.4C52.8741 639.871 18.4 605.397 18.4 562.871V88.1764Z"
    fill='black'
  />
</svg>
`;

const maskURL = `url("data:image/svg+xml;utf8,${encodeURIComponent(cardSVG)}")`;

const HeroProduct = () => {
  return (
    <div className="relative left-5 w-[460px] aspect-549/668">

      
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

      {/* PLANT IMAGE */}
      <img
        src={plant}
        alt="Aglaonema Plant"
        className="
          absolute left-1/2 -translate-x-1/2
          -top-[30%]
          w-full
          max-w-[480px]
          z-20
          drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        "
      />

      {/* CONTENT */}
      <div className="absolute  bottom-0 left-0 right-0 px-10 pb-16 text-white/70 z-20">

        <p className="text-white/70 text-l mb-3">Indoor Plant</p>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-normal tracking-wide">Aglaonema plant</h2>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <button className="px-12 py-3 rounded-xl text-xl  border-2 border-white/80 hover:bg-white/10 transition-all">
          Buy Now
        </button>

        <div className="flex justify-center items-center gap-2.5 mt-15 mb-5">
          <div className="w-4 h-1 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>

      </div>

    </div>
  );
};

export default HeroProduct;
