import React, { Component } from "react";
import "./HeroImg2Styles.css";
import { HiOutlineArrowSmDown } from "react-icons/hi";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>

          <HiOutlineArrowSmDown color="#ffffff" size="36" />
        </div>
      </div>
    );
  }
}

export default HeroImg2;
