import React from "react";
import Search from "./Search";
import Description from "./Description";
import Notation from "./Notation";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__topWrap">
        <span className="logo">FILMS</span>
        <Search />
      </div>
      <div className="header__btmWrap">
        <Description />
        <Notation />
      </div>
    </div>
  );
};

export default Header;
