import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { IMAGE_NOT_FOUND_URL } from "../../../constants";
import HiddenWindow from "./HiddenWindow";
import InfoWindow from "./InfoWindow";

const Card = ({ cardItem, cardIndex, genres, isInfoShow, onChangeHeaderMovie, handleShowTrailer, handleShowInfo }) => {
  const { poster_path: posterImg, id, title, vote_average: score, overview } = cardItem;

  const cardImgStyle = {
    backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : `url(${IMAGE_NOT_FOUND_URL})`
  };

  return (
    <div className="card__wrap">
      {isInfoShow ? (
        <InfoWindow cardItem={{ id, title, score, genres, posterImg, overview }} onShowInfo={handleShowInfo} />
      ) : (
        <div className="card">
          <div style={cardImgStyle} className="card__img" />
          <button tabIndex={cardIndex} type="button" onClick={onChangeHeaderMovie} className="card__description">
            <div className="card__title">
              <h3 className="card__title__text">{title}</h3>
              <div className="card__title__rating">
                <span className="card__title__number">{score}</span>
              </div>
            </div>
            <span className="card__description__genre">{genres}</span>
          </button>
        </div>
      )}
      <HiddenWindow onShowInfo={handleShowInfo} onShowTrailer={handleShowTrailer} />
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardItem: PropTypes.shape({
    id: PropTypes.number,
    posterImg: PropTypes.string,
    title: PropTypes.string,
    score: PropTypes.number,
    overview: PropTypes.string
  }),
  genres: PropTypes.string,
  cardIndex: PropTypes.number,
  isInfoShow: PropTypes.bool,
  onChangeHeaderMovie: PropTypes.func.isRequired,
  handleShowTrailer: PropTypes.func.isRequired,
  handleShowInfo: PropTypes.func.isRequired
};

Card.defaultProps = {
  cardItem: {
    id: 0,
    posterImg: "",
    title: "",
    score: 0,
    overview: ""
  },
  genres: "",
  cardIndex: 0,
  isInfoShow: false
};
