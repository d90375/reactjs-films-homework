import PropTypes from "prop-types";
import React from "react";

import styles from "./sortBox.scss";

const SortBox = ({ isDisplayCardDirection, onSwitchToSquare, onSwitchToLine }) => {
  const squareStyle = isDisplayCardDirection === "square" ? `${styles.box4wrap} ${styles.active}` : styles.box4wrap;
  const squareLine = isDisplayCardDirection === "line" ? `${styles.box2wrap} ${styles.active}` : styles.box2wrap;

  return (
    <div className={styles.format}>
      <button type="button" onClick={onSwitchToSquare} className={squareStyle} data-id="sort-box-box4">
        {[...Array(4)].map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={styles.box4} />
        ))}
      </button>
      <button type="button" onClick={onSwitchToLine} className={squareLine} data-id="sort-box-box2">
        {[...Array(2)].map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={styles.box2} />
        ))}
      </button>
    </div>
  );
};

export default SortBox;

SortBox.propTypes = {
  isDisplayCardDirection: PropTypes.string,
  onSwitchToLine: PropTypes.func,
  onSwitchToSquare: PropTypes.func
};

SortBox.defaultProps = {
  isDisplayCardDirection: "square",
  onSwitchToLine: () => {},
  onSwitchToSquare: () => {}
};
