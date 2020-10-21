import PropTypes from "prop-types";
import React from "react";

import styles from "./videoFrame.scss";

const VideoFrame = ({ trailerKey, onRemoveVideoFrame }) => {
  return (
    <div className={styles.videoFrame}>
      <iframe
        className={styles.iframe}
        title="trailer"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        allowFullScreen
        frameBorder="0"
      />
      <button className={styles.btn} type="button" onClick={onRemoveVideoFrame} data-id="video-frame-btn">
        &#x2718;
      </button>
    </div>
  );
};

export default VideoFrame;

VideoFrame.propTypes = {
  onRemoveVideoFrame: PropTypes.func.isRequired,
  trailerKey: PropTypes.string
};

VideoFrame.defaultProps = {
  trailerKey: ""
};
