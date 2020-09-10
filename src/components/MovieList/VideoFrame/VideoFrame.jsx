import PropTypes from "prop-types";
import React from "react";
import "./videoFrame.scss";

const VideoFrame = ({ trailer, onRemoveVideoFrame }) => {
  const link = trailer[0].key;
  return (
    <div className="videoFrame">
      <iframe
        className="videoFrame__iframe"
        title="trailer"
        src={`https://www.youtube.com/embed/${link}`}
        allowFullScreen
        frameBorder="0"
      />
      <button className="videoFrame__btn" type="button" onClick={onRemoveVideoFrame}>
        &#x2718;
      </button>
    </div>
  );
};

export default VideoFrame;

VideoFrame.propTypes = {
  onRemoveVideoFrame: PropTypes.func.isRequired,
  trailer: PropTypes.arrayOf(PropTypes.object)
};

VideoFrame.defaultProps = {
  trailer: [{}]
};
