import React from "react";
import "./style.css";
import phone from "../../../assets/images/build.png";

const BuildWealth = () => {
  return (
    <div className="wealth-container">
      <div className="wealth-image">
        <img src={phone} alt="phoneicon" />
      </div>
      <div className="wealth-text">
        <h3>The Rise App</h3>
        <h4>
          Save for your <span>future</span>
        </h4>
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <button className="save-button">Start Saving</button>
      </div>
    </div>
  );
};

export default BuildWealth;
