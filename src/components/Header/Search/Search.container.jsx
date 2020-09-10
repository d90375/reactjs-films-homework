import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { fetchData } from "../../../modules/movieListData/movieListActions";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const [queryText, setQueryText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleQueryChanged = (event) => {
    setQueryText(event.target.value);
  };

  const handleKeyQuery = (event) => {
    if (event.key === "Enter") {
      dispatch(fetchData(queryText));
    }
  };

  const handleClickQuery = () => {
    dispatch(fetchData(queryText));
  };

  return (
    <>
      <Search
        onQueryChanged={handleQueryChanged}
        onKeyQuery={handleKeyQuery}
        onClickQuery={handleClickQuery}
        onSubmit={onSubmit}
        queryText={queryText}
      />
    </>
  );
};

export default SearchContainer;
