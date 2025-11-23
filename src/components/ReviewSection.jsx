import React from "react";
import ReviewCard from "./ReviewCard";
import CR1 from "../assets/CR1.png";
import CR2 from "../assets/CR2.png";
import CR3 from "../assets/CR3.png";
import SectionHeading from "./SectionHeading";

const ReviewSection = () => {
  const reviews = [
    {
      avatar: CR1,
      name: "Shelly Russel",
      message:
        "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      avatar: CR2,
      name: "Lula Rolfson",
      message:
        "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      avatar: CR3,
      name: "Carol Huels",
      message:
        "It’s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];

  return (
    <>
      <section className="w-full px-5 md:px-10 lg:px-20 py-20 mt-20">
        <SectionHeading text="Customer Reviews" />

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-12 
            justify-items-center
          "
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              avatar={review.avatar}
              name={review.name}
              message={review.message}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
