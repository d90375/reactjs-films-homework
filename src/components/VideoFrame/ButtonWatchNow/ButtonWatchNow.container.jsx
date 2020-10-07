import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import ButtonWatchNow from "./ButtonWatchNow";
import { fetchTrailerById } from "../../../modules/trailerData";

const ButtonWatchNowContainer = ({ movieId }) => {
  const dispatch = useDispatch();

  const handleShowTrailer = useCallback(() => dispatch(fetchTrailerById(movieId)), [movieId, dispatch]);
  return (
    <>
      <ButtonWatchNow handleShowTrailer={handleShowTrailer} />
    </>
  );
};

export default React.memo(ButtonWatchNowContainer);

ButtonWatchNow.propTypes = {
  movieId: PropTypes.number
};

ButtonWatchNow.defaultProps = {
  movieId: 0
};

ButtonWatchNow.displayName = "ButtonWatchNow";
