import React, { useEffect, useState } from "react";
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
import { NUMBER_OF_CARDS } from "../../constants";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector(getCompletedMovieListSelector);
  const { isLoadingMovieList, hasErrorMovieList, isFulfilledMovieList, errorMovieList } = useSelector(getMovieSelector);

  const [isDisplayCardDirection, setDisplayCardDirection] = useState("square");

  if (data?.results?.length > NUMBER_OF_CARDS) {
    data.results.length = NUMBER_OF_CARDS;
  }

  // Load static genres of the list:
  useEffect(() => {
    dispatch(fetchMovieDataFilter());
    dispatch(fetchGenresData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSwitchToSquare = () => {
    setDisplayCardDirection("square");
  };
  const handleSwitchToLine = () => {
    setDisplayCardDirection("line");
  };

  return (
    <>
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
      {hasErrorMovieList && (
        <div className="error error__movieList">
          <span>Error {errorMovieList}</span>
        </div>
      )}
    </>
  );
};

export default MovieListContainer;
