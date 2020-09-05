import React from "react";
import { useSelector } from "react-redux";
import TopSort from "../../components/Main/TopSort";
import Preloader from "../../components/Main/Preloader";
import Main from "../../components/Main";
import { getDataIsLoadingReselector, getDataReselctor, getGenresReselector } from "../../modules/data/dataSelectors";

const MovieList = () => {
  const data = useSelector(getDataReselctor);
  const genres = useSelector(getGenresReselector);
  const isLoading = useSelector(getDataIsLoadingReselector);

  console.log(genres);
  return (
    <>
      <TopSort />
      {isLoading ? <Preloader /> : <Main data={data} genresData={genres} />}
    </>
  );
};

export default MovieList;
