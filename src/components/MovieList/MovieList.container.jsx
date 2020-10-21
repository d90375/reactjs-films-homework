import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TopSort from "./TopSort";
import Preloader from "./Preloader";
import MovieList from "./MovieList";
import VideoFrame from "../VideoFrame";

import {
  fetchData,
  fetchGenresData,
  getMovieSelector,
  fetchMovieDataFilter,
  fetchGenresDataById,
  getCompletedMovieListSelector
} from "../../modules/movieListData";

import { NUMBER_OF_CARDS } from "../../constants";
import useUrlSearch from "../../hooks/useURLSearch";

import styles from "./movieList.scss";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const queryParamFilter = useUrlSearch("filter");
  const queryParamGenre = useUrlSearch("genreId");
  const queryParamSearch = useUrlSearch("search");

  const data = useSelector(getCompletedMovieListSelector);

  const { isLoadingMovieList, isFulfilledMovieList, error } = useSelector(getMovieSelector);

  const [isDisplayCardDirection, setDisplayCardDirection] = useState("square");

  if (data?.results?.length > NUMBER_OF_CARDS) {
    data.results.length = NUMBER_OF_CARDS;
  }

  // Load static genres of the list:
  useEffect(() => {
    dispatch(fetchGenresData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (queryParamFilter) {
      dispatch(fetchMovieDataFilter(queryParamFilter));
    }

    if (queryParamSearch) {
      dispatch(fetchData(queryParamSearch));
    }
    if (queryParamGenre) {
      dispatch(fetchGenresDataById(queryParamGenre));
    }
  }, [queryParamSearch, queryParamGenre, queryParamFilter, dispatch]);

  const handleSwitchToSquare = () => {
    setDisplayCardDirection("square");
  };
  const handleSwitchToLine = () => {
    setDisplayCardDirection("line");
  };

  return (
    <main className={styles.main}>
      <VideoFrame />
      <TopSort
        handleSwitchToSquare={handleSwitchToSquare}
        handleSwitchToLine={handleSwitchToLine}
        isDisplayCardDirection={isDisplayCardDirection}
        genres={data?.genres}
      />
      {isLoadingMovieList && <Preloader />}
      {isFulfilledMovieList && (
        <MovieList
          isDisplayCardDirection={isDisplayCardDirection}
          data={data?.results}
          cardLength={data?.results?.length}
          genres={data?.genres}
        />
      )}
      {error && (
        <div className={styles.error}>
          <span>{`Error: ${error.message}`}</span>
        </div>
      )}
    </main>
  );
};

export default MovieListContainer;
