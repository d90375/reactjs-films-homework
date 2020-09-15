import React from "react";
import VideoFrame from "./VideoFrame";
import { useTrailer, useTrailerData } from "../../modules/trailerData/trailerSelectors";

import Preloader from "../MovieList/Preloader";
import { useTrailerActions } from "../../modules/trailerData/trailerActions";

const VideoFrameContainer = React.memo(() => {
  const { handleRemoveVideoFrame } = useTrailerActions();

  const { isLoadingTrailer, isFulfilledTrailer, hasErrorTrailer, errorTrailer } = useTrailer();
  const trailer = useTrailerData();

  return (
    <>
      {isLoadingTrailer && <Preloader />}
      {isFulfilledTrailer && (
        <VideoFrame trailerKey={trailer.results?.[0]?.key} onRemoveVideoFrame={handleRemoveVideoFrame} />
      )}
      {hasErrorTrailer && (
        <div className="error error__trailer">
          <span>Error ${errorTrailer.status_code}</span>
        </div>
      )}
    </>
  );
});

export default VideoFrameContainer;

VideoFrameContainer.displayName = "VideoFrameContainer";
