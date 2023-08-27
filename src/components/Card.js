import React from "react";
import "./Card.css"; // Import your CSS file for styling the card
import fist from "../assets/fist/fist.svg";

const calculateAveragePower = (power) => {
  const totalPower = Object.values(power).reduce(
    (sum, value) => sum + parseInt(value),
    0
  );
  const average = totalPower / 6; // Assuming there are 6 powerstats
  const averageDecimal = (average / 10).toFixed(1);
  return averageDecimal;
};

const Card = ({ name, fullName, picture, power, onClick }) => {
  const averagePower = calculateAveragePower(power);

  return (
    <>
      <div className="card">
        <div className="card-content">
          <img src={picture} alt="profilepic" className="profile" />
          <div className="card-info">
            <h2
              className="card-title"
              style={{ cursor: "pointer" }}
              onClick={onClick}
            >
              {name}
            </h2>
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
