import React from "react";
import "./Rating.scss";
import Star from "./Star";

const STAR_NUMBER = [1, 2, 3, 4, 5];

const Rating = () => {
  return (
    <div className="rating">
      {STAR_NUMBER.map((star) => (
        <Star key={star} />
      ))}
      <div className="rating__container">
        <span className="rating__number">4.8</span>
      </div>
    </div>
  );
};

export default Rating;
