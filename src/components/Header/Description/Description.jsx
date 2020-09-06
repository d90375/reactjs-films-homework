import PropTypes from "prop-types";
import React from "react";
import "./Description.scss";
import Rating from "./Rating";

const Description = ({ title, genres, runtime, voteAverage }) => {
  return (
    <div className="description">
      <span className="description__title">{title}</span>
      <div className="description__specification">
        <span className="specification__genre specification__genre_1">{genres}</span>
        <div className="specification__border" />
        <div className="specification__duration">
          <span className="duration__time">{`${runtime[0]}h ${runtime[1]}m`}</span>
        </div>
      </div>
      <Rating voteAverage={voteAverage} />
    </div>
  );
};

export default Description;

Description.propTypes = {
  genres: PropTypes.string,
  runtime: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string,
  voteAverage: PropTypes.number
};

Description.defaultProps = {
  genres: "",
  title: "",
  voteAverage: 0
};
