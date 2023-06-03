import "./HeroImgStyles.css";
import React from "react";
import HeroPhoto from "../../assets/HeroPhoto.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={HeroPhoto} alt="HeroPhoto" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/project" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
