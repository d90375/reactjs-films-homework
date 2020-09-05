import React from "react";
import Search from "./Search";
import Description from "./Description";
import Notation from "./Notation";
// import {IMAGE_NOT_FOUND_URL} from "../../constants";

import "./Header.scss";

const Header = () => {
  const backGroundHeaderStyle = {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 2%, rgba(0, 0, 0, 0.2) 33%), url("https://image.tmdb.org/t/p/w1280/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg")`
  };
  return (
    <header className="header" style={backGroundHeaderStyle}>
      <div className="header__topWrap">
        <h1 className="logo">FILMS</h1>
        <Search />
      </div>
      <div className="header__btmWrap">
        <Description />
        <Notation />
      </div>
    </header>
  );
};

export default Header;
