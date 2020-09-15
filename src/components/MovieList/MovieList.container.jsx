import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import TopSort from "./TopSort";
import Preloader from "./Preloader";
import MovieList from "./MovieList";
import VideoFrame from "../VideoFrame";

import { useMovieListData, useMovieList } from "../../modules/movieListData/movieListSelectors";
import { fetchGenresData, fetchGenresDataById, fetchPopularData } from "../../modules/movieListData/movieListActions";

import { NUMBER_OF_CARDS } from "../../constants";

const MovieListContainer = () => {
  const dispatch = useDispatch();

  const onSelectChange = useCallback((event) => dispatch(fetchGenresDataById(event.target.value)), [dispatch]);

  const data = useMovieListData();
  const { isLoadingMovieList, hasErrorMovieList, isFulfilledMovieList, errorMovieList } = useMovieList();

  if (data.results?.length > NUMBER_OF_CARDS) {
    data.results.length = NUMBER_OF_CARDS;
  }

  // First load:
  useEffect(() => {
    dispatch(fetchPopularData());
    dispatch(fetchGenresData());
  }, [dispatch]);

  return (
    <>
      <VideoFrame />
      <TopSort genres={data.genres} onSelectChange={onSelectChange} />
      {isLoadingMovieList && <Preloader />}
      {isFulfilledMovieList && <MovieList data={data.results} cardLength={data.results.length} genres={data.genres} />}
      {hasErrorMovieList && (
        <div className="error error__movieList">
          <span>Error ${errorMovieList.status_code}</span>
        </div>
      )}
    </>
  );
};

export default MovieListContainer;
