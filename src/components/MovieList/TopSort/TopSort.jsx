import PropTypes from "prop-types";
import React from "react";

import Tab from "./Tab";
import "./TopSort.scss";

const TopSort = React.memo(({ genres, onSelectChange }) => {
  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__title">
          <Tab />
          <select name="genre" className="nav__title__arrow" onChange={onSelectChange}>
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
        <div className="nav__format">
          <div className="format__box4">
            <div className="box4 box4_topLeft" />
            <div className="box4 box4_topRight" />
            <div className="box4 box4_btmLeft" />
            <div className="box4 box4_btmRight" />
          </div>
          <div className="format__box2">
            <div className="box2 box2_top" />
            <div className="box2 box2_btm" />
          </div>
        </div>
      </div>
    </nav>
  );
});

export default TopSort;

TopSort.propTypes = {
  genres: PropTypes.objectOf(PropTypes.string),
  onSelectChange: PropTypes.func
};

TopSort.defaultProps = {
  genres: {},
  onSelectChange: () => {}
};

TopSort.displayName = "TopSort";
