import React from "react";
import "./RegulationInfo.css";

const RegulationInfo = () => {
  return (
    <section className="info-container">
      <div className="first-wrapper">
        <div className="first"></div> <div className="second"></div>
      </div>
      <div className="second-wrapper">
        <div className="third"></div> <div className="fourth"></div>
      </div>
      <div className="text-container"></div>
      <div className="text-content">
        <h4>How we are Regulated</h4>
        <p>
          Rise is registered and regulated both in the US and in Nigeria. Our
          team is made up of US registered investment advisers, our Nigerian
          users are covered by our SEC licensed trustees, ARM Trustees and all
          our assets are held with regulated third parties, in all relevant
          jurisdictions.
        </p>
      </div>
    </section>
  );
};

export default RegulationInfo;
