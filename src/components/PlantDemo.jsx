import React from "react";
import plant1 from "../assets/TSP1.png";
import plant2 from "../assets/TSP2.png";
import PlantCard from "./PlantCard";
import SectionHeading from "./Sectionheading";

const PlantDemo = () => {
  return (
    <>
    <SectionHeading text="Our Trendy plants" />
     <div className="mt-20 space-y-1 pb-0.5">
      <PlantCard
        image={plant1}
        title="For Your Desks Decorations"
        description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
        price="Rs. 599/-"
        variant="left"
      />

      <PlantCard
        image={plant2}
        title="For Your Desks Decorations"
        description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
        price="Rs. 599/-"
        
      />
    </div>
    </>
  );
};

export default PlantDemo;
