import PropTypes from "prop-types";
import React from "react";
import Rating from "./Rating";

import styles from "./description.scss";

const Description = React.memo(({ title, genres, runtime, voteAverage }) => {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.specification}>
        <span className={styles.genre}>{genres}</span>
        <div className={styles.border} />
        <div className={styles.duration}>
          <span>{`${runtime[0]}h ${runtime[1]}m`}</span>
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
