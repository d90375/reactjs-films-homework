import React, { useState } from "react";
import PropTypes from "prop-types";
import Notation from "./Notation";

const NotationContainer = React.memo(({ movieId, overview }) => {
  const [isHiddenViewWindow, setIsHiddenViewWindow] = useState(true);

  const handleToggleView = () => {
    setIsHiddenViewWindow(!isHiddenViewWindow);
  };
  return (
    <>
      <Notation
        movieId={movieId}
        overview={overview}
        isHiddenViewWindow={isHiddenViewWindow}
        onToggleView={handleToggleView}
      />
    </>
  );
});

export default NotationContainer;

NotationContainer.displayName = "NotationContainer";

NotationContainer.propTypes = {
  movieId: PropTypes.number,
  overview: PropTypes.string
};

NotationContainer.defaultProps = {
  movieId: 0,
  overview: ""
};
