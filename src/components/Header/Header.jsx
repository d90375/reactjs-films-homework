import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import Description from "./Description";
import Notation from "./Notation";

import "./Header.scss";

const Header = ({ onQueryChanged, queryText }) => {
  return (
    <header className="header">
      <div className="header__topWrap">
        <span className="logo">FILMS</span>
        <Search onQueryChanged={onQueryChanged} queryText={queryText} />
      </div>
      <div className="header__btmWrap">
        <Description />
        <Notation />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onQueryChanged: PropTypes.func.isRequired,
  queryText: PropTypes.string.isRequired
};
