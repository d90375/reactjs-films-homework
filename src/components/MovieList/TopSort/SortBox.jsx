import React from "react";
import "./sortBox.scss";

const SortBox = () => {
  return (
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
  );
};

export default SortBox;
