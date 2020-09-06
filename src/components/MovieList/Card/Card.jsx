import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { IMAGE_NOT_FOUND_URL } from "../../../constants";
import HiddenWindow from "./HiddenWindow";

const Card = ({
  posterImg,
  title,
  score,
  genres,
  cardIndex,
  isResizedImg,
  isHiddenWindow,
  onShowWindow,
  onHideWindow,
  onChangeHeaderMovie,
  onResizeImg,
  onOriginImg
}) => {
  const cardImgStyle = {
    backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : IMAGE_NOT_FOUND_URL,
    width: isResizedImg ? "310px" : "290px",
    borderRadius: isHiddenWindow ? "5px 5px 5px 5px" : "5px 5px 0 0"
  };

  return (
    <div onMouseEnter={onShowWindow} onMouseLeave={onHideWindow} className="card">
      <div style={cardImgStyle} className="card__img" />
      <div
        tabIndex={cardIndex}
        role="button"
        onClick={onChangeHeaderMovie}
        onMouseEnter={onResizeImg}
        onMouseLeave={onOriginImg}
        className="card__description"
      >
        <div className="card__title">
          <span className="card__title__text">{title}</span>
          <div className="card__title__rating">
            <span className="card__title__number">{score}</span>
          </div>
        </div>
        <span className="card__description__genre">{genres}</span>
      </div>
      {isHiddenWindow && <HiddenWindow />}
    </div>
  );
};

export default Card;

Card.propTypes = {
  posterImg: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.string,
  score: PropTypes.number,
  cardIndex: PropTypes.number,
  isResizedImg: PropTypes.bool.isRequired,
  isHiddenWindow: PropTypes.bool.isRequired,
  onShowWindow: PropTypes.func.isRequired,
  onHideWindow: PropTypes.func.isRequired,
  onChangeHeaderMovie: PropTypes.func.isRequired,
  onResizeImg: PropTypes.func.isRequired,
  onOriginImg: PropTypes.func.isRequired
};

Card.defaultProps = {
  posterImg: null,
  title: "",
  genres: "",
  score: 0,
  cardIndex: null
};
