import React from "react";
import VideoFrame from "./VideoFrame";
import { useTrailerActions, useTrailer, useTrailerData } from "../../modules/trailerData";

import Preloader from "../MovieList/Preloader";

const VideoFrameContainer = React.memo(() => {
  const { handleRemoveVideoFrame } = useTrailerActions();

  const { isLoadingTrailer, isFulfilledTrailer, hasErrorTrailer, errorTrailer } = useTrailer();
  const trailer = useTrailerData();

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
