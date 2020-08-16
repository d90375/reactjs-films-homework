import React from "react";
import "./Description.scss";
import Rating from "./Rating";

const Description = () => {
  return (
    <div className="description">
      <span className="description__title">The Jungle Book</span>
      <div className="description__specification">
        <span className="specification__genre specification__genre_1">Adventure</span>
        <span className="specification__genre specification__genre_2">Drama</span>
        <span className="specification__genre specification__genre_3">Family</span>
        <span className="specification__genre specification__genre_4">Fantasy</span>
        <div className="specification__border" />
        <div className="specification__duration">
          <span className="duration__time">1h 46m</span>
        </div>
      </div>
      <Rating />
    </div>
  );
};

export default Description;
