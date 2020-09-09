import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoFrame from "./VideoFrame";
import { getTrailerDataSelector, isShowTrailerSelector } from "../../../modules/trailerData/trailerSelectors";
import { removeVideoFrame } from "../../../modules/trailerData/trailerActions";

const VideoFrameContainer = () => {
  const dispatch = useDispatch();
  const isShowVideoFrame = useSelector(isShowTrailerSelector);
  const { results } = useSelector(getTrailerDataSelector);

  const handleRemoveVideoFrame = () => {
    dispatch(removeVideoFrame());
  };

  return <>{isShowVideoFrame ? <VideoFrame trailer={results} onRemoveVideoFrame={handleRemoveVideoFrame} /> : null}</>;
};

export default VideoFrameContainer;
