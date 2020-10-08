import PropTypes from "prop-types";
import React from "react";
import Card from "./Card";
import "./MovieList.scss";

const MovieList = ({ data, cardLength, genres, isDisplayCardDirection }) => {
  return (
    <div className="movieList">
      {cardLength > 0 ? (
        Object.values(data).map((card, cardIndex) => (
          <Card
            key={card.id}
            cardItem={card}
            genresItems={genres}
            cardIndex={cardIndex}
            isDisplayCardDirection={isDisplayCardDirection}
          />
        ))
      ) : (
        <div className="noResults__wrap">
          <span className="noResults__text">No results</span>
        </div>
      )}
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  cardLength: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool,
      backdrop_path: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
      id: PropTypes.number,
      original_language: PropTypes.string,
      original_title: PropTypes.string,
      overview: PropTypes.string,
      popularity: PropTypes.number,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      title: PropTypes.string,
      video: PropTypes.bool,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number
    })
  ),
  genres: PropTypes.objectOf(PropTypes.string)
};

MovieList.defaultProps = {
  cardLength: 0,
  data: [],
  genres: {}
};
