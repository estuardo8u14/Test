import React, { Component } from "react";
import "./Home.css";
import logo from "../assets/logo/logo.svg";
import Accordion from "../components/Accordion"; // Import the Accordion component

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="row">
          <Accordion title="Liked">
            <h1>super1</h1>
            <h1>super1</h1>
          </Accordion>
        </div>

        <div className="row">
          <h1>Row 1</h1>
          <p>This is the content of the first row.</p>
        </div>
        <div className="row">
          <h1>Row 2</h1>
          <p>This is the content of the second row.</p>
        </div>
      </div>
    );
  }
}
