import PropTypes from "prop-types";
import React from "react";
import styles from "./rating.scss";

const Rating = ({ voteAverage }) => {
  let revisedAverage = 0;
  if (voteAverage <= 10) {
    revisedAverage = voteAverage / 2;
  }

  return (
    <div className={styles.rating}>
      {[...Array(Math.round(revisedAverage))].map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className={styles.star}>
          &#9733;
        </div>
      ))}
      <div className={styles.container}>
        <span className={styles.number}>{revisedAverage.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default Rating;

Rating.propTypes = {
  voteAverage: PropTypes.number
};

Rating.defaultProps = {
  voteAverage: 0
};
