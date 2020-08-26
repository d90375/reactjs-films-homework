import React from "react";
import TopSort from "../../components/Main/TopSort";
import Preloader from "../../components/Main/Preloader";
import Main from "../../components/Main";

const MovieList = () => {
  return (
    <>
      <TopSort />
      <Main />
      <Preloader />
    </>
  );
};

export default MovieList;
