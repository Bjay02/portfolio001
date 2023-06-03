import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg/HeroImg2";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="CONTACT."
        text="Lets have a chat. I will help you create an impeccable UI."
      />
      <Footer />
    </div>
  );
};

export default Contact;
