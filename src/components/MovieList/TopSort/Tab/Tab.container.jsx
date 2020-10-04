import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Tab from "./Tab";
import { TABS_INFO } from "../../../../constants";

const TabContainer = () => {
  const history = useHistory();
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
      {TABS_INFO.map((currTabObj) => {
        return (
          <Tab key={currTabObj} onSelectTab={handleSelectTab(currTabObj)}>
            {currTabObj}
          </Tab>
        );
      })}
    </>
  );
};

export default TabContainer;
