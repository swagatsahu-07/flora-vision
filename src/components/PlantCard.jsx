import React from "react";

const PlantCard = ({ image, title, description, price, variant = "right" }) => {
  const isLeft = variant === "left";

  return (
    <div className="h-[466px] flex justify-center mb-30">
      <div
        className="
          w-[1460px] h-full
          rounded-[121px]
          border border-white/20
          bg-white/5 backdrop-blur-md
          p-12
          flex items-center
        "
      >
        {/* Image on Left */}
        {isLeft && (
          <div className="flex items-center justify-center flex-1">
            <img
              src={image}
              alt="plant"
              className="
               h-[762px]
                w-[601px]
                object-cover
                drop-shadow-2xl
                -mt-36
              "
            />
          </div>
        )}

        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-5 px-8">
          <h2 className="text-white text-[34px] font-semibold leading-tight">
            {title}
          </h2>

          <p className="text-white/70 text-[16px] w-[80%] leading-relaxed">
            {description}
          </p>

          <p className="text-white text-[26px] font-semibold">{price}</p>

          <div className="flex items-center gap-6 mt-2">
            <button
              className="
                px-15 py-3 rounded-lg
                text-2xl
                text-white
                border-2 border-white
                hover:bg-white/20 transition
              "
            >
              Explore
            </button>

            <button
              className="
                w-12 h-12 flex items-center justify-center
                rounded-full border border-white/20
                bg-white/10 hover:bg-white/20
                transition
              "
            >
              🛒
            </button>
          </div>
        </div>

        {/* Image on Right */}
        {!isLeft && (
          <div className="flex items-center justify-center flex-1">
            <img
              src={image}
              alt="plant"
              className="
                h-[762px]
                w-[601px]
                object-cover
                drop-shadow-2xl
                -mt-12
              "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantCard;
