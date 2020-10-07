import PropTypes from "prop-types";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import TopSort from "./TopSort";
import { COMING_SOON, GENRE_ID, TOP_RATED, TRENDING } from "../../../constants";
import { fetchMovieDataFilter } from "../../../modules/movieListData";

const TopSortContainer = React.memo(({ genres }) => {
  const TABS_INFO = [TRENDING, TOP_RATED, COMING_SOON];

  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(TRENDING);

  const onSelectChange = useCallback(
    (event) => {
      setSelectedTab(GENRE_ID);
      dispatch(fetchMovieDataFilter(GENRE_ID, event.target.value));
    },
    [dispatch]
  );

  const handleSelectTab = useCallback(
    (tabName) => {
      return () => {
        setSelectedTab(tabName);
        dispatch(fetchMovieDataFilter(tabName));
      };
    },
    [dispatch]
  );

  return (
    <>
      <TopSort
        genres={genres}
        onSelectChange={onSelectChange}
        handleSelectTab={handleSelectTab}
        selectedTab={selectedTab}
        TABS_INFO={TABS_INFO}
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
