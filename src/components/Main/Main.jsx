import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./Main.scss";

const Main = ({ data, genresData }) => {
  const { results } = data;
  const NUMBER_OF_CARDS = 16;
  const genreItems = genresData.genres
    ? Object.values(genresData.genres).reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {})
    : [];

  if (results.length > NUMBER_OF_CARDS) {
    results.length = NUMBER_OF_CARDS;
  }

  return (
    <div className="card__wrap">
      {results.length > 0 ? (
        results.map((card) => (
          <Card
            posterImg={card.poster_path}
            key={card.id}
            title={card.title}
            score={card.vote_average}
            genres={card.genre_ids}
            genresData={genreItems}
          />
        ))
      ) : (
        <span>no</span>
      )}
    </div>
  );
};

export default Main;

Main.propTypes = {
  data: PropTypes.object.isRequired,
  genresData: PropTypes.array.isRequired
};
