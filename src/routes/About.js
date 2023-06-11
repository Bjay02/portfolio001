import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroImg2 from "../components/heroimg/HeroImg2";
import AboutContent from "../components/aboutCont/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT"
        text="I'm a React front-end developer. I build and maintain user interfaces and front-facing components using -React/React.js, which is a front end library and framework. I create interactive applications that run fast and efficiently. "
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
