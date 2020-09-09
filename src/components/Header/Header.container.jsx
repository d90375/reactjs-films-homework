import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getDataByIdSelector } from "../../modules/headerData/headerSelectors";
// import { getCompletedMovieList } from "../../modules/movieListData/movieListSelectors";
// import { fetchMovieById } from "../../modules/headerData/headerActions";

const HeaderContainer = () => {
  const headData = useSelector(getDataByIdSelector);
  // const data = useSelector(getCompletedMovieList);
  // const dispatch = useDispatch();
  // let idd = 0;
  // if (data.results[0]) {
  //   idd = data.results[0].id;
  // }

  let { genres, runtime } = headData;
  if (genres) {
    genres = Object.values(genres)
      .reduce((acc, genre) => {
        return `${acc}${genre.name}, `;
      }, "")
      .slice(0, -2);
  }

  if (runtime) {
    const hours = runtime / 60;
    const calculatedHours = Math.floor(hours);
    const minutes = (hours - calculatedHours) * 60;
    const calculatedMinutes = Math.round(minutes);
    runtime = [calculatedHours, calculatedMinutes];
  }

  // useEffect(() => {
  //   dispatch(fetchMovieById(idd));
  // }, [dispatch]);

  return (
    <>
      <Header headData={headData} genres={genres} runtime={runtime} />
    </>
  );
};

export default HeaderContainer;
