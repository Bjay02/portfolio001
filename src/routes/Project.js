import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg/HeroImg2.js";
import PricingCard from "../components/pricing/PricingCard";
import Work from "../components/workcard/Work.js";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of my most recent projects." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
