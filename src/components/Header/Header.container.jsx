import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useCurrentMovieData, useCurrentMovie } from "../../modules/headerData/headerSelectors";
import { useMovieListData } from "../../modules/movieListData/movieListSelectors";
import { fetchMovieById } from "../../modules/headerData/headerActions";
import Preloader from "../MovieList/Preloader";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const headData = useCurrentMovieData();

  const { results } = useMovieListData();
  const { isLoadingHeader, hasErrorHeader, isFulfilledHeader, errorHeader } = useCurrentMovie();

  let { genres, runtime } = headData;

  if (genres) {
    genres = Object.values(genres)
      .reduce((acc, genre) => {
        return `${acc}${genre.name}, `;
      }, "")
      .slice(0, -2);
  }

  if (typeof runtime !== "undefined") {
    const hours = runtime / 60;
    const calculatedHours = Math.floor(hours);
    const minutes = (hours - calculatedHours) * 60;
    const calculatedMinutes = Math.round(minutes);
    runtime = [calculatedHours, calculatedMinutes];
  }

  useEffect(() => {
    if (results && results[0]) {
      dispatch(fetchMovieById(results[0].id));
    }
  }, [results, dispatch]);

  return (
    <>
      {isLoadingHeader && <Preloader />}
      {isFulfilledHeader && <Header headData={headData} genres={genres} runtime={runtime} />}
      {hasErrorHeader && (
        <div className="error error__header">
          <span>Error ${errorHeader.status_code}</span>
        </div>
      )}
    </>
  );
};

export default HeaderContainer;
