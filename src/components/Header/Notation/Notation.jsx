import PropTypes from "prop-types";
import React from "react";
import ButtonWatchNow from "../../VideoFrame/ButtonWatchNow";

import styles from "./notation.scss";

const Notation = ({ movieId, overview, isHiddenViewWindow, onToggleView }) => {
  return (
    <div className={styles.flexFixedWrap}>
      <div className={styles.notation}>
        {isHiddenViewWindow && (
          <div className={styles.wrap}>
            <span className={styles.text}>{overview}</span>
          </div>
        )}
        <div className={styles.btnWrap}>
          <ButtonWatchNow movieId={movieId} />
          <button onClick={onToggleView} type="button" className={`${styles.btn} ${styles.btnView}`}>
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
