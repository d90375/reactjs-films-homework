import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchMovieById } from "../../../modules/headerData/headerActions";
import Card from "./Card";

const CardContainer = ({ cardItem, genresItems, cardIndex }) => {
  const dispatch = useDispatch();
  const [isHiddenWindow, setIsHiddenWindow] = useState(false);
  const [isResizedImg, setIsResizedImg] = useState(false);

  const genres = cardItem.genre_ids
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
    dispatch(fetchMovieById(cardItem.id));
  };

  return (
    <>
      <Card
        posterImg={cardItem.poster_path}
        key={cardItem.id}
        title={cardItem.title}
        score={cardItem.vote_average}
        genres={genres}
        isHiddenWindow={isHiddenWindow}
        isResizedImg={isResizedImg}
        genresItems={genresItems}
        cardIndex={cardIndex}
        onShowWindow={handleShowWindow}
        onHideWindow={handleHideWindow}
        onResizeImg={handleResizeImg}
        onOriginImg={handleOriginImg}
        onChangeHeaderMovie={handleChangeHeaderMovie}
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
