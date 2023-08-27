import React, { Component } from "react";
import Card from "./Card";
import "./AllHeroesSearch.css";
import searchlogo from "../assets/search/search.svg";
import { fetchHeroesData } from "../FetchHeroesData";
import Liked from "./Liked";

export default class CombinedHeroesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      heroes: [],
      filteredHeroes: [],
      likedHeroes: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await fetchHeroesData();
      this.setState({
        heroes: data,
        filteredHeroes: data,
      });
    } catch (error) {
      // Handle error here if needed
    }
  }

  handleSearchChange = (event) => {
    const searchText = event.target.value;
    const filteredHeroes = searchText
      ? this.state.heroes.filter((hero) =>
          hero.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : this.state.heroes;

    this.setState({ searchText, filteredHeroes });
  };

  handleHeroClick = (hero) => {
    const { likedHeroes } = this.state;

    // Check if the hero is already liked
    const isLiked = likedHeroes.some((likedHero) => likedHero.id === hero.id);

    if (isLiked) {
      // If already liked, remove from likedHeroes
      this.setState({
        likedHeroes: likedHeroes.filter(
          (likedHero) => likedHero.id !== hero.id
        ),
      });
    } else {
      // If not liked, add to likedHeroes
      this.setState((prevState) => ({
        likedHeroes: [...prevState.likedHeroes, hero],
      }));
    }
  };

  render() {
    const { searchText, filteredHeroes, likedHeroes } = this.state;
    const displayHeroes = searchText ? filteredHeroes : this.state.heroes;

    return (
      <div>
        <Liked likedHeroes={likedHeroes} />
        <div className="title-and-search">
          <h2>All Superheroes</h2>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={this.handleSearchChange}
            />
            <img src={searchlogo} alt="searchlogo" className="searchlogo" />
          </div>
        </div>

        <div className="card-list">
          {displayHeroes.slice(0, 80).map((hero) => (
            <Card
              key={hero.id}
              name={hero.name}
              fullName={hero.biography.fullName}
              picture={hero.images.sm}
              power={hero.powerstats}
              onClick={() => this.handleHeroClick(hero)}
            />
          ))}
        </div>
      </div>
    );
  }
}
