import React from "react";
import { investmentData } from "../../../investmentData";
import "./style.css";
import vector from "../../../assets/images/Vector.jpg";

const InvestmentSection = () => {
  return (
    <div className="investment-wrapper">
      {investmentData.map((data) => (
        <div key={data.id} className={data.className}>
          <div className="investment-text">
            <h3>{data.heading}</h3>
            <p>{data.paragraph}</p>
            <a href="#download">
              {data.link}
              <span>
                <img src={vector} alt="arrow" />
              </span>
            </a>
          </div>
          <div className="investment-image">
            <img src={data.image} alt="graphics" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentSection;
