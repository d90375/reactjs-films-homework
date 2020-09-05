import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { IMAGE_NOT_FOUND_URL } from "../../../constants";
import HiddenWindow from "./HiddenWindow";

const Card = ({ posterImg, title, score, genresData, genres }) => {
  const [isHiddenWindow, setIsHiddenWindow] = useState(false);
  const [isResizedImg, setIsResizedImg] = useState(false);

  const onShowWindow = () => {
    setIsHiddenWindow(true);
  };

  const onHideWindow = () => {
    setIsHiddenWindow(false);
  };

  const onResizeImg = () => {
    setIsResizedImg(true);
  };

  const onOriginImg = () => {
    setIsResizedImg(false);
  };

  const cardImgStyle = {
    backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : IMAGE_NOT_FOUND_URL,
    width: isResizedImg ? "310px" : "290px",
    borderRadius: isHiddenWindow ? "5px 5px 5px 5px" : "5px 5px 0 0"
  };

  return (
    <div onMouseEnter={onShowWindow} onMouseLeave={onHideWindow} className="card">
      <div style={cardImgStyle} className="card__img" />
      <div onMouseEnter={onResizeImg} onMouseLeave={onOriginImg} className="card__description">
        <div className="card__title">
          <span className="card__title__text">{title}</span>
          <div className="card__title__rating">
            <span className="card__title__number">{score}</span>
          </div>
        </div>
        <span className="card__description__genre">
          {genresData &&
            genres
              .reduce((acc, genre) => {
                return `${acc}${genresData[genre]}, `;
              }, "")
              .slice(0, -2)}
        </span>
      </div>
      {isHiddenWindow ? <HiddenWindow /> : null}
    </div>
  );
};

export default Card;

Card.propTypes = {
  posterImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  genresData: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
};

Card.defaultProps = {
  posterImg: null
};
