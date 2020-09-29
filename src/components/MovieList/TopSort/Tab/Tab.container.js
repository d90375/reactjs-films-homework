import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Tab from "./Tab";
import { fetchPopularData, fetchTopRatedData, fetchUpcomingData } from "../../../../modules/movieListData";

const TABS_INFO = {
  Trending: fetchPopularData(),
  "Top Rated": fetchTopRatedData(),
  "Coming Soon": fetchUpcomingData()
};

const TabContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSelectTab = (tabName, fetchFunc) => {
    return () => {
      history.push(`/?filter=${tabName.replace(/\s/g, "").toLowerCase()}`);
      dispatch(fetchFunc);
    };
  };

  return (
    <>
      {Object.entries(TABS_INFO).map((currTabObj) => {
        return (
          <Tab key={currTabObj} onSelectTab={handleSelectTab(currTabObj[0], currTabObj[1])}>
            {currTabObj[0]}
          </Tab>
        );
      })}
    </>
  );
};

export default TabContainer;
