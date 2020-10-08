import PropTypes from "prop-types";
import React from "react";

import Tab from "./Tab";
import SortBox from "./SortBox";
import { GENRE_ID } from "../../../constants";

import "./topSort.scss";

const TopSort = ({
  isDisplayCardDirection,
  handleSwitchToSquare,
  handleSwitchToLine,
  genres,
  onSelectChange,
  handleSelectTab,
  TABS_INFO,
  selectedTab
}) => {
  const selectStyle = selectedTab === GENRE_ID ? `nav__title__arrow nav__active` : `nav__title__arrow`;

  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__title">
          {TABS_INFO.map((currTab) => {
            return (
              <Tab key={currTab} onSelectTab={handleSelectTab(currTab)} selectedTab={selectedTab}>
                {currTab}
              </Tab>
            );
          })}
          <select name="genre" className={selectStyle} onChange={onSelectChange}>
            <option value="Genre" hidden>
              Genre
            </option>
            {genres &&
              Object.entries(genres).map(([objKey, genre]) => {
                return (
                  <option key={objKey} value={objKey}>
                    {genre}
                  </option>
                );
              })}
          </select>
        </div>
        <SortBox
          isDisplayCardDirection={isDisplayCardDirection}
          onSwitchToSquare={handleSwitchToSquare}
          onSwitchToLine={handleSwitchToLine}
        />
      </div>
    </nav>
  );
};
export default TopSort;

TopSort.propTypes = {
  genres: PropTypes.objectOf(PropTypes.string),
  TABS_INFO: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  onSelectChange: PropTypes.func.isRequired,
  handleSelectTab: PropTypes.func.isRequired
};

TopSort.defaultProps = {
  genres: {},
  TABS_INFO: [],
  selectedTab: ""
};
