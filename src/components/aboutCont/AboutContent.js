import React from "react";
import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import contactimg1 from "../../assets/contactimg1.jpg";
import contactimg2 from "../../assets/contactimg2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a Front-end developer. I create responsive secure websites for my
          clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={contactimg2} alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={contactimg1} alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
