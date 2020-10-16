import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import TopSort from "./TopSort";
import { COMING_SOON, TOP_RATED, TRENDING } from "../../../constants";

const TopSortContainer = React.memo(({ genres, handleSwitchToSquare, handleSwitchToLine, isDisplayCardDirection }) => {
  const TABS_INFO = [TRENDING, TOP_RATED, COMING_SOON];

  const history = useHistory();

  const onSelectChange = useCallback(
    (event) => {
      history.push({ search: `?genreId=${event.target.value}` });
    },
    [history]
  );

  const handleSelectTab = useCallback(
    (tabName) => {
      return () => {
        history.push(`?filter=${tabName.replace(/\s/g, "").toLowerCase()}`);
      };
    },
    [history]
  );

  return (
    <>
      <TopSort
        genres={genres}
        onSelectChange={onSelectChange}
        handleSelectTab={handleSelectTab}
        TABS_INFO={TABS_INFO}
        handleSwitchToSquare={handleSwitchToSquare}
        handleSwitchToLine={handleSwitchToLine}
        isDisplayCardDirection={isDisplayCardDirection}
      />
    </>
  );
});

export default TopSortContainer;

TopSortContainer.displayName = "TopSort";

TopSort.propTypes = {
  genres: PropTypes.objectOf(PropTypes.string)
};

TopSort.defaultProps = {
  genres: {}
};
