import PropTypes from "prop-types";
import React from "react";
import { useTrailerFetchActions } from "../../../modules/trailerData/trailerActions";
import "./buttonWatchNow.scss";

const ButtonWatchNow = ({ movieId }) => {
  const { onShowTrailer } = useTrailerFetchActions(movieId);

  return (
    <>
      <button onClick={onShowTrailer} type="button" className="btn btn__watch">
        Watch Now
      </button>
    </>
  );
};

export default React.memo(ButtonWatchNow);

ButtonWatchNow.propTypes = {
  movieId: PropTypes.number.isRequired
};

ButtonWatchNow.displayName = "ButtonWatchNow";
