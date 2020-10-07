import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import TopSort from "./TopSort";
import Preloader from "./Preloader";
import MovieList from "./MovieList";
import VideoFrame from "../VideoFrame";

import {
  fetchGenresData,
  getMovieSelector,
  fetchMovieDataFilter,
  getCompletedMovieListSelector
} from "../../modules/movieListData";
import { GENRE_ID, NUMBER_OF_CARDS } from "../../constants";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(getCompletedMovieListSelector);
  const { isLoadingMovieList, hasErrorMovieList, isFulfilledMovieList, errorMovieList } = useSelector(getMovieSelector);

  if (data?.results?.length > NUMBER_OF_CARDS) {
    data.results.length = NUMBER_OF_CARDS;
  }

  // Load static genres of the list:
  useEffect(() => {
    dispatch(fetchMovieDataFilter());
    dispatch(fetchGenresData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectChange = useCallback((event) => dispatch(fetchMovieDataFilter(GENRE_ID, event.target.value)), [
    dispatch
  ]);

  return (
    <>
      <VideoFrame />
      <TopSort genres={data?.genres} onSelectChange={onSelectChange} />
      {isLoadingMovieList && <Preloader />}
      {isFulfilledMovieList && (
        <MovieList data={data?.results} cardLength={data?.results?.length} genres={data?.genres} />
      )}
      {hasErrorMovieList && (
        <div className="error error__movieList">
          <span>Error {errorMovieList}</span>
        </div>
      )}
    </>
  );
};

export default MovieListContainer;
