import React from "react";

const PlantCard = ({ image, title, description, price, variant = "right" }) => {
  const isLeft = variant === "left";

  return (
    <div className="w-full flex justify-center mb-20 sm:mb-30 px-4">
      <div
        className="
          w-full max-w-[1460px]
          h-auto lg:h-[466px]
          rounded-[48px] sm:rounded-[80px] lg:rounded-[121px]
          border border-white/20
          bg-white/5 backdrop-blur-md
          p-6 sm:p-10 lg:p-12
          flex flex-col lg:flex-row
          items-center
          gap-10 lg:gap-0
        "
      >
        {/* IMAGE LEFT */}
        {isLeft && (
          <div className="flex items-center justify-center flex-1">
            <img
              src={image}
              alt="plant"
              className="
                w-[220px] sm:w-[360px] lg:w-[601px]
                h-auto
                lg:h-[762px]
                object-cover
                drop-shadow-2xl
                lg:-mt-36
              "
            />
          </div>
        )}

        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 px-0 sm:px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-white text-[24px] sm:text-[28px] lg:text-[34px] font-semibold leading-tight">
            {title}
          </h2>

          <p className="text-white/70 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed max-w-xl mx-auto lg:mx-0">
            {description}
          </p>

          <p className="text-white text-[20px] sm:text-[22px] lg:text-[26px] font-semibold">
            {price}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-2">
            <button
              className="
                px-8 sm:px-12 lg:px-15
                py-2.5 sm:py-3
                rounded-lg
                text-base sm:text-xl lg:text-2xl
                text-white
                border-2 border-white
                hover:bg-white/20
                transition
              "
            >
              Explore
            </button>

            <button
              className="
                w-10 h-10 sm:w-12 sm:h-12
                flex items-center justify-center
                rounded-full
                border border-white/20
                bg-white/10
                hover:bg-white/20
                transition
              "
            >
              🛒
            </button>
          </div>
        </div>

        {/* IMAGE RIGHT */}
        {!isLeft && (
          <div className="flex items-center justify-center flex-1">
            <img
              src={image}
              alt="plant"
              className="
                w-[220px] sm:w-[360px] lg:w-[601px]
                h-auto
                lg:h-[762px]
                object-cover
                drop-shadow-2xl
                lg:-mt-12
              "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCard;
