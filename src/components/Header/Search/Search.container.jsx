import React, { useState } from "react";
import Search from "./Search";

const SearchContainer = () => {
  const [queryText, setQueryText] = useState("");

  const handleQueryChanged = (event) => {
    setQueryText(event.target.value);
  };

  console.log(queryText);
  return (
    <>
      <Search onQueryChanged={handleQueryChanged} />
    </>
  );
};

export default SearchContainer;
