import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Card from "./Card";
import { fetchMovieById } from "../../../modules/headerData/headerActions";
import { fetchTrailerById } from "../../../modules/trailerData/trailerActions";

const CardContainer = ({ cardItem, genresItems, cardIndex }) => {
  const dispatch = useDispatch();

  const [isHiddenWindow, setIsHiddenWindow] = useState(false);
  const [isResizedImg, setIsResizedImg] = useState(false);
  const [isInfoShow, setIsInfoShow] = useState(false);

  const genres = cardItem?.genre_ids
    .reduce((acc, genre) => {
      return `${acc}${genresItems[genre]}, `;
    }, "")
    .slice(0, -2);

  const handleShowWindow = () => {
    setIsHiddenWindow(true);
  };

  const handleHideWindow = () => {
    setIsHiddenWindow(false);
  };

  const handleResizeImg = () => {
    setIsResizedImg(true);
  };

  const handleOriginImg = () => {
    setIsResizedImg(false);
  };

  const handleChangeHeaderMovie = () => {
    dispatch(fetchMovieById(cardItem?.id));
  };

  const handleShowTrailer = () => {
    dispatch(fetchTrailerById(cardItem?.id));
  };

  const handleShowInfo = () => {
    setIsInfoShow(!isInfoShow);
  };

  return (
    <>
      <Card
        posterImg={cardItem?.poster_path}
        key={cardItem?.id}
        title={cardItem?.title}
        score={cardItem?.vote_average}
        overview={cardItem?.overview}
        id={cardItem?.id}
        genres={genres}
        isHiddenWindow={isHiddenWindow}
        isResizedImg={isResizedImg}
        isInfoShow={isInfoShow}
        genresItems={genresItems}
        cardIndex={cardIndex}
        handleShowInfo={handleShowInfo}
        onShowWindow={handleShowWindow}
        onHideWindow={handleHideWindow}
        onResizeImg={handleResizeImg}
        onOriginImg={handleOriginImg}
        onChangeHeaderMovie={handleChangeHeaderMovie}
        handleShowTrailer={handleShowTrailer}
      />
    </>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cardItem: PropTypes.shape({
    popularity: PropTypes.number,
    vote_count: PropTypes.number,
    video: PropTypes.bool,
    poster_path: PropTypes.string,
    id: PropTypes.number,
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string
  }).isRequired,
  genresItems: PropTypes.shape({
    number: PropTypes.string
  }).isRequired,
  cardIndex: PropTypes.number.isRequired
};
