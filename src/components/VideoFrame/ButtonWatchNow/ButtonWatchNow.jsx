import PropTypes from "prop-types";
import React from "react";
import "./buttonWatchNow.scss";

const ButtonWatchNow = ({ handleShowTrailer }) => {
  return (
    <>
      <button onClick={handleShowTrailer} type="button" className="btn btn__watch">
        Watch Now
      </button>
    </>
  );
};

export default ButtonWatchNow;

ButtonWatchNow.propTypes = {
  handleShowTrailer: PropTypes.func.isRequired
};
