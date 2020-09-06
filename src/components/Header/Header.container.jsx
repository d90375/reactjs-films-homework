import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getDataByIdSelector } from "../../modules/headerData/headerSelectors";

const HeaderContainer = () => {
  const headData = useSelector(getDataByIdSelector);

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

  useEffect(() => {}, []);

  return (
    <>
      <Header headData={headData} genres={genres} runtime={runtime} />
    </>
  );
};

export default HeaderContainer;
