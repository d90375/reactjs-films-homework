import PropTypes from "prop-types";
import React from "react";
import "./Search.scss";
import SearchIconSvg from "./searchIconSVG";

const Search = ({ onQueryChanged, onKeyQuery, onClickQuery, valueText }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="search"
    >
      <label htmlFor="searchId">
        <input
          onChange={onQueryChanged}
          onKeyDown={onKeyQuery}
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
  onClickQuery: PropTypes.func.isRequired,
  onKeyQuery: PropTypes.func.isRequired,
  onQueryChanged: PropTypes.func.isRequired,
  queryText: PropTypes.string
};

Search.defaultProps = {
  queryText: ""
};
