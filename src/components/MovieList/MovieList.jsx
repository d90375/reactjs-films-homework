import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./MovieList.scss";

const MovieList = ({ data, cardLength, genres }) => {
  return (
    <div className="card__wrap">
      {cardLength > 0 ? (
        Object.values(data).map((card, cardIndex) => (
          <Card key={card.id} cardItem={card} genresItems={genres} cardIndex={cardIndex} />
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
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.objectOf(PropTypes.string),
  cardLength: PropTypes.number.isRequired
};

MovieList.defaultProps = {
  genres: {}
};
