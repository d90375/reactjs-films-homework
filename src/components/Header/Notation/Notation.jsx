import PropTypes from "prop-types";
import React from "react";
import "./Notation.scss";
import ButtonWatchNow from "../../VideoFrame/ButtonWatchNow/ButtonWatchNow";

const Notation = ({ movieId, overview, isHiddenViewWindow, onHideView }) => {
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
          <button onClick={onHideView} type="button" className="btn btn__view">
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
  onHideView: PropTypes.func,
  overview: PropTypes.string
};

Notation.defaultProps = {
  isHiddenViewWindow: false,
  movieId: 0,
  onHideView: () => {},
  overview: ""
};
