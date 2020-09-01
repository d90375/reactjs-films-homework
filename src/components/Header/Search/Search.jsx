import React from "react";
import "./Search.scss";
import PropTypes from "prop-types";

const Search = ({ onQueryChanged, queryText }) => {
  return (
    <form className="search" method="post" action="#">
      <label htmlFor="searchId">
        <input onChange={onQueryChanged} value={queryText} className="search__text" required type="text" id="searchId" name="search" placeholder="Search" />
      </label>
    </form>
  );
};

export default Search;

Search.propTypes = {
  onQueryChanged: PropTypes.func.isRequired,
  queryText: PropTypes.string
};

Search.defaultProps = {
  queryText: ""
};
