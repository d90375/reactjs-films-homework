import PropTypes from "prop-types";
import React from "react";
import "./HiddenWindow.scss";

const HiddenWindow = ({ onShowTrailer, onShowInfo }) => {
  return (
    <div className="hiddenWindow">
      <button className="hiddenWindow__playBtn" type="button" onClick={onShowTrailer}>
        ►
      </button>
      <span className="hiddenWindow__signature">Watch Now</span>
      <button onClick={onShowInfo} className="hiddenWindow__infoBtn" type="button">
        View Info
      </button>
    </div>
  );
};

export default HiddenWindow;

HiddenWindow.propTypes = {
  onShowInfo: PropTypes.func.isRequired,
  onShowTrailer: PropTypes.func.isRequired
};
