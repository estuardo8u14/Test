import React from "react";
import "./Card.css";
import fist from "../assets/fist/fist.svg";
import midheart from "../assets/medium-heart/medium-heart.svg";
import midfilledheart from "../assets/medium-filled-heart/medium-filled-heart.svg";

const calculateAveragePower = (power) => {
  const totalPower = Object.values(power).reduce(
    (sum, value) => sum + parseInt(value),
    0
  );
  const average = totalPower / 6; // Assuming there are 6 powerstats
  const averageDecimal = (average / 10).toFixed(1);
  return averageDecimal;
};

const Card = ({
  name,
  fullName,
  picture,
  power,
  isLiked,
  onClick,
  showNewestLiked,
}) => {
  const averagePower = calculateAveragePower(power);

  return (
    <>
      <div className={`card ${showNewestLiked ? "newest-liked-card" : ""}`}>
        <div className="card-content">
          <img src={picture} alt="profilepic" className="profile" />
          <button onClick={onClick} className="circle-button">
            <img
              src={isLiked ? midfilledheart : midheart} // Use the small heart icon if the hero is liked
              alt={isLiked ? "midfilledheart" : "midheart"}
              className="heart-icon"
            />
          </button>
          <div className="card-info">
            <h2 className="card-title">{name}</h2>
            <p className="card-fullname">Real Name: {fullName}</p>
            <div className="card-power">
              <img src={fist} alt="fist" className="fist-img" />
              <p className="card-power"> {averagePower} / 10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
