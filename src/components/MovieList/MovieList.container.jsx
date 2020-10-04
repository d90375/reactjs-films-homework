import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import TopSort from "./TopSort";
import Preloader from "./Preloader";
import MovieList from "./MovieList";
import VideoFrame from "../VideoFrame";

import {
  fetchGenresData,
  fetchGenresDataById,
  fetchPopularData,
  useMovieListData,
  useMovieList,
  fetchTopRatedData,
  fetchUpcomingData,
  fetchData
} from "../../modules/movieListData";

import { NUMBER_OF_CARDS } from "../../constants";
import useUrlSearch from "../../hooks/useUrlSearch";

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const queryParamFilter = useUrlSearch("filter");
  const queryParamGenre = useUrlSearch("genreId");
  const queryParamSearch = useUrlSearch("search");
  const history = useHistory();

  const data = useMovieListData();
  const { isLoadingMovieList, hasErrorMovieList, isFulfilledMovieList, errorMovieList } = useMovieList();

  if (data?.results?.length > NUMBER_OF_CARDS) {
    data.results.length = NUMBER_OF_CARDS;
  }


  // First load:
  useEffect(() => {
    dispatch(fetchGenresData());
  }, []);

  useEffect(() => {
    if (queryParamSearch) dispatch(fetchData(queryParamSearch));

    if (queryParamGenre) dispatch(fetchGenresDataById(queryParamGenre));

    switch (queryParamFilter) {
      case "trending":
        dispatch(fetchPopularData());
        break;
      case "toprated":
        dispatch(fetchTopRatedData());
        break;
      case "comingsoon":
        dispatch(fetchUpcomingData());
        break;
      case "genreId":
        dispatch();
        break;
      default:
        dispatch(fetchPopularData());
        break;
    }
  }, [queryParamSearch, queryParamGenre, queryParamFilter, dispatch]);

  const onSelectChange = useCallback(
    (event) => {
      history.push({ search: `?genreId=${event.target.value}` });
    },
    [history]
  );

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
