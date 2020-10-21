import React from "react";
import PropTypes from "prop-types";
import { IMAGE_NOT_FOUND_URL } from "../../../constants";
import HiddenWindow from "./HiddenWindow";
import InfoWindow from "./InfoWindow";

import styles from "./card.scss";

const Card = ({
  cardItem,
  cardIndex,
  genres,
  isInfoShow,
  onChangeHeaderMovie,
  handleShowTrailer,
  handleShowInfo,
  isDisplayCardDirection
}) => {
  const { poster_path: posterImg, id, title, vote_average: score, overview } = cardItem;

  const cardImgStyle = {
    backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : `url(${IMAGE_NOT_FOUND_URL})`
  };

  const cardWrapStyle = {
    width: isDisplayCardDirection === "square" ? "290px" : "100%"
  };

  return (
    <div className={styles.wrap} style={cardWrapStyle}>
      {isInfoShow ? (
        <InfoWindow cardItem={{ id, title, score, genres, posterImg, overview }} onShowInfo={handleShowInfo} />
      ) : (
        <div className={styles.card}>
          <div style={cardImgStyle} className={styles.img} />
          <button
            tabIndex={cardIndex}
            type="button"
            onClick={onChangeHeaderMovie}
            className={styles.description}
            data-id="card-description-form-movie-list"
          >
            <div className={styles.title}>
              <h3 className={styles.titleText}>{title}</h3>
              <div className={styles.titleRating}>
                <span className={styles.titleNumber}>{score}</span>
              </div>
            </div>
            <span className={styles.genres}>{genres}</span>
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
  handleShowInfo: PropTypes.func.isRequired,
  isDisplayCardDirection: PropTypes.string
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
  isInfoShow: false,
  isDisplayCardDirection: "square"
};
