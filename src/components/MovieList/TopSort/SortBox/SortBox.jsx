import PropTypes from "prop-types";
import React from "react";
import "./sortBox.scss";

const SortBox = ({ isDisplayCardDirection, onSwitchToSquare, onSwitchToLine }) => {
  const squareStyle = isDisplayCardDirection === "square" ? `format__box4 active` : "format__box4";
  const squareLine = isDisplayCardDirection === "line" ? `format__box2 active` : "format__box2";

  return (
    <div className="nav__format">
      <button type="button" onClick={onSwitchToSquare} className={squareStyle}>
        <div className="box4 box4_topLeft" />
        <div className="box4 box4_topRight" />
        <div className="box4 box4_btmLeft" />
        <div className="box4 box4_btmRight" />
      </button>
      <button type="button" onClick={onSwitchToLine} className={squareLine}>
        <div className="box2 box2_top" />
        <div className="box2 box2_btm" />
      </button>
    </div>
  );
};

export default SortBox;

SortBox.propTypes = {
  isDisplayCardDirection: PropTypes.string,
  onSwitchToLine: PropTypes.func.isRequired,
  onSwitchToSquare: PropTypes.func.isRequired
};

SortBox.defaultProps = {
  isDisplayCardDirection: "square"
};
