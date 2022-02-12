import React from "react";
import "./style.css";
import jide from "../../../assets/images/jide.png";
import lade from "../../../assets/images/lade.png";
import jesse from "../../../assets/images/jesse.png";

const Reviews = () => {
  return (
    <section className="review-section">
      <h4>From The People Who Use Rise</h4>
      <p className="mission-text">
        Our mission at Risevest is to empower more people just like you to
        achieve your personal financial goals.
      </p>
      <div className="review-container">
        <div className="review-box">
          <p>
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <div className="review-person">
            <img src={jide} alt="customer picture" />
            <span>Lade</span>
          </div>
        </div>
        <div className="review-box">
          <p>
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <div className="review-person">
            <img src={lade} alt="customer picture" />
            <span>Jesse</span>
          </div>
        </div>
        <div className="review-box">
          <p>
            I don’t want to invest in separate stocks because I’m not a
            financial expert and I would rather trust my money in the hands of
            people like Rise who are skilled and knowledgeable.
          </p>
          <div className="review-person">
            <img src={jesse} alt="customer picture" />
            <span>Raye</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
