import React from "react";
import { useSelector } from "react-redux";
import TopSort from "../../components/Main/TopSort";
import Preloader from "../../components/Main/Preloader";
import Main from "../../components/Main";
import { getDataReselctor } from "../../modules/data/dataSelectors";

const MovieList = () => {
  const data = useSelector(getDataReselctor);
  return (
    <>
      <TopSort />
      <Main data={data} />
      <Preloader />
    </>
  );
};

export default MovieList;
