import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { fetchData } from "../../modules/data/dataActions";
import { getDataReselctor } from "../../modules/data/dataSelectors";

const TopScreen = React.memo(() => {
  const [queryText, setQueryText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(getDataReselctor);

  const handleQueryChanged = (event) => {
    setQueryText(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchData(queryText));
  }, [dispatch, queryText]);

  return (
    <>
      {console.log(data)}
      <Header onQueryChanged={handleQueryChanged} queryText={queryText} />
    </>
  );
});

TopScreen.displayName = "TopScreen";

export default TopScreen;
