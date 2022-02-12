import React from "react";
import bottomPhone from "../../../assets/images/bottomPhone.png";
import iosdownload from "../../../assets/images/Frame 72.jpg";
import googledownload from "../../../assets/images/Frame 73.jpg";
import "./style.css";

const AppDownload = () => {
  return (
    <section className="download-section">
      <div className="download-contents">
        <p>Download The Rise App</p>
        <h4>Join our 100,000 users investing and setting long term goals!</h4>
        <span className="dollar-text">
          Dollar investments that help you grow.
        </span>
        <div className="ios-app">
          <img src={iosdownload} alt="download on appstore" />
          <img src={googledownload} alt="download on googleplay" />
        </div>
      </div>
      <div className="phone-image">
        <img src={bottomPhone} alt="" />
      </div>
    </section>
  );
};

export default AppDownload;
