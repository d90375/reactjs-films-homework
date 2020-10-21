import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoFrame from "./VideoFrame";
import { getTrailerDataSelector, getTrailerSelector, removeVideoFrame } from "../../modules/trailerData";
import Preloader from "../MovieList/Preloader";

import styles from "./videoFrame.scss";

const VideoFrameContainer = React.memo(() => {
  const dispatch = useDispatch();

  const { isLoadingTrailer, isFulfilledTrailer, error } = useSelector(getTrailerSelector);
  const trailer = useSelector(getTrailerDataSelector);

  const handleRemoveVideoFrame = useCallback(() => dispatch(removeVideoFrame()), [dispatch]);

  return (
    <>
      {isLoadingTrailer && (
        <div className={styles.videoFrame}>
          <Preloader />
        </div>
      )}
      {isFulfilledTrailer && (
        <VideoFrame trailerKey={trailer?.results?.[0]?.key} onRemoveVideoFrame={handleRemoveVideoFrame} />
      )}
      {error && (
        <div className={styles.error}>
          <span>{`Error: ${error.message}`}</span>
        </div>
      )}
    </>
  );
});

export default VideoFrameContainer;

VideoFrameContainer.displayName = "VideoFrameContainer";
