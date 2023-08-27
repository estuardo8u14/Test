import React, { Component } from "react";
import "./Liked.css";
import Card from "./Card";
import Accordion from "../components/Accordion"; // Import the Accordion component

export default class Liked extends Component {
  render() {
    const { likedHeroes } = this.props;

    return (
      <div className="row">
        <Accordion title="Liked">
          {likedHeroes.map((hero) => (
            <Card
              key={hero.id}
              name={hero.name}
              fullName={hero.biography.fullName}
              picture={hero.images.sm}
              power={hero.powerstats}
              onClick={() => this.handleHeroClick(hero)}
            />
          ))}
        </Accordion>
      </div>
    );
  }
}
