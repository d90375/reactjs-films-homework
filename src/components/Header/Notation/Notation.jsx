import PropTypes from "prop-types";
import React from "react";
import ButtonWatchNow from "../../VideoFrame/ButtonWatchNow";

import "./Notation.scss";

const Notation = ({ movieId, overview, isHiddenViewWindow, onToggleView }) => {
  return (
    <div className="flexFixedWrap">
      <div className="notation">
        {isHiddenViewWindow && (
          <div className="notation__wrap">
            <span className="notation__text">{overview}</span>
          </div>
        )}
        <div className="notation__btn">
          <ButtonWatchNow movieId={movieId} />
          <button onClick={onToggleView} type="button" className="btn btn__view">
            {isHiddenViewWindow ? "Hide Info" : "View Info"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notation;

Notation.propTypes = {
  isHiddenViewWindow: PropTypes.bool,
  movieId: PropTypes.number,
  onToggleView: PropTypes.func.isRequired,
  overview: PropTypes.string
};

Notation.defaultProps = {
  isHiddenViewWindow: false,
  movieId: 0,
  overview: ""
};
