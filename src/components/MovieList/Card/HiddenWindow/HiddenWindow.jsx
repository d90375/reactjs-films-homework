import PropTypes from "prop-types";
import React from "react";

import styles from "./HiddenWindow.scss";

const HiddenWindow = ({ onShowTrailer, onShowInfo }) => {
  return (
    <div className={styles.hiddenWindow}>
      <button className={styles.playBtn} data-id="hidden-window-playBtn" type="button" onClick={onShowTrailer}>
        ►
      </button>
      <span className={styles.signature}>Watch Now</span>
      <button onClick={onShowInfo} className={styles.infoBtn} data-id="hidden-window-infoBtn" type="button">
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
