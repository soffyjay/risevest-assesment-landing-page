import React, { useState, useEffect } from "react";
import RiseLogo from "../../atoms/RiseLogo";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import arrowdown from "../../../assets/images/arrowdown.jpg";
import "./style.css";
import "../../../assets/css/font.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 830 && isMobile) {
      setIsMobile(false);
    }
  }, [size.width, isMobile]);

  return (
    <header>
      <div className="navbar">
        <RiseLogo />
        <Router>
          <nav>
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <NavLink activeClassName="active-link" exact to="/">
                  Home
                </NavLink>
                <span className="active-dot"></span>
              </li>
              <li>
                <Link to="/#products">
                  Products <img src={arrowdown} alt="arrow" />
                </Link>
                <span className="active-dot"></span>
              </li>
              <li>
                <NavLink to="#">Investment Club</NavLink>
                <span className="active-dot"></span>
              </li>
              <li>
                <NavLink to="#">About Us</NavLink>
                <span className="active-dot"></span>
              </li>
              <li>
                <NavLink to="#">FAQs</NavLink>
                <span className="active-dot"></span>
              </li>
              <li>
                <NavLink to="#">Blog</NavLink>
                <span className="active-dot"></span>
              </li>
            </ul>
          </nav>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </Router>
      </div>
    </header>
  );
};

export default Header;
