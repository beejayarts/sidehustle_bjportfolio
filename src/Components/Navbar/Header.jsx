import React, { useState } from "react";
import "./header.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [clicked, setClicked] = useState("false");

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="nav_bar">
      <div className="nav_bar_container">
        <nav>
          <div className="nav_container">
            <div className="nav_logo">
              <a className="logo_link" href="/">
                <h3 className="logo_text">
                  Benjamin <span className="fullstop">.</span>
                </h3>
              </a>
            </div>

            <ul className="menu_bar">
              <li>
                <a href="#hero" className="menu_link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="menu_link">
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="menu_link">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="menu_link">
                  Contact
                </a>
              </li>
            </ul>

            <button onClick={handleClick} className="hamburger clicked">
              {clicked ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
