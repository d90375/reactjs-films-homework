import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Search from "./Search";

const SearchContainer = () => {
  const history = useHistory();
  const [valueText, setValueText] = useState("");

  const valueCondition = (value) => {
    if (value !== "") {
      history.push({ search: `?search=${value}` });
    } else {
      history.push({ search: `?filter=trending` });
    }
  };

  const handleQueryChanged = (event) => {
    setValueText(event.target.value);
  };

  const handleKeyQuery = (event) => {
    if (event.key === "Enter") {
      valueCondition(valueText);
    }
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
