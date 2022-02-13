import React from "react";
import iosdownload from "../../../assets/images/Frame 72.jpg";
import googledownload from "../../../assets/images/Frame 73.jpg";
import phoneimage from "../../../assets/images/Subtract.svg";
import arm from "../../../assets/images/arm.png";
import western from "../../../assets/images/westernunion.png";
import techstars from "../../../assets/images/techstars.png";
import mark from "../../../assets/images/mark.png";

import "./style.css";

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Dollar investments that help you grow</h1>
          <h2>
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </h2>
          <div className="app-download">
            <img src={iosdownload} alt="download on appstore" />
            <img src={googledownload} alt="download on googleplay" />
          </div>
        </div>
        <div className="hero-image">
          <img src={phoneimage} alt="phone" />
        </div>
      </div>
      <span id="firstdot"></span> <span id="seconddot"></span>
      <span id="thirddot"></span> <span id="fourthdot"></span>
      <span id="fifthdot"></span>
      <div className="hero-logos">
        <img src={arm} alt="arm trustees" />
        <img src={western} alt="western union logo" />
        <img src={techstars} alt="techstars" />
        <img src={mark} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;
