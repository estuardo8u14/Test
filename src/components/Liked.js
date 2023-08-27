import React, { Component } from "react";
import "./Liked.css";
import Card from "./Card";
import Accordion from "../components/Accordion";

export default class Liked extends Component {
  render() {
    const { likedHeroes, newestLikedHero } = this.props;

    const recentlyLikedHeroes = newestLikedHero
      ? [
          newestLikedHero,
          ...likedHeroes.filter((hero) => hero !== newestLikedHero),
        ]
      : likedHeroes;

    return (
      <div className="row">
        <Accordion title="Liked">
          <div id="liked-container">
            {likedHeroes.length === 0 ? (
              <div>{/* ... */}</div>
            ) : (
              recentlyLikedHeroes.map((hero) => (
                <Card
                  key={hero.id}
                  name={hero.name}
                  fullName={hero.biography.fullName}
                  picture={hero.images.sm}
                  power={hero.powerstats}
                  isLiked={true}
                  showNewestLiked={hero === newestLikedHero}
                  onClick={() => this.props.handleHeroClick(hero)}
                />
              ))
            )}
          </div>
        </Accordion>
      </div>
    );
  }
}
