import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <form className="search" method="post" action="#">
      <label htmlFor="searchId">
        <input className="search__text" required type="text" id="searchId" name="search" placeholder="the jungle book" />
      </label>
    </form>
  );
};

export default Search;
