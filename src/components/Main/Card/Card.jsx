import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ posterImg, title, score, genresData, genres }) => {
  const imageNotFoundUrl = `url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg)`;

  const cardBackGroundStyle = {
    backgroundImage: posterImg ? `url(https://image.tmdb.org/t/p/w500${posterImg})` : imageNotFoundUrl
  };
  return (
    <div className="card">
      <div className="card__img" style={cardBackGroundStyle} />
      <div className="card__description">
        <div className="title">
          <span className="title__text">{title}</span>
          <div className="title__rating">
            <span className="title__number">{score}</span>
          </div>
        </div>
        <span className="card__description__genre">
          {genresData &&
            genres
              .reduce((acc, genre) => {
                return `${acc}${genresData[genre]}, `;
              }, "")
              .slice(0, -2)}
        </span>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  posterImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  genresData: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
};

Card.defaultProps = {
  posterImg: null
};
