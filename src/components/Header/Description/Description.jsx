import PropTypes from "prop-types";
import React from "react";
import "./Description.scss";
import Rating from "./Rating";

const Description = React.memo(({ title, genres, runtime, voteAverage }) => {
  return (
    <div className="description">
      <h2 className="description__title">{title}</h2>
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
});

export default Description;

Description.displayName = "Description";

Description.propTypes = {
  genres: PropTypes.string,
  runtime: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string,
  voteAverage: PropTypes.number
};

Description.defaultProps = {
  genres: "",
  title: "",
  voteAverage: 0,
  runtime: [0, 0]
};
