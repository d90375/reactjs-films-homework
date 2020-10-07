import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Card from "./Card";
import { fetchMovieById } from "../../../modules/headerData";
import { fetchTrailerById } from "../../../modules/trailerData";

const CardContainer = React.memo(({ cardItem, genresItems, cardIndex }) => {
  const dispatch = useDispatch();

  const [isInfoShow, setIsInfoShow] = useState(false);

  const genres = cardItem?.genre_ids
    .reduce((acc, genre) => {
      return `${acc}${genresItems[genre]}, `;
    }, "")
    .slice(0, -2);

  const handleShowTrailer = useCallback(() => dispatch(fetchTrailerById(cardItem?.id)), [cardItem?.id, dispatch]);

  const handleChangeHeaderMovie = useCallback(() => {
    dispatch(fetchMovieById(cardItem?.id));
  }, [dispatch, cardItem?.id]);

  const handleShowInfo = useCallback(() => {
    setIsInfoShow(!isInfoShow);
  }, [isInfoShow]);

  return (
    <>
      <Card
        cardItem={cardItem}
        cardIndex={cardIndex}
        genres={genres}
        isInfoShow={isInfoShow}
        handleShowInfo={handleShowInfo}
        onChangeHeaderMovie={handleChangeHeaderMovie}
        handleShowTrailer={handleShowTrailer}
      />
    </>
  );
});

export default CardContainer;

Card.displayName = "Card";

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
