import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoFrame from "./VideoFrame";
import { getTrailerDataSelector, getTrailerSelector, removeVideoFrame } from "../../modules/trailerData";
import Preloader from "../MovieList/Preloader";

const VideoFrameContainer = React.memo(() => {
  const dispatch = useDispatch();

  const { isLoadingTrailer, isFulfilledTrailer, hasErrorTrailer, errorTrailer } = useSelector(getTrailerSelector);
  const trailer = useSelector(getTrailerDataSelector);

  const handleRemoveVideoFrame = useCallback(() => dispatch(removeVideoFrame()), [dispatch]);

  return (
    <>
      {isLoadingTrailer && (
        <div className="videoFrame__wrap">
          <Preloader />
        </div>
      )}
      {isFulfilledTrailer && (
        <VideoFrame trailerKey={trailer?.results?.[0]?.key} onRemoveVideoFrame={handleRemoveVideoFrame} />
      )}
      {hasErrorTrailer && (
        <div className="error error__trailer">
          <span>Error {errorTrailer}</span>
        </div>
      )}
    </>
  );
});

export default VideoFrameContainer;

VideoFrameContainer.displayName = "VideoFrameContainer";
