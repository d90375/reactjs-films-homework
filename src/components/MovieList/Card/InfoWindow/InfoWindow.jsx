import React from "react";
import PropTypes from "prop-types";
import ButtonWatchNow from "../../../Header/Notation/ButtonWatchNow";

import { IMAGE_NOT_FOUND_URL } from "../../../../constants";
import "./infoWindow.scss";

const InfoWindow = ({ cardData, onShowInfo }) => {
  const { title, score, genres, posterImg, overview, id } = cardData;
  const infoWindowBackgroundStyle = {
    backgroundSize: "cover",
    background: posterImg
      ? `linear-gradient( rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.7) 100%), url(https://image.tmdb.org/t/p/w500${posterImg})`
      : IMAGE_NOT_FOUND_URL
  };

  return (
    <div className="infoWindow" style={infoWindowBackgroundStyle}>
      <button className="" type="button" onClick={onShowInfo}>
        &#215;
      </button>
      <div className="">
        <h3 className="">{title}</h3>
        <p className="">{score}</p>
        <p className="">{genres}</p>
      </div>
      <p className="">{overview}</p>
      <ButtonWatchNow movieId={id} />
    </div>
  );
};

export default InfoWindow;

InfoWindow.propTypes = {
  cardData: PropTypes.shape({
    genres: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string,
    posterImg: PropTypes.string,
    overview: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  onShowInfo: PropTypes.func.isRequired
};
