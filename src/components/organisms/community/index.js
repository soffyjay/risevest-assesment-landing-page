import React from "react";
import connect from "../../../assets/images/connect.png";
import "./style.css";

const JoinCommunity = () => {
  return (
    <section className="content-wrapper">
      <div className="content">
        <h4>Join The Rise Community</h4>
        <p className="mobile-paragraph">If you want to go far, go together.</p>
        <p className="mobile-hidden">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <span>
          <a href="#">Join our Community</a>
        </span>
      </div>
      <div className="image">
        <img src={connect} alt="people" />
      </div>
    </section>
  );
};

export default JoinCommunity;
