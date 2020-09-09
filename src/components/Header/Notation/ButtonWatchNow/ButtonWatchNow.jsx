import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchTrailerById } from "../../../../modules/trailerData/trailerActions";
import "./buttonWatchNow.scss";

const ButtonWatchNow = ({ movieId }) => {
  const dispatch = useDispatch();

  const onShowTrailer = () => {
    dispatch(fetchTrailerById(movieId));
  };

  return (
    <>
      <button onClick={onShowTrailer} type="button" className="btn btn__watch">
        Watch Now
      </button>
    </>
  );
};

export default ButtonWatchNow;

ButtonWatchNow.propTypes = {
  movieId: PropTypes.number.isRequired
};
