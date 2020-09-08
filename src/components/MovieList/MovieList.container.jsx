import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopSort from "./TopSort";
import Preloader from "./Preloader";
import MovieList from "./MovieList";
import { getCompletedMovieList, getMovieIsLoadingSelector } from "../../modules/movieListData/movieListSelectors";
import { fetchGenresData, fetchGenresDataById, fetchPopularData } from "../../modules/movieListData/movieListActions";
import { NUMBER_OF_CARDS } from "../../constants";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const { results, genres } = useSelector(getCompletedMovieList);
  const isLoading = useSelector(getMovieIsLoadingSelector);

  const onSelectChange = (event) => {
    dispatch(fetchGenresDataById(event.target.value));
  };

  if (results.length > NUMBER_OF_CARDS) {
    results.length = NUMBER_OF_CARDS;
  }

  // First load:
  useEffect(() => {
    dispatch(fetchPopularData());
    dispatch(fetchGenresData());
  }, [dispatch]);

  return (
    <>
      <TopSort genres={genres} onSelectChange={onSelectChange} />
      {isLoading ? <Preloader /> : <MovieList data={results} cardLength={results.length} genres={genres} />}
    </>
  );
};

export default MovieListContainer;
