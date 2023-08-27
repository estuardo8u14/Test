import React, { Component } from "react";
import "./Liked.css";
import Card from "./Card";
import Accordion from "../components/Accordion";
import bigheart from "../assets/big-heart/big-heart.svg";
import smallheart from "../assets/small-heart/small-heart.svg"; // Import the small heart icon
import midFilledHeart from "../assets/medium-filled-heart/medium-filled-heart.svg";

export default class Liked extends Component {
  render() {
    const { likedHeroes } = this.props;

    return (
      <div className="row">
        <Accordion title="Liked">
          {likedHeroes.length === 0 ? (
            <div>
              <img src={bigheart} alt="bigheart" />
              <p>You haven't liked any superhero yet</p>
            </div>
          ) : (
            likedHeroes.map((hero) => (
              <Card
                key={hero.id}
                name={hero.name}
                fullName={hero.biography.fullName}
                picture={hero.images.sm}
                power={hero.powerstats}
                isLiked={true} // Since these are liked heroes
                onClick={() => this.props.handleHeroClick(hero)} // Use the prop here
              />
            ))
          )}
        </Accordion>
      </div>
    );
  }
}
