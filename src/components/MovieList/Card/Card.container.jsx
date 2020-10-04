import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";

import Card from "./Card";
import { useTrailerActions } from "../../../modules/trailerData";

const CardContainer = ({ cardItem, genresItems, cardIndex }) => {
  const { search } = useLocation();
  const history = useHistory();
  const { handleShowTrailer } = useTrailerActions(cardItem?.id);

  const [isHiddenWindow, setIsHiddenWindow] = useState(false);
  const [isResizedImg, setIsResizedImg] = useState(false);
  const [isInfoShow, setIsInfoShow] = useState(false);

  const genres = cardItem?.genre_ids
    .reduce((acc, genre) => {
      return `${acc}${genresItems[genre]}, `;
    }, "")
    .slice(0, -2);

  const handleShowWindow = () => {
    setIsHiddenWindow(!isHiddenWindow);
  };

  const handleHideWindow = () => {
    setIsHiddenWindow(!isHiddenWindow);
  };

  const handleResizeImg = () => {
    setIsResizedImg(!isResizedImg);
  };

  const handleOriginImg = () => {
    setIsResizedImg(!isResizedImg);
  };

  const handleChangeHeaderMovie = () => {
    history.push({ pathname: `/film/${cardItem?.id}`, search });
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
  }),
  genresItems: PropTypes.shape({
    number: PropTypes.string
  }),
  cardIndex: PropTypes.number
};

CardContainer.defaultProps = {
  cardItem: {
    popularity: 0,
    vote_count: 0,
    video: false,
    poster_path: "",
    id: 0,
    adult: false,
    backdrop_path: "",
    original_language: "",
    original_title: "",
    genre_ids: [0, 0],
    title: "",
    vote_average: 0,
    overview: "",
    release_date: ""
  },
  genresItems: {
    0: ""
  },
  cardIndex: 0
};
