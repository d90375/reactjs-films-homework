import React from "react";
import PropTypes from "prop-types";
import SearchIconSvg from "./SearchIconSVG";

import styles from "./search.scss";

const Search = ({ onQueryChanged, onKeyQuery, onClickQuery, valueText }) => {
  return (
    <form onSubmit={onKeyQuery} className={styles.search}>
      <label htmlFor="searchId">
        <input
          onChange={onQueryChanged}
          value={valueText}
          className={styles.text}
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
