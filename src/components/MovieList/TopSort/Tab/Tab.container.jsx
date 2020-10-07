import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { COMING_SOON, TOP_RATED, TRENDING } from "../../../../constants";
import { fetchMovieDataFilter } from "../../../../modules/movieListData/movieListActions";
import Tab from "./Tab";

const TabContainer = () => {
  const dispatch = useDispatch();
  const TABS_INFO = [TOP_RATED, TRENDING, COMING_SOON];

  const handleSelectTab = useCallback(
    (tabName) => {
      return () => {
        dispatch(fetchMovieDataFilter(tabName));
      };
    },
    [dispatch]
  );

  return (
    <>
      {TABS_INFO.map((currTab) => {
        return (
          <Tab key={currTab} onSelectTab={handleSelectTab(currTab)}>
            {currTab}
          </Tab>
        );
      })}
    </>
  );
};
export default TabContainer;
