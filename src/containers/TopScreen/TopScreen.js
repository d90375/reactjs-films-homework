import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { fetchData } from "../../modules/data/dataActions";
import { getDataReselctor } from "../../modules/data/dataSelectors";

const TopScreen = React.memo(() => {
  const dispatch = useDispatch();
  const { data } = useSelector(getDataReselctor);

  useEffect(() => {
    dispatch(fetchData());
    console.log(data);
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
});

TopScreen.displayName = "TopScreen";

export default TopScreen;
