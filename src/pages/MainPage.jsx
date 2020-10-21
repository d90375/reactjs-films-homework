import React from "react";
import MovieListContainer from "../components/MovieList";
import Footer from "../components/Footer";
import HeaderContainer from "../components/Header";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <MovieListContainer />
      <Footer />
    </>
  );
};
export default MainPage;
