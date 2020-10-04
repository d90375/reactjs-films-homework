import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { useCurrentMovieData, useCurrentMovie, fetchMovieById } from "../../modules/headerData";
import Preloader from "../MovieList/Preloader";

const HeaderContainer = () => {
  const headData = useCurrentMovieData();

  const { isLoadingHeader, hasErrorHeader, isFulfilledHeader, errorHeader } = useCurrentMovie();

  const dispatch = useDispatch();
  const params = useParams();

  const prevRefParamId = useRef();
  const prevParamId = prevRefParamId.current;

  useEffect(() => {
    prevRefParamId.current = params.id;
    if (params.id && prevParamId !== params.id) dispatch(fetchMovieById(params.id));
  }, [prevParamId, dispatch, params]);

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

  // useEffect(() => {
  //   if (results && results[0]) {
  //     dispatch(fetchMovieById(results[0].id));
  //   }
  // }, [results, dispatch]);

  return (
    <>
      {isLoadingHeader && (
        <div className="header__wrap">
          <Preloader />
        </div>
      )}
      {isFulfilledHeader && <Header headData={headData} genres={genres} runtime={runtime} />}
      {hasErrorHeader && (
        <div className="header__wrap">
          <div className="error error__header">
            <span>Error {errorHeader}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderContainer;
