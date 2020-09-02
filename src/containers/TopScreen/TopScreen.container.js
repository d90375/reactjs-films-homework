import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { fetchGenresData, fetchPopularData } from "../../modules/data/dataActions";
import { getDataReselctor } from "../../modules/data/dataSelectors";

const TopScreenContainer = React.memo(() => {
  const dispatch = useDispatch();
  const data = useSelector(getDataReselctor);

  // First load:
  useEffect(() => {
    dispatch(fetchPopularData());
    dispatch(fetchGenresData());
  }, [dispatch]);

  console.log(data);
  return (
    <>
      <Header />
    </>
  );
});

TopScreenContainer.displayName = "TopScreen";

export default TopScreenContainer;
