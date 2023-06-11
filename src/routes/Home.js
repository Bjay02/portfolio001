import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroImg from "../components/heroimg/HeroImg";
import Footer from "../components/footer/Footer";
import Work from "../components/workcard/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
