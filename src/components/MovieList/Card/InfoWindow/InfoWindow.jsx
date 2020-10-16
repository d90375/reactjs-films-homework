import React from "react";
import PropTypes from "prop-types";
import ButtonWatchNow from "../../../VideoFrame/ButtonWatchNow";

import { IMAGE_NOT_FOUND_URL } from "../../../../constants";
import "./infoWindow.scss";

const InfoWindow = ({ cardItem, onShowInfo }) => {
  const { title, score, genres, posterImg, overview, id } = cardItem;
  const infoWindowBackgroundStyle = {
    background: posterImg
      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.7) 100%),
    url(https://image.tmdb.org/t/p/w500${posterImg})`
      : `url(${IMAGE_NOT_FOUND_URL}) 0% 0% / contain`,
    backgroundSize: posterImg ? "cover" : "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top"
  };

  return (
    <div className="infoWindow" style={infoWindowBackgroundStyle}>
      <button className="infoWindow__btn" type="button" onClick={onShowInfo}>
        &#215;
      </button>
      <div className="infoWindow__wrap">
        <div className="infoWindow__title">
          <h3 className="infoWindow__title_text">{title}</h3>
          <p className="infoWindow__title_score">{score}</p>
        </div>
        <p className="infoWindow__genres">{genres}</p>
      </div>
      <p className="infoWindow_overview">{overview}</p>
      <div className="infoWindow_btnWrap">
        <ButtonWatchNow movieId={id} />
      </div>
    </div>
  );
};

export default InfoWindow;

InfoWindow.propTypes = {
  cardItem: PropTypes.shape({
    genres: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string,
    posterImg: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number
  }),
  onShowInfo: PropTypes.func.isRequired
};

InfoWindow.defaultProps = {
  cardItem: {
    genres: "",
    score: 0,
    title: "",
    posterImg: "",
    overview: "",
    id: 0
  }
};
