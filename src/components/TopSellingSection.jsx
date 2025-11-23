import React from "react";
import TopSellingPlants from "./TopSellingPlants";
import SectionHeading from "./SectionHeading";
import ASTP1 from "../assets/ASTP1.png";
import ASTP2 from "../assets/TSP1.png";
import ASTP3 from "../assets/ASTP3.png";
import ASTP4 from "../assets/ASTP4.png";
import ASTP5 from "../assets/ASTP5.png";
import ASTP6 from "../assets/ASTP6.png";

const TopSellingSection = () => {
  const plants = [
    {
      name: "Aglaonema plant",
      category: "Indoor Plant",
      price: 300,
      image: ASTP1,
      customStyle: {
        top: "-15%",
        height: "490px",
        width: "680px",
        description:
          "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
      },
    },
    {
      name: "Plantain Lilies",
      category: "Indoor Plant",
      price: 380,
      image: ASTP2,
      customStyle: {
        top: "-22%",
        height: "480px",
        width: "420px",
        description:
          "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
      },
    },
    {
      name: "Cactus",
      category: "Indoor Plant",
      price: 259,
      image: ASTP3,
      customStyle: {
        top: "-16%",
        height: "520px",
        width: "550px",
        description:
          "It is known for their ability to thrive in arid environments",
      },
    },
    {
      name: "Swiss cheese Plant",
      category: "Indoor Plant",
      price: 400,
      image: ASTP4,
      customStyle: {
        top: "-20%",
        height: "520px",
        width: "550px",
        description:
          "It is a popular tropical plant admired for its distinctive, perforated leaves",
      },
    },
    {
      name: "Sansevieria plant",
      category: "Indoor Plant",
      price: 450,
      image: ASTP5,
      customStyle: {
        top: "-18%",
        height: "520px",
        width: "570px",
        description:
          "It is a popular indoor plant admired for its striking appearance and low-maintenance nature",
      },
    },
    {
      name: "Agave Plant",
      category: "Indoor Plant",
      price: 359,
      image: ASTP6,
      customStyle: {
        top: "-15%",
        height: "520px",
        width: "550px",
        description:
          "The Agave plant is a genus of succulent plants known for their rosette of thick, fleshy leaves and architectural forms.",
      },
    },
  ];

  return (
    <>
      <section className="w-full px-5 md:px-10 lg:px-20 py-20 mt-35">
        <SectionHeading text="Our Top Selling Plants " />

        <div
          className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  xl:grid-cols-3 
  gap-20 
  justify-items-center
"
        >
          {plants.map((plant, index) => (
            <TopSellingPlants
              key={index}
              name={plant.name}
              category={plant.category}
              price={plant.price}
              image={plant.image}
              customStyle={plant.customStyle}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TopSellingSection;
