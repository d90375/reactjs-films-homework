import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";
import { IMAGE_NOT_FOUND_URL } from "../../../constants";
import HiddenWindow from "./HiddenWindow";
import InfoWindow from "./InfoWindow";

const Card = React.memo(
  ({
    posterImg,
    id,
    title,
    score,
    genres,
    overview,
    cardIndex,
    isResizedImg,
    isHiddenWindow,
    isInfoShow,
    onShowWindow,
    onHideWindow,
    onChangeHeaderMovie,
    onResizeImg,
    onOriginImg,
    handleShowTrailer,
    handleShowInfo
  }) => {
    const cardImgStyle = {
      backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : `url(${IMAGE_NOT_FOUND_URL})`,
      width: isResizedImg ? "310px" : "290px",
      borderRadius: isHiddenWindow ? "5px 5px 5px 5px" : "5px 5px 0 0"
    };

    return (
      <div className="card">
        {isInfoShow ? (
          <InfoWindow cardData={{ id, title, score, genres, posterImg, overview }} onShowInfo={handleShowInfo} />
        ) : (
          <>
            <div onMouseEnter={onShowWindow} onMouseLeave={onHideWindow} style={cardImgStyle} className="card__img">
              {isHiddenWindow && <HiddenWindow onShowInfo={handleShowInfo} onShowTrailer={handleShowTrailer} />}
            </div>
            <div
              tabIndex={cardIndex}
              role="button"
              onClick={onChangeHeaderMovie}
              onMouseEnter={onResizeImg}
              onMouseLeave={onOriginImg}
              className="card__description"
            >
              <div className="card__title">
                <h3 className="card__title__text">{title}</h3>
                <div className="card__title__rating">
                  <span className="card__title__number">{score}</span>
                </div>
              </div>
              <span className="card__description__genre">{genres}</span>
            </div>
          </>
        )}
      </div>
    );
  }
);

export default Card;

Card.displayName = "Card";

Card.propTypes = {
  id: PropTypes.number,
  posterImg: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.string,
  overview: PropTypes.string,
  score: PropTypes.number,
  cardIndex: PropTypes.number,
  isResizedImg: PropTypes.bool,
  isHiddenWindow: PropTypes.bool,
  isInfoShow: PropTypes.bool,
  onShowWindow: PropTypes.func,
  onHideWindow: PropTypes.func,
  onChangeHeaderMovie: PropTypes.func,
  onResizeImg: PropTypes.func,
  onOriginImg: PropTypes.func,
  handleShowTrailer: PropTypes.func,
  handleShowInfo: PropTypes.func
};

Card.defaultProps = {
  posterImg: null,
  title: "",
  genres: "",
  overview: "",
  score: 0,
  id: 0,
  cardIndex: 0,
  isResizedImg: false,
  isHiddenWindow: false,
  isInfoShow: false,
  onShowWindow: () => {},
  onHideWindow: () => {},
  onChangeHeaderMovie: () => {},
  onResizeImg: () => {},
  onOriginImg: () => {},
  handleShowTrailer: () => {},
  handleShowInfo: () => {}
};
