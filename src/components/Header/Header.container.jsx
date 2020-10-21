import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getDataByIdSelector, getHeaderSelector, fetchMovieById } from "../../modules/headerData";
import Header from "./Header";
import Preloader from "../MovieList/Preloader";

import styles from "./header.scss";

const HeaderContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const prevRefParamId = useRef(0);
  const prevParamId = prevRefParamId.current;

  const { isLoadingHeader, isFulfilledHeader, error } = useSelector(getHeaderSelector);
  const headData = useSelector(getDataByIdSelector);

  let genresCalculatedString;
  let calculatedRuntime;

  if (headData?.genres) {
    genresCalculatedString = Object.values(headData?.genres)
      .reduce((acc, genre) => {
        return `${acc}${genre.name}, `;
      }, "")
      .slice(0, -2);
  }

  if (headData?.runtime) {
    const hours = headData?.runtime / 60;
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
        <div className={styles.wrap}>
          <Preloader />
        </div>
      )}
      {isFulfilledHeader && <Header headData={headData} genres={genresCalculatedString} runtime={calculatedRuntime} />}
      {error && (
        <div className={styles.wrap}>
          <div className={styles.error}>
            <span>{`Error: ${error.message}`}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderContainer;
