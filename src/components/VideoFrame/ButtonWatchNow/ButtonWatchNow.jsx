import PropTypes from "prop-types";
import React from "react";
import { useTrailerActions } from "../../../modules/trailerData";
import "./buttonWatchNow.scss";

const ButtonWatchNow = ({ movieId }) => {
  const { handleShowTrailer } = useTrailerActions(movieId);

  return (
    <>
      <button onClick={handleShowTrailer} type="button" className="btn btn__watch">
        Watch Now
      </button>
    </>
  );
};

export default React.memo(ButtonWatchNow);

ButtonWatchNow.propTypes = {
  movieId: PropTypes.number
};

ButtonWatchNow.defaultProps = {
  movieId: 0
};

ButtonWatchNow.displayName = "ButtonWatchNow";
