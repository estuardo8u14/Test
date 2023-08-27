import React, { Component } from "react";
import Card from "./Card";
import "./AllHeroesSearch.css";
import searchlogo from "../assets/search/search.svg";
import { fetchHeroesData } from "../FetchHeroesData";
import Liked from "./Liked";
import cancelIcon from "../assets/cancel/cancel.svg";

import LoadingPage from "./LoadingPage";

export default class CombinedHeroesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchText: "",
      heroes: [],
      filteredHeroes: [],
      likedHeroes: [],
      newestLikedHero: null,
    };
  }

  async componentDidMount() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const data = await fetchHeroesData();
      this.setState({
        heroes: data,
        filteredHeroes: data,
        isLoading: false,
      });
      // Restore likedHeroes from localStorage
      const storedLikedHeroes = localStorage.getItem("likedHeroes");
      if (storedLikedHeroes) {
        const likedHeroIds = JSON.parse(storedLikedHeroes);
        const likedHeroes = data.filter((hero) =>
          likedHeroIds.includes(hero.id)
        );
        this.setState({ likedHeroes });
      }
    } catch (error) {
      // Handle error here if needed
      this.setState({
        isLoading: false,
      });
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

  clearSearchInput = () => {
    this.setState({ searchText: "" });
  };

  handleHeroClick = (hero) => {
    const { likedHeroes } = this.state;

    // Check if the hero is already liked
    const isLiked = likedHeroes.some((likedHero) => likedHero.id === hero.id);

    if (isLiked) {
      // If already liked, remove from likedHeroes
      this.setState(
        {
          likedHeroes: likedHeroes.filter(
            (likedHero) => likedHero.id !== hero.id
          ),
        },
        () => {
          // Update localStorage after setting state
          this.updateLocalStorage();
        }
      );
    } else {
      // If not liked, add to likedHeroes
      this.setState(
        (prevState) => ({
          likedHeroes: [...prevState.likedHeroes, hero],
          newestLikedHero: hero,
        }),
        () => {
          // Update localStorage after setting state
          this.updateLocalStorage();
          const likedContainer = document.getElementById("liked-container");
          if (likedContainer) {
            likedContainer.scrollTop = likedContainer.scrollHeight;
          }
        }
      );
    }
  };

  // Function to update localStorage with the current likedHeroes
  updateLocalStorage = () => {
    const { likedHeroes } = this.state;
    const likedHeroIds = likedHeroes.map((hero) => hero.id);
    localStorage.setItem("likedHeroes", JSON.stringify(likedHeroIds));
  };

  render() {
    const {
      isLoading,
      searchText,
      filteredHeroes,
      likedHeroes,
      newestLikedHero,
    } = this.state;

    if (isLoading) {
      return <LoadingPage />;
    }

    const displayHeroes = searchText ? filteredHeroes : this.state.heroes;

    return (
      <div>
        <Liked
          likedHeroes={likedHeroes}
          handleHeroClick={this.handleHeroClick}
          newestLikedHero={newestLikedHero}
        />
        <div className="title-and-search">
          <h2 style={{ textAlign: "left", marginRight: "auto" }}>
            All Superheroes
          </h2>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={this.handleSearchChange}
            />
            {searchText && (
              <button
                className="clear-button"
                onClick={() => this.setState({ searchText: "" })}
              >
                <img src={cancelIcon} alt="Cancel" className="cancel-icon" />
              </button>
            )}
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
              isLiked={likedHeroes.some(
                (likedHero) => likedHero.id === hero.id
              )}
              onClick={() => this.handleHeroClick(hero)}
            />
          ))}
        </div>
      </div>
    );
  }
}
