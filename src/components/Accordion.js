// Accordion.js
import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div className={`accordion ${isCollapsed ? "" : "collapsed"}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <button className="accordion-button">
          <span className={`arrow-icon ${isCollapsed ? "" : "expanded"}`}>
            &#9660;
          </span>
        </button>
      </div>
      {isCollapsed && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
