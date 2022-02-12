import React from "react";
import "./style.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import arrowup from "../../../assets/images/arrowup.jpg";

const Footer = () => {
  return (
    <footer>
      <Router>
        <div className="footer-wrapper">
          <nav>
            <h5 id="rise-dark-logo">
              rise<span className="rise-logo-dot"></span>
            </h5>
            <ul className="footer-links">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/"> Careers </Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact Info</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">Rise Impact</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h5>Explore</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  Investmet Club{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Blog{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-wrapper">
          <nav>
            <h5>Products</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">Rise App</Link>
              </li>
              <li>
                <Link to="/">Wallets</Link>
              </li>
              <li>
                <Link to="/">Asset Classes</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h5>Contact Us</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  0818 714 7405{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  hello@rise.capital{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Newsletter{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Instagram{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  Twitter{" "}
                  <span>
                    <img src={arrowup} />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </footer>
  );
};

export default Footer;
