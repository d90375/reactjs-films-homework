import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img" />
      <div className="card__description">
        <div className="title">
          <span className="title__text">AssAssin’s Creed</span>
          <div className="title__rating">
            <span className="title__number">4.2</span>
          </div>
        </div>
        <span className="card__description__genre">Action, Adventure, Fantasy</span>
      </div>
    </div>
  );
};

export default Card;
