import PropTypes from "prop-types";
import React from "react";
import "./Rating.scss";

const Rating = ({ voteAverage }) => {
  const roundedAverage = Math.round(voteAverage / 2);

  return (
    <div className="rating">
      {[...Array(roundedAverage)].map((item, index) => (
        <div key={`${item}${index}`} className="star">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 36 36">
            <g>
              <g>
                <path
                  fill="#0aaee4"
                  d="M36 13.5H22.22L18.002 0l-4.22 13.5H0l11.165 8.374L6.75 36 18 27l11.25 9-4.414-14.127z"
                />
              </g>
            </g>
          </svg>
        </div>
      ))}
      <div className="rating__container">
        <span className="rating__number">{(voteAverage / 2).toFixed(1)}</span>
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
