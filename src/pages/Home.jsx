import React from "react";
import Navbar from "../components/Navbar";
import HeroWrapper from "../components/HeroWrapper";
import Hero from "../components/Hero";;
import Footer from "../components/Footer";
import PlantDemo from "../components/PlantDemo";
import TopSellingSection from "../components/TopSellingSection";
import ReviewSection from "../components/ReviewSection";
import O2HeroSection from "../components/O2HeroSection";

const Home = () => {
  return (
    <main className="bg-[#1B2316] min-h-screen no-scrollbar overflow-y-scroll h-screen relative">
      <HeroWrapper>
        <Navbar />
        <Hero />
        <PlantDemo/>
      </HeroWrapper>
      <TopSellingSection/>
      <ReviewSection/>
      <O2HeroSection/>
      <Footer />
    </main>
  );
};

export default Home;
