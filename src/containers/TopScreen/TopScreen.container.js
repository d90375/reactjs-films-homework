import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { fetchData } from "../../modules/data/dataActions";
import { getDataReselctor } from "../../modules/data/dataSelectors";

const TopScreenContainer = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector(getDataReselctor);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);
  return (
    <>
      <Header />
    </>
  );
});

TopScreenContainer.displayName = "TopScreen";

export default TopScreenContainer;
