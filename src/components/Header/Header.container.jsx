import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { getDataByIdSelector } from "../../modules/headerData/headerSelectors";
import { getCompletedMovieList } from "../../modules/movieListData/movieListSelectors";
import { fetchMovieById } from "../../modules/headerData/headerActions";

const HeaderContainer = () => {
  const headData = useSelector(getDataByIdSelector);
  const { results } = useSelector(getCompletedMovieList);

  const dispatch = useDispatch();

  let { genres, runtime } = headData;
  if (genres) {
    genres = Object.values(genres)
      .reduce((acc, genre) => {
        return `${acc}${genre.name}, `;
      }, "")
      .slice(0, -2);
  }

  if (runtime === 0 || runtime) {
    const hours = runtime / 60;
    const calculatedHours = Math.floor(hours);
    const minutes = (hours - calculatedHours) * 60;
    const calculatedMinutes = Math.round(minutes);
    runtime = [calculatedHours, calculatedMinutes];
  }

  useEffect(() => {
    if (results[0]) {
      dispatch(fetchMovieById(results[0].id));
    }
  }, [results, dispatch]);

  return (
    <>
      <Header headData={headData} genres={genres} runtime={runtime} />
    </>
  );
};

export default HeaderContainer;
