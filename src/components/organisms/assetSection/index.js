import React from "react";
import vector from "../../../assets/images/Vector.jpg";
import "./style.css";
import firstImage from "../../../assets/images/Ellipse205.jpg";
import secondImage from "../../../assets/images/Ellipse206.jpg";
import thirdImage from "../../../assets/images/Ellipse207.jpg";

const AssetSection = () => {
  return (
    <section className="asset-section">
      <div className="asset-header">
        <h3>Asset Classes</h3>
        <p>It’s your money, choose where you invest it</p>
      </div>

      <div className="container">
        <div className="second-asset">
          <div>
            <div className="upper-container-second"></div>
            <div className="round-image">
              <img src={firstImage} alt=" " />
            </div>
            <div className="asset-texts">
              <h4>Stocks</h4>
              <p>
                We help you invest and manage your money by investing in our
                portfolio of 30 high-growth stocks across the US market with our
                equity portfolio of power stocks.
              </p>
              <div className="foot-text1">
                <p>
                  <span>Historical returns:</span> 14% per annum
                </p>
                <p>
                  <span>Risk Level: </span>Medium
                </p>
              </div>
            </div>
            <span className="foot-link">
              <a href="/">Learn how Real Estate work</a>{" "}
              <img src={vector} alt=" " />
            </span>
          </div>
        </div>
        <div className="second-asset">
          <div>
            <div className="upper-container-second"></div>
            <div className="round-image">
              <img src={secondImage} alt=" " />
            </div>
            <div className="asset-texts">
              <h4>Real Estate</h4>
              <p>
                Our Real Estate plan is the sweet middle. Best for those who
                want a balance of good returns and medium risk. This plan
                invests in rented buildings in the US.
              </p>
              <div className="foot-text1">
                <p>
                  <span>Historical returns:</span> 14% per annum
                </p>
                <p>
                  <span>Risk Level: </span>Medium
                </p>
              </div>
            </div>
            <span className="foot-link">
              <a href="/">Learn how Real Estate work</a>{" "}
              <img src={vector} alt=" " />
            </span>
          </div>
        </div>
        <div className="third-asset">
          <div>
            <div className="upper-container-third"></div>
            <div className="round-image">
              <img src={thirdImage} alt=" " />
            </div>
            <div className="asset-texts">
              <h4>Fixed Income</h4>
              <p>
                A low-risk asset perfect for anyone who wants to protect their
                money in a secure, appreciating currency, i.e. the dollar. For
                people who want to protect their hard-earned money from
                inflation while earning steady returns.
              </p>
              <div className="foot-text">
                <p>
                  <span>Historical returns:</span> 14% per annum
                </p>
                <p>
                  <span>Risk Level: </span>Medium
                </p>
              </div>
            </div>
            <span className="foot-link">
              <a href="/">Learn how Fixed Income work</a>{" "}
              <img src={vector} alt="leftarrow" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetSection;
