// Accordion.js
import React, { useState } from "react";
import "./Accordion.css";
import arrow from "../assets/arrow-up/arrow-up.svg";
import heart from "../assets/small-heart/small-heart.svg";

const Accordion = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const accordionClass = isCollapsed ? "collapsed" : "expanded";
  const contentStyle = {
    maxHeight: isCollapsed ? "0" : "1000px", // Adjust the max height as needed
    transition: "max-height 0.5s ease-in-out", // Add transition for smooth height change
  };

  return (
    <div className={`accordion ${accordionClass}`}>
      {" "}
      {/* Invert the class condition */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">
          <button className="accordion-button-heart">
            <span>
              <img src={heart} alt="heart" />
            </span>
          </button>
          <span className="title-text">{title}</span>
        </h3>
        <button className="accordion-button">
          <span className={`arrow-icon ${isCollapsed ? "" : "expanded"}`}>
            <img src={arrow} alt="arrow" />
          </span>
        </button>
      </div>
      <div className="accordion-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
