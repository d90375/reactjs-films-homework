import React from "react";
import "./TopSort.scss";

const TopSort = () => {
  return (
    <nav className="nav">
      <div className="nav__wrap">
        <div className="nav__title">
          <button type="button" className="nav__title__text nav__title__text_trending">Trending</button>
          <button type="button" className="nav__title__text nav__title__text_rated">Top Rated</button>
          <button type="button" className="nav__title__text nav__title__text_soon">Coming Soon</button>
          <button type="button" className="nav__title__text nav__title__text_genre">Genre</button>
          <div className="nav__title__arrow" />
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
};

export default TopSort;
