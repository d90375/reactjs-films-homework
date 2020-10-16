import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDataByIdSelector, getHeaderSelector, fetchMovieById } from "../../modules/headerData";
import Header from "./Header";
import Preloader from "../MovieList/Preloader";

const HeaderContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const prevRefParamId = useRef(0);
  const prevParamId = prevRefParamId.current;

  const { isLoadingHeader, hasErrorHeader, isFulfilledHeader, errorHeader } = useSelector(getHeaderSelector);
  const headData = useSelector(getDataByIdSelector);

  const { genres, runtime } = headData;
  let genresCalculatedString;
  let calculatedRuntime;

  if (genres) {
    genresCalculatedString = Object.values(genres)
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
    calculatedRuntime = [calculatedHours, calculatedMinutes];
  }

  useEffect(() => {
    prevRefParamId.current = params.id;
    if (params.id && prevParamId !== params.id) dispatch(fetchMovieById(params.id));
  }, [prevParamId, dispatch, params]);

  return (
    <>
      {isLoadingHeader && (
        <div className="header__wrap">
          <Preloader />
        </div>
      )}
      {isFulfilledHeader && <Header headData={headData} genres={genresCalculatedString} runtime={calculatedRuntime} />}
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
