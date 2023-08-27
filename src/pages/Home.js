import React, { Component } from "react";
import "./Home.css";
import logo from "../assets/logo/logo.svg";
// import AllHeroesSearch from "../components/AllHeroesSearch";
// import CardContainer from "../components/CardContainer";
import CombinedHeroesComponent from "../components/CombinedHeroesComponent";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="row">
          <CombinedHeroesComponent />
        </div>
      </div>
    );
  }
}
