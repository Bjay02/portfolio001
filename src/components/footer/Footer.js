import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div classname="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", margin: "0 2rem " }} />
            <div>
              <p> 002B Regina, Saskatchewan,</p>
              <p>Canada.</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", margin: "0 2rem " }} />
            <h4>
              <b> 090-131-757-86</b>
            </h4>
          </div>
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "#fff", margin: "0 2rem " }}
            />
            <h4>
              <b> bolajiafolabi02@gmail.com</b>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>
            <b>About the company</b>
          </h4>
          <p>
            This is me <b>Afolabi Bolaji</b>. CEO & Founder of 2Tech. Lets
            discuss new project and design opportunities.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <FaTwitter
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
            <FaLinkedin
              size={20}
              style={{
                color: "#fff",
                marginRight: "2rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
