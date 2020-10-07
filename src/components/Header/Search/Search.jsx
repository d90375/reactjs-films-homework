import React from "react";
import "./Search.scss";
import PropTypes from "prop-types";
import SearchIconSvg from "./SearchIconSVG";

const Search = ({ onQueryChanged, onKeyQuery, onClickQuery, valueText }) => {
  return (
    <form onSubmit={onKeyQuery} className="search">
      <label htmlFor="searchId">
        <input
          onChange={onQueryChanged}
          value={valueText}
          className="search__text"
          type="search"
          id="searchId"
          name="search"
          placeholder="Search"
        />
        <SearchIconSvg onClickQuery={onClickQuery} />
      </label>
    </form>
  );
};

export default Search;

Search.propTypes = {
  onQueryChanged: PropTypes.func.isRequired,
  onKeyQuery: PropTypes.func.isRequired,
  onClickQuery: PropTypes.func.isRequired,
  valueText: PropTypes.string
};

Search.defaultProps = {
  valueText: ""
};
