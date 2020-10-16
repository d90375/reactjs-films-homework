import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { fetchData, fetchGenresData } from "../../../modules/movieListData";

const SearchContainer = () => {
  const dispatch = useDispatch();

  const [valueText, setValueText] = useState("");

  const valueCondition = (value) => {
    if (value !== "") {
      dispatch(fetchData(value));
    } else {
      dispatch(fetchGenresData());
    }
  };

  const handleQueryChanged = (event) => {
    setValueText(event.target.value);
  };

  const handleKeyQuery = (event) => {
    event.preventDefault();
    valueCondition(valueText);
  };

  const handleClickQuery = () => {
    valueCondition(valueText);
  };

  return (
    <>
      <Search
        onQueryChanged={handleQueryChanged}
        onKeyQuery={handleKeyQuery}
        onClickQuery={handleClickQuery}
        valueText={valueText}
      />
    </>
  );
};

export default SearchContainer;
